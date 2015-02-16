$(function ()
{
	siteStartup();
});

function siteStartup()
{
	$( window ).resize(onWindowResize);
	addEventListener("popstate", onPop);

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
	
	setMainContentMargin();
	// buildDebugWindow();

	loadPage(getCurrentPage());
}

