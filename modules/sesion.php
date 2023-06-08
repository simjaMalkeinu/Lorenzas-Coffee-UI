<?php
session_start();

// var_dump(json_decode($_SESSION['user'], true));

// echo gettype($_SESSION['user']);

if (!isset($_SESSION['user'])) {
    header('location: ./index.php'  );
}

?>