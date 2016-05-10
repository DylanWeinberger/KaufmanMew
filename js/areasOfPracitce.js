$(document).ready(function(){
		$(".hamburger").click(function(){
		if (!$(".nav").hasClass("navActive")){
			$(".nav").addClass("navActive");
		}else {
			$(".nav").removeClass("navActive");
		};

	});
		$(".auto").click(function(){
			$(".practices").fadeOut(1000, function(){
				$('.area').removeClass("practiceActive");
				$('.AUTO').addClass("practiceActive");
				$(".practices").fadeIn(1000);
			});
		});	
		
		$(".moto").click(function(){
			$(".practices").fadeOut(1000, function(){
				$('.area').removeClass("practiceActive");
				$('.MOTO').addClass("practiceActive");
				$(".practices").fadeIn(1000);
			});
		});

		$(".slip").click(function(){
			$(".practices").fadeOut(1000, function(){
				$('.area').removeClass("practiceActive");
				$('.SLIP').addClass("practiceActive");
				$(".practices").fadeIn(1000);
			});
		});

		$(".police").click(function(){
			$(".practices").fadeOut(1000, function(){
				$('.area').removeClass("practiceActive");
				$('.POLICE').addClass("practiceActive");
				$(".practices").fadeIn(1000);
			});
		});

		$(".construction").click(function(){
			$(".practices").fadeOut(1000, function(){
				$('.area').removeClass("practiceActive");
				$('.CONSTRUCTION').addClass("practiceActive");
				$(".practices").fadeIn(1000);
			});
		});

		$(".premises").click(function(){
			$(".practices").fadeOut(1000, function(){
				$('.area').removeClass("practiceActive");
				$('.PREM').addClass("practiceActive");
				$(".practices").fadeIn(1000);
			});
		});

		$(".lead").click(function(){
			$(".practices").fadeOut(1000, function(){
				$('.area').removeClass("practiceActive");
				$('.LEAD').addClass("practiceActive");
				$(".practices").fadeIn(1000);
			});
		});

		$(".landlord").click(function(){
			$(".practices").fadeOut(1000, function(){
				$('.area').removeClass("practiceActive");
				$('.LANDLORD').addClass("practiceActive");
				$(".practices").fadeIn(1000);
			});
		});

		$(".nursing").click(function(){
			$(".practices").fadeOut(1000, function(){
				$('.area').removeClass("practiceActive");
				$('.NURSE').addClass("practiceActive");
				$(".practices").fadeIn(1000);
			});
		});

		$(".security").click(function(){
			$(".practices").fadeOut(1000, function(){
				$('.area').removeClass("practiceActive");
				$('.SECURITY').addClass("practiceActive");
				$(".practices").fadeIn(1000);
			});
		});
});	