$(document).ready(function(){
	$(".leftImg").delay(1000).addClass("leftActive");
	$(".rightImg").addClass("rightActive");
	$(".slideContent").addClass("contentActive");
	$(".hamburger").click(function(){
		if (!$(".nav").hasClass("navActive")){
			$(".nav").addClass("navActive");
		}else {
			$(".nav").removeClass("navActive");
		};

	});

	 function autoslide(){
        var currentSlide = $('.active-slide');
        var nextSlide = currentSlide.next();
        var leftImg = $('.leftImg');
        var rightImg = $('.rightImg');
        var slideContent = $('.slideContent');
		
		if(nextSlide.length === 0) {
            nextSlide = $('.slide').first();
        }

        currentSlide.fadeOut(1000).removeClass("active-slide");
        leftImg.removeClass("leftActive");
        rightImg.removeClass("rightActive");
        slideContent.removeClass("contentActive");
        nextSlide.fadeIn(1000).addClass("active-slide");
        leftImg.addClass("leftActive");
        rightImg.addClass("rightActive");
        slideContent.addClass("contentActive");

    };
	
	setInterval(autoslide, 5000);

});