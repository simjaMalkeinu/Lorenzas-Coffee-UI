<?php include_once './modules/sesion.php'; ?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cuenta</title>

    <?php include_once './components/styles.php' ?>
</head>

<body>
    <main>
        <container class="d-flex">
            <?php include_once './components/navigation.php' ?>
            <section class="dashboard">
                <?php include_once './components/header.php'  ?>
                <div class="container mt-4">
                    <h1><span class="badge bg-success">Mi Cuenta</span></h1>
                    <div id="alert"></div>
                    <div class="d-flex justify-content-end my-2">
                    </div>

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