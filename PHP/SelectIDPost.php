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

$vec= [];

$resultado = mysqli_query($con, "SELECT id_post FROM posts WHERE TituloPost = '$params'");


    while ($reg = mysqli_fetch_row($resultado)){

    $vec=$reg;

  }
  echo json_encode($vec);

?>