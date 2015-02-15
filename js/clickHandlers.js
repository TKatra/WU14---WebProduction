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

function headerHamburgerOnClick()
{
	$("header nav > ul").toggleClass("display-header-menu");
}

function adminMenuButtonOnClick()
{
	$(".admin-tools-menu ul").slideToggle(150);
}

function checkboxDisplaySectionOnClick()
{
	var checkbox = $(this);
	var section = $(this).parents("form").find("." + checkbox.val());
	console.log(section);

	if(checkbox.is(":checked") === true)
	{
		section.show(150);
	}
	else
	{
		section.hide(150);
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