<?php
    require_once("./db/Conexion.php");
    class Vehiculo extends Conexion
    {
        function __construct()
        {
            parent:: __construct();
        }
        
        function insertar($nroplaca, $marca, $valor)
        {
            $sql = "INSERT INTO `Vehiculo` (`nroplaca`, `marca`, `valor`) VALUES ('$nroplaca', '$marca', '$valor');";

            if($receive = $this->conexion->query($sql))
            {
                $estado['status'] = "ok";
                $estado['message'] = "vehiculo insertado";
                return $estado;
            }
            else
            {
                $estado['status'] = 'error';
                $estado['message'] = 'consulta incorrecta';
                return $estado;
            }
        }


        function listar()
        {
            $sql = "SELECT nroplaca, marca, valor FROM Vehiculo";
            $users = array();

            if($receive = $this->conexion->query($sql))
            {
                if($receive->num_rows > 0)
                {
                    $estado['status'] = 'ok';
                    $estado['message'] = 'vehiculos encontrados';

                    while($fila = $receive->fetch_array())
                    {
                        $data['nroplaca'] = $fila['nroplaca'];
                        $data['marca'] = $fila['marca'];
                        $data['valor'] = $fila['valor'];
                        $vehicles[] = $data;
                    }
                    $estado['vehiculos'] = $vehicles;
                    return $estado;
                }
                else
                {
                    $estado['status'] = 'ok';
                    $estado['mensaje'] = 'vehiculos no encontrados';
                    return $estado;
                }
            }
        }

    }
?>
