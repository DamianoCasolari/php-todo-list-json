<?php


$tasklistjson = file_get_contents("tasks.json");

$tasklistphp = json_decode($tasklistjson, true);

$tasklistphp[$_POST['currentIndex']]['done'] = !$tasklistphp[$_POST['currentIndex']]['done'];

$newTaskList = json_encode($tasklistphp);

file_put_contents("tasks.json", $newTaskList);

header("Content-Type: application/json");

echo $newTaskList;

?>