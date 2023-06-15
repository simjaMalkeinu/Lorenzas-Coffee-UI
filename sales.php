<?php include_once './modules/sesion.php'; ?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ventas</title>

    <?php include_once './components/styles.php' ?>
</head>

<body>
    <main>
        <container class="d-flex">
            <?php include_once './components/navigation.php' ?>
            <section class="dashboard">
                <?php include_once './components/header.php'  ?>
                <div class="container mt-4">
                    <h1><span class="badge bg-success">Ventas</span></h1>
                    <div id="alert"></div>
                    <div class="d-flex justify-content-end my-2">
                        <button type="button" class="btn btn-primary btn-lg d-grid btn-add" data-bs-toggle="modal"
                            data-bs-target="#nuevoProducto" id="btn-nuevo-produto">
                            <p>Nueva Venta</p>
                            <i class="fa-solid fa-plus"></i>
                        </button>
                    </div>
                    <table class="table visually-hidden rounded-2 text-center" id="tabla-ventas">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Registro</th>
                                <th scope="col">Fecha</th>
                                <th scope="col">RFC empleado</th>
                                <th scope="col">TOTAL</th>
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
    <script src="./js/ventas.js"></script>
</body>

</html>