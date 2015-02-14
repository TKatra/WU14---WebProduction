function linkOnClick(event)
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
}


function onPop()
{
	loadPage(getCurrentPage());
}

function onWindowResize()
{
	setMainContentMargin();
	buildDebugWindow();
}