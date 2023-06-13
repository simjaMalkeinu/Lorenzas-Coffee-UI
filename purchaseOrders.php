<?php include_once './modules/sesion.php'; ?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ordenes de Compra</title>

    <?php include_once './components/styles.php' ?>
</head>

<body>
    <main>
        <container class="d-flex">
            <?php include_once './components/navigation.php' ?>
            <section class="dashboard">
                <?php include_once './components/header.php'  ?>
                <div class="container mt-4">
                    <h1><span class="badge bg-success">Ordenes de Compra</span></h1>
                    <div id="alert"></div>
                    <div class="d-flex justify-content-end my-2">
                        <button type="button" class="btn btn-primary btn-lg d-grid btn-add" data-bs-toggle="modal"
                            data-bs-target="#nuevoProducto" id="btn-nuevo-produto">
                            <p>Nueva Orden</p>
                            <i class="fa-solid fa-plus"></i>
                        </button>
                    </div>
                    <table class="table visually-hidden rounded-2 text-center" id="tabla-productos">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Nombre</th>
                                <th scope="col">caducidad</th>
                                <th scope="col">estado</th>
                                <th scope="col">costo</th>
                                <th scope="col">Precio venta</th>
                                <th scope="col">Cantidad</th>
                                <th scope="col"></th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>

                        </tbody>
                    </table>

                    <div class="card col-md-2 mx-auto my-auto border-0" id="loader">
                        <div class="mx-auto mt-4 mb-4 loader text-primary">
                            <div class="spinner-border" style="width: 3rem; height: 3rem;" role="status">
                            </div>
                            <span>Cargando ...</span>
                        </div>
                    </div>
                </div>
            </section>
        </container>
    </main>

    <script src="./js/fetchPeticiones.js"></script>
</body>

</html>