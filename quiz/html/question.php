<?php

$question = 'HTMLは何の略称？';


$arr = [];
$arr[] = '値1';
$arr[] = '値2';
$arr[] = '値3';
$arr[] = '値4';

foreach ($arr as $key => $value) {
    echo 'key: '.$key.'<br>';
    echo 'value: '.$value.'<br>';
    echo '<br>';
}


include __DIR__.'/../template/question.tpl.php';
