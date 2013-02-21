<?php if ( ! defined('BASEPATH')) exit('No se permite el acceso directo al script');

class Tablas {

	function tabla_asignatura($nivel)
	{

		$CI = get_instance();
		$query = $CI->db->query("select id, nombre from core_asignaturas where idnivel='$nivel'");


		/*$tmpl = array ( 'table_open'  => '<table class="table table-striped">' );
		$CI->table->set_template($tmpl);
		$CI->table->set_heading(array('Código', 'Asignaturas'));

		return $CI->table->generate($query->result_array());
		*/

		return $query->result_array();

	}
	/*
		return array
	*/
	function tabla_ejes($param)
	{
		$CI = get_instance();
		$query = $CI->db->query("select id, nombre from core_eje
								 where idnivel='".$param['nivel']."' AND
								 idasignatura='".$param['asignatura']."'");
		return $query->result_array();
	}

	function tabla_curriculum($param)
	{
		$CI = get_instance();
		$query = $CI->db->query("select id, descripcion, orden from core_curriculum
								 where ideje='".$param['eje']."' AND
								 idtipo='".$param['tipo']."' order by orden");
		return $query->result_array();
	}


	function curriculum($param)
	{

		$CI = get_instance();
		$query = $CI->db->query("select id, nombre from core_eje
								 where idnivel='".$param['nivel']."' AND
								 idasignatura='".$param['asignatura']."'");

		return $query->result_array();

	}

	function detalle_curriculum($nivel, $asignatura, $eje, $tipo)
	{
		$CI = get_instance();
		$query = $CI->db->query("select id, descripcion, orden from core_curriculum
								 where idnivel='".$nivel."' AND
								 idasignatura='".$asignatura."' AND
								 ideje='".$eje."' AND idtipo='".$tipo."' order by orden");

		return $query->result_array();
	}

	function modulos_masterclass()
	{
		$CI = get_instance();
		$query = $CI->db->query("select * from core_menu
								 where parent='0'");

		return $query->result_array();
	}

	function tabla_archivos()
	{
		$CI = get_instance();
		$query = $CI->db->query("SELECT
								f.id,
								(select nivel from core_niveles where id = f.idnivel) as nivel,
								(SELECT nombre from core_asignaturas where id = f.idasignatura) as asignatura,
								(select concat(nombre,' ',ap_paterno,' ',ap_materno) as nombre_usuario
								from core_usuarios where id = f.idusuario) as profesor,
								f.nombre as archivo,
								f.mimetype
								from
								file_recursos as f
								order by f.id desc
								");
		return $query->result_array();
	}

	function archivo($id)
	{
		$CI = get_instance();
		$query = $CI->db->query("select * from file_recursos where id='".$id."' order by fecha desc");
		return $query->result_array();
	}

	/*	Módulo Planes de entrenamiento
		param int nivel
		return string array
		path: vidasana/entrenamiento
	*/

	function ver_planes($nivel)
	{
		$CI = get_instance();
		$query = $CI->db->query("select * from vsan_planentrenamiento where idnivel='$nivel'");
		return $query->result_array();

	}

	function ver_detalle_plan($plan)
	{

		$CI = get_instance();
		$query = $CI->db->query("select * from vsan_plandetalle where idplan='$plan' order by idetapas");
		return $query->result_array();

	}

	function total_recursos()
	{

		$CI = get_instance();
		$query = $CI->db->query("SELECT concat(u.nombre,' ', u.ap_paterno,' ', u.ap_materno) as nombre ,rec.idusuario, count(rec.idusuario) as total, rec.mimetype
								from file_recursos as rec INNER JOIN core_usuarios as u ON
								rec.idusuario = u.id
								GROUP BY rec.mimetype, rec.idusuario;");
		return $query->result_array();
	}

	function planes_entrenamiento($plan, $etapa)
	{
		$CI = get_instance();
			$query =$CI->db->query("SELECT
									plan.id,
									plan.idetapas,
									plan.actividad as nombre,
									plan.observaciones as descripcion,
									plan.idetapas as etapas,
									plan.implemento,
									plan.minutos,
									plan.series,
									plan.repeticiones,
									plan.cargas
									FROM
									vsan_plandetalle as plan
									where plan.idplan = '".$plan."'
									AND	plan.idetapas = '".$etapa."'");

		return $query->result_array();

	}

}
?>