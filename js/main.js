$(function ()
{
	function siteStartup()
	{
		$("#admin-add-page").submit(function()
		{
			return false;
		});

		$( window ).resize(function()
		{
			setMainContentMargin();
			buildDebugWindow();
		});
		$(".checkbox-disable").click(checkboxDisableOnClick);
		$(".checkbox-display-section").click(checkboxDisplaySectionOnClick);


		setMainContentMargin();
		buildDebugWindow();
	}

	function checkboxDisplaySectionOnClick()
	{
		var checkbox = $(this);
		var section = $(this).parents("form").find("." + checkbox.val());
		console.log(section);

		if(checkbox.is(":checked") === true)
		{
			section.show(300);
		}
		else
		{
			section.hide(300);
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