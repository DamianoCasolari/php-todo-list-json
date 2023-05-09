<?php

if (isset($_POST['newTaskKey'])) {

    $newTask = [
        'text' => $_POST['newTaskKey']['text'],
        'done' => boolval($_POST['newTaskKey']['done'])
    ];

    $tasklistjson = file_get_contents("tasks.json");

    $tasklistphp = json_decode($tasklistjson, true);

    array_unshift($tasklistphp, $newTask);


    $newTaskList = json_encode($tasklistphp);

    file_put_contents("tasks.json", $newTaskList);

    header("Content-Type: application/json");

    echo $newTaskList;



}

?>