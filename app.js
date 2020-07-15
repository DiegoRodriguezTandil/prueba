(function($){

    $(document).ready(function(){
        let last_mod_ref = null;
        const todo_add_button_insert = 'Agregar';
        const todo_add_button_modify = 'Guardar cambio';

        function generate_new_todo_item(text){
            return `<li >
                        <span class="todo-text">${text}</span>
                        <input type="button" class="done-todo-item" value="✔"></input>
                        <input type="button" class="modify-todo-item" value="✏"></iput>
                        <input type="button" class="delete-todo-item" value="✖"></input>
                    </li>`
        }

        $('.todo-add-botton').click(function(){ //Agregar a lista (nuevo y modificación)
            let new_todo_text = $('.todo-text-input').val();
            if (last_mod_ref === null) {
                $('.todo-ul').html(generate_new_todo_item(new_todo_text));
            } else {
                last_mod_ref.find('.todo-text').text(new_todo_text);
                $('.todo-add-button').val(todo_add_button_insert);
            }
        });

        $('.todo-cancel-botton').click(function(){ //Cancelar
            last_mod_ref = null;
            $('.todo-text-input').val(todo_add_button_insert);
        });

        $('.modify-todo-item').click(function(){ //Modificar contenido
            last_mod_ref = $(this).parent();
            $('.todo-text-input').val(last_mod_ref.find('.todo-text').text());
            $('.todo-add-button').val(todo_add_button_modify)
        });

        $('.delete-todo-item').click(function(){ //Borrar
            $(this).parent().destroy();
        });

        $('.done-todo-item').click(function(){ //Tachar
            $(this).find('.todo-text').css('text-decoration','overline')
        });
    });


})(jQuery);
