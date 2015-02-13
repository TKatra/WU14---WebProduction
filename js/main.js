$(function ()
{
	siteStartup();
});

function siteStartup()
	{
		// createSubmitFunctions();

		$( window ).resize(onWindowResize);

		$("#admin-add-page").submit(adminAddPageSubmit);
		$("#log-in").submit(logInSubmit);
		$("#create-new-account").submit(createNewAccountOnSubmit);

		$(".admin-tools-menu ul").hide();
		$(".main-content article").hide();

		$("header nav .hamburger-button").click(toggleHeaderMenu);
		$(".admin-tools-menu .button").click(toggleAdminMenu);
		$(".checkbox-disable").click(checkboxDisableOnClick);
		$(".checkbox-display-section").click(checkboxDisplaySectionOnClick);

		addPushPopListeners();
		setMainContentMargin();
		buildDebugWindow();

		loadPage(getCurrentPage());
	}

	function contactPHP(request, successFunction)
	{
		$.ajax({
			url:"php/main.php",
			dataType: "json",
			data: request,
			success: successFunction,
			error:function(data)
			{
				console.log("AJAX ERROR: ", data.responseText);
			}
		});
	}

	function getCurrentPage()
	{
		var currentPage = location.href.split("/");
		currentPage = currentPage[currentPage.length -1];

		return currentPage;
	}

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
		console.log("pageUrl search for article: ", pageUrl);
		$(".main-content article#"+pageUrl).fadeIn(500);
	}

	function newPage(pageUrl)
	{
		loadPage(pageUrl);
		history.pushState(null,null,pageUrl);
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