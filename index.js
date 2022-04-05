  function counter(){
    var counter = 0;

    function IncreaseCounter() {
        return counter += 1;
    };

    return IncreaseCounter;

    };

var counter = counter();
alert(counter());
alert(counter());
alert(counter());
alert(counter());

//2
let count = 0;
(function immediate() {
  if (count === 0) {
    let count = 1;
    console.log(count); // What is logged? // 1
  }
  console.log(count); // What is logged?//0
})();


//3
for (var i = 0; i < 3; i++) {
    setTimeout(function log() {
      console.log(i); // What is logged?  // three times 3 will be printed
    }, 1000);
  }

//4

//Write a code to explain closure


// Write a code to calculate area of a rectangle using
//  inner function. In this case outer function should 
//  accept parameter length and 
// inner function should accept parameter bredth


function outer(length){
    function inner(bredth){
        let result = length* bredth
        return result
    }inner(15)
}outer(20)


// 5
// Take a variable in outer function 
// and create an inner function to increase 
// the counter every time it is called



function counter(){
        var counter = 0;
    
        function IncreaseCounter() {
            return counter += 1;
        };
    
        return IncreaseCounter;
    };
    
    var counter = counter();
    alert(counter());
    alert(counter());
    alert(counter());
    alert(counter());


    //8
//     "Print Output

var a = 12;
(function () {
  alert(a);
})();  //12


//9

var a = 10;
var x = (function () {
  var a = 12;
  return function () {
    alert(a);
  };
})();
x(); //12

//10

var globalVar = "xyz";

(function outerFunc(outerArg) {
    var outerVar = 'a';
    
    (function innerFunc(innerArg) {
    var innerVar = 'b';
    
    console.log(
      "outerArg = " + outerArg + "\n" +
      "innerArg = " + innerArg + "\n" +
      "outerVar = " + outerVar + "\n" +
      "innerVar = " + innerVar + "\n" +
      "globalVar = " + globalVar);
    
    })(456);
})(123);


// outerArg = 123
// innerArg = 456
// outerVar = a
// innerVar = b
// globalVar = xyz