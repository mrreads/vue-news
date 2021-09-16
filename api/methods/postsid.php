<?php

include __DIR__ . './../database.php';

$id = $_POST['id'];

$query = "  SELECT 
                posts.id,
                posts.created_at,
                posts.pretext,
                posts.heading,
                posts.id_category as 'category_id',
                posts.id_user as 'user_id',
                categories.name as 'category_name',
                users.fullname as 'user_fullname',
                posts.text
            FROM 
                posts,
                users, 
                categories
            WHERE
                categories.id = posts.id_category
            AND
                users.id = posts.id_user
            AND
                posts.id = $id";

$result = $conn->query($query );
$data = $result->fetch_array(MYSQLI_ASSOC);

echo json_encode($data, JSON_UNESCAPED_UNICODE);