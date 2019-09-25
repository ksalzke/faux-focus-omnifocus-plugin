var _ = (function() {
	var action = new PlugIn.Action(function(selection, sender) {
		unfocusedTag = tagNamed("Unfocused") || new Tag("Unfocused");

		// get list of all projects
		projectsList = [];
		library.apply(function(item) {
			if (
				item instanceof Project &&
				(item.task.taskStatus === Task.Status.Available ||
					(item.task.taskStatus === Task.Status.Blocked &&
						item.status !== Project.Status.OnHold))
			) {
				projectsList.push(item);
			}
		});

		// get list of selected projects
		projectsToFocus = [];
		selection.projects.forEach(function(project) {
			projectsToFocus.push(project);
		});
		selection.folders.forEach(function(folder) {
			folder.apply(function(item) {
				if (item instanceof Project) {
					projectsToFocus.push(item);
				}
			});
		});

		// set 'unfocused' tag
		projectsList.forEach(function(project) {
			if (!projectsToFocus.includes(project)) {
				project.task.addTag(unfocusedTag);
				project.status = Project.Status.OnHold;
			}
		});
	});

	action.validate = function(selection, sender) {
		return selection.projects.length > 0 || selection.folders.length > 0;
	};

	return action;
})();
_;
