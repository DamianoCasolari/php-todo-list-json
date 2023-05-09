<?php


$tasklistjson = file_get_contents("tasks.json");

$tasklistjson[$_POST['currentIndex']]['done'] = !$tasklistjson[$_POST['currentIndex']]['done'];

file_put_contents("tasks.json", $tasklistjson);

header("Content-Type: application/json");

echo $newTaskList;





?>