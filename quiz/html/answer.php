<?php

require __DIR__.'/../lib/functions.php';

$id = $_POST['id'] ?? '';
$selectedAnswer = $_POST['selectedAnswer'] ?? '';

$data = fetchById($id);

if (!$data) {
    // HTTPレスポンスのヘッダを404にする
    header('HTTP/1.1 404 Not Found');

    // レスポンスの種類を指定する
    header('Content-Type: text/html; charset=UTF-8');

    include __DIR__.'/../template/404.tpl.php';
    exit(0);
}


$formattedData = generateFormattedData($data);

$correctAnswer = $formattedData['correctAnswer'];
$correctAnswerValue = $formattedData['answers'];
$explanation = $formattedData['explanation'];

$result = $selectedAnswer === $correctAnswer;

$response = [
    'result' => $result,
    'correctAnswer' => $formattedData['correctAnswer'],
    'correctAnswerValue' => $formattedData['answers'][$correctAnswer],
    'explanation' => $formattedData['explanation']
];

echo json_encode($response);