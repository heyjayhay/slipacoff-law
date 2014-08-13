$('.hsContent').ready(function(){
               $(window).scroll( function() {  
        if ( $(window).scrollTop() > 100 ) {  
           loadhsContent(); /* calls loadDiv2 Function below */  
        }  
    });  
/* the loadDiv2 function */  
    function loadhsContent() {  
        $('.hsContent').fadeIn('slow', function() {  
            $(this).fadeTo("slow", 1);  
        });  
    }  
});

  
