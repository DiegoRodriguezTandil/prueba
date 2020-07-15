(function($){

    $(document).ready(function(){
        $('.btn-search').click(function(e){
            e.preventDefault();
            let text = $('.input-search').val();
            // $('.navbar-text').html(text);
            $.post(
                'search.php',
                {
                    search_text: text
                },
                function(data){
                    $(".srv-result").html(data);
                    $(".alert.alert-danger").addClass('show');
                },
                'text'
            );
        });
    });


})(jQuery);