<?php

include('section_head.php');

// $data = json_decode(file_get_contents("./json_test/ipad.json"), true);
$data = json_decode(file_get_contents("./json/ipad.json"), true);
$total = count($data["tiles"]);

?>

    <div class="container" style="margin-top: 60px;">
        <h1>Compra tu mac ahora<br> y recibe en 9 dias</h1>
    </div>
    
<div class="container">
    <div class="product_grid">

    <?php
        for ($i=0; $i < $total; $i++) { 

            $titulo = $data['tiles'][$i]['title'];
            $precioString = (float)$data["tiles"][$i]["price"]["currentPrice"]["raw_amount"]*5.4-0.6;
            $precio = number_format($precioString, 2);
            $image = $data["tiles"][$i]["image"]["srcSet"]["src"];

            $disco = $data["tiles"][$i]["filters"]["dimensions"]["dimensionCapacity"];
            $anio = $data["tiles"][$i]["filters"]["dimensions"]["dimensionRelYear"];
            $ram = $data["tiles"][$i]["filters"]["dimensions"]["tsMemorySize"];

            $modelo = $data["tiles"][$i]["filters"]["dimensions"]["refurbClearModel"];


            echo "<div class='product $modelo'>";
            echo "<img src='$image'><br><br>";
            echo "$titulo<br>";
            echo "<span>$ram</span> <span>$disco</span> <span>$anio</span> <br><br>";
            echo "S/$precio</div>";
        }
    ?>

    </div>
</div>

<?php

include('section_footer.php');

?>
