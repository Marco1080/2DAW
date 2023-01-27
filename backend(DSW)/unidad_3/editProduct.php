<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../../css/login.css">
    <link rel="stylesheet" href="../../icons./style.css">
    <title>Editar</title>
</head>
<?php
    include('conec.php');
    $id = $_GET['id'];
    $sql = "select * from productos where id = $id";
    $query = $conn->query($sql);
    $x = $query->fetch();
    $productName = $x['nombre'];
    $productStock = $x['stock'];
    $productPrice = $x['precio'];
    $activado = $x['activado'];
    $productDesc = $x['descripcion'];
    $conn = null;
?>

<body>
    <a href="../php/admin.php"><span class="icon-arrow-left"></span></a>
    <form method='POST'>
        <table>
            <tr>
                <td><?php echo "<input type='text' name='productName' value='$productName'>"?></td>
            </tr>
            <tr>
                <td><?php echo "<input type='number' name='productStock' value='$productStock'>"?></td>
            </tr>

            <tr>
                <td><?php echo "<input type='number' name='productPrice' value='$productPrice'>"?></td>
            </tr>

            <tr>
                <td><?php echo "<input type='text' name='productDesc' value='$productDesc'>"?></td>
            </tr>

            <tr>
                <td>
                    <select name="activado">
                        
                        <?php
                            if($activado == 1){
                                echo "<option>1</option>";
                                echo "<option>0</option>";
                            }
                            else{
                                echo "<option>0</option>";
                                echo "<option>1</option>";
                            }
                        ?>
                    </select>
                </td>
            </tr>
            <tr>
                <td><button type="submit">Actualizar</button></td>
            </tr>
        </table>
    </form>
    <?php
    if($_SERVER['REQUEST_METHOD'] == 'POST'){
        include('conec.php');
        $productName = $_POST['productName'];
        $productStock = $_POST['productStock'];
        $productPrice = $_POST['productPrice'];
        $activado = $_POST['activado'];
        
        if($activado == 1){
            $activado = 1;
        }
        else{
            $activado = 0;
        }
        $pst = $conn->prepare("UPDATE productos SET nombre = ?, precio = ?, stock = ?, activado = ? where id = ?");
        $pst->execute([$productName,$productPrice,$productStock,$activado,$id]);
        header('Location:../php/admin.php?opcion=2');
    }
?>
</body>

</html>