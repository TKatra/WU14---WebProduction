function onPop()
{
	var pageData = {
		"UrlToLoad" : getCurrentPage(),
		"newPage" : false
	};
	buildPage(pageData);
	// loadMainPage();
}

function onWindowResize()
{
	setMainContentMargin();
	buildDebugWindow();
}

function pageTitleKeyUp()
{
	var form = $(this).parents("form");
	if (form.find("input[name=manuallyEditURL]:checked").length < 1)
	{
		var pageTitle = $(this).val();
		var pageURL = toUrl(pageTitle);

		$(this).parents("form").find("input[name=pageURL]").val(pageURL);
	}
}