<?php
$a = random_int(-1000, 1000);
$b = random_int(-1000, 1000);
$operations = array('Сложение', 'Вычитание', 'Умножение', 'Деление');
?>
<?php
function randomOperation($a, $b)
{
    echo ("Первый операнд: $a, второй операнд: $b \n Результат: ");

    if ($a > -1 && $b > -1){
        return $a - $b;
    }
    if ($a <= -1 && $b <= -1){
        return $a * $b;
    }
    else{
        return $a + $b;
    }
}

function switchA()
{
    $a = random_int(0, 15);
    switch ($a)
    {
        case 1:
            echo ' 1';
        case 2:
            echo ' 2';
        case 3:
            echo ' 3';
        case 4:
            echo ' 4';
        case 5:
            echo ' 5';
        case 6:
            echo ' 6';
        case 7:
            echo ' 7';
        case 8:
            echo ' 8';
        case 9:
            echo ' 9';
        case 10:
            echo ' 10';
        case 11:
            echo ' 11';
        case 12:
            echo ' 12';
        case 13:
            echo ' 13';
        case 14:
            echo ' 14';
        case 15:
            echo ' 15';
            break;
    }
}

function add($a, $b)
{
    return $a + $b;
}

function substract($a, $b)
{
    return $a - $b;
}

function multiply($a, $b)
{
    return $a * $b;
}

function divide($a, $b)
{
    return $a / $b;
}

function mathOperation($arg1, $arg2, $operation)
{
    switch ($operation)
    {
        case 'Сложение':
            echo 'Сложение ';
            return add($arg1, $arg2);
            break;
        case 'Вычитание':
            echo 'Вычитание ';
            return substract($arg1, $arg2);
            break;
        case 'Умножение':
            echo 'Умножение ';
            return multiply($arg1, $arg2);
            break;
        case 'Вычитание':
            echo 'Вычитание ';
            return divide($arg1, $arg2);
            break;
    }
}

function power($val, $pow)
{
    if ($pow == 1){
        return $val;
    }
    else {
        return power($val * $val, $pow-1);
    }
}
?>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>17</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="">
    </head>
    <body> 
        <div class="content">
            <h1>Лабораторная работа 17</h1>
            <p>1. <?php echo(randomOperation($a, $b)) ?></p>
            <p>2. <?php switchA() ?></p>
            <div>
                <p>3.</p>
                <p>a: <?php echo $a ?> b: <?php echo $b ?></p>
                <p>Сложение <?php echo add($a, $b) ?></p>
                <p>Вычитание <?php echo substract($a, $b) ?></p>
                <p>Умножение <?php echo multiply($a, $b) ?></p>
                <p>Деление <?php echo divide($a, $b) ?></p>
            </div>
            <div>
                <p>4.</p>
                <p><?php echo mathOperation($a, $b, $operations[random_int(0, 3)]) ?></p>
            </div>
            <p>5.</p>
            <p><?php echo pow(3, 3) ?></p>
        </div>
    </body>
</html>