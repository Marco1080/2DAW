<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gestion</title>
    <link rel="stylesheet" href="estilo.css">
</head>

<body>
    <h1>GESTION</h1>
    <?php
        include("utilities/conec.php");
        session_start();
        $usuario = $_SESSION['nombreUsuario'];
        $sql = "select * from usuarios where usuario='$usuario';";
        $query = $conn->query($sql);
        $result = $query->fetch();
        $permiso = $_SESSION ['permisoUsuario'];
        echo "<div class='perfil'><h1>Bienvenido <i>$usuario</i></h1><br><img src='photo/$result[3]'width='70px' heigth='70px' style='border-radius:50%';></div>";
        session_abort();
    ?>
    <table>
        <?php
            if($permiso == 'administrador'){
                echo "<tr><td>Usuario</td><td>Foto</td><td>Permiso</td></tr>";
                $sql = "SELECT * FROM usuarios";
                $query = $conn->query($sql);
                while($x = $query->fetch()){
                    echo "<tr>";
                        echo "<td>$x[0]</td>";
                        echo "<td><img src='photo/$x[3]'></td>";
                        echo "<td>$x[2]</td>";
                    echo "</tr>";
                }
            }
        ?>
    </table>
    <?php
            if($permiso == 'administrador'){
                echo "<h3>Borrado de usuarios</h3>";
                echo "<form method='POST' action='borrarUsuario.php'>";
                echo "<select name='usuarioBorrar'>";
                $sql = "SELECT * FROM usuarios";
                $query = $conn->query($sql);
                while($x = $query->fetch()){
                    echo "<option value='$x[0]''>$x[0]</option>";
                }
                echo "</select><br><br>";
                echo "<button type='submit'>BORRAR</button>";
                echo "</form>";
            }
        ?>

    <h3>INSERTAR DISCOS</h3>
    <form method="POST" action="nuevoDisco.php">
        <table>
            <tr>
                <td><input type="text" name="nombreDisco" placeholder="Nombre del disco"></td>
            </tr>

            <tr>
                <td><input type="text" name="nombreAutor" placeholder="Nombre del autor"></td>
            </tr>

            <tr>
                <td><button type="submit">AÑADIR NUEVO DISCO</button></td>
            </tr>
        </table>
    </form>
</body>
<?php
            
            if($permiso == 'administrador'){
                echo "<table>";
                echo "<h1>Listado de discos</h1><br><tr><td>Nombre</td><td>Autor</td><td>Usuario</td><td></td></tr>";
                $sql = "SELECT * FROM discos";
                $query = $conn->query($sql);
                while($x = $query->fetch()){
                    echo "<tr>";
                        echo "<td>$x[1]</td>";
                        echo "<td>$x[3]</td>";
                        echo "<td>$x[2]</td>";
                        if($permiso == 'administrador'){
                            echo "<td><a href='editar.php?id=$x[0]'>EDITAR</a></td>";
                        }
                    echo "</tr>";
                    echo "</table>";
                }
            }
           
            else{
                echo "<table>";
                echo "<h1>Listado de discos</h1><br><tr><td>Nombre</td><td>Autor</td><td>Usuario</td><td></td></tr>";
                $sql = "SELECT * FROM discos where usuario='$usuario'";
                $query = $conn->query($sql);
                while($x = $query->fetch()){
                    echo "<tr>";
                        echo "<td>$x[1]</td>";
                        echo "<td>$x[3]</td>";
                        echo "<td>$x[2]</td>";
                            echo "<td><a href='editar.php?id=$x[0]'>EDITAR</a></td>";
                    echo "</tr>";
                }
                echo "</table>";
            }
            
        ?>

</html>