<?php
session_start();



// $login = $_POST['login'];
// $password = md5($_POST['password']);
$name = $_POST['name'];
$email = $_POST['email'];
$text = $_POST['textarea'];
//$capcha = $_POST['g-recaptcha-response'];
//$ip = $_SERVER['REMOTE_ADDR'];
$arr = array('name' => $name, 'email' => $email, 'text' => $text);


header('Content-Type: application/json');
echo json_encode($arr);
exit; 

?>