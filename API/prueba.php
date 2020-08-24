<?php
header("Access-Control-Allow-Origin: *");
$urlParams = explode('/', $_SERVER['REQUEST_URI']);
$functionName = $urlParams[5];
//echo $functionName;
$functionName($urlParams);
function foo()
{
    echo "Función de ejemplo";
   
}
function foo2($arg_1, $arg_2, /* ..., */ $arg_n)
{
    echo "Función de ejemplo.\n";
    return $valor_devuelto;
}
//foo();
?>