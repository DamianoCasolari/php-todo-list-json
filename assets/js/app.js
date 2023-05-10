const { createApp } = Vue

createApp({
    data() {
        return {
            tasklist: [],
            listUrl: "getTasks.php",
            storeUrl: "storeTasks.php",
            statusUrl: "changeStatus.php",
            deleteUrl: "deleteTasks.php",
            error: null,
            newTask: {
                text: "",
                done: 0
            },

        }
    }, computed: {
        allTasksDone() {

            return this.tasklist.length > 0 && this.tasklist.every(task => task.done);

        }, allTasksUndone() {

            return this.tasklist.length > 0 && this.tasklist.every(task => !task.done);

        },
    },
    methods: {
        createTaskList() {
            axios.get(this.listUrl).then(response => {
                this.tasklist = response.data;
            }).catch(error => {
                console.error(error);
            })
        },
        changeJsonList(newTask) {

            const data = {
                newTaskKey: newTask
            }

            axios.post(this.storeUrl, data,
                {
                    headers: { 'Content-Type': 'multipart/form-data' }
                }).then(response => {
                    this.taskList = response.data;
                }).catch(error => {
                    console.error(error.message);
                })
        },
        deleteJsonElement(index) {
            const data = {
                currentIndex: index
            }

            axios.post(this.deleteUrl, data,
                {
                    headers: { 'Content-Type': 'multipart/form-data' }
                }).then(response => {
                    this.tasklist = response.data;
                }).catch(error => {
                    console.error(error.message);
                })
        },
        changeStatusJson(index) {
            const data = {
                'currentIndex': index
            }

            axios.post(this.statusUrl, data,
                {
                    headers: { 'Content-Type': 'multipart/form-data' }
                }).then(response => {
                    this.tasklist = response.data;
                }).catch(error => {
                    console.error(error.message);
                })
        },
        addTask() {
            if (this.newTask.text.length > 5) {
                this.tasklist.unshift(this.newTask)
                this.changeJsonList(this.newTask)
                this.newTask = {
                    text: "",
                    done: 0
                },

                    this.error = ""
            } else {
                this.error = "word too short"
            }
        },
        deleteTask(index) {
            this.deleteJsonElement(index)

        },
        changeStatus(index) {
            this.changeStatusJson(index)
            console.log(this.allTasksUndone);
        }
    },
    created() {
        this.createTaskList()

    }

}).mount('#app')
