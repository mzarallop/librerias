$(function(){

	//login

	$("#entrar").on("click",function(){

		$.ajax({
			beforeSend: function(){
				$("#msn").html("<div class='alert'>Verificando Identidad...</div>");
			},
			url: 'http://'+window.location.host+'/master/accesos/login',
			type: 'post',
			data: "user="+$("#nombre").val()+
					"&pass="+$("#pass").val(),
			success:function(respuesta)
			{
				console.log(respuesta);
				var vector = JSON.parse(respuesta);
					console.log(vector);

					if(vector.estado == true)
					{
						var urlfinal = "http://"+window.location.host+"/master/";
						document.location.href = urlfinal;
					}
					else if(vector.estado == false)
					{
						$("#logear").css({display:'none'});
						$(".form-access").fadeIn("fast");
						$("#msn").html(
						"<div class='alert alert-warning'><button type='button' class='close' data-dismiss='alert'>×</button>Este usuario no esta registrado</div>");
					}
				$(".form-fail").css({display:'inline'});
			}
		});

	});
});

$(function(){
	$("#entrar-success").on("click",function(){
		 $("#entrar-success").attr("onClick", "document.location.href='http://"+window.location.host+"'/master';");
	});
});