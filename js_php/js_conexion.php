<?php
    function conectar()
    {
        global $con;
        $username = "root";
        $password = "root";
        $db = "js_parcial_plp3";
        $host = "localhost";

        $con = mysqli_connect($host, $username, $password, $db);
        /* comprobar la conexión */
        if (mysqli_connect_errno()) {
            printf("Falló la conexión: %s\n", mysqli_connect_error());
            exit();
        } else {
            $con->set_charset("utf8");
            $ret = true;
        }

        return $ret;
    }
    function desconectar()
    {
        global $con;
        mysqli_close($con);
    }
?>