function adminAddPageSubmit()
{
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
	}

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