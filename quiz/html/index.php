<?php

require __DIR__.'/../lib/functions.php';

if (!$handler = fopen(__DIR__.'/../lib/data.csv', 'r')) {load404();}
// データを取得
$questionCnt = [];
$ifFirst = true;
// 問題数取得
while ($row = fgetcsv($handler)){
    // 初回すきっぷ
    if($ifFirst){
        $ifFirst = false;
        continue;
    }
    array_push($questionCnt, $row[0]);
}
// ファイルを閉じる
fclose($handler);

$assignData = [
    'questionCnt' => $questionCnt
];

loadTemplate('index', $assignData);