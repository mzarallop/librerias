//insertar plan
$(function(){

	$("#guardar_plan").on('click', function(e){

			$.ajax({
				url: 'http://'+window.location.host+'/master/ajax',
				type: 'post',
				data:
				"nivel="+$("#nivel_plan").val()+
				"&sexo="+$("#sexo").val()+
				"&nutricion="+$("#nutricion_plan").val()+
				"&nombre="+$("#nombre_plan").val()+
				"&descripcion="+$("#observaciones_plan").val()+
				"&usuario=2"+
				"&case=17",
				success:function(result){
					var estado = JSON.parse(result);

					if(estado)
					{
						$("#msn_plan").html('<div class="alert alert-success"><b>Felicitaciones!</b> Se grabo el plan correctamente.<button type="button" class="close" data-dismiss="alert">×</button></div>');
						$("#observaciones_plan").val('');
						$("#nombre_plan").val('');
					}
					else
					{ }
					sel_plan();
				}
			});
	});

	$("#nivel_ver").change(function(e){


            $.ajax({
            	url: 'http://'+window.location.host+'/master/ajax',
				type: 'post',
				data:
				"nivel="+e.target.value+
				"&case=28",
				success:function(result)
				{

					$("#sel_planes").html(result);

				}

            })
    });

    $("#ver_planes").on('click',function(e){

    	$.ajax({
    		url: 'http://'+window.location.host+'/master/ajax',
			type: 'post',
			data:
				"plan="+$("#sel_planes").val()+
				"&case=27",
			success:function(result)
			{
				console.log($("#sel_planes").val())
				$("#lista_planes").html(result);

				//formulario de edicion modal
				$("a .icon-pencil").on('click',function(e){

					console.log(e)
				})
				//remover la actividad
				$("a .icon-remove").on('click',function(b){

					bootbox.confirm("Estas seguro de eliminar la actividad N° "+b.currentTarget.id+"?", function(respuesta) {

						if(respuesta == true){
						$.ajax({
							url: 'http://'+window.location.host+'/master/ajax',
							type: 'post',
							data:
								"id="+b.currentTarget.id+
								"&case=30",
							success:function(result)
							{
								var resp = JSON.parse(result)
								console.log(resp)

								if(resp == true)
								{

									$("#rowdetalle"+b.currentTarget.id).hide()
									 //bootbox.alert("Se elimino la actividad "+b.currentTarget.id)
								}
								else if(resp == false)
								{
									//bootbox.alert("No se logro eliminar la actividad  "+b.currentTarget.id)
								}
							}

						})
						}//analiza si es true
				})//fin promt
				})
			}
    	})
   });


});

function ver_planes()
{

	$.ajax({
    		url: 'http://'+window.location.host+'/master/ajax',
			type: 'post',
			data:
				"plan="+$("#sel_planes").val()+
				"&case=27",
			success:function(result)
			{

				$("#lista_planes").html(result);
			}
	})
}

function sel_plan(){

	$.ajax({
				url: 'http://'+window.location.host+'/master/ajax',
				type: 'post',
				data: //selectore planes
				"case=18",
				success:function(result){
					console.log(result)
					$("#plan_detalle").html(result);
				}
			});

}

// ingreso del detalle del plan
$(function(){

	$("#grabardetalle").on('click', function(e){


			$.ajax({
				url: 'http://'+window.location.host+'/master/ajax',
				type: 'post',
				data: //selectore planes
				"plan="+$("#plan_detalle").val()+
				"&implemento="+ls_implementos()+
				"&ubicacion="+$("#ubicacion").val()+
				"&etapas="+$("#etapas_detalle").val()+
				"&actividad="+$("#actividad").val()+
				"&minutos="+$("#minutos").val()+
				"&series="+$("#series").val()+
				"&repeticiones="+$("#repeticiones").val()+
				"&cargas="+$("#cargas").val()+
				"&observaciones="+$("#observaciones_detalle").val()+
				"&case=19",
				success:function(result){
					console.log(result)
					var sitio = result;

					if(sitio)
					{
						$("#msn_detalle").html('<div class="alert alert-success"><b>Felicitaciones!</b> Se grabo el detalle correctamente.<button type="button" class="close" data-dismiss="alert">×</button></div>')
					}
					else
					{

					}
				}
			});
	});
})


function borrar_accion(id){

		if(confirm('Esta seguro de borrar la acción '+id))
		{
			$.ajax({
				url: 'http://'+window.location.host+'/master/ajax',
				type: 'post',
				data: //selectore planes
				"id="+id+
				"&case=21",
				success:function(result){

					var estado = result;
					console.log(estado)

					if(estado)
					{
						$("#act_"+id).hide();
					}
					else
					{}
				}
			});
		}
		else
		{

		}


}
function ls_implementos()
{

	var implementos = document.getElementsByName("implemento");
	var vector = '0,';
	for(var i=0; i < implementos.length ;i++)
	{
		if(implementos[i].value > 0){

			if(implementos[i].checked == true)
			{
				vector += implementos[i].value+",";
			}
		}
	}
	var str = vector
	var newStr = str.substring(0, str.length-1)
	return newStr
}