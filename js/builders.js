function buildPage(pageData)
{
	console.log("Build Page, pageData: ", pageData);
	resetSite();
	// checkIfLoggedIn();
	//

	var requestData = {
		"commandLine" : "getMainMenuLinks"
	};
	contactPHP(requestData, buildHeaderMenu);

	requestData = {
		"commandLine" : "buildImageSelectElement"
	};
	contactPHP(requestData, buildImageSelectElement);

	if(!pageData.UrlToLoad)
	{
		pageData.UrlToLoad = "home";
	}

	loadMainPage(pageData.UrlToLoad, pageData.newPage);

	requestData = {
		commandLine : "getAllAdmins"
	};

	contactPHP(requestData, buildFooter);
}

function buildHeaderMenu(MenuData)
{
	console.log("MenuData: ", MenuData);

	var mainMenu = $(".main-menu");

	for(var i = 0; i < MenuData.length; i++)
	{

	}
}

function buildLoginSection(loginData)
{
	console.log("buildLoginSection");
	var loginSection = $("header nav .login-section");

	if(loginData.firstName != null && loginData.lastName != null)
	{
		console.log("loginData length more than 0");
		loginSection.find("p").text(loginData.firstName + " " + loginData.lastName);
		loginSection.find("a").text("Log out").attr("href","log-out");
	}
	else
	{
		console.log("loginData length not more than 0");
		loginSection.find("p").text("");
		loginSection.find("a").text("Log in").attr("href", "log-in");
	}
}


function loadMainPage(pageUrl, newPage)
{
	console.log("pageUrl: ", pageUrl);
	console.log("pageUrl search for article: ", pageUrl);


	if($("article#"+pageUrl).length > 0)
	{
		$("article#"+pageUrl).fadeIn(500);

		if(newPage === true)
		{
			history.pushState(null,null,pageUrl);
		}
		$("a[href=" + pageUrl + "]").addClass("active");
	}
	else
	{
		console.log("Load from DB");
		var requestData = {
			"commandLine" : "loadPage",
			"pageURL" : pageUrl,
			"newPage" : newPage
		};
		console.log("requestData: ", requestData);
		contactPHP(requestData, loadPageFromDB);
	}
}

function loadPageFromDB(pageData)
{
	console.log("pageData: ", pageData);
	var page = $("article#page-template");
	page.find(".page-author")
	.attr("href", "mailto:" + pageData.adminData.email)
	.text(pageData.adminData.firstName + " " + pageData.adminData.lastName);

	page.find(".page-title").text(pageData.title);
	page.find(".page-image img").attr({
		"src" : "img/page/" + pageData.imageData.path,
		"title" : pageData.imageData.title,
		"alt" : pageData.imageData.alt
	});

	var splittedBody = pageData.body.split("\n");

	for(var i = 0; i < splittedBody.length; i++)
	{
		$(".page-body").append($("<p>").text(splittedBody[i]));
	}

	if(pageData.newPage === true)
	{
		history.pushState(null, null, pageData.pageURL);
	}

	page.fadeIn(500);
	$("a[href=" + pageData.pageURL + "]").addClass("active");
}

// function newMainPage(pageUrl)
// {
// 	loadMainPage(pageUrl);
// 	history.pushState(null,null,pageUrl);
// }


function buildFooter(footerData)
{
	// console.log("footerData: ", footerData);
	$(".address-area").empty();
	for(var i = 0; i < footerData.length; i++)
	{
		$(".address-area").append($("<a>").attr("href", "mailto:" + footerData[i].email).text(footerData[i].firstName + " " + footerData[i].lastName));
	}
	setMainContentMargin();
}

function buildImageSelectElement(imageData)
{
	var selectElement = $("#admin-add-page select[name=pageImage]");
	selectElement.empty();
	for (var i = 0; i < imageData.length; i++)
	{
		selectElement.append($("<option>").val(imageData[i].ID).text(imageData[i].title));
	}
}


/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
function buildDebugWindow()
{
	var currentBootstrapMode;
	$(".debug").remove();

	if ($(window).width() < 751)
	{
		currentBootstrapMode = "xs";
	}
	else if ($(window).width() < 975)
	{
		currentBootstrapMode = "sm";
	}
	else if ($(window).width() < 1183)
	{
		currentBootstrapMode = "md";
	}
	else if ($(window).width() >= 1183)
	{
		currentBootstrapMode = "lg";
	}
	
	$("body").prepend($("<div>")
	.addClass("debug")
	.html($( window ).width() + " x " + $(window).height() + "<br/>" +
		"Height of footer:" + $("footer").height() + "<br/>" +
		"Margin on main-content: " + parseInt($(".main-content").css("margin-bottom"), 10) + "<br/>" +
		"Current Bootstrap Mode: ~" + currentBootstrapMode + "~")
	);
}
/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////