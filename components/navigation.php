<section class="col-md-2 navigation">
    <a href="" class="text-center m-auto">Lorenza's Coffee</a>
    <nav>
        <ul>
            <div>
                <li>
                    <i class="fa-solid fa-shop"></i>
                    <p>Ventas</p>
                </li>
                <li class="accordion-flush">
                    <i class="fa-solid fa-warehouse"></i>

                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#flush-collapseOne" aria-expanded="false"
                                aria-controls="flush-collapseOne">
                                <p>Inventarios</p>
                            </button>
                        </h2>
                        <div id="flush-collapseOne" class="accordion-collapse collapse"
                            data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">
                                <ul>
                                    <li class="inventario">
                                        <i class="fa-brands fa-product-hunt"></i>
                                        <p>Productos</p>
                                    </li>
                                    <li class="inventario">
                                        <i class="fa-solid fa-hippo"></i>
                                        <p>Insumos</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    <i class="fa-solid fa-bars-progress"></i>
                    <p>Reportes</p>
                </li>
                <?php 
                 if (($_SESSION['user']['type'] == 'administrador')) {
                    echo '<li>
                            <i class="fa-solid fa-users"></i>
                            <p>Users</p>
                        </li>';
                }?>

                <li>
                    <i class="fa-solid fa-folder-open"></i>
                    <p>Ordenes de Compra</p>
                </li>
                <li>
                    <i class="fa-solid fa-user"></i>
                    <p>Cuenta</p>
                </li>

            </div>
            <a href="/logout" class="d-grid">
                <button class="btn bg-primary text-light d-grid logout">
                    <p class="my-auto">Cerrar sesion</p>
                    <i class="fa-solid fa-right-from-bracket"></i>
                </button>
            </a>
        </ul>
    </nav>
</section>