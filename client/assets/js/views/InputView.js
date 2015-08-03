var InputView = Backbone.View.extend({
	// bind view to the input element 
	tagName: 'input autofocus',

	// setup the enter key action
	events: {
		'keydown' : 'keyAction'
	},
		
	// render the input on initialize
	initialize: function() {
		this.render();
	},

	// render
	render: function() {
		this.resetInput();
		return this;
	}, 

	// keyAction will get invoked on a keypress
	keyAction: function(e) {
		// the number 13 maps to the enter key
		var isEnterKey = (e.which === 13);

		if(isEnterKey && this.$el.val().trim().match(/[-\/\\^$*`_:"<>+?()|=[\]';{}]/)) {

	    	// sets placeholder text
	    	this.$el.attr({
	        	placeholder: 'Invalid Input'
	    	});
	    	this.clearInput();

	    } else if(isEnterKey) {

	    	// ajax call
	    	this.resetInput();

	    }
	},

	resetInput: function() {
	    this.$el.attr({
	    	placeholder: 'Where To?'
	    });
	    this.clearInput();
	},

	clearInput: function() {
		this.$el.val('');
	}

});