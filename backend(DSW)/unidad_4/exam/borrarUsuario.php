<?php
    $usuario = $_POST['usuarioBorrar'];
    echo $usuario;
    include('utilities/conec.php');
    $pst = $conn->prepare("DELETE FROM usuarios where usuario=?");
    $pst->execute([$usuario]);
    header("location:gestion.php");
?>