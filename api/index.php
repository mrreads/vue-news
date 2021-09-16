<?php

header('Access-Control-Allow-Origin: *');

$url = $_SERVER['REQUEST_URI'];
$url = explode('/', $url);
unset($url[0]);
$url = array_values($url);

if ($url[0] != 'api') return;

if ($url[1] == 'posts')
{
    if (isset($url[2]) && is_numeric($url[2]))
    {
        $_POST['id'] = $url[2];
        include __DIR__ . './methods/postsid.php';
    }
    else
    {
        include __DIR__ . './methods/posts.php';
    }

}