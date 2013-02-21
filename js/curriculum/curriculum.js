$(function(){
	$("#guardar_asignatura").on('click',function(e){

		$.ajax({
			beforeSend:function(){ $("#msn_asignatura").html("Guardando")},
			url: 'http://'+window.location.host+'/master/ajax',
			type: 'post',
			data:"nivel="+$("#nivel_asignatura").val()+"&asignatura="+$("#nombre_asignatura").val()+"&case=6",
			success:function(a){

				

				$("#lista_asignaturas").html(a);			
			}
		});
	})

});

$(function(){

	$("#nivel_asignatura").change(function(){
		
		$.ajax({
				url: 'http://'+window.location.host+'/master/ajax',
				type: 'post',
				data:"nivel="+$("#nivel_asignatura").val()+"&case=8",
				success:function(a){ $("#lista_asignaturas").html(a);}
				
		})
	})

})


$(function(){
	$("#nivel_ingreso").change(function(e){
		console.log(e);
		$(this).val();
		$.ajax({
			url: 'http://'+window.location.host+'/master/ajax',
			type: 'post',
			data:"nivel="+$(this).val()+"&case=7",
			success:function(a){

				

				$("#asignaturas_ingreso").html(a);			
			}
		})
	});
});

$(function(){

	$("#asignaturas_ingreso").change(function(e){
		$.ajax({
			url: 'http://'+window.location.host+'/master/ajax',
			type: 'post',
			data:"asignatura="+$(this).val()+"&case=10",
			success:function(a){

				

				$("#eje_ingreso").html(a);			
			}

		})
	});
});
$(function(){
	$("#nivel_eje").change(function(e){
		
		console.log('cambio de asignaturas');
		
		$.ajax({
			url: 'http://'+window.location.host+'/master/ajax',
			type: 'post',
			data:"nivel="+$(this).val()+"&case=7",
			success:function(a){
				$("#asignaturas_eje").html(a);			
			}
		})
	})
});

$(function(){

	$("#guardar_eje").on('click',function(e){	
		
		$.ajax({
			url: 'http://'+window.location.host+'/master/ajax',
			type: 'post',
			data:
			"nivel="+$("#nivel_eje").val()+
			"&asignatura="+$("#asignaturas_eje").val()+
			"&nombre="+$("#nombre_eje").val()+
			"&case=9",
			success:function(a){

			
				$("#lista_ejes").html(a);
				$("#nombre_eje").val("")		
			}
		})
	})
})

$.fn.eje = function(){

			
		$.ajax({
			url: 'http://'+window.location.host+'/master/ajax',
			type: 'post',
			data:
			"nivel="+$("#nivel_eje").val()+
			"&asignatura="+$("#asignaturas_eje").val()+
			"&nombre="+$("#nombre_eje").val()+
			"&case=9",
			success:function(a){

				

				$("#lista_ejes").html(a);
				$("#nombre_eje").val("")		
			}
		})
	}

$(function(){
	$("#asignaturas_eje").change(function(){
			$.ajax({
			url: 'http://'+window.location.host+'/master/ajax',
			type: 'post',
			data:
			"nivel="+$("#nivel_eje").val()+
			"&asignatura="+$("#asignaturas_eje").val()+
			"&nombre="+$("#nombre_eje").val()+
			"&case=9",
			success:function(a){

				

				$("#lista_ejes").html(a);
				$("#nombre_eje").val("")		
			}
		})
	})
})
//ingreso curriculum
$(function(){
	$("#guardar_ingreso").on('click', function(){

		$.ajax({
			url: 'http://'+window.location.host+'/master/ajax',
			type: 'post',
			data:
			"nivel="+$("#nivel_ingreso").val()+
			"&asignatura="+$("#asignaturas_ingreso").val()+
			"&eje="+$("#eje_ingreso").val()+
			"&tipo="+$("#tipo_ingreso").val()+
			"&orden="+$("#orden_ingreso").val()+
			"&texto="+$("#texto_ingreso").val()+
			"&case=11",
			success:function(a){

				$("#curriculum_lista").html(a)
				//limpiar form
				$("#texto_ingreso").val("");
				$("#orden_ingreso").val("");

			}
		})

	})	
});

$(function(){

	$("li a").on('click',function(e){
				
		$.ajax({
			url: 'http://'+window.location.host+'/master/ajax',
			type: 'post',
			data:"nivel="+e.currentTarget.id+"&case=7",
			success:function(a){
				$("#asignatura_curr").html(a);
				$("#nivel_curr").val(e.currentTarget.id)			
			}
		})
	})
})

$(function(){

	$("#ver_curr").on('click', function(e){
		$.ajax({
			url: 'http://'+window.location.host+'/master/ajax',
			type: 'post',
			data:"nivel="+$("#nivel_curr").val()+
			"&asignatura="+$("#asignatura_curr").val()+
			"&tipo="+$("#tipo_curr").val()+"&case=12",
			success:function(a){
				
				$("#ctab"+$("#nivel_curr").val()).html(a);
							
			}
		})

	})
})

