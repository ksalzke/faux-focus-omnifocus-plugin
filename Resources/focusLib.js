(() => {
  var focusLib = new PlugIn.Library(new Version("1.0"));

  focusLib.focus = (projects, folders) => {
    config = PlugIn.find("com.KaitlinSalzke.fauxFocus").library("focusConfig");

    // configure tag used
    unfocusedTag = config.unfocusedTag();

    projectsToFocus = projects;

    // add projects from inside selected folders into list
    folders.forEach(function (folder) {
      folder.apply(function (item) {
        if (item instanceof Project) {
          projectsToFocus.push(item);
        }
      });
    });

    // get list of all active projects not in 'focus' list
    flattenedProjects.forEach((project) => {
      if (
        project.status === Project.Status.Active &&
        !projectsToFocus.includes(project)
      ) {
        // for each active project,
        // set 'unfocused' tag and put on hold
        project.task.addTag(unfocusedTag);
        project.status = Project.Status.OnHold;
      }
    });
  };

  return focusLib;
})();
