$(document).ready(function(){
		$(".hamburger").click(function(){
		if (!$(".nav").hasClass("navActive")){
			$(".nav").addClass("navActive");
		}else {
			$(".nav").removeClass("navActive");
		};

	});
});