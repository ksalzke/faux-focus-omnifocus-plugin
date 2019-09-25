var _ = (function() {
	var focusConfig = new PlugIn.Library(new Version("1.0"));

	focusConfig.unfocusedTag = () => {
		// edit the below line to configure the tag used to mark
		// projects as 'Unfocused'
		// THIS SHOULD BE A TAG OBJECT
		return tagNamed("Unfocused") || new Tag("Unfocused");
	};

	return focusConfig;
})();
_;
