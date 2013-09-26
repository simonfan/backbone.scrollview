define(['../backbone.scrollview'], function(ScrollView) {

	var ModifiedScrollView = ScrollView.extend({
		handleScroll: function(e, data) {
			console.log(data);
		}
	});


	window.view = new ModifiedScrollView({
		activated: true,
		frame: $(window)
	})
});