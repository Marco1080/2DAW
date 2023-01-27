<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>INICIO</title>
</head>

<body>
    <form method="POST">
        <table>
        <tr>
            <td><input type="text" name="inputUsuario" placeholder="USUARIO"></td>
        </tr>
        <tr>
            <td><input type="password" name="inputContrasena" placeholder="CONTRASEÑA"></td>
            <tr><td><button type="submit">INICIAR</button></td></tr>
        </tr>
        </table>
    </form>
</body>

</html>
<?php
    if($_SERVER['REQUEST_METHOD'] == 'POST'){
        if(isset($_POST['inputUsuario']) && !empty($_POST['inputUsuario'])){
            $usuario = $_POST['inputUsuario'];
        }
        else{
            die("Introduzca un usuario.");
        }

        if(isset($_POST['inputContrasena']) && !empty($_POST['inputContrasena'])){
            $contrasena = $_POST['inputContrasena'];
        }
        else{
            die("Introduzca una contraseña");
        }
        include("utilities/conec.php");
        $sql = "SELECT * FROM usuarios";
        $query = $conn->query($sql);
        while($x = $query->fetch()){
            if($x[0] == $usuario && $x[1] == $contrasena){
                session_start();
                $_SESSION['nombreUsuario'] = $usuario;
                $_SESSION['permisoUsuario'] = $x[2];
                header("location:gestion.php");
            }
        }
        echo "ACCESO DENEGADO";
    }
?>