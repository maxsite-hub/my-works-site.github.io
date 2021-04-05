<?php
require_once 'rb.php';
R::setup( 'mysql:host=localhost;dbname=boostonline;charset=utf8','root', 'root' );  //установка соединения с базой данных
 
if ( !R::testConnection() )
{
        exit ('Нет соединения с базой данных');
} 
R::freeze(true); // метод запрещает обновлять данные

