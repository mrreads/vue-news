<?php

if (isset($_GET['s']))
{
    $start = " LIMIT " . $_GET['s'] . ", 10";
}
else
{
    $start = '';
}
include __DIR__ . './../database.php';

$query = "  SELECT 
                posts.id,
                posts.created_at,
                posts.pretext,
                posts.heading,
                posts.id_category as 'category_id',
                posts.id_user as 'user_id',
                categories.name as 'category_name',
                users.fullname as 'user_fullname'
            FROM 
                posts,
                users, 
                categories
            WHERE
                categories.id = posts.id_category
            AND
                users.id = posts.id_user
            ORDER BY posts.id DESC
            $start";

$result = $conn->query($query );
$data = $result->fetch_all(MYSQLI_ASSOC);

echo json_encode($data, JSON_UNESCAPED_UNICODE);