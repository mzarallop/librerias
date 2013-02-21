function buscar_curso(dat){
		$.ajax({
			url:'http://'+window.location.host+'/master/ajax',
			type:'post',
			data:"valor="+dat+"&case=1",
			success:function(resp){
				$("#curso").html(resp);
				$("#curso_reporte").html(resp);

			}
		});
	}
	function find_fichas()
	{
		$.ajax({
			url:'http://'+window.location.host+'/master/ajax',
			type:'post',
			data:"nivel="+$("#nivel").val()+"&curso="+$("#curso").val()+"&case=2",
			success:function(resp){

				$("legend").css({display:'inline'});
				$("#lfichas").removeClass();
				$("#fichas").html(resp);
				$("#lfichas").addClass('lfichasin')


			}
		});
	}

function abrir_modal(id)
{
    $("#form-usuario").css({display:'inline'});
	$("#estado-usuario").hide();
	$("#modal_usuario").val(id)
    $('#myModal').modal({
	  keyboard: false,
	  backdrop:true
	})
}

$(function(){
	$("#guardar_modal").on('click', function(e){

		$.ajax({
			url:'http://'+window.location.host+'/master/ajax',
			type: 'post',
			data:
			"usuario="+$("#modal_usuario").val()+
			"&estatura="+$("#estatura").val()+
			"&peso="+$("#peso").val()+
			"&id="+e.currentTarget.id+
			"&control="+$("#control_ingreso").val()+
			"&case=23",
			success:function(result){

				$("#form-usuario").hide();
				$("#estado-usuario").css({display:'inline'});
				$("#estado-usuario").html(result);
				parent.find_fichas();
				//$("#myModal").modal('hide');
			}
		})
	})
})
$(function(){
	$("#ver_reporte").on('click', function(e){
		console.log(e)

		$.ajax({
			url:'http://'+window.location.host+'/master/ajax',
			type: 'post',
			data:"curso="+$("#curso_reporte").val()+"&control="+$("#control_reporte").val()+"&accion=ver&case=24",
			success:function(result){
				$("#lista_reporte").html(result)
			}
		})
	})

	$("#nuevo_control_nutricional").on('click',function(e){
		console.log('contrl')
		 $("#form-control").slideDown('fast')
	});

	$("#guardar_control_nutricional").on('click',function(e){
		$.ajax({

			url:'http://'+window.location.host+'/master/ajax',
			type: 'post',
			data:"inicio="+$("#inicio_control").val()+
			"&termino="+$("#termino_control").val()+
			"&nombre="+$("#nombre_control").val()+
			"&descripcion="+$("#descripcion_control").val()+
			"&accion=ver&case=25",
			success:function(result){
				$("#msn_control_nuevo").html(result)
			}

		})
	})

	//calendario
	$('.datepicker').datepicker()


})


