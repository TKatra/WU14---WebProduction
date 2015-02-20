function adminAddPageSubmit()
{
	var requestData = {
		"commandLine" : "addNewPage",
		"pageTitle" : $(this).find("input[name=pageTitle]").val(),
		"pageURL" : $(this).find("input[name=pageURL]").val(),
		"pageImage" : $(this).find("select[name=pageImage]").val(),
		"pageBody" : $(this).find("textarea[name=pageBody]").val()
	};

	if ($(this).find("input[name=addToMenu]:checked").length > 0)
	{
		console.log("Add to menu!");

		requestData.menuData = {
			"linkTitle" : $(this).find("input[name=linkTitle]").val(),
			"linkWeight" : $(this).find("input[name=linkWeight]").val(),
			"linkParentID" : $(this).find("select[name=linkParentID]").val()
		};
	}
	console.log("requestData: ", requestData);

	contactPHP(requestData, buildPage);

	return false;
}

function logInSubmit()
{
	var email = $(this).find("input[name=email]").val();
	var password = $(this).find("input[name=password]").val();

	var requestData = {
		commandLine : "logIn",
		email : email,
		password : password
	};

	logIn(requestData);
	return false;
}

function createNewAccountOnSubmit()
{
	var firstName = $(this).find("input[name=firstName]").val();
	var lastName = $(this).find("input[name=lastName]").val();
	var email = $(this).find("input[name=email]").val();
	var password = $(this).find("input[name=password]").val();
	var repeatPassword = $(this).find("input[name=repeatPassword]").val();

	if (password === repeatPassword)
	{
		console.log("Passwords match!");

		var requestData = {
			commandLine : "createNewAccount",
			firstName : firstName,
			lastName : lastName,
			email : email,
			password : password
		};
		console.log("requestData: ", requestData);
		createNewAdmin(requestData);
	}
	else
	{
		console.log("Passwords don't match");
	}

	return false;
}