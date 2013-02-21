<?php if ( ! defined('BASEPATH')) exit('No se permite el acceso directo al script');

class Selectores {

//funciones que queremos implementar en Miclase.


   function sel_nivel($param = array()){

	// selector por NB1 NB2 ...

		$CI =& get_instance();
		$query = $CI->db->query("select idgroup from core_niveles group by idgroup");
		return $query->result_array();

   }

   function sel_nivel_gen($param = array()){

	// selector por NB1 NB2 ...

		$CI =& get_instance();
		$query = $CI->db->query("select * from core_niveles order by id");
		return $query->result_array();

   }

   function sel_planes()
   {

	// selector de planes de entrenamietno

		$CI =& get_instance();
		$query = $CI->db->query("select * from vsan_planentrenamiento where visible = '1' order by nombre");
		return $query->result_array();
   }

   function sel_etapas()
   {
	//vsan_etapasentrenamiento

		$CI =& get_instance();
		$query = $CI->db->query("select * from vsan_etapasentrenamiento");
		return $query->result_array();

   }

   function sel_asignaturas($nivel)
   {
	//vsan_etapasentrenamiento

		$CI =& get_instance();
		$query = $CI->db->query("select id, nombre from core_asignaturas where idnivel= '$nivel'");
		return $query->result_array();

   }

   function sel_ejes($param)
   {
   		$CI =& get_instance();
		$query = $CI->db->query("select * from core_eje where idasignatura= '".$param."'");
		return $query->result_array();
   }

   function sel_planes_entrenamiento()
   {
   		$CI = get_instance();
   		$query = $CI->db->query("select id, nombre from vsan_planentrenamiento where visible='1' order by nombre");
   		return $query->result_array();
   }

   function sel_controles()
   {
   		$CI = get_instance();
   		$query = $CI->db->query("select * from vsan_control_nutricion order by id");
   		return $query->result_array();
   }

   function sel_grupos()
   {

   		$CI = get_instance();
   		$query = $CI->db->query("select * from vsan_gruponutricional");
   		return $query->result_array();

   }

   function sel_planes_e($param)
   {
         $CI = get_instance();
         $query = $CI->db->query("select id, nombre, idgenero from vsan_planentrenamiento where
                                 idnivel = '".$param['nivel']."' and visible='1' order by nombre");
         return $query->result_array();
   }

   function sel_implementos()
   {
         $CI = get_instance();
         $query = $CI->db->query("select * from vsan_implementos_entrenamiento order by nombre");
         return $query->result_array();
   }
}

?>