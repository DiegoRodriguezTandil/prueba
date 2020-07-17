<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Prueba con Mercedes y Pepe</title>

    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
        integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
        integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous">
    </script>
    <script src="app.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
        integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous">
    </script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"
        integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous">
    </script>
</head>

<body>

    <div class="container ">
        <div class="head-title">
            <h1 id="click">To-Do List</h1>
        </div>

        <div class="form-group">
            <input type="text" class="form-control mb-2" placeholder="Escriba una tarea pendiente" data-name="_text"
                data-modified_item_id="-1">
            <input type="button" class="btn btn-outline-primary" value="Agregar" data-name="_add">
            <input type="button" class="btn btn-outline-danger" value="Cancelar" data-name="_cancel">
            <input type="button" class="btn btn-outline-success" value="Guardar" data-name="_save">
        </div>

        <div class="todo-list border border-primary">
            <h1> Tareas para hacer: </h1>
            <ul class="todo-ul flex-conteinter" data-name="_list">
            </ul>

        </div>
        </body>

</html>