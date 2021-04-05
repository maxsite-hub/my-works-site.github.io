<?php

session_start();

$data = [ //массив с элементами 
    'name' => '', //ключ массива 
    'email' => '',  //ключ массива 
    'discord' => '',  //ключ массива 
    'product' => '',  //ключ массива 
    'question' => '',  //ключ массива 
];

if (!empty($_POST)) {
    require_once 'db.php';
    $data = load($data);
    $order_id = save( 'boostordersclients', $data);
}

function load($data)
{
    foreach ($_POST as $k => $v) { // существует ли ключ из массива post в массиве date
        if (array_key_exists($k, $data)) { // если есть то беертся по ключу значения и записывается в этот массив 
            $data[$k] = $v;
        }
    }
    return $data;
}

function save($table, $data)
{
    $tbl = R::dispense($table);
    foreach ($_POST as $k => $v) { // получаем отдельно ключ и отдельно значение 
        $tbl->$k = $v;  // записываем в tbl ключ, а значения в переменную v 
    }
    return R::store($tbl);
}


