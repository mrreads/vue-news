<?php

include __DIR__ . './../database.php';

$query = "SELECT * FROM categories";

$result = $conn->query($query );
$data = $result->fetch_all(MYSQLI_ASSOC);

echo json_encode($data, JSON_UNESCAPED_UNICODE);