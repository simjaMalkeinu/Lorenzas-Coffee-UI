<?php include_once './modules/sesion.php'; ?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Insumos</title>

    <?php include_once './components/styles.php' ?>
</head>

<body>
    <main>
        <container class="d-flex">
            <?php include_once './components/navigation.php' ?>
            <section class="dashboard">
                <?php include_once './components/header.php'  ?>
                <div class="container mt-4">
                    <h1><span class="badge bg-success">Insumos</span></h1>
                    <div id="alert"></div>
                    <div class="d-flex justify-content-end my-2">
                        <button type="button" class="btn btn-primary btn-lg d-grid btn-add" data-bs-toggle="modal"
                            data-bs-target="#nuevo" id="btn-nuevo">
                            <p>Nuevo Insumo</p>
                            <i class="fa-solid fa-plus"></i>
                        </button>
                    </div>
                    <table class="table visually-hidden rounded-2" id="tabla-productos">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Nombre</th>
                                <th scope="col">caducidad</th>
                                <th scope="col">estado</th>
                                <th scope="col">costo</th>
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
            <section>
            <div class="modal fade" id="nuevo" tabindex="-1" aria-labelledby="nuevoProductolabel"
                    aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title">Añadir un nuevo Producto</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                            </div>
                            <form id="post">
                                <div class="modal-body">
                                    <div class="form-floating mb-3">
                                        <input type="text" class="form-control" id="nombre" placeholder="Nombre">
                                        <label for="floatingInput">Nombre</label>
                                    </div>
                                    <div class="form-floating mb-3">
                                        <input type="number" step="any" class="form-control" id="cantidad"
                                            placeholder="Cantidad">
                                        <label for="floatingInput">Cantidad</label>
                                    </div>
                                    <div class="form-floating mb-3">
                                        <input type="date" class="form-control" id="caducidad" placeholder="Caducidad">
                                        <label for="floatingInput">Caducidad</label>
                                    </div>
                                    <div class="form-floating mb-3">
                                        <input type="number" step="any" class="form-control" id="costo"
                                            placeholder="Costo">
                                        <label for="floatingInput">Costo</label>
                                    </div>
                                    <div class="form-floating mb-3">
                                        <input type="text" class="form-control" id="unidad" placeholder="Unidad">
                                        <label for="floatingInput">Unidad</label>
                                    </div>
                                    <div class="form-floating mb-3">
                                        <input type="number" step="any" class="form-control" id="canmin" placeholder="Cantidad Minima">
                                        <label for="floatingInput">Cantidad Minima</label>
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary"
                                        data-bs-dismiss="modal">Close</button>
                                    <button type="submit" class="btn btn-primary">Save changes</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </container>
    </main>

    <script src="./js/fetchPeticiones.js"></script>
    <script src="./js/insumos.js"></script>
</body>

</html>