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




$resultado = mysqli_query($con,"INSERT INTO usuarios (id_usuario,nombre,apellido,email,descripcion,contrasena,fecha_nacimiento,imagen_perfil) VALUES ('','$params->nombre','$params->apellido','$params->email','','$params->cont','$params->fecha_nacimiento','$params->imagen_perfil')");

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
