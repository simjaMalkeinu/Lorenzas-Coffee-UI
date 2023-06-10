<nav class="navbar bg-primary">
    <div class="container-fluid flex-row-reverse">
        <span class="navbar-brand mb-0 h1 text-light d-flex gap-3">
            <?php 
                if (strcmp($_SESSION['user']['type'], 'administrador    ')) {
                    echo "<i class='fa-solid fa-coins'></i>";
                } else echo "<i class='fa-solid fa-user-tie'></i>";
            ?>
            <?php echo $_SESSION['user']['name'];?>
        </span>
    </div>
</nav>