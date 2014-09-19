//alert("JavaScript works!");

/* Damian Laden
   SDI 1409
   Project 3
*/
// variables
var myApartment = "my building";
var myFirstDestination = "subway station"; // string data type
var mySecondDestination = "\"connecting\" bus";
var myThirdDestination = "work";
var numOfMilesToSubway = .5; // number data type
var numOfMilesToWork = 2.5; // number data type
var drive = false; // Boolean type
var train = true;
var bus = false;
var skateboard = true;
var coffee = true;
var workFirst = false;

// global variables
var myCars = ["Honda", "Subaru", "Ford", "Buick", "Chevrolet"];
myCars[5] = "Toyota";

// outputs
console.log("I must decide to drive, or go to the " + myFirstDestination + ".");
console.log("I run out of " + myApartment + ".");
console.log("The subway is about " + numOfMilesToSubway + " miles from my house.");
console.log("It is " + train + " that i take the train to my " + mySecondDestination + ".");
console.log("It would be " + bus + " to think the bus would be quicker rather then to skateboard.");
console.log("So, it is " + skateboard + " that I skateboard, because it's only " + numOfMilesToWork + " miles to my " + myThirdDestination + ".");
console.log("When I arive, it is " + workFirst + " that I go to " + myThirdDestination + " first.");
console.log("I decide to get some coffee because I have time, which is " + coffee + ".");
console.log("Afterwards I go to " + myThirdDestination + ".");

// functions
var myProcedure = function(argArray) {
    
    console.log("We have " + argArray + ".");
    
    console.log("We have " + argArray.length + " cars.");
    
    for (var i = 0; i < argArray.length; i++) {
        
        if (argArray[i] == "Subaru" || argArray[i] == "Toyota") {
            console.log("We have a " + argArray[i]);   
        }
    
    };
    
};    
    
/*var jsonFunction = function() {
     
    for (var firstKey in jsonData.goodGuys) {
        
        for (var secondKey in jsonData.goodGuys[firstKey]) {

            console.log(jsonData.goodGuys[firstKey][secondKey]);
     
        }
    
    }
    
    
};

//Methods    
/*
    console.log(argArray);
    var myLastCar = argArray.pop(); //finds the last word you popped off
    console.log(myLastCar);
    argArray.pop();    //takes off the last word
    console.log(argArray);
    argArray.push(myLastCar, "Hyundai"); //puts the last word on the end again or add another
    console.log(argArray);
*/  

// main code
//jsonFunction();

//myProcedure(myCars);
//console.log(myCars);
 