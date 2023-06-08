<?php 
$rfc = $_GET['rfc'];
$name = $_GET['name'];
$email = $_GET['email'];
$type = $_GET['type'];

// echo $rfc;
// echo $name;
// echo $email;
// echo $type;

$data = json_encode(array(
    'rfc' => $rfc,
    'name' => $name,
    'email' => $email,
    'type' => $type
));


session_start();

$_SESSION['user'] = $data;
$_SESSION['permissions'] = $data->$type;

header('location: ../products.php');
?>