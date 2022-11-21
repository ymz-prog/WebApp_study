<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>quizサンプル</title>
</head>
<body>
    <div id="main">
        <h1>Quizサンプル</h1>
        <h2>問題一覧</h2>
        <ul>
            <?php foreach($questionCnt as $value): ?>
            <li><a href="question.php?id=<?php echo $value; ?>">問題<?php echo $value; ?></a></li>
            <?php endforeach; ?>
        </ul>
    </div>
</body>
</html>