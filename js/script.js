(function($, undefined){
    $(function(){

    	// anchors
 		$("#daMenu a, #footerMenu a").on("click", function(event) {

        event.preventDefault();

        var currentBlock = $(this).attr("href"),
            currentBlockOffset = $(currentBlock).offset().top;

        $("html, body").animate({
            scrollTop: currentBlockOffset - 70
        }, 500);

		});

		//fixed menu
	 	var headerH = $("#daHeader").height(),
	        navH = $("#daNav").innerHeight();

	    $(document).on("scroll", function() {

	        var documentScroll = $(this).scrollTop();

	        if(documentScroll > headerH) {
	            $("#daNav").addClass("da-fixed");

	            $("#daHeader").css({
	                "paddingTop": navH
	            });
	        } else {
	            $("#daNav").removeClass("da-fixed");
	            $("#daHeader").removeAttr("style");
	        }
		});

		 // button-top
    	$(window).scroll(function() {

        if($(this).scrollTop() != 0) {
        $('#buttonTop').fadeIn();
        } else {
        $('#buttonTop').fadeOut();
        }
        });
        $('#buttonTop').click(function() {
        $('body,html').animate({scrollTop:0},800);
    	});


    });
})(jQuery);
