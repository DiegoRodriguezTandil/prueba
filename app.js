(function($){

    $(document).ready(function(){
        $('.btn-search').click(function(e){
            e.preventDefault();
            let text = $('.input-search').val();
            $('.navbar-text').html(text);
        });
    });


})(jQuery);