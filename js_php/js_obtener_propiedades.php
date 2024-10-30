<?php
include 'js_conexion.php';

function obtenerPropiedades() {
    conectar();
    global $con;

    $query = "SELECT id, titulo, descripcion, precio, ubicacion, foto FROM propiedades WHERE disponible = 1";
    $result = mysqli_query($con, $query);

    $propiedades = [];
    while ($row = mysqli_fetch_assoc($result)) {
        $propiedades[] = $row;
    }

    desconectar();
    return $propiedades;
}

header('Content-Type: application/json');
echo json_encode(obtenerPropiedades());
?>
