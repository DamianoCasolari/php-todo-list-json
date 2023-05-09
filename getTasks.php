<?php
$taskjson = file_get_contents("tasks.json");

header("Content-Type: application/json");
// $tasksdc = json_decode($taskjson, true);
echo $taskjson;

?>