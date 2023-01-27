<?php
    if(isset($_POST['nombreDisco']) && !empty($_POST['nombreDisco']) && isset($_POST['nombreAutor']) && !empty($_POST['nombreAutor']) ){
        include("utilities/conec.php");
        session_start();
        $usuario = $_SESSION['nombreUsuario'];
        $pst = $conn->prepare("INSERT INTO discos(titulo,autor,usuario)values(?,?,?);");
        $pst->execute([$_POST['nombreDisco'],$_POST['nombreAutor'],$usuario]);
        header("location:gestion.php");
    }
    else{
        header("location:gestion.php");
    }
?>