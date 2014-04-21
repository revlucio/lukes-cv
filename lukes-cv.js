$(function(){
    $('.section h2').on('click', function(){
        var visible = $(this).next().is(':visible');
        
        $('.section div').hide();
        
        if (visible == false) {
            $(this).next().show();
        }
    });
});