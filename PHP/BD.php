<?php

global $enlace;

function conexion(){

  $host = "ec2-34-252-251-16.eu-west-1.compute.amazonaws.com";
  $database = "deumj0q8t7p16i";
  $user = "yfljjumwdtjtva";
  $password = "09414da77035c5a68cf49e66466ae10dbfc05f4dcb2e13a352f2fbbbc1e1dee1";

  $dbcon = pg_connect("host= ec2-34-252-251-16.eu-west-1.compute.amazonaws.com
  port=5432 dbname=deumj0q8t7p16i
  user=yfljjumwdtjtva
  password= 09414da77035c5a68cf49e66466ae10dbfc05f4dcb2e13a352f2fbbbc1e1dee1");

  if(!$dbcon)
  {
    echo "<center><h1>Doesn't work =( </h1><center>";
  }else
  {
    echo "<center><h1> Good connection <h1></center>";
  pg_close($dbcon);
  }

  return $enlace;
}

?>
