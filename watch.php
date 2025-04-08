<?php

include('section_head.php');

// $data = json_decode(file_get_contents("./json_test/ipad.json"), true);
$data = json_decode(file_get_contents("./json/watch.json"), true);

$productos = $data["tiles"] ?? [];
$total = count($productos);

?>

<div class="container" style="margin-top: 60px;">
    <h1>Compra tu Apple Watch ahora<br> y recibe en 9 días</h1>
</div>

<div class="container">
    <div class="product_grid">

    <?php
    for ($i = 0; $i < $total; $i++) {
        $producto = $productos[$i];

        $titulo = $producto['title'] ?? 'Sin título';

        $precioRaw = $producto["price"]["currentPrice"]["raw_amount"] ?? null;
        $precioString = $precioRaw ? ($precioRaw * 5.4 - 0.6) : 0;
        $precio = number_format($precioString, 2);

        $image = $producto["image"]["srcSet"]["src"] ?? "ruta/por_defecto.jpg";

        $dimensiones = $producto["filters"]["dimensions"] ?? [];

        $disco = $dimensiones["dimensionCapacity"] ?? "N/A";
        $anio = $dimensiones["dimensionRelYear"] ?? "N/A";
        $ram = $dimensiones["tsMemorySize"] ?? "N/A";

        $modelo = $dimensiones["refurbClearModel"] ?? "modelo_desconocido";

        echo "<div class='product $modelo'>";
        echo "<img src='$image' alt='Imagen del producto'><br><br>";
        echo htmlspecialchars($titulo) . "<br>";
        echo "<span>$ram</span> <span>$disco</span> <span>$anio</span> <br><br>";
        echo "S/$precio</div>";
    }
    ?>

    </div>
</div>

<?php include('section_footer.php'); ?>