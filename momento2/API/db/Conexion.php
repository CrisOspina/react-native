<?php 
    class Conexion
    {
        function __construct()
        {
            $this->servidor = "localhost";
            $this->usuario = "root";
            $this->clave = "";
            $this->basededatos = "BDconcesionario";

            $this->conexion = new mysqli($this->servidor,$this->usuario,$this->clave,$this->basededatos);

            if($this->conexion->connect_errno)
            {
                die("Fallo al conectar a la base de datos");
            }

        }
    }
?>
