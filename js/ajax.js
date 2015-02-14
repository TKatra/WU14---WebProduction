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