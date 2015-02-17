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