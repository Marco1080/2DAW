<?php
    $id = $_GET['id'];
    include("utilities/conec.php");
    $sql = "SELECT * FROM discos where id=$id;";
    $query = $conn->query($sql);
    $result = $query->fetch();
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Editar</title>
</head>

<body>
    <form method="POST">
        <table>
            <tr>
                <?php echo "<td><input type='text' name='nuevoNombre' value='$result[1]'></td>"?>
            </tr>
            <tr>
                <?php echo "<td><input type='text' name='nuevoAutor' value='$result[2]'></td>"?>
            </tr>
            <tr>
                <td><button type="submit">EDITAR</button></td>
            </tr>
        </table>
    </form>
</body>
</html>
<?php
    if($_SERVER['REQUEST_METHOD'] == 'POST'){
        if(isset($_POST['nuevoNombre']) && !empty($_POST['nuevoNombre'])){
            $nuevoNombre = $_POST['nuevoNombre'];
        }
        else{
            die("Debe haber un nombre de forma obligatoria.");
        }

        if(isset($_POST['nuevoAutor']) && !empty($_POST['nuevoAutor'])){
            $nuevoAutor = $_POST['nuevoAutor'];
        }
        else{
            die("Debe haber un autor de forma obligatoria.");
        }
        $pst = $conn->prepare("UPDATE discos SET titulo = ?, autor = ? where id=$id");
        $pst->execute([$nuevoNombre,$nuevoAutor]);
        header("location:gestion.php");
    }
?>