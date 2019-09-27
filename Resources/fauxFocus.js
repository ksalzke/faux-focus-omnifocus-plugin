var _ = (function() {
	var action = new PlugIn.Action(function(selection, sender) {
		config = this.focusConfig;
		// configure tag used
		unfocusedTag = config.unfocusedTag();

		// get list of selected projects
		projectsToFocus = selection.projects;
		// add projects from inside selected folders into list
		selection.folders.forEach(function(folder) {
			folder.apply(function(item) {
				if (item instanceof Project) {
					projectsToFocus.push(item);
				}
			});
		});

		// get list of all active projects not in 'focus' list
		flattenedProjects.forEach(project => {
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

		// show alert to confirm finished
		new Alert("Focus", "Script complete.").show();
	});

	action.validate = function(selection, sender) {
		return selection.projects.length > 0 || selection.folders.length > 0;
	};

	return action;
})();
_;
