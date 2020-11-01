(() => {
  var action = new PlugIn.Action(function (selection, sender) {
    config = this.focusConfig;

    // if a project is already unfocused when script is run, run 'Unfocus' script first
    if (config.unfocusedTag().projects.length > 0) {
      PlugIn.find("com.KaitlinSalzke.fauxFocus")
        .action("fauxUnFocus")
        .perform();
    }

    // get list of selected projects
    projectsToFocus = selection.projects;
    foldersToFocus = selection.folders;

    this.focusLib.focus(projectsToFocus, foldersToFocus);

    // show alert to confirm finished
    new Alert("Focus", "Script complete.").show();
  });

  action.validate = function (selection, sender) {
    return selection.projects.length > 0 || selection.folders.length > 0;
  };

  return action;
})();
