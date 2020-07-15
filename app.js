(function ($) {
  $(document).ready(function () {
    let last_modified_ref = null;
    const todo_add_button_insert = "Agregar";
    const todo_add_button_modify = "Guardar cambio";

    //Carga localStorage, si hay algo guardado
    (function () {
      if (localStorage.todo_saved) {
        $("ul.todo-list");
      }
    })();

    const generate_new_todo_item = (text) => {
      return `<li >
                        <span class="todo-text">${text}</span>
                        <input type="button" class="done-todo-item" value="✔"></input>
                        <input type="button" class="modify-todo-item" value="✏"></iput>
                        <input type="button" class="delete-todo-item" value="✖"></input>
                    </li>`;
    };

    $(".todo-add-btn").click(function () {
      //Agregar a lista (nuevo y modificación)
      console.log("Agregando...");
      let new_todo_text = $(".todo-text-input").val();
      console.log("Valor:" + new_todo_text);
      if (new_todo_text !== "") {
        if (last_modified_ref === null) {
          $(".todo-ul").html(generate_new_todo_item(new_todo_text));
        } else {
          last_modified_ref.find(".todo-text").text(new_todo_text);
          $(".todo-add-button").val(todo_add_button_insert);
        }
      }
    });

    $(".todo-cancel-btn").click(function () {
      //Cancelar
      last_modified_ref = null;
      $(".todo-add-button").val(todo_add_button_insert);
    });

    $(".modify-todo-item").click(function () {
      //Modificar contenido
      last_modified_ref = $(this).parent();
      $(".todo-text-input").val(last_modified_ref.find(".todo-text").text());
      $(".todo-add-button").val(todo_add_button_modify);
    });

    $(".delete-todo-item").click(function () {
      //Borrar
      $(this).parent().destroy();
    });

    $(".done-todo-item").click(function () {
      //Tachar
      $(this).find(".todo-text").css("text-decoration", "overline");
    });

    $(".store-todo-local").click(function (e) {
      //Guardar la lista TODO
      e.preventDefault();
      localStorage.clear();
      localStorage.setItem(
        "data-saved",
        JSON.stringify($("ul.todo-list").contents())
      );
    });
  });
})(jQuery);
