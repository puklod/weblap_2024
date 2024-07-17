<?php

  //Email information

  $name = $_REQUEST['name'];

  $email = $_REQUEST['email'];

  $message = $_REQUEST['message'];
  
  $subject = $_REQUEST['subject'];

    

$to="puklo.daniel@jamk.hu";
$from="puklo.daniel@jamk.hu";
$header = array(
	"From: {$name}<{$from}>",
  "Reply-To: {$email}",
	"Return-path: {$email}",
	"MIME-Version: 1.0",
	"Content-Type: text/html;charset=utf-8"
);

mail($to, $subject, $message, implode("\r\n", $header));
header("Location: ../index.html?sent");
exit();