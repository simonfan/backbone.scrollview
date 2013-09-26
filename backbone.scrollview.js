define(['backbone.collectionview'], function(CollectionView) {


	var InfiniteView = Backbone.InfiniteView = CollectionView.extend({
		initialize: function(options) {
			_.bindAll(this, '_handleScroll','more');

			/**
			 * Configure the frame.
			 */
			this.frame = options.frame || $(window);
			this.frame.scroll(this._handleScroll);

			/**
			 * options
			 */
			this.options = options;

			this.status = 'deactivated';
		},

		/** 
		 * Event handler
		 */
		_handleScroll: function(e) {

			// only do stuff if the current page is 'artworks'

			var frameTop = this.frame.scrollTop(),
				frameHeight = this.frame.height(),
				docHeight = $('html').height(),
				triggerDistance = typeof this.options.triggerDistance !== 'undefined' ? this.options.triggerDistance : docHeight - 2 * frameHeight;

			if (frameTop + frameHeight > triggerDistance && this.status === 'activated') {
				this.more();
			}
/*

			console.log('top');
			console.log(frameTop)
			console.log(frameHeight)
			console.log(docHeight)

*/
		},

		/**
		 * Method to be overwritten.
		 */
		more: function() {
			alert('Overwrite this function.')
		},

		/**
		 * API
		 */

		/**
		 * Deactivate artworks_pool view
		 */
		deactivate: function() {
			this.status = 'deactivated';
		},

		/**
		 * Activate artworks_pool view
		 */
		activate: function() {
			this.status = 'activated';
		},
	});

	return InfiniteView;
});