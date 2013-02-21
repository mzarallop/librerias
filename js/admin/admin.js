$(function(){

	$(".img-rounded").on("click", function(data){
		console.log(data)
		$.ajax({
			url:'http://'+window.location.host+'/master/index.php/ajax',
			type:'post',
			data: '',
			success:function(respuesta)
			{
				
			}
		});
	});
});