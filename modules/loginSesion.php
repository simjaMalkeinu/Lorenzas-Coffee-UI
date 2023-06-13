<?php 
$rfc = $_GET['rfc'];
$name = $_GET['name'];
$email = $_GET['email'];
$type = $_GET['type'];

// echo $rfc;
// echo $name;
// echo $email;
// echo $type;

$data = array(
    'rfc' => $rfc,
    'name' => str_replace("-", ' ', $name),
    'email' => $email,
    'type' => $type,
);

// var_dump($data);


session_start();

$_SESSION['user'] = $data;
$_SESSION['permissions'] = $data['type'];

    header('location: /Ventas');
?>