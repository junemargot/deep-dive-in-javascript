const user = {
  name: "Alexa",
  greet: function () { // 메서드
    console.log("Hello! My name is " + this.name); // this는 user를 가리킨다.
  }
};

user.greet(); // Hello! My name is Alexa