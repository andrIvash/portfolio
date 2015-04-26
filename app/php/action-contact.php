<?php
session_start();
include_once('data.php');


$login = $_POST['login'];
$password = md5($_POST['password']);
$capcha = $_POST['g-recaptcha-response'];
$ip = $_SERVER['REMOTE_ADDR'];

phpinfo();
?>