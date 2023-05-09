const { createApp } = Vue

createApp({
    data() {
        return {
            tasklist: [],
            tasks: [],
            tasksComplete: [],
            listUrl: "getTasks.php",
            storeUrl: "storeTasks.php",
            statusUrl: "changeStatus.php",
            error: null,
            newTask: {
                text: "",
                done: 0
            },

        }
    },
    methods: {
        createTaskList() {
            axios.get(this.listUrl).then(response => {
                this.tasklist = response.data;
                console.log(this.tasklist);
                // this.tasksComplete = this.tasklist.filter((object) => object.done == true);
                // this.tasks = this.tasklist.filter((object) => object.done == false);
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
                    console.log(response);
                })
        },

        changeStatusJson(index) {
            const data = {
                currentIndex: index
            }

            axios.post(this.statusUrl, data,
                {
                    headers: { 'Content-Type': 'multipart/form-data' }
                }).then(response => {
                    this.taskList = response.data;
                    console.log(response.data);
                })
        },
        addTask() {
            if (this.newTask.text.length > 5) {
                this.tasks.unshift(this.newTask)
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
        changeStatus(index) {
            this.tasklist[index].done = !this.tasklist[index].done
            this.changeStatusJson(index)
        }
    },
    created() {
        this.createTaskList()

    }

}).mount('#app')







// const { createApp } = Vue

// createApp({
//     data() {
//         return {
//             error: null,
//             newTask: {
//                 text: "",
//                 done: false,
//             },
//             tasks: [
//                 { text: "Pulire la cucina", done: false },
//                 { text: "Fare la spesa", done: true },
//                 { text: "Stirare la biancheria", done: false },
//                 { text: "Preparare la cena", done: true },
//                 { text: "Passeggiare il cane", done: false },
//                 { text: "Scrivere una lettera", done: true },
//             ],
//             tasksComplete: [],
//             endDay: new Date().setHours(24, 0, 0),
//             timeLeft: '',

//         }
//     },
//     methods: {
//         addTask() {
//             if (this.newTask.text.length > 5) {
//                 this.tasks.unshift(this.newTask)
//                 this.newTask = {
//                     text: "",
//                     done: false,
//                 },
//                     this.error = ""
//             } else {
//                 this.error = "word too short"
//             }
//         },
//         changeStatus(index) {
//             console.log(index);
//             this.tasksComplete.unshift(this.tasks[index])
//             this.tasks.splice(index, 1)

//         },
//         startCountdown() {
//             setInterval(() => {
//                 const currentTime = new Date().getTime();
//                 const timeDiff = this.endDay - currentTime;
//                 const hoursLeft = Math.floor(timeDiff / (1000 * 60 * 60));
//                 const minutesLeft = Math.floor(
//                     (timeDiff % (1000 * 60 * 60)) / (1000 * 60)
//                 );
//                 const secondsLeft = Math.floor((timeDiff % (1000 * 60)) / 1000);
//                 this.timeLeft = `${hoursLeft}h ${minutesLeft}m ${secondsLeft}s`;
//             }, 1000);
//         },
//     },
//     created() {
//         this.tasksComplete = this.tasks.filter((object) => object.done === true);
//         this.tasks = this.tasks.filter((object) => object.done === false);
//         // this.tasks = this.tasksUncomplete;
//         this.startCountdown();
//     },


// }).mount('#app')