var BannerView = Backbone.View.extend({
	
	el: '#banner',

	initialize: function() {
		this.input = new InputView();
		this.render();
	},

	render: function() {
		this.$el.append([
			this.input.$el
		]);
		return this.$el;
	}

});