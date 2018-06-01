$("#down").on("click",function(){
	$("#down").fadeOut();	
	$("#landing-page").slideUp(1000,function(){
		$(".info").fadeIn(500,);
			$("#up").fadeIn();

	});

});

$("#up").on("click",function(){
	$("#up").fadeOut();
	$("#landing-page").slideDown(1000,function(){
		$(".info").fadeOut(500,);
		$("#down").fadeIn();	

	});

});