<?php
include_once("../libs/nodebite-swiss-army-oop.php");

session_start();

$connectInfo =array(
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
		"firstName" => $request["firstName"],
		"lastName" => $request["lastName"],
		"email" => $request["email"],
		"password" => sha1($request["password"])
		);

	$PDOHelper->query(
	"INSERT INTO Admins (firstName, lastName, email, `password`)
	VALUES (:firstName, :lastName, :email, :password);",
	$prepareValues
	);

	echo(json_encode($result));
	exit();
}
else if($request["commandLine"] == "logIn")
{
	$email = $request["email"];
	$password = sha1($request["password"]);

	//HILFE

	echo(json_encode($result));
	exit();
}
else if($request["commandLine"] == "logOut")
{
	echo(json_encode($result));
	exit();
}
?>