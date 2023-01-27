<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title> formulario de alta </title>
  </head>
  <body>
   <h1>Formulario de registro</h1>
<form method="post" enctype="multipart/form-data">
Usuario: <input type="text" name="usuario" value="" ><br><br>
Contraseña: <input type="password" name="contrasena" value="" ><br><br>
Foto: <input type="file" name="imagen" value="" ><br><br>
<input type="hidden" name="registrado" value="2">
<input type="submit" value="Enviar">
<input type="reset" value="Borrar">
</form>
<a href="index.php">Volver al inicio</a>
  </body>
</html>
<?php
  if($_SERVER["REQUEST_METHOD"] == 'POST'){
    if(isset($_POST['usuario']) && !empty($_POST['usuario'])){
      $usuario = $_POST['usuario'];
    }
    else{
      die("Ingrese usuario.");
    }

    if(isset($_POST['contrasena']) && !empty($_POST['contrasena'])){
      $contrasena = $_POST['contrasena'];
    }
    else{
      die("Ingrese una contraseña.");
    }
    include("utilities/conec.php");

    if($_FILES['imagen']['type'] == "image/jpeg" || $_FILES['imagen']['type'] == "image/gif" || $_FILES['imagen']['type'] == "image/png") {
      $rutatemporal = $_FILES['imagen']['tmp_name'];
      $nombrefoto = $_FILES['imagen']['name'];
      $rutadestino = "photo/$nombrefoto";
    
      move_uploaded_file($rutatemporal,$rutadestino);
    }

    $pst = $conn->prepare("INSERT INTO usuarios(usuario,password,permiso,foto) values(?,?,?,?);");
    $pst->execute([$usuario,$contrasena,'registrado',$nombrefoto]);
    
  }
?>

