<section class="col-md-2 navigation">
    <a href="" class="text-center m-auto">Lorenza's Coffee</a>
    <nav>
        <ul>
            <div>
                <li>
                    <i class="fa-solid fa-shop"></i>
                    <p>Ventas</p>
                </li>
                <li>
                    <i class="fa-solid fa-warehouse"></i>
                    <p>Inventario</p>
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
                }
                
                ?>

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