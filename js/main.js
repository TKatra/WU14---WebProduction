$(function ()
{
	function siteStartup()
	{
		setMainContentMargin();
		buildDebugWindow();
	}
	$( window ).resize(function()
	{
		setMainContentMargin();
		buildDebugWindow();
	});

	function setMainContentMargin()
	{
		$(".main-content").css("margin-bottom", $("footer").height() + 15);
	}

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
	
	siteStartup();
});