<?php

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");

require('BD.php');



  $con = conexion();

  $json = file_get_contents("php://input");

  $params = json_decode($json);


  $resultado = mysqli_query($con, "UPDATE usuarios SET nombre='$params->NombrePerfil',apellido='$params->Apellido', email='$params->Correo', fecha_nacimiento= '$params->Fecha' WHERE nick='$params->nick'");


  class Result {}

  $response = new Result();

  if($resultado) {
    $response->response = 'OK';
    $response->mensaje = 'Update ok';

} else {
    $response->response = 'FAIL';
    $response->mensaje = 'Update Fallido';
}

    header('Content-Type: application/json');

 echo json_encode($response);




?>