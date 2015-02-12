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

		// var currentPage = location.href.split("/");
		// console.log("currentPage: ", currentPage);
		// currentPage = currentPage[currentPage.length -1];
		// console.log("currentPage: ", currentPage);

		$(".admin-tools-menu ul").hide();
		$(".main-content article").hide();

		$("header nav .hamburger-button").click(toggleHeaderMenu);
		$(".admin-tools-menu .button").click(toggleAdminMenu);
		$(".checkbox-disable").click(checkboxDisableOnClick);
		$(".checkbox-display-section").click(checkboxDisplaySectionOnClick);

		addPushPopListeners();
		setMainContentMargin();
		buildDebugWindow();

		var currentPage = location.href.split("/");
		currentPage = currentPage[currentPage.length -1];
		loadPage(currentPage);
	}

	function newPage(pageUrl)
	{
		loadPage(pageUrl);
		history.pushState(null,null,pageUrl);
	}

	function popPage(pageUrl)
	{
		loadPage(pageUrl);
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

	function addPushPopListeners()
	{
		$(document).on("click", "a", function(event)
		{
			if ($(this).attr("href").indexOf("://") >= 0)
			{
				return;
			}


			if ($(this).attr("href") != null && $(this).attr("href") !== "#")
			{
				newPage($(this).attr("href"));
			}

			event.preventDefault();
		});

		addEventListener("popstate", onPop);
	}

	function onPop()
	{
		console.log("onPop triggered!");
		var currentPage = location.href.split("/");
		currentPage = currentPage[currentPage.length -1];
		console.log("currentPage: ", currentPage);

		loadPage(currentPage);
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