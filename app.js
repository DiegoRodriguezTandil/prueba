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
        _checked: false,
      }).text(text);

      //Tarea completa
      let btn_done = $("<input>", {
        class: "done-todo-item btn btn-outline-primary",
        value: "✏",
      }).on("click", function () {
        //Tachar o destachar
        let elem = $(this).parent().find(".todo-text");
        if (elem._checked) {
          elem.css("text-decoration", "none");
          elem.attr("_checked", false);
        } else {
          elem.css("text-decoration", "line-through");
          elem.attr("_checked", true);
        }
      });

      //Modificar texto
      let btn_mod = $("<input>", {
        class: "modify-todo-item btn btn-outline-primary",
        value: "✔",
      }).on("click", function () {
        //TODO: Completar el modificar
        alert("A modificar");
        let id = $(this).parent();
        $('input[name$="_text"]').val(id.find(".todo-text").text()); //Caja de texto
        $('input[name$="_add"]').val(todo_add_button_modify); //Boton agregar cambia a guardar
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
        "data-id-item": id,
      }).append(new_text, btn_done, btn_mod, btn_del);
      return list_i;
    };

    //Botones principales
    $('input[name$="_add"]').click(function () {
      //Agregar a lista (nuevo y modificación)
      let new_todo_text = $('input[name$="_text"]').val();
      if (new_todo_text !== "") {
        if ($('input[name$="_text"]').attr("modified_item_id") === "-1") {
          $('ul[name$="_list"]').append(generate_new_todo_item(new_todo_text, id_e++));
        } else {
          //TODO: Guardar el nuevo texto en el item correspondiente
          $('input[name$="_add"]').val(todo_add_button_insert);
        }
      }
    });

    $('input[name$="_cancel"]').click(function () {
      //Cancelar
      $('input[name$="_add"]').val(todo_add_button_insert);
      $('input[name$="_text"]').attr("modified_item_id", "-1");
    });

    $('input[name$="_save"]').click(function (e) {
      //TODO:Guardar la lista como JSONs, se necesita guardar el texto nada más $('ul[name$="_list"]')
      e.preventDefault();
      localStorage.clear();
      localStorage.setItem(
        "data-saved",
        JSON.stringify($('ul[name$="_list"]').contents())
      );
    });
  });
})(jQuery, id_e);
