function imc()
{
	
	/*
	@param sexo {0=hombre, 1=mujer}
	@param edad int
	@param peso int
	@param altura int
	return estado array
	*/
	var edad = $("#edad").val();
	//transformacion a metros
	var altmetro = (parseInt($("#altura").val()) / 100);
	var altura_final = altmetro * altmetro;
	var imc = $("#peso").val() / altura_final;
	console.log("imc"+imc)

	$("#imc").val(imc);
	
	//primera prueba
	if(edad >= 19 && edad <=24)
	{
		
			if(imc >= 19 && imc <=24){ $("#msn").html("Peso Ideal")}
			else if(imc < 19){$("#msn").html("Bajo Peso")}
			else if(imc > 24){$("#msn").html("Sobre Peso")}	
		
	}
	//segunda comprobacion
	else if(edad >=25 && edad<=34)
	{
		
			if(imc >= 20 && imc <=25){ $("#msn").html("Peso Ideal")}
			else if(imc < 19){$("#msn").html("Bajo Peso")}
			else if(imc > 24){$("#msn").html("Sobre Peso")}	
		
	}
	else if(edad >=35 && edad<=44)
	{
		if(sexo == 1){
			if(imc >= 21 && imc <=26){ $("#msn").html("Peso Ideal")}
			else if(imc < 21){$("#msn").html("Bajo Peso")}
			else if(imc > 26){$("#msn").html("Sobre Peso")}	
		}
		else if(sexo == 0)
		{
			if(imc >= 20 && imc <=25){ $("#msn").html("Peso Ideal")}
			else if(imc < 20){$("#msn").html("Bajo Peso")}
			else if(imc > 25){$("#msn").html("Sobre Peso")}	
		}

	}
	else if(edad >=45 && edad<=54)
	{
		
		if(sexo == 1){
			if(imc >= 22 && imc <=27){ $("#msn").html("Peso Ideal")}
			else if(imc < 22){$("#msn").html("Bajo Peso")}
			else if(imc > 27){$("#msn").html("Sobre Peso")}	
		}
		else if(sexo == 0)
		{
			if(imc >= 20 && imc <=25){ $("#msn").html("Peso Ideal")}
			else if(imc < 20){$("#msn").html("Bajo Peso")}
			else if(imc > 25){$("#msn").html("Sobre Peso")}	
		}	
		
	}
	else if(edad >=55 && edad<=64)
	{
		
		if(sexo == 1){
			if(imc >= 23 && imc <=28){ $("#msn").html("Peso Ideal")}
			else if(imc < 23){$("#msn").html("Bajo Peso")}
			else if(imc > 28){$("#msn").html("Sobre Peso")}	
		}
		else if(sexo == 0)
		{
			if(imc >= 20 && imc <=25){ $("#msn").html("Peso Ideal")}
			else if(imc < 20){$("#msn").html("Bajo Peso")}
			else if(imc > 25){$("#msn").html("Sobre Peso")}	
		}	
		
	}
	else if(edad > 64)
	{
		
		if(sexo == 1){
			if(imc >= 24 && imc <=29){ $("#msn").html("Peso Ideal")}
			else if(imc < 22){$("#msn").html("Bajo Peso")}
			else if(imc > 27){$("#msn").html("Sobre Peso")}	
		}
		else if(sexo == 0)
		{
			if(imc >= 20 && imc <=25){ $("#msn").html("Peso Ideal")}
			else if(imc < 20){$("#msn").html("Bajo Peso")}
			else if(imc > 25){$("#msn").html("Sobre Peso")}	
		}
		
	}

	estado_nutricional(imc)
}

function estado_nutricional(info)
{
	var imc = parseInt($("#imc").val())
	if(imc < 18.5){ $("#estado").val("Peso Insuficiente") $("#indicador").val("1")}
	else if(imc >=18.5 && imc<=24.9){$("#estado").val("Peso Normal") $("#indicador").val("2")}
	else if(imc >=25 && imc<=26.9){$("#estado").val("Sobrepeso Grado I") $("#indicador").val("3")}
	else if(imc >=27 && imc<=29.9){$("#estado").val("Sobrepeso Grado II") $("#indicador").val("4")}
	else if(imc >=30 && imc<=34.9){$("#estado").val("Obesidad I") $("#indicador").val("5")}
	else if(imc >=35 && imc<=39.9){$("#estado").val("Obesidad II") $("#indicador").val("6")}
	else if(imc > 50){$("#estado").val("Obesidad IV (Extrema)") $("#indicador").val("7")}

}

function ingresar_evaluacion()
{
	$.ajax({
		beforeSend:fucntion(){$("#guardar").val("Guardando...")},
		type="post",
		url="http://"+window.location.host+"control/ctr_nutricion.php",
		data="edad="+$("#edad").val()+"&imc="+$("#imc").val()
		+"&indicador="+$("#indicador").val()+"&estado="+$("#estado").val(),
		success=fucntion(resp){
			
			console.log(resp)	
		}

	});
}
