$(function(){

	$("a .icon-search").on('click', function(e){
		$("#row"+e.currentTarget.id).css({'background-color' : 'yellow', 'color':'red'})
		$.ajax({
			url:"http://"+window.location.host+"/master/ajax",
			type:'post',
			data:"id="+e.currentTarget.id+"&case=29",
			success:function(result){
				$(".pregunta").hide();
				$("#ver_pregunta").html(result)
				$("#ver_pregunta").slideDown('fast');

				$(".opcion").on('click', function(e){console.log(e)})
			}
		})





	});

	$("a .icon-remove").on('click', function(e){

		$("#row"+e.currentTarget.id).hide();
	});




})

function volver_preguntas(data)
{
	console.log(data);
	$("#ver_pregunta").hide()
	$(".pregunta").slideDown('fast');


}