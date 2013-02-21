<?php if ( ! defined('BASEPATH')) exit('No se permite el acceso directo al script');

class Planes {

	function maquinas($ids)
	{
		$CI = get_instance();
		$query = $CI->db->query("select * from vsan_implementos_entrenamiento where id in ($ids)");

		$li = '<ul class="maquinas">';

		$i=1;
		foreach($query->result_array() as $maquinas)
		{

			$li.='<li>'.$i.' ) '.$maquinas['nombre'].'</li>'."\n";
			$i++;
		}
		$li.='</ul>';

		return $li;
	}



}

?>