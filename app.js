const app = Vue.createApp({
  // template: '<h2>My first template</h2>',

  //short hand for function
  data() {
    //we are returning anobject inside the function
    return {
      // title: "On my way to becoming a Vue Master",
      /* name: "Xolani",
      verb: " is",
      sentence: " living his best life at ",
      age: "25", */
      showSentence: true,
      name: 'Xolani',
      sentence: ' is living his best life at ',
      age: 25
    };
  },
  methods: {
    /*changeName() {
      // putting the word 'this' infront of the data value references the component itself
      this.name = "Palesa";
    },
    // can access value passed through the parameter
    changeSentence(sentence) {
      this.sentence = sentence;
    },*/
    toggleShowSentence() {
        //is used to reverse the value of what to what it is not: switching between true and false
        this.showSentence = !this.showSentence
    }
  },
});

app.mount("#app");
