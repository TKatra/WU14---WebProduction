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
		success:function(data)
		{
			newMainPage("log-in");
		},
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