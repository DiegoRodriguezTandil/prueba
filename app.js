let id_e = 0;

(function ($, id_e) {
  $(document).ready(function () {
    const todo_add_button_insert = "Agregar";
    const todo_add_button_modify = "Guardar cambio";

    //Carga localStorage
    (function () {
      if (localStorage.todo_saved) {
        //TODO: Crear uno a uno los elementos guardados y cargarlos en la lista
        $($('ul[name$="_list"]')).html(localStorage.getItem("todo_saved"));
      }
    })();

    const generate_new_todo_item = (text, id) => {
      //Texto
      let new_text = $("<span>", {
        class: "todo-text",
        "data-checked": false,
        "data-name": "_todo_text"
      }).text(text);

      //Tarea completa
      let btn_done = $("<input>", {
        class: "done-todo-item btn btn-outline-primary",
        value: "✔",
      }).on("click", function () {
        //Tachar o destachar
        let elem = $(this).parent().find("[data-name='_todo_text']");
        if (elem.data("checked")) {
          elem.css("text-decoration", "none");
          elem.data("checked", false);
        } else {
          elem.css("text-decoration", "line-through");
          elem.data("checked", true);
        }
      });

      //Modificar texto
      let btn_mod = $("<input>", {
        class: "modify-todo-item btn btn-outline-primary",
        value: "✏",
      }).on("click", function () {
        let id = $(this).parent().data("item_id");
        let old_text = $(this).parent().find("[data-name='_todo_text'").text();
        $('input[data-name$="_text"]').val(old_text).data("modified_item_id", id); //Caja de texto
        $('input[data-name$="_add"]').val(todo_add_button_modify); //Boton agregar cambia a guardar
      });

      //Borrar tarea
      let btn_del = $("<input>", {
        class: "delete-todo-item btn btn-outline-primary",
        value: "✖",
      }).on("click", function () {
        $(this).parent().remove();
      });

      //LI contenedor
      let list_i = $("<li>", {
        "data-item_id": id,
      }).append(new_text, btn_done, btn_mod, btn_del);
      return list_i;
    };

    //Botones principales
    $('input[data-name$="_add"]').click(function () {
      //Agregar a lista (nuevo y modificación)
      let text_box = $('input[data-name$="_text"]');
      let new_todo_text = text_box.val();
      let modified_item_id = text_box.data("modified_item_id");
      if (new_todo_text !== "") {
        if (modified_item_id == "-1") {
          $('ul[data-name$="_list"]').append(generate_new_todo_item(new_todo_text, id_e++));
        } else {
          $('li[data-item_id$="'+modified_item_id+'"]').find("[data-name='_todo_text'").text(new_todo_text);
          $('input[data-name$="_add"]').val(todo_add_button_insert);
          $('input[data-name$="_text"]').data("modified_item_id", "-1");
        }
        text_box.val('');
      }
    });

    $('input[data-name$="_cancel"]').click(function () {
      //Cancelar
      $('input[data-name$="_add"]').val(todo_add_button_insert);
      $('input[data-name$="_text"]').data("modified_item_id", "-1").val('');
    });

    $('input[data-name$="_save"]').click(function (e) {
      //TODO:Guardar la lista como JSONs, se necesita guardar el texto nada más $('ul[data-name$="_list"]')
      e.preventDefault();
      localStorage.clear();
      $("ul[data-name$='_list']").each( function(localStorage, )

      )
      localStorage.setItem(
        "data-saved",
        JSON.stringify($('ul[data-name$="_list"]').contents())
      );
    });
  });
})(jQuery, id_e);
