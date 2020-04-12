$.ajax(
    {url:"table.html",
     dataType:"text"}).done(
     function(data){
        $('#table').html(data);
     });