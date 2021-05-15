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

$vec = [];

$resultado = mysqli_query($con, "SELECT nombre_comunidad,mensaje_comunidad FROM comunidad WHERE nombre_comunidad LIKE '%$params%'");



class Result {}


$response = new Result();

    while ($reg = mysqli_fetch_assoc($resultado)){

    $vec[]=$reg;

  }
    echo json_encode($vec);




?>