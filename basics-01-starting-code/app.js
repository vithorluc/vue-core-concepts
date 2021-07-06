const app = Vue.createApp({
    data() {
        return {
            // vue data impolation -> when you put data into html
            // from here we can create vue variable to use in html 
            courseGoalA: 'Finish the course and learn Vue!',
            courseGoalB: '<h1>Master Vue and build amazing apps!</h1>',
            vueLink: 'http://vuejs.org/'
        };
    },
    methods: {
        outputGoal(){
            const randomNuber = Math.random()
            if(randomNuber < 0.5) {
                //this refers to a global object vue variable
                return this.courseGoalA
            } else {
                return this.courseGoalB
            }
        }
    }
})

app.mount('#user-goal');