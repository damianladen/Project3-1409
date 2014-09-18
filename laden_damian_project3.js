//alert("JavaScript works!");

/* Damian Laden
   SDI 1409
   Project 3
*/

// global variables
var myCars = ["Honda", "Subaru", "Ford", "Buick", "Chevrolet"];
myCars[5] = "Toyota";


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
    
var jsonFunction = function() {
     
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
jsonFunction();

//myProcedure(myCars);
//console.log(myCars);
 