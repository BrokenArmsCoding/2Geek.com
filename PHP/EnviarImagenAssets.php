<?php
 header('Access-Control-Allow-Origin: *');
 header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
 header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
 header("Allow: GET, POST, OPTIONS, PUT, DELETE");
 
 $directorio ="/src/assets/ImagenesPerfil";
 

$nombre=$_FILES['file']['name'];
 
$guardado=$_FILES['file'];
 
 
 
if(!file_exists($directorio )){
    mkdir($directorio ,0777,true);
    if(file_exists($directorio )){
 
        if(move_uploaded_file($guardado, '/src/assets/ImagenesPerfil/'.$nombre)){
            echo "Archivo guardado con exito";
        }else{
            echo "Archivo no se pudo guardar";
        }
    }
}else{
 
    var_dump($ruta);
 
}
 
?>