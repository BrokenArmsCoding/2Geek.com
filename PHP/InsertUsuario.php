<?php

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");

require("BD.php");

$json = file_get_contents("php://input"); 

$params = json_decode($json);

$con;
$con=conexion();




$resultado = mysqli_query($con,"INSERT INTO Usuarios (id_usuario,perfil,nombre,apellido,email,contrasena,fecha_nacimiento) VALUES ('null','null','$params->nombre','$params->apellido','$params->fecha_nazimiento','$params->nick','$params->correo','$params->cont','$params->rep_cont')");

class Result {}

$response = new Result();

if($resultado) {
  $response->response = 'OK';
} 
else {
  $response->response = 'FAIL';
}

echo json_encode($response);



?>
