$(document).ready(function(){
		$(".hamburger").click(function(){
		if (!$(".nav").hasClass("navActive")){
			$(".nav").addClass("navActive");
		}else {
			$(".nav").removeClass("navActive");
		};

	});

	// I need to make each profile appear and disappear when
	// each name is clicked

	// When mark is clicked add a class to make this visible. when a different is clicked remove class from whoever is active and add class to whoever got clicked.
	$(".mew").click(function(){
		$(".profiles").fadeOut(1000, function(){
			$('.attorney').removeClass("activeAttorney");
			$('.MEW').addClass("activeAttorney");
			$(".profiles").fadeIn(1000);
		});
	});

	$(".mus").click(function(){
		$(".profiles").fadeOut(1000, function(){
			$(".attorney").removeClass("activeAttorney");
			$(".MUS").addClass("activeAttorney");
			$(".profiles").fadeIn(1000);
		});
	});

		$(".bon").click(function(){
		$(".profiles").fadeOut(1000, function(){
			$(".attorney").removeClass("activeAttorney");
			$(".BON").addClass("activeAttorney");
			$(".profiles").fadeIn(1000);
		});
	});

		$(".sam").click(function(){
		$(".profiles").fadeOut(1000, function(){
			$(".attorney").removeClass("activeAttorney");
			$(".SAM").delay(1000).addClass("activeAttorney");
			$(".profiles").fadeIn(1000);
		});
	});
});