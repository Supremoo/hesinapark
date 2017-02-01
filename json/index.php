<!DOCTYPE html>
<html>

<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
	<meta name="author " content="Heein Park ">
	<title>Json Testing Ground</title>
</head>

<body onload="onLoad(); ">
	<?php
		$jsonurl = "https://commons.pratt.edu/design-lab/wp-json/wp/v2/pages/819";
		$json = file_get_contents($jsonurl);
		echo $json['content'];
//		var_dump(json_decode($json, true));
		echo "<h2>Da</h2>";
	?>
</body>

</html>