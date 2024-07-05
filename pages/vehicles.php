<html>

<head>

<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.0/jquery.min.js"></script>

<script type="text/javascript" src="../js/jquery.colorbox.js"></script>

<title>Vehicles</title>
<meta name="description" content="Vehicles">
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

$page = "three";

include("../pages/mainmenu.php"); 

?>

<div id="main">

<div id='content-area'>

<div id="gepjarmupark" class='content'>

<script>
			$(document).ready(function(){
				//Examples of how to assign the Colorbox event to elements
				$(".group1").colorbox({rel:'group1', width:"60%"});
				$(".group2").colorbox({rel:'group2', transition:"fade"});
				$(".group3").colorbox({rel:'group3', transition:"none", width:"75%", height:"75%"});
				$(".group4").colorbox({rel:'group4', slideshow:true});
				$(".ajax").colorbox();
				$(".youtube").colorbox({iframe:true, innerWidth:640, innerHeight:390});
				$(".vimeo").colorbox({iframe:true, innerWidth:500, innerHeight:409});
				$(".iframe").colorbox({iframe:true, width:"80%", height:"80%"});
				$(".inline").colorbox({inline:true, width:"50%"});
				$(".callbacks").colorbox({
					onOpen:function(){ alert('onOpen: colorbox is about to open'); },
					onLoad:function(){ alert('onLoad: colorbox has started to load the targeted content'); },
					onComplete:function(){ alert('onComplete: colorbox has displayed the loaded content'); },
					onCleanup:function(){ alert('onCleanup: colorbox has begun the close process'); },
					onClosed:function(){ alert('onClosed: colorbox has completely closed'); }
				});

				$('.non-retina').colorbox({rel:'group5', transition:'none'})
				$('.retina').colorbox({rel:'group5', transition:'none', retinaImage:true, retinaUrl:true});
				
				//Example of preserving a JavaScript event for inline calls.
				$("#click").click(function(){ 
					$('#click').css({"background-color":"#f00", "color":"#fff", "cursor":"inherit"}).text("Open this window again and this message will still be here.");
					return false;
				});
			});
		</script>

<a class="group1" href="../images/cars/001.webp"><img src="../images/cars/thumbnails/001.webp"></a>
<a class="group1" href="../images/cars/002.webp"><img src="../images/cars/thumbnails/002.webp"></a>
<a class="group1" href="../images/cars/003.webp"><img src="../images/cars/thumbnails/003.webp"></a>
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