function onPop()
{
	var pageData = {
		"pageURL" : getCurrentPage(),
		"newPage" : false
	};
	buildPage(pageData);
}

function onWindowResize()
{
	setMainContentMargin();
}

function pageTitleKeyUp()
{
	var form = $(this).parents("form");
	var pageTitle = $(this).val();
	
	if (form.find("input[name=manuallyEditURL]:checked").length < 1)
	{
		form.find("input[name=pageURL]").val(toUrl(pageTitle));
	}

	if (form.find("input[name=manuallyEditLinkTitle]:checked").length < 1)
	{
		form.find("input[name=linkTitle]").val(pageTitle);
	}
}