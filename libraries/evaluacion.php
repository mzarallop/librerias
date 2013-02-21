<?php if ( ! defined('BASEPATH')) exit('No se permite el acceso directo al script');

class Evaluacion {

	function preguntas()
	{
		$CI = get_instance();
		$query = $CI->db->query("select * from simce_preguntas where idnivel is null");
		return $query->result_array();
	}

	function pregunta($param)
	{

		$CI = get_instance();
		$query = $CI->db->query("select * from simce_preguntas where id = '".$param['id']."'");
		return $query->result_array();
	}

	function alternativas($param)
	{
		$CI = get_instance();
		$query = $CI->db->query("select * from simce_alternativas where idpregunta = '".$param['id']."'");
		return $query->result_array();
	}

	function icon_alternativa($id, $tipo)
	{
		if($tipo == 'string')
		{
			switch($id){
				case 1:
					$icon  = 'a) ';
				break;
				case 2:
					$icon  = 'b) ';
				break;
				case 3:
					$icon  = 'c) ';
				break;
				case 4:
					$icon  = 'd) ';
				break;
				case 5:
					$icon  = 'e) ';
				break;
				case 6:
					$icon  = 'f) ';
				break;
			}
		}
		elseif($tipo == 'int')
		{
			$icon = $id.') ';
		}

		return $icon;
	}


}

?>