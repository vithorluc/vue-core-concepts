const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      confirmedName: "",
      lastName: ""
    };
  },
  watch: {
    counter(value) {
      if (value > 50) {
        this.counter = 0
      }
    }
    // args -> newValue and oldValue
    // name(value){
    //   if (value === '') {
    //     this.fullname = '';
    //   } else {
    //     this.fullname = value + " " + 'Lucas'
    //   }
    },
  // computed will only be executed if one of the dependencies changes
  // computed are used like funcion but not called like them
  // better for performance because they are only once calculated if 
  // dont change its variables 
  computed: {
    fullname() {
      if (this.name === "" || this.lastName === "") {
        return ''; 
      }
      return this.name + ' ' + this.lastName
    }
  }, 
  methods: {
    // outputFullName(){
      // if (this.name != "") {
      //   return this.name + ' ' + 'Lucas'
      // }
    // },
    setName(event, secondName){
      this.name = event.target.value 
    },
    add(num){
      this.counter = this.counter + num 
    }, 
    reduce(num){
      this.counter = this.counter - num
    },
    submitForm(){
      alert('submitted!')
    },
    confirmInput(){
      this.confirmedName = this.name
    },
    resetInput(){
      this.name = ''
      this.lastName = ''
    }
  },
});

app.mount('#events');
