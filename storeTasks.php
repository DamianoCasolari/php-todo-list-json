<?php

if (isset($_POST['newTaskKey'])) {

    $tasklistjson = file_get_contents("tasks.json");

    $tasklistphp = json_decode($tasklistjson, true);

    array_unshift($tasklistphp, $_POST['newTaskKey']);


    $newTaskList = json_encode($tasklistphp, true);

    file_put_contents("tasks.json", $newTaskList);

    header("Content-Type: application/json");

    echo $newTaskList;



}

?>