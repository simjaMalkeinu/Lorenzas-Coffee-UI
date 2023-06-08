<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    
    <title>Home</title>

    <?php include_once './components/styles.php' ?>
    <link rel="stylesheet" href="./css/index.css">
</head>

<body>
    <div class="col-md-6 form-background">
        <div class="col-md-4 mx-auto">
            <div class="">
                <div class="card-header text-center text-light">
                    <i class="fa-solid fa-user logo-user mt-4"></i>
                    <h2>Iniciar sesion</h2>
                </div>
                <div id="alert">
                    
                </div>
                <form class="card-body" id="form">
                    <div class="input-group mb-3">
                        <span class="input-group-text">
                            <i class="fa-solid fa-user"></i>
                        </span>
                        <input type="text" class="form-control bg-blur" placeholder="RFC" id="rfc" required>
                    </div>

                    <div class="input-group mb-3">
                        <span class="input-group-text">
                            <i class="fa-solid fa-key"></i>
                        </span>
                        <input type="password" class="form-control bg-blur" placeholder="Password" id="password" required>
                    </div>

                    <div class="d-grid mx-auto">
                        <div class="mx-auto mt-4 mb-4 loader visually-hidden" id="loader">
                            <div class="spinner-border" style="width: 3rem; height: 3rem;" role="status">
                            </div>
                            <span>Cargando ...</span>
                        </div>
                        <button type="submit" id="btn-login"
                            class="btn btn-primary d-flex justify-content-between align-items-center ">
                            Iniciar sesion
                            <i class="fa-solid fa-arrow-right"></i>
                        </button>
                    </div>
                </form>
                <div class="card-footer mt-4">
                    <p class="text-light">Olvidaste tu contraseña, <a href="/">Recuperala aqui.</a></p>
                </div>
            </div>
        </div>
    </div>

    <script src="./js/fetchPeticiones.js"></script>
    <script src="./js/index.js"></script>
</body>

</html>