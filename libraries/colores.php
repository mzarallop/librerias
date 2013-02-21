<?php

class Colores {

	function plan($id)
	{

		switch($id){
		case 1:
			$color = "orange";
		break;
		case 2:
			$color = "green";
		break;
		case 3:
			$color = "skyblue";
		break;
		default:
			$color = "white";
		break;
		}

		return $color;
	}

}


?>
