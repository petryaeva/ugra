(function($) {


	$(function () {
	    var jqBar = $('.page-examp__num'); 
	    var jqBarStatus = true;
	    $(window).scroll(function() {
	        var scrollEvent = ($(window).scrollTop() > (jqBar.position().top - $(window).height()));
				
			setTimeout(function(){
				$('.page-examp__num-item--fin span').html(964);
				$('.page-examp__num-item--home span').html(488);
				$('.page-examp__num-item--edu span').html(7720);
				$('.page-examp__num-item--mess span').html(19801);
				$('.page-examp__num-item--com span').html(19801);
				$('.page-examp__num-item--arr span').html(19801);
			}, 1000);
	    });
	});

}(jQuery));