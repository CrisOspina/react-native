<?php
//  $HostName = "localhost";
//  $DatabaseName = "dbibliotecarn";
//  $HostUser = "root";
//  $HostPass = "";

// CORS
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");


include 'dbconfig.php';
 
 $con = mysqli_connect($HostName,$HostUser,$HostPass,$DatabaseName);
 
 // Obtener el JSON recibido en la variable $Received_JSON.
 $Received_JSON = file_get_contents('php://input');
 
 // decodifica el JSON recibido y lo almacena en la variable $obj.
 $obj = json_decode($Received_JSON,true);
 
 // Rellena el nombre de usuario de la matriz JSON $ obj y almacénelo en la variable $ user_name.
 $user_name = $obj['user_name'];
 
 // Rellene el correo electrónico del usuario desde la matriz JSON $ obj y almacénelo en la variable $ user_email.
 $user_email = $obj['user_email'];
 
 $user_password = $obj['user_password'];
 
 $CheckSQL = "SELECT * FROM user WHERE user_email='$user_email'";
 
 $check = mysqli_fetch_array(mysqli_query($con,$CheckSQL));
 
if(isset($check))
{
 
	 $Duplicate_email = 'El correo electrónico ya existe, intente nuevamente con un correo electrónico diferente.';
	 
	 // Convirtiendo el mensaje a formato JSON.
	 $Duplicate_email_Json = json_encode($Duplicate_email);
	 
	 echo $Duplicate_email_Json ; 
 
 }
 else
 {
 
 	// Crear una consulta SQL e insertar el registro en la tabla de la base de datos MySQL si la dosis de correo electrónico no existe en la base de datos.
 	$Sql_Query = "insert into user (user_name,user_email,user_password) values ('$user_name','$user_email','$user_password')";
 
 
	 if(mysqli_query($con,$Sql_Query))
	 {
	 
		 $MSG = 'Usuario registrado correctamente...' ;
		 
		 // convirtiendo el mensaje en formato JSON.
		 $json = json_encode($MSG);
		 
		 echo $json ;
	 
	 }
	 else
	 {
	 
	 	echo 'Inténtelo de nuevo';
	 
	 }
	 }
 mysqli_close($con);
?>