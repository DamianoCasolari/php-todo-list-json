<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>to do list json</title>

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Delicious+Handrawn&display=swap" rel="stylesheet">

    <!--link font-awesome  -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css"
        integrity="sha512-SzlrxWUlpfuzQ+pcUCosxcglQRNAq/DZjVsC0lE40xsADsfeQoEypE+enwcOiGjk/bSuGGKHEyjSoQ1zVisanQ=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />
    <!-- link bootstrap  -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"
        defer></script>
    <!-- link css  -->
    <link rel="stylesheet" href="./assets/css/style.css">
</head>

<body>
    <div id="app">
        <div class="my_background"></div>
        <main class="my_container d-flex justify-content-around align-items-center flex-wrap">

            <!-- create tasks uncomplete container  -->
            <div class="Task_uncomplete_container card rounded-5 p-3 justify-content-center flex-grow-1">
                <!-- create input container  -->
                <div class="input_container d-flex justify-content-center align-items-stretch m-3">
                    <div class="add_task">
                        <input type="text" class="input-group-text  rounded-pill" v-model.trim="newTask.text"
                            @keyup.enter="addTask()">

                        <button class="btn btn-dark rounded-pill m-3 px-4" @click="addTask()">Add new task <i
                                class="fa fa-pencil ms-2" aria-hidden="true"></i></button>

                        <div class="alert alert-danger" role="alert" v-if="error">
                            <strong>{{error}}</strong>
                        </div>
                    </div>
                </div>

                <h3 class="uncomplete_title fw-bold my_font text-center position-relative" v-if="tasks.length > 0"><b
                        class="un text-danger display-5">Un</b>completed tasks</h3>
                <!-- create listtasks uncomplete container  -->
                <div class="tasks overflow-auto W-100 my_font">
                    <div class="fs-4 d-flex justify-content-between m-3" v-if="newTask.text.length > 0">
                        {{newTask.text}}
                        <div class="complete" @click="completeTask(index)">
                            <i class="fa fa-check-circle" aria-hidden="true"></i>
                        </div>
                    </div>
                    <ul class="list-unstyled " v-if="tasks.length > 0">
                        <li v-for="(task,index) in tasks" class="d-flex justify-content-between m-3 fs-4">
                            <span class="uncomplete_text">{{task.text}}</span>
                            <div class="uncomplete" @click="completeTask(index)">
                                <i class="fa fa-check-circle" aria-hidden="true"></i>
                            </div>
                        </li>
                    </ul>
                    <p class="text-center fw-bold display-3" v-else>You completed all the tasks today,<br> great job
                    </p>
                </div>
            </div>

            <!-- create tasks complete container  -->
            <div class="Task_complete_container card rounded-5 p-3 my_font justify-content-center flex-grow-1"
                v-if="tasksComplete.length > 0 && tasks.length > 0">

                <h3 class="fw-bold text-center">Completed tasks</h3>
                <div class="tasks overflow-auto W-100">
                    <ul class="my_ul list-unstyled text-decoration-line-through" v-if="tasks.length">
                        <li class="d-flex justify-content-between m-3 d-block fs-4"
                            v-for="(task,index) in tasksComplete">
                            <span>{{task.text}}</span>
                            <div class="complete"> <!-- @click="completeTask(index)"-->
                                <i class="fa fa-check-circle" aria-hidden="true"></i>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </main>
        <footer class="text-center"><i class="fa fa-copyright me-2" aria-hidden="true"></i><span>Damiano Casolari</span>
        </footer>
    </div>

    <!-- link axios  -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/axios/1.3.5/axios.min.js"
        integrity="sha512-nnNHpffPSgINrsR8ZAIgFUIMexORL5tPwsfktOTxVYSv+AUAILuFYWES8IHl+hhIhpFGlKvWFiz9ZEusrPcSBQ=="
        crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <!-- link Vue.js  -->
    <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
    <!-- link javascript  -->
    <script src="./assets/js/app.js"></script>
</body>

</html>