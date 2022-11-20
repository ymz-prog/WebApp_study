<?php

require __DIR__.'/../lib/functions.php';

$id = '3';

$data = fetchById($id);
$formattedData = generateFormattedData($data);

$question = $formattedData['question'];
$answers = $formattedData['answers'];
$correctAnswer = $formattedData['correctAnswer'];
$correctAnswerValue = $answers[$correctAnswer];
$explanation = $formattedData['explanation'];

include __DIR__.'/../template/question.tpl.php';
