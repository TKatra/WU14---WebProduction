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

function resetSite()
{
	console.log("Reset Site");

	$(".admin-tools-menu ul").slideUp(150);
	$(".main-content article").hide();
	$(".hamburger-button").removeClass("active");
	$("header nav > ul").removeClass("display-header-menu");
	$("a").removeClass("active");

	$("#page-template .page-body").empty();
	$("header .main-menu").empty();

	$("input[type=text]").val("");
	$("input[type=email]").val("");
	$("input[type=password]").val("");
	$("input[type=number]").val(0);
	$("textarea").val("");

	$("#admin-add-page input[type=checkbox]").attr("checked", false);
	$("#admin-add-page input[name=pageURL]").attr("disabled", true);
	$("#admin-add-page input[name=linkTitle]").attr("disabled", true);
	$("#admin-add-page .menu-settings").hide();

	$("menu-settings input").prop('required',false);
}

function toUrl(text)
{
	text = text.replace(/\W/g, " ");
	text = text.trim();

	text = text.replace(/ /g, "-");
	text = text.replace(/-{2,}/g, "-");

	return text.toLowerCase();
}