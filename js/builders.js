function loadPage(pageUrl)
{
	console.log("pageUrl: ", pageUrl);

	$(".main-content article").hide();
	if (!pageUrl)
	{
		console.log("pageUrl is undefined, setting it to 'home'");
		pageUrl = "home";
		console.log("pageUrl: ", pageUrl);
	}
	resetSite();
	console.log("pageUrl search for article: ", pageUrl);
	$(".main-content article#"+pageUrl).fadeIn(500);
}

function newPage(pageUrl)
{
	loadPage(pageUrl);
	history.pushState(null,null,pageUrl);
}



/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
function buildDebugWindow()
{
	var currentBootstrapMode;
	$(".debug").remove();

	if ($(window).width() < 751)
	{
		currentBootstrapMode = "xs";
	}
	else if ($(window).width() < 975)
	{
		currentBootstrapMode = "sm";
	}
	else if ($(window).width() < 1183)
	{
		currentBootstrapMode = "md";
	}
	else if ($(window).width() >= 1183)
	{
		currentBootstrapMode = "lg";
	}
	
	$("body").prepend($("<div>")
	.addClass("debug")
	.html($( window ).width() + " x " + $(window).height() + "<br/>" +
		"Height of footer:" + $("footer").height() + "<br/>" +
		"Margin on main-content: " + parseInt($(".main-content").css("margin-bottom"), 10) + "<br/>" +
		"Current Bootstrap Mode: ~" + currentBootstrapMode + "~")
	);
}
/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////