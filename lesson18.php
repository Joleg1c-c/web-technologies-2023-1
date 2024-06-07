<?php
    function doWhile(){
        $n = 0;
        do {
            if ($n == 0){
                echo "$n - это ноль";
            }
            if ($n % 2 != 0)
            {
                echo "$n - это нечётное число";
            }
            else {
                echo "$n - чётное число";
            }
            echo "<br>";
            $n += 1;
        } while ($n < 11);
    }

    function citiesV1(){
        $regions = array(
            'Тюменская область' => array('Тюмень', 'Тобольск', 'Ялуторовск'),
            'Московская область' => array('Москва', 'Зеленоград', 'Клин'),
            'Ленинградская область' => array('Санкт-Петербург', 'Всеволожск', 'Павловск', 'Кронштадт')
        );

        foreach ($regions as $region => $cities) {
            echo "<strong>".$region.":"."</strong>";
            echo "<br>";
            foreach ($cities as $city) {
                echo $city;
                echo "<br>";
            }
        }
    }

    function translitera($cStr) {
        $alphabet = array(
            "а" => "a", "б" => "b", "в" => "v", "г" => "g", "д" => "d", 
            "е" => "e", "ё" => "yo","ж" => "zh", "з" => "z", "и" => "i", 
            "й" => "y", "к" => "k", "л" => "l", "м" => "m","н" => "n", 
            "о" => "o", "п" => "p", "р" => "r", "с" => "s", "т" => "t", 
            "у" => "u","ф" => "f", "х" => "h", "ц" => "ts", "ч" => "ch", 
            "ш" => "sh", "щ" => "s'h", "ъ" => "","ы" => "i", "ь" => "'", 
            "э" => "e", "ю" => "yu", "я" => "ya",
            'А' => 'A', 'Б' => 'B', 'В' => 'V', 'Г' => 'G', 'Д' => 'D', 'Е' => 'E', 
            'Ё' => 'YO', 'Ж' => 'ZH', 'З' => 'Z', 'И' => 'I', 'Й' => 'I', 'К' => 'K', 
            'Л' => 'L', 'М' => 'M', 'Н' => 'N', 'О' => 'O', 'П' => 'P', 'Р' => 'R',
            'С' => 'S', 'Т' => 'T', 'У' => 'U', 'Ф' => 'F', 'Х' => 'KH', 'Ц' => 'TS',
            'Ч' => 'CH', 'Ш' => 'SH', 'Щ' => 'SCH', 'Ъ' => '', 'Ы' => 'I', 'Ь' => '\'',
            'Э' => 'E', 'Ю' => 'YU', 'Я' => 'YA'
        );
        $lStr = strtr($cStr, $alphabet);
	    return "$lStr"."<br>";
    }

    $menu = array(
        'Первый пункт' => 'Подпункт 1.1',
        'Второй пункт' => array('Подпункт 2.1', 'Подпункт 2.2'),
        'Третий пункт' => array('Вложенное меню' => array('Подпункт 3.1', 'Подпункт 3.2'))
    );

    function displayMenu($menu) {
        $menuResult[] = "<ul>";
        foreach ($menu as $list => $item){
            if (is_string($item)) {
                $menuResult[] = "<ul>".$list."<li>".$item."</li>"."</ul>";
            }
            elseif (is_array($item)){
                $menuResult[] = "<li>".$list.displayMenu($item)."</li>";
            }
        }
        $menuResult[] = "</ul>";
        return implode($menuResult);
    }
?>

<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>18</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="">
    </head>
    <body> 
        <div class="content">
            <h1>Лабораторная работа 18</h1>
            <p>1. <?php doWhile() ?></p>
            <p>2. <?php citiesV1() ?></p>
            <p>3. <?php echo translitera("зелёная зелень зеленится") ?></p>
            <div>
                <?php echo displayMenu($menu) ?>
            </div>
        </div>
    </body>
</html>