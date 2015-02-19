<?php
include_once("../libs/nodebite-swiss-army-oop.php");

session_start();

$connectInfo = array(
  "host" => "127.0.0.1",
  "dbname" => "WU14WebProduction",
  "username" => "root",
  "password" => "mysql"
  );

$request = $_REQUEST;
$PDOHelper = new PDOHelper($connectInfo["host"], $connectInfo["dbname"], $connectInfo["username"], $connectInfo["password"]);
$result = array();


if($request["commandLine"] == "createNewAccount")
{
	$prepareValues = array(
		"firstName" => $_REQUEST["firstName"],
		"lastName" => $_REQUEST["lastName"],
		"email" => $_REQUEST["email"],
		"password" => sha1($_REQUEST["password"])
		);

	$PDOHelper->query(
		"INSERT INTO Admins (firstName, lastName, email, `password`)
		VALUES (:firstName, :lastName, :email, :password);",
	$prepareValues
	);

	$result["UrlToLoad"] = "log-in";
	$result["newPage"] = true;

	echo(json_encode($result));
	exit();
}
else if($_REQUEST["commandLine"] == "checkIfLoggedIn")
{

}
else if($_REQUEST["commandLine"] == "logIn")
{
	$prepareValues = array(
		"email" => $_REQUEST["email"],
		"password" => sha1($_REQUEST["password"])
		);

	$matchedAdmin = $PDOHelper->query(
		"SELECT * 
		FROM Admins
		WHERE email = :email AND password = :password;",
	$prepareValues
	);

	if(count($matchedAdmin) > 0)
	{
		$_SESSION["loggedInAdmin"] = array(
			"firstName"=>$matchedAdmin[0]["firstName"],
			"lastName"=>$matchedAdmin[0]["lastName"],
			"email" => $matchedAdmin[0]["email"]
			);

		// $result["loggedInAdmin"] = array(
		// 	"firstName"=>$matchedAdmin[0]["firstName"],
		// 	"lastName"=>$matchedAdmin[0]["lastName"]//,
		// 	// "email" => $matchedAdmin[0]["email"]
		// 	);
	}

	// var_dump($matchedAdmin);
	// die();

	echo(json_encode($result));
	exit();
}
else if($_REQUEST["commandLine"] == "logOut")
{
	echo(json_encode($result));
	exit();
}
else if($_REQUEST["commandLine"] == "buildImageSelectElement")
{
	$result = $PDOHelper->query(
		"SELECT *
		FROM Images"
		);
	// var_dump($foundImages);
	// die();
	echo(json_encode($result));
	exit();
}
else if($_REQUEST["commandLine"] == "addNewPage")
{
	// var_dump($_REQUEST);
	// die();
	$prepareValues = array(
		"pageTitle"=>$_REQUEST["pageTitle"],
		"pageURL"=>$_REQUEST["pageURL"],
		"pageImage"=>(int)$_REQUEST["pageImage"],
		"pageBody"=>$_REQUEST["pageBody"],
		);
	// var_dump($prepareValues);
	// die();

	// $PDOHelper->query(
	// 	"INSERT INTO Pages()
	// 	",
	// 	$prepareValues);

	if($_REQUEST["addToMenu"] == "true")
	{
		// echo "TRUE!";
		// die();
		$prepareValues["linkTitle"] = $_REQUEST["linkTitle"];
		$prepareValues["linkWeight"] = $_REQUEST["linkWeight"];

		if(trim($_REQUEST["linkParentID"]) === "")
		{
			$prepareValues["linkParentID"] = null;
		}
		else
		{
			$prepareValues["linkParentID"] = (int)$_REQUEST["linkParentID"];
		}


	}
	else if($_REQUEST["addToMenu"] == "false")
	{
		// echo "FALSE!";
		// die();


	}
	else
	{
		echo "ERROR, FALSE DATA! KILL CONNECTION.";
		var_dump($_REQUEST);
		die();
	}


	echo(json_encode($result));
	exit();
}
else if($_REQUEST["commandLine"] = "getAllAdmins")
{
	$result = $PDOHelper->query(
		"SELECT *
		FROM Admins"
		);

	echo(json_encode($result));
	exit();
}
?>