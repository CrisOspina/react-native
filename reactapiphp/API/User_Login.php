<?php

include 'DBConfig.php';
 
$con = mysqli_connect($HostName,$HostUser,$HostPass,$DatabaseName);
 
// Obtener el JSON recibido en la variable $ json.
$json = file_get_contents('php://input');
 
// decodifica el JSON recibido y lo almacena en la variable $ obj.
$obj = json_decode($json,true);

// Rellene el correo electrónico del usuario desde la matriz JSON $ obj y almacénelo en $ correo electrónico.
$email = $obj['email'];

$password = $obj['password'];

$Sql_Query = "select * from user where user_email = '$email' and user_password = '$password' ";

$check = mysqli_fetch_array(mysqli_query($con,$Sql_Query));

if(isset($check)){

 $SuccessLoginMsg = 'Datos coincidentes';
 
 // Convirtien}do el mensaje a formato JSON.
$SuccessLoginJson = json_encode($SuccessLoginMsg);
 
 echo $SuccessLoginJson ; 

 }
 
 else{
 
 // Si el registro se insertó correctamente, muestre el mensaje.
$InvalidMSG = 'Nombre de usuario o contrasena invalido. Por favor intente de nuevo' ;
 
$InvalidMSGJSon = json_encode($InvalidMSG);
 
echo $InvalidMSGJSon ;
 
 }
 
 mysqli_close($con);
?>