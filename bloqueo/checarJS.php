<?php
if (!isset($_COOKIE['js_enabled'])) {
    echo "<script>document.cookie = 'js_enabled=1; path=/'; location.reload();</script>";
    exit("Se necesita habilitar JavaScript para continuar.");
}