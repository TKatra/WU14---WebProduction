function getCurrentPage()
{
	var currentPage = location.href.split("/");
	currentPage = currentPage[currentPage.length -1];

	return currentPage;
}

function setMainContentMargin()
{
	$(".main-content").css("margin-bottom", $("footer").height() + 15);
}