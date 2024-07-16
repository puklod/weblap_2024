<?php

//if "email" variable is filled out, send email

  if (isset($_REQUEST['email']))  {

  

  //Email information

  $name = $_REQUEST['name'];

  $email = $_REQUEST['email'];

  $message = $_REQUEST['message'];
  
  $subject = $_REQUEST['subject'];

    

 $to="puklo.daniel@jamk.hu";
$from=$email;
$header = array(
	"From: {$name}<{$from}>",
	"Return-path: {$email}",
	"MIME-Version: 1.0",
	"Content-Type: text/html;charset=utf-8"
);

mail($to, $subject, $message, implode("\r\n", $header));

		echo "<h2 class=succes>Email sent! Thank you!</h2>";
		echo "<h2 class=succes><a href=\"\">New message</a></h2>";

 }	  