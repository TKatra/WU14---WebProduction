function contactPHP(request, successFunction)
{
	$.ajax({
		url:"php/main.php",
		dataType: "json",
		data: request,
		success: successFunction,
		error:function(data)
		{
			console.log("AJAX ERROR: ", data.responseText);
		}
	});
}

function createNewAdmin(request)
{
	$.ajax({
		url:"php/main.php",
		dataType: "json",
		data: request,
		success:buildPage,
		error:function(data)
		{
			console.log("AJAX ERROR: ", data.responseText);
		}
	});
}

function checkIfLoggedIn()
{
	$.ajax({
		url:"php/main.php",
		dataType: "json",
		data: {
			"commandLine" : "checkIfLoggedIn"
		},
		success:buildLoginSection,
		error:function(data)
		{
			console.log("AJAX ERROR: ", data.responseText);
		}
	});
}

function logIn(request)
{
	$.ajax({
		url:"php/main.php",
		dataType: "json",
		data: request,
		success:buildPage,
		error:function(data)
		{
			console.log("AJAX ERROR: ", data.responseText);
		}
	});
}

// function buildImageSelectElement(request)
// {
// 	$.ajax({
// 		url:"php/main.php",
// 		dataType: "json",
// 		data: request,
// 		success:,
// 		error:function(data)
// 		{
// 			console.log("AJAX ERROR: ", data.responseText);
// 		}
// 	});
// }