var _ = (function() {
	var action = new PlugIn.Action(function(selection, sender) {
		config = this.focusConfig;
		// configure tag used
		unfocusedTag = config.unfocusedTag();

		// mark each project that is tagged with 'Unfocused' as active
		unfocusedTag.tasks.forEach(function(task) {
			task.project.status = Project.Status.Active;
		});

		// delete the 'Unfocused' tag
		deleteObject(unfocusedTag);

		// show alert to confirm finished
		new Alert("Unfocused", "Script complete.").show();
	});

	action.validate = function(selection, sender) {
		return tagNamed("Unfocused").tasks.length > 0;
	};

	return action;
})();
_;
