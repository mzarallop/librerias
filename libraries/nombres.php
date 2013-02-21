<?php

class Nombres {

	function buscar($id, $tipo)
	{

		switch($tipo){
		case "etapas_entrenamiento":
			if($id == 1){ $nombre ='Inicio';}
			if($id == 2){ $nombre ='Desarrollo';}
			if($id == 3){ $nombre ='Cierre';}
		break;
		default:

		break;
		}

		return $nombre;

	}

	function sexo($id)
	{
		switch($id){
			case 1:
				 $nombre='Niña';
			break;
			case 2:
				 $nombre='Niño';
			break;
			case 3:
				 $nombre='Ambos';
			break;
			default:

			break;
		}
		return $nombre;
	}

}


?>
