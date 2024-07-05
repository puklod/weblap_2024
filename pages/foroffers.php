<html>

<head>
<title>For offers</title>
<meta name="description" content="For offers">
<?php

include("../pages/head.php"); 

?>

</head>

<body>

<?php
include("../pages/header.php"); 
?>

<div id="page">

<?php

$page = "four";

include("../pages/mainmenu.php"); 

?>

<div id="main">

<div id="content-area">

<div id='arajanlat' class='content'>

<div id="email">

<div id="block-1">

<?php

//if "email" variable is filled out, send email

  if (isset($_REQUEST['email']))  {

  

  //Email information

  $name = $_REQUEST['name'];

  $email = $_REQUEST['email'];

  $message = $_REQUEST['message'];
  
  $subject = $_REQUEST['subject'];

    

  if (($name=="")||($email=="")||($message=="")||($subject==""))

        {

		echo "<h2>Please complete the <a href=\"\">form</a>!</h2>";

	    }

   else {

	    	$to="contact@goldtripbudapest.com";
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

  }

  

  //if "email" variable is not filled out, display the form

  else  {

?>



 <form method="post">
 <h1>Message us</h1>

 <h3>Your name and email address*:</h3>

  <input name="name" placeholder="Name" type="text" /></br>

  <input name="email" placeholder="E-mail" type="text" /></br>

  <h3>Your message:</h3>
  
  <input name="subject" placeholder="Subject" type="text" /></br>

  <textarea name="message" rows="15"></textarea></br>

  <input type="submit" value="Send" />
<p>* We store your data only for contact purposes.</p>
  </form>

  

<?php

  }

?>

</div>

</div>

<div id="contacts">

<div id="block-2">

<p class="cim">Gold Trip Budapest</p>
<p><img src="/images/support.webp"></p>

<p>Costumer service:<p>

Richard Kovacs
<br>+36307282621</br></p>
<br><a href="https://wa.me/36307282621"><img id="whatsapp-icon" src="/images/whatsapp.webp" alt="whatsapp"></a></br>
<a href="https://wa.me/36307282621">WhatsApp</a>

</div>

</div>

</div>

</div>

</div>

</div>

<div class="after-page">

</div>

<?php
include("../pages/footer.php"); 
?>

</body>

</html>