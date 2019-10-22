<?php
    require_once("./models/Vehiculo.php");
    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
    header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
    header('Content-Type: application/json');

    $vehiculo = new Vehiculo;
    $JSON = json_decode(file_get_contents('php://input'), true);

    $_POST = $JSON;

    if(isset($_POST))
    {
        switch ($_POST['tipo']) 
        {
            case 'listar':
                echo json_encode($vehiculo->listar());
                break;
            
            case 'insertar':

                $nroplaca = $_POST['nroplaca'];
                $marca = $_POST['marca'];
                $valor = $_POST['valor'];

                echo json_encode($vehiculo->insertar($nroplaca, $marca, $valor));
                break;
            
            default:
                $estado['status'] = 'error';
                $estado['message'] = 'peticion incorrecta';
                echo json_encode($estado);
                break;
        }
    }
    else
    {
        $estado['status'] = 'error';
        $estado['message'] = 'post vacio';
        echo json_encode($estado);
    }
?>