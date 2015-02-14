$(function ()
{
	siteStartup();
});

function siteStartup()
{
	$( window ).resize(onWindowResize);
	$(document).on("click", "a", linkOnClick);
	addEventListener("popstate", onPop);

	$("#admin-add-page").submit(adminAddPageSubmit);
	$("#log-in").submit(logInSubmit);
	$("#create-new-account").submit(createNewAccountOnSubmit);

	$(".admin-tools-menu ul").hide();
	$(".main-content article").hide();

	$("header nav .hamburger-button").click(headerHamburgerOnClick);
	$(".admin-tools-menu .button").click(adminMenuButtonOnClick);
	$(".checkbox-disable").click(checkboxDisableOnClick);
	$(".checkbox-display-section").click(checkboxDisplaySectionOnClick);

	// addPushPopListeners();
	setMainContentMargin();
	buildDebugWindow();

	loadPage(getCurrentPage());
}

