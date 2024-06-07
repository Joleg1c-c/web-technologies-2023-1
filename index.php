
<?php
    function getImages() {
        $dir = __DIR__ . DIRECTORY_SEPARATOR . "Галерея" . DIRECTORY_SEPARATOR;
        $images = glob(
            "$dir*.{png,jpg,jpeg}",
            GLOB_BRACE
        );
        
        foreach($images as $image) {
            printf("<img src='Галерея/%s' height=250>",
                rawurldecode(basename($image))
        );
        }
    }
?>


<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>Фото галерея</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="./styles.css">
    </head>
    <body> 
        <div class="gallery">
            <?php getImages() ?>
        </div>
        <form method="post" action="upload.php" enctype="multipart/form-data">
                <input type="file" name="fileToUpload" id="fileToUpload"></input>
                <input type="submit" name="submit"></input>
            </form>
        <script src="./l18script.js"></script>
    </body>
</html>