function onPop()
{
	loadMainPage(getCurrentPage());
}

function onWindowResize()
{
	setMainContentMargin();
	buildDebugWindow();
}