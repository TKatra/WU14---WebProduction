function buildPage(pageData)
{
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
	var mainMenu = $(".main-menu");

	var menuTree = createMenuTree(menuData.menuLinks);

	buildMainMenu(mainMenu, menuTree);
	$("a[href=" + menuData.pageURL + "]").addClass("active");
}

function buildMainMenu(menuList, menuData)
{
	for(var i = 0; i < menuData.length; i++)
	{
		var newListItem = $("<li>");
		newListItem.append($("<a>")
			.attr("href", menuData[i].path)
			.text(menuData[i].title));

		if(menuData[i].children.length > 0)
		{
			var newMenuList = $("<ul>");
			newListItem.append(newMenuList);
			buildMainMenu(newMenuList, menuData[i].children);
		}
		menuList.append(newListItem);
	}
}

function buildLoginSection(loginData)
{
	var loginSection = $("header nav .login-section");

	if(loginData.firstName != null && loginData.lastName != null)
	{
		loginSection.find("p").text(loginData.firstName + " " + loginData.lastName);
		loginSection.find("a").text("Log out").attr("href","log-out");
	}
	else
	{
		loginSection.find("p").text("");
		loginSection.find("a").text("Log in").attr("href", "log-in");
	}
}


function loadMainPage(pageURL, newPage)
{
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
		var requestData = {
			"commandLine" : "loadPage",
			"pageURL" : pageURL,
			"newPage" : newPage
		};

		contactPHP(requestData, loadPageFromDB);
	}
}

function loadPageFromDB(pageData)
{
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

	if(pageData.newPage === true)
	{
		history.pushState(null, null, pageData.pageURL);
	}

	page.fadeIn(500);
	$("a[href=" + pageData.pageURL + "]").addClass("active");
}

function buildFooter(footerData)
{
	$(".admin-addresses").empty();
	for(var i = 0; i < footerData.length; i++)
	{
		$(".admin-addresses").append($("<a>").attr("href", "mailto:" + footerData[i].email).text(footerData[i].firstName + " " + footerData[i].lastName));
	}
	setMainContentMargin();
}

function buildLinkParentIDSelectElement(menuData)
{
	var selectElement = $("#admin-add-page select[name=linkParentID]");
	var menuTree = createMenuTree(menuData.menuLinks);

	selectElement.empty();
	selectElement.append($("<option>").val("").text("Top"));

	buildMenuLinkSelectOptions(selectElement, menuTree, 0);
}

function buildMenuLinkSelectOptions(selectElement, menuLinks, currentLevel)
{
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