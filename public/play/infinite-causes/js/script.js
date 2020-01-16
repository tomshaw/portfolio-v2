$(document).ready(function() {
	setTimeout(function () {
	    $(".title").addClass("show");
	    $(".butterfly").addClass("show");
	    $(".leaves").addClass("show");
	    $(".branches").addClass("show");
	    setTimeout(function () {
	    	$(".butterfly").addClass("floating");
	    }, 2000);
	});
});
