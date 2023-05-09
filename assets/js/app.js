const { createApp } = Vue

createApp({
    data() {
        return {
            tasks: [],
            getTasks: "",
            listUrl: "getTasks.php",
            error: null,
            newTask: {
                text: "",
                done: false,
            },
            tasksComplete: [],

        }
    },
    methods: {
        createTaskList() {
            axios.get(this.listUrl).then(response => {
                this.tasks = response.data;
                this.tasksComplete = this.tasks.filter((object) => object.done === true);
                this.tasks = this.tasks.filter((object) => object.done === false);
            })
        },
        completeTask(index) {
            this.tasksComplete.unshift(this.tasks[index])
            this.tasks.splice(index, 1)

        },
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
//         completeTask(index) {
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