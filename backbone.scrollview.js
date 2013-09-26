define(['backbone'], function(Backbone) {


	var ScrollView = Backbone.View.extend({
		initialize: function(options) {
			_.bindAll(this,'_handleScroll','handleScroll');

			/**
			 * Configure the frame.
			 */
			this.$frame = options.frame || this.$el;
			this.$frame.scroll(this._handleScroll);

			this.status = options.activated ? 'activated' : 'deactivated';
		},

		_handleScroll: function(e) {

			if (this.status === 'deactivated') { return false; }

			var data = {
				frameTop: this.$frame.scrollTop(),
				frameHeight: this.$frame.height(),
			};

			this.handleScroll(e, data);
		},

		/** 
		 * Event handler
		 */
		handleScroll: function(e, data) {
			console.log(data);
		},

		/**
		 * API
		 */

		deactivate: function() {
			this.trigger('deactivate', this);
			this.status = 'deactivated';
		},

		activate: function() {
			this.trigger('activate', this);
			this.status = 'activated';
		},
	});

	return ScrollView;
});