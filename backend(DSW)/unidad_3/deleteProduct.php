<?php
include('conec.php');
$id = $_GET['id'];
$pst = $conn->prepare("DELETE FROM imagenes_productos WHERE id_producto = ?");
$pst->execute([$id]);


$pst = $conn->prepare("DELETE FROM productos WHERE id = ?");
$pst->execute([$id]);
header('Location:../php/admin.php?opcion=2');
?>