function buildPage(pageData)
{
	console.log("Build Page, pageData: ", pageData)

	// checkIfLoggedIn();
	//

	if(pageData.newPage == true)
	{
		if(pageData.UrlToLoad == null)
		{
			loadMainPage("home");
		}
		else
		{
			loadMainPage(pageData.UrlToLoad);
		}
		history.pushState(null,null,pageData.UrlToLoad);
	}
	else
	{
		if(pageData.UrlToLoad == null)
		{
			loadMainPage("home");
		}
		else
		{
			loadMainPage(pageData.UrlToLoad);
		}
	}
}

function buildHeaderMenu()
{
	
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


function loadMainPage(pageUrl)
{
	console.log("pageUrl: ", pageUrl);

	$(".main-content article").hide();
	if (!pageUrl)
	{
		console.log("pageUrl is undefined, setting it to 'home'");
		pageUrl = "home";
		console.log("pageUrl: ", pageUrl);
	}
	resetSite();
	console.log("pageUrl search for article: ", pageUrl);
	$(".main-content article#"+pageUrl).fadeIn(500);
}

// function newMainPage(pageUrl)
// {
// 	loadMainPage(pageUrl);
// 	history.pushState(null,null,pageUrl);
// }


function buildFooter()
{

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