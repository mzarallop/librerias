<?php if ( ! defined('BASEPATH')) exit('No se permite el acceso directo al script');

class Usuario {

	function data($user)
	{
		$CI = get_instance();
		$query = $CI->db->query("select * from core_usuarios where id='$user'");
		return $query->result_array();
	}



}

?>