$(function(){
	$(".btn-primary").on('click', function(e){
		console.log(e)
		$("#objetivos_acciones").hide();
		$("#form_acciones").slideDown('fast');
	})
})
$(function(){
	$("#cancelar_accion").on('click', function(e){
		console.log(e)
		$("#form_acciones").hide();
		$("#objetivos_acciones").slideDown("fast");
		
	})
})