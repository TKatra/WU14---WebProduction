<?php
include_once("../libs/nodebite-swiss-army-oop.php");

session_start();

$connectInfo = array(
  "host" => "127.0.0.1",
  "dbname" => "WU14WebProduction",
  "username" => "root",
  "password" => "mysql"
  );

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

	$result["pageURL"] = "log-in";
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
	}

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

	echo(json_encode($result));
	exit();
}
else if($_REQUEST["commandLine"] == "getAllAdmins")
{
	$result = $PDOHelper->query(
		"SELECT *
		FROM Admins"
		);

	echo(json_encode($result));
	exit();
}
else if($_REQUEST["commandLine"] == "addNewPage")
{
	$prepareValues = array(
		"pageTitle"=>$_REQUEST["pageTitle"],
		"pageBody"=>$_REQUEST["pageBody"],
		"pageImage"=>(int)$_REQUEST["pageImage"]
		);

	$PDOHelper->query(
		"INSERT INTO Pages(title, body, adminID, imageID)
		VALUES(:pageTitle, :pageBody, 1, :pageImage);",
		$prepareValues);

	unset($prepareValues);

	$lastUploadedPage = $PDOHelper->query(
		"SELECT ID
		FROM Pages
		ORDER BY uploaded DESC LIMIT 1"
		);

	$prepareValues = array(
		"pageURL"=>$_REQUEST["pageURL"],
		"pageID"=>$lastUploadedPage[0]["ID"]
	);

	$PDOHelper->query(
		"INSERT INTO UrlAlias(`path`, pageID)
		VALUES(:pageURL, :pageID);",
		$prepareValues);

	if(isset($_REQUEST["menuData"]))
	{
		$menuData = $_REQUEST["menuData"];
		$menuData["linkURL"] = $_REQUEST["pageURL"];
		$menuData["linkWeight"] = (int)$menuData["linkWeight"];

		if(trim($menuData["linkParentID"]) === "")
		{
			$menuData["linkParentID"] = null;
		}
		else
		{
			$menuData["linkParentID"] = (int)$menuData["linkParentID"];
		}

		$PDOHelper->query(
			"INSERT INTO MenuLink(title, `path`, weight, menuID, parentID)
			VALUES(:linkTitle, :linkURL, :linkWeight, 'main-menu', :linkParentID);",
			$menuData);
	}

	$result["pageURL"] = $_REQUEST["pageURL"];
	$result["newPage"] = true;

	echo(json_encode($result));
	exit();
}
else if($_REQUEST["commandLine"] == "loadPage")
{
	$prepareValues = array(
		"pageURL"=>$_REQUEST["pageURL"]
		);

	$pageID = $PDOHelper->query(
		"SELECT pageID
		FROM UrlAlias
		WHERE `path` = :pageURL
		ORDER BY ID DESC LIMIT 1;",
		$prepareValues);

	$pageData = $PDOHelper->query(
		"SELECT *
		FROM Pages
		WHERE ID = :pageID",
		$pageID[0]);

	$result = $pageData[0];

	$adminID = array(
		"adminID"=>$pageData[0]["adminID"]
		);

	$adminData = $PDOHelper->query(
		"SELECT *
		FROM Admins
		WHERE ID = :adminID",
		$adminID);

	$result["adminData"] = $adminData[0];

	$imageID = array(
		"imageID"=>$pageData[0]["imageID"]
		);

	$imageData = $PDOHelper->query(
		"SELECT *
		FROM Images
		WHERE ID = :imageID",
		$imageID);

	$result["imageData"] = $imageData[0];

	$result["pageURL"] = $_REQUEST["pageURL"];

	if($_REQUEST["newPage"] == "true")
	{
		$result["newPage"] = true;
	}
	else
	{
		$result["newPage"] = false;
	}

	echo(json_encode($result));
	exit();
}
else if($_REQUEST["commandLine"] == "getMainMenuLinks")
{
	$result["pageURL"] = $_REQUEST["pageURL"];
	$result["menuLinks"] = $PDOHelper->query(
		"SELECT *
		FROM MenuLink
		WHERE menuID = 'main-menu'
		ORDER BY weight;"
		);

	echo(json_encode($result));
	exit();
}
?>