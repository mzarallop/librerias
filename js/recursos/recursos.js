 $(function() {
                $('form').submit( function() {
                    var bar = $('.bar');
                    var percent = $('.percent');
                    var status = $('#status');
                    $(this).ajaxForm({
                        beforeSend: function() {
                            status.html();
                            var percentVal = '0%';
                            bar.width(percentVal)
                            percent.html(percentVal);
                        },
                        uploadProgress: function(event, position, total, percentComplete) {
                            var percentVal = percentComplete + '%';
                            bar.width(percentVal)
                            percent.html(percentVal);
                        },
                        complete: function(xhr) {
                            status.html(xhr.responseText);
                        }
              });
       });
 });

$(function(){

    $("#nivel_recurso").change(function(e){
        $.ajax({
            url: 'http://'+window.location.host+'/master/ajax',
            type: 'post',
            data:"nivel="+$(this).val()+"&case=7",
            success:function(a){
                $("#asignatura_recurso").html(a);
            }
        })
    })
})
$(function(){

    console.log('remove')
    $(".accion").on('click', function(e)
        {

            if(confirm("Desea borrar el archivo "+e.currentTarget.id))
            {

                $.ajax({
                    url: 'http://'+window.location.host+'/master/ajax',
                    type: 'post',
                    data:"id="+e.currentTarget.id+"&case=16",
                    success:function(a){

                        var row = "#row"+e.currentTarget.id

                        $(row).hide();

                        //$("#lista_recursos").html(a);
                    }
                })
            }
            else
            {

            }

        });

    $(".clasificar").on('click', function(e){

        console.log(e);
        $("#demo_clasificacion").modal('show')

    })


})

