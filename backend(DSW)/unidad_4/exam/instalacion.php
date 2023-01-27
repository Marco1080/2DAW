<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Examen 1ª Evaluación DSW</title>
</head>
<body>
    
  
  <?php
        $servername="localhost";
        $username = "root";
        $psswd = "";
        try {
            $conn = new PDO("mysql:host=$servername", $username, $psswd);
            $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            echo "Conexión Exitosa.<br>";
        } catch (PDOExecutable $e) {
            echo $e ," Conexión Fallida.<br>";
        }
        $sql ="CREATE DATABASE IF NOT EXISTS examen_marco;";
        $sql .="use examen_marco;
        CREATE TABLE IF NOT EXISTS discos(
            id INT AUTO_INCREMENT PRIMARY KEY,
            titulo varchar(255),
            autor varchar(255),
            usuario varchar(255)
        );
        CREATE TABLE IF NOT EXISTS usuarios(
            usuario varchar(255) PRIMARY KEY,
            password varchar(255),
            permiso varchar(255),
            foto varchar(255)
        );
        CREATE USER IF NO EXISTS admin IDENTIFIED BY '1234';
        GRANT ALL ON examen_marco.* to admin;
        ALTER TABLE discos add CONSTRAINT FK_discos_usu FOREIGN KEY(usuario) REFERENCES usuarios(usuario);
        INSERT INTO usuarios(usuario,PASSWORD,permiso,foto)values('admin','1234','administrador','foto.png');
        ";
        $conn->query($sql);
        header("location:index.php");
    ?>
  
  

</body>
</html>