$(document).ready(function(){
	$(".leftImg").addClass("leftActive");
	$(".rightImg").addClass("rightActive")
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
		
		if(nextSlide.length === 0) {
            nextSlide = $('.slide').first();
        }

        currentSlide.fadeOut(1000).removeClass("active-slide");
        leftImg.removeClass("leftActive");
        rightImg.removeClass("rightActive");
        nextSlide.fadeIn(1000).addClass("active-slide");
        leftImg.addClass("leftActive");
        rightImg.addClass("rightActive");

    };
	
	setInterval(autoslide, 5000);

});