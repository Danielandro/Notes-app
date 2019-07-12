var assert = {
  isTrue: function(assertionToCheck) {
    if (!assertionToCheck) {      
      throw new Error(`Assertion failed: ${assertionToCheck} is not truthy`)
    }
  },
  isFalse: function (assertionToCheck) {
    if (assertionToCheck) {
      throw new Error(`Assertion failed: ${assertionToCheck} is falsy`)
    }
  }
  
};

// arguments.callee.name -> pass this as second argument to assertion to 
//   pass the test name. Can use to print test name in the console.
