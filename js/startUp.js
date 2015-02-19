$(function ()
{
	siteStartup();
});

function siteStartup()
{
	addEventListener("popstate", onPop);
	$( window ).resize(onWindowResize);
	$("#admin-add-page input[name=pageTitle]").keyup(pageTitleKeyUp);

	$("#admin-add-page").submit(adminAddPageSubmit);
	$("#log-in").submit(logInSubmit);
	$("#create-new-account").submit(createNewAccountOnSubmit);

	$(".admin-tools-menu ul").hide();
	$(".main-content article").hide();
	$("#admin-add-page input[type=checkbox]").attr("checked", false);


	$(document).on("click", "a", linkOnClick);
	$("header nav .hamburger-button").click(headerHamburgerOnClick);
	$(".admin-tools-menu .button").click(adminMenuButtonOnClick);
	$(".checkbox-disable").click(checkboxDisableOnClick);
	$(".checkbox-display-section").click(checkboxDisplaySectionOnClick);
	$(".checkbox-display-section[name=addToMenu]").click(checkboxAddToMenuOnClick);
	
	
	// buildDebugWindow();

	// loadMainPage(getCurrentPage());
	var pageData = {
		"UrlToLoad" : getCurrentPage(),
		"newPage" : false
	};
	buildPage(pageData);
}

