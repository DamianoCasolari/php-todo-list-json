<?php


$tasklistjson = file_get_contents("tasks.json");

$tasklistphp = json_decode($tasklistjson, true);

// unset($tasklistphp[$_POST['currentIndex']]);
array_splice($tasklistphp, $_POST['currentIndex'], 1);


$newTaskList = json_encode($tasklistphp);

file_put_contents("tasks.json", $newTaskList);

header("Content-Type: application/json");

echo $newTaskList;

?>