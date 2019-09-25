var _ = (function() {
	var action = new PlugIn.Action(function(selection, sender) {
		unfocusedTag = tagNamed("Unfocused") || new Tag("Unfocused");

		// mark each project that is tagged with 'Unfocused' as active
		unfocusedTag.tasks.forEach(function(task) {
			task.project.status = Project.Status.Active;
		});

		// delete the 'Unfocused' tag
		deleteObject(unfocusedTag);
	});

	action.validate = function(selection, sender) {
		return tagNamed("Unfocused").tasks.length > 0;
	};

	return action;
})();
_;
