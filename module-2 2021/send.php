<?php

$name = $_POST['name'];
$email = $_POST['email'];
$msg = $_POST['msg'];

$name = trim(urldecode(htmlspecialchars($name)));
$email = trim(urldecode(htmlspecialchars($email)));
$msg = trim(urldecode(htmlspecialchars($msg)));

if (mail("panfav40@gmail.com", 
    "Запрос с сайта",
    "<h1>На сайт поступила новая заявка</h1>
    <br>от: <b>".$name."</b>
    <br>e-mail: <b>".$e-mail."</b>
    <br>пользователь оставил комментарий: ".$msg."
    <br><h2>Свяжитесь с ним как можно быстрей</h2>",
    "From: Робот-охранник сайта\r\n",
    "Content-type: text/html\r\n")) 
    {
        echo '{"Status":"ok"}';
} else {
    echo '{"Status":"error"}';
};

?>