function linkOnClick(event)
{
	if ($(this).attr("href").indexOf("://") >= 0 || $(this).attr("href").indexOf("mailto:") >= 0)
	{
		return;
	}

	if ($(this).attr("href") == "log-out")
	{
		console.log("logOut");

	}
	else if ($(this).attr("href") != null && $(this).attr("href") !== "#")
	{
		var pageData = {
			"newPage" : true,
			"pageURL" : $(this).attr("href")
		};
		buildPage(pageData);
	}

	event.preventDefault();
}

function headerHamburgerOnClick()
{
	$("header nav > ul").toggleClass("display-header-menu");
	$("header nav .hamburger-button").toggleClass("active");
}

function adminMenuButtonOnClick()
{
	$(".admin-tools-menu ul").slideToggle(150);
}

function checkboxDisplaySectionOnClick()
{
	var checkbox = $(this);
	var section = $(this).parents("form").find("." + checkbox.val());

	if(checkbox.is(":checked") === true)
	{
		section.show(150);
	}
	else
	{
		section.hide(150);
	}
}

function checkboxAddToMenuOnClick()
{
	var checkbox = $(this);
	var section = $(this).parents("form").find("." + checkbox.val());

	if(checkbox.is(":checked") === true)
	{
		section.find("input[type=text]").prop('required',true);
		section.find("input[type=number]").prop('required',true);
	}
	else
	{
		section.find("input").prop('required',false);
	}
}

function checkboxDisableOnClick()
{
	var checkbox = $(this);
	var textbox = $(this).parents("form").find("input[name=" + $(this).val() + "]");

	if(checkbox.is(":checked") === true)
	{
		textbox.prop("disabled", false);
	}
	else
	{
		textbox.prop("disabled", true);
	}
}