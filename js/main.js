$(function ()
{
	function siteStartup()
	{

		$( window ).resize(function()
		{
			setMainContentMargin();
			buildDebugWindow();
		});

		$("#admin-add-page").submit(function()
		{
			return false;
		});


		$(".admin-tools-menu ul").hide();

		$("header nav .hamburger-button").click(toggleHeaderMenu);
		$(".admin-tools-menu .button").click(toggleAdminMenu);
		$(".checkbox-disable").click(checkboxDisableOnClick);
		$(".checkbox-display-section").click(checkboxDisplaySectionOnClick);


		setMainContentMargin();
		buildDebugWindow();
	}

	function toggleHeaderMenu()
	{
		$("header nav > ul").toggleClass("display-header-menu");
	}

	function toggleAdminMenu()
	{
		$(".admin-tools-menu ul").slideToggle(150);
	}

	function checkboxDisplaySectionOnClick()
	{
		var checkbox = $(this);
		var section = $(this).parents("form").find("." + checkbox.val());
		console.log(section);

		if(checkbox.is(":checked") === true)
		{
			section.show(150);
		}
		else
		{
			section.hide(150);
		}
	}

	function checkboxDisableOnClick()
	{
		var checkbox = $(this);
		var textbox = $(this).parents("form").find("input[name=" + $(this).val() + "]");

		if(checkbox.is(":checked") === true)
		{
			textbox.prop("disabled", false);
		}
		else
		{
			textbox.prop("disabled", true);
		}
	}

	function setMainContentMargin()
	{
		$(".main-content").css("margin-bottom", $("footer").height() + 15);
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


	
	siteStartup();
});