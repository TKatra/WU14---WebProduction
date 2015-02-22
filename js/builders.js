function buildPage(pageData)
{
	console.log("Build Page, pageData: ", pageData);
	resetSite();
	// checkIfLoggedIn();
	//

	var requestData = {
		"commandLine" : "getMainMenuLinks",
		"pageURL" : pageData.pageURL
	};
	contactPHP(requestData, buildHeader);
	contactPHP(requestData, buildLinkParentIDSelectElement);

	requestData = {
		"commandLine" : "buildImageSelectElement"
	};
	contactPHP(requestData, buildImageSelectElement);

	if(!pageData.pageURL)
	{
		pageData.pageURL = "home";
	}

	loadMainPage(pageData.pageURL, pageData.newPage);

	requestData = {
		commandLine : "getAllAdmins"
	};

	contactPHP(requestData, buildFooter);
}

function buildHeader(menuData)
{
	console.log("menuData: ", menuData);

	var mainMenu = $(".main-menu");

	var menuTree = createMenuTree(menuData.menuLinks);

	console.log("menuTree: ", menuTree);
	buildMainMenu(mainMenu, menuTree);
	$("a[href=" + menuData.pageURL + "]").addClass("active");
}

function buildMainMenu(menuList, menuData)
{
	console.log("menuList: ", menuList);
	console.log("menuData: ", menuData);
	for(var i = 0; i < menuData.length; i++)
	{
		console.log("menuData[" + i + "]: ", menuData[i]);
		var newListItem = $("<li>");
		newListItem.append($("<a>")
			.attr("href", menuData[i].path)
			.text(menuData[i].title));

		// console.log("");
		// console.log("menuData[i].children > 0: ", menuData[i].children > 0);
		if(menuData[i].children.length > 0)
		{
			console.log("Has children");
			console.log("menuData[" + i + "].children", menuData[i].children);
			var newMenuList = $("<ul>");
			newListItem.append(newMenuList);
			buildMainMenu(newMenuList, menuData[i].children);
		}
		menuList.append(newListItem);
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


function loadMainPage(pageURL, newPage)
{
	console.log("pageURL: ", pageURL);
	console.log("newPage: ", newPage);
	console.log("pageURL search for article: ", pageURL);


	if($("article#"+pageURL).length > 0)
	{
		$("article#"+pageURL).fadeIn(500);

		if(newPage === true)
		{
			history.pushState(null,null,pageURL);
		}
		$("a[href=" + pageURL + "]").addClass("active");
	}
	else
	{
		console.log("Load from DB");
		var requestData = {
			"commandLine" : "loadPage",
			"pageURL" : pageURL,
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
		page.find(".page-body").append($("<p>").text(splittedBody[i]));
	}

	console.log("newPage: ", pageData.newPage);
	console.log("pageURL: ", pageData.pageURL);



	if(pageData.newPage === true)
	{
		console.log("PUSH");
		history.pushState(null, null, pageData.pageURL);
	}

	page.fadeIn(500);
	$("a[href=" + pageData.pageURL + "]").addClass("active");
}

// function newMainPage(pageURL)
// {
// 	loadMainPage(pageURL);
// 	history.pushState(null,null,pageURL);
// }


function buildFooter(footerData)
{
	// console.log("footerData: ", footerData);
	$(".admin-addresses").empty();
	for(var i = 0; i < footerData.length; i++)
	{
		$(".admin-addresses").append($("<a>").attr("href", "mailto:" + footerData[i].email).text(footerData[i].firstName + " " + footerData[i].lastName));
	}
	setMainContentMargin();
}

function buildLinkParentIDSelectElement(menuData)
{
	console.log("buildLinkParentIDSelectElement menuData: ", menuData);
	var selectElement = $("#admin-add-page select[name=linkParentID]");
	var menuTree = createMenuTree(menuData.menuLinks);

	selectElement.empty();

	// console.log("selectElement: ", selectElement);
	selectElement.append($("<option>").val("").text("Top"));

	buildMenuLinkSelectOptions(selectElement, menuTree, 0);
}

function buildMenuLinkSelectOptions(selectElement, menuLinks, currentLevel)
{
	console.log("currentLevel: ", currentLevel);
	console.log("menuLinks: ", menuLinks);
	for(var i = 0; i < menuLinks.length; i++)
	{
		var levelIndicator = "";
		for(var j = 0; j <= currentLevel; j++)
		{
			levelIndicator += ">";
		}

		selectElement.append(
			$("<option>")
			.val(menuLinks[i].ID)
			.text(levelIndicator + " " + menuLinks[i].title)
			);
		if(menuLinks[i].children.length > 0)
		{
			buildMenuLinkSelectOptions(selectElement, menuLinks[i].children, currentLevel + 1);
		}
	}
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