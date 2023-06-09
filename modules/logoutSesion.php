<?php 
    session_start();
    // Destruir todo en esta sesión
    session_destroy();

    header('location: login');
?>