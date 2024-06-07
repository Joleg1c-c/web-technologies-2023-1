<?php
date_default_timezone_set('Etc/GMT-5');
$title = 'Lesson 16';
$h1 = 'Текущий год:';
$year = date('Y');
?>
<?php
function getDeclensions ($timeValue, $timeUnit) {
    $declensions = array(
        'mins' => array('минута', 'минуты', 'минут'),
        'hrs' => array('час', 'часа', 'часов'),
    );
    $result = ' '; 
    switch ( ($timeValue >= 20) ? $timeValue % 10 : $timeValue )
    {
        case 1:
            $result .= $declensions[$timeUnit][0];
            break;
        case 2:
        case 3:
        case 4:
            $result .= $declensions[$timeUnit][1];
            break;
        default:
            $result .= $declensions[$timeUnit][2];
    }
    return $result;
}
function getTime()
{
    $hours = date('H');
    $minutes = date('i');
    $time = $hours . ' ' . getDeclensions((int) $hours, 'hrs') . ' ' . 
    (int) $minutes . ' ' . getDeclensions((int) $minutes, 'mins');
    return $time;
}
?>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title><?php echo $title; ?></title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="">
    </head>
    <body> 
        <div class="content">
            <h1><?php echo $h1; ?></h1>
            <span><?php echo $year; ?></span>
            <h1>1. Текущий год:</h1>
            <span><?php $year = date('Y'); echo $year ?></span>
            <h1>2. Текущий год:</h1>
            <span><?php echo date('Y') ?></span>
            <h1>3. Текущий год:</h1>
            <span><?=date('Y') ?></span>
        </div>
    </body>
</html>