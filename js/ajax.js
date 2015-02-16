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
			newPage("log-in");
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
		success:function(data)
		{
			console.log("AJAX RETURN DATA: ", data);
			// newPage("home");
		},
		error:function(data)
		{
			console.log("AJAX ERROR: ", data.responseText);
		}
	});
}