$(function ()
{
	function siteStartup()
	{
		$(".trial").remove();
		$(".main-content").css("margin-bottom", $("footer").height() + 15);
		$( ".main-content" ).prepend( "<div class='trial'>" + $( window ).width() + " x " + $(window).height() + "<br/>Height of footer:" + $("footer").height() + "<br/>Margin on main-content: "+ parseInt($(".main-content").css("margin-bottom")) +" </div>" );
	}
	$( window ).resize(function()
	{
		$(".trial").remove();
		$(".main-content").css("margin-bottom", $("footer").height() + 15);
		$( ".main-content" ).prepend( "<div class='trial'>" + $( window ).width() + " x " + $(window).height() + "<br/>Height of footer:" + $("footer").height() + "<br/>Margin on main-content: "+ parseInt($(".main-content").css("margin-bottom")) +" </div>" );

	});
	
	siteStartup();
});