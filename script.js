
$("#down").on("click",function(){
	$("#down").fadeOut();	
	$("#landing-page").slideUp(1000,function(){
		$(".info").fadeIn(500,);
			$("#up").fadeIn();
				$(".box").fadeIn(1000);
	});

});

$("#up").on("click",function(){
	$("#up").fadeOut();
	$("#landing-page").slideDown(1000,function(){
		$(".info").fadeOut(500,);
		$("#down").fadeIn();	

	});

});

  $("#right").click(function () {
		$(".info").fadeOut(500,function(){
				$("#bottom").fadeIn(500);

		});

        // $("#bottom").facd("slide", { direction: "left" }, 4000);
    });