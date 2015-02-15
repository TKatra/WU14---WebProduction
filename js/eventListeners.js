function onPop()
{
	loadPage(getCurrentPage());
}

function onWindowResize()
{
	setMainContentMargin();
	buildDebugWindow();
}