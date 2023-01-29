function addTwoNumbers(num1, num2) {
    return new Promise((fulfilled) => {
      setTimeout(() => {
        console.log("Inside setTimeout");
        fulfilled(num1+num2);
      }, 5000);
    });
  }

  addTwoNumbers(10,5)
  .then(()=>{
      console.log("Promise fulfilled")
  })
  .catch(()=>{
      console.log("Promise was not fulfilled")
  });