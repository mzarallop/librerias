<?php if ( ! defined('BASEPATH')) exit('No se permite el acceso directo al script');

class Calculos {

	function medianas($param)
	{

		$CI = get_instance();

		$query = $CI->db->query("select idtipo, mediana from vsan_standar_percentiles_inta
								 where sexo = '".$param['sexo']."' and year = '".$param['year']."'
								 and mes = '".$param['mes']."'
								 and idtipo in ('talla','peso')");
		return $query->result_array();
	}

	function estado_nutricional($usuario, $mediana)
	{

		//diferencia de tallas

			$talla = $usuario['estatura'] - $mediana['talla'];


		//diferencia de peso


			$peso = $usuario['peso'] - $mediana['peso'];


		$diferencia = array("diftalla"=>$talla, "difpeso"=>$peso);

		return $diferencia;
	}

	function standar_minsal($param)
	{
		$CI = get_instance();
		$CI->load->library('usuario');
		$alumno = $CI->usuario->data($param['usuario']);

		$fecha = explode("/",$alumno[0]['fecha_nacimiento']);
		$edad = (date("Y") - $fecha[2]);
		$mes = (12 - $fecha[1]);

		if($mes >= 5){ $meses = 5; }
		elseif($mes < 5){ $meses = 0;}

		//busqueda de datos minsal
		/*$CI->db->select('*');
		$CI->db->from('vsa_standar_minsal');
		$CI->db->where('edad', $edad);
		$CI->db->where('meses', $meses);
		$CI->db->where('genero', $alumno[0]['sexo']);
		$CI->db->where('tipo', $param['tipo']);*/

		$query = $CI->db->query("select * from vsan_standar_minsal where
								edad = '".$edad."' and
								meses= '".$meses."' and
								genero = '".$alumno[0]['sexo']."' and
								tipo = '".$param['tipo']."'");

		return $query->result_array();

	}

	function clasificacion_nutricional($param)
	{
		/*
			param int usuario
			param int altura cm
			param int peso kg

		*/
			// peso / altura al cuadrado
		$CI = get_instance();
		$CI->load->library('usuario');
		$alumno = $CI->usuario->data($param['usuario']);
		$fecha = explode("/",$alumno[0]['fecha_nacimiento']);
		$edad = (date("Y") - $fecha[2]);
		$mes = (12 - $fecha[1]);
		if($mes >= 5){ $meses = 5; }
		elseif($mes < 5){ $meses = 0;}
		//calculo del IMC
		$imc = ($param['peso']/(($param['estatura']/100)*($param['estatura']/100)));

		// estandares minsal
		$r_imc = $CI->db->query("select * from vsan_standar_minsal where
								edad = '".$edad."' and
								meses= '".$meses."' and
								genero = '".$alumno[0]['sexo']."' and
								indicador = 'imc'");
		$std_imc = $r_imc->result_array();



		$r_talla = $CI->db->query("select * from vsan_standar_minsal where
								edad = '".$edad."' and
								meses= '".$meses."' and
								genero = '".$alumno[0]['sexo']."' and
								indicador = 'talla'");
		$std_talla = $r_talla->result_array();

			//imc comparativa
			if($imc < $std_imc[0]['diez'])
				{$estado = 'Bajo Peso'; $clave = '1';  $color = 'pink';}
			elseif($imc >= $std_imc[0]['diez'] && $imc < $std_imc[0]['ochentaycinco'])
				{$estado = 'Normal'; $clave = '2';  $color = 'green';}
			elseif($imc >= $std_imc[0]['ochentaycinco'] && $imc < $std_imc[0]['noventaycinco'])
				{$estado = 'Riesgo de Obesidad'; $clave = '7';  $color = 'yellow';}
			elseif($imc > $std_imc[0]['noventaycinco'])
				{$estado = 'Obesidad'; $clave = '5';  $color = 'red';}

			//talla comparativa
			if($param['estatura'] >= $std_talla[0]['cinco'] && $param['estatura'] <= $std_talla[0]['noventaycinco'])
			{
				$r_talla = 'Talla Normal';
			}
			elseif($param['estatura'] > $std_talla[0]['noventaycinco'])
			{
				$r_talla = 'Talla sobre la media';
			}
			elseif($param['estatura'] < $std_talla[0]['cinco'])
			{
				$r_talla = 'Talla Baja';
			}

		$clasificacion = array(
			"imc"=>array(
				"clave"=>$clave,
				"alumno"=>number_format($imc,1),
				"minsal"=>$std_imc[0]['cincuenta'],
				"reporte"=>$estado,
				"diferencia"=>number_format(($imc - $std_imc[0]['cincuenta']),1),
				"color"=>$color
				),
			"talla"=>array(
				"alumno"=>$param['estatura'],
				"minsal"=>$std_talla[0]['cincuenta'],
				"reporte"=>$r_talla,
				"diferencia"=>number_format(($param['estatura'] - $std_talla[0]['cincuenta']),1)
				)
			);

		return $clasificacion;

	}

	function edad($nacimiento)
	{
		$fecha = explode("/",$nacimiento);
		$year = (date("Y") - $fecha[2]);
		$mes = (12 - $fecha[1]);

		return array("edad"=>$year, "meses"=>$mes);
	}



}

?>