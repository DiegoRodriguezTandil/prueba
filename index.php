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

<body">

    <div class="container ">
    <div class="head-title">
        <h1 id="click">To-Do List</h1>
    </div>

        <div class="form-group">
            <input type="text" class="form-control mb-2 todo-text-input" placeholder="Escriba una tarea pendiente">
            <input type="button" class="todo-add-btn btn btn-outline-primary" value="Agregar">
            <input type="button" class=" todo-cancel-btn btn btn-outline-danger" value="Cancelar">
            <input type="button" class="store-todo-local btn btn-outline-success" value="Guardar">
        </div>
    <!-- <div class="form-group">
        <label for="exampleFormControlTextarea1" class="control-label col-md-4">Comentario:</label>
        <div class="col-md-8">
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="4"></textarea>
        </div>
    </div>

    <div class="row">
                    <div class="col-md-12">
                        <div class="form-group" style="float:left;">
                            <button type="submit" class="btn btn-primary" id="js-guardar">Publicar!</button>
                        </div>
                    </div>
    </div>
    
    <div class="container">

        <section class="centrado">
            <table class="table table-bordered tabla" id="tablita">
                <thead class="tabla thead">
                    <tr>
                        <th scope="col">Texto</th>
                    </tr>
                </thead>
        
                <tbody class="tabla-container">
                        
                </tbody>
            </table>
        </section>

        
    </div> -->
    

        <div class="todo-list border border-primary">
            <h1> Tareas para hacer: </h1>
            <ul class="todo-ul flex-conteinter">
            </ul>

        </div>
</body>

</html>
