<?php

global $enlace;

function conexion(){

  $enlace = mysqli_connect('localhost', 'root', '', 'test');

  if(!$enlace)
  {
    echo "<center><h1>Doesn't work =( </h1><center>";
  }

  return $enlace;
}

?>
