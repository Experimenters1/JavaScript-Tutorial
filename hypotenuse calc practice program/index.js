// var x,y,z;
// let x,y,z;
// const x = 5;
// const y= 6;
// let z = x+ y;

// const pi = 3.14;
// let person = "John Doe";
// let answer = 'Yes I am!';
// document.getElementById("demo").innerHTML = pi + "<br>" + person + "<br>" + answer;

// let $$$ = 2;
// let $myMoney = 5;
// document.getElementById("demo").innerHTML = $$$ + $myMoney;

// let x,y,z;

// // x = 5;
// // y = 2;
// // // z = x / y; //Dividing
// // z = x % y; //Incrementing

// // x = 5
// // // x++; //Incrementing
// // // x --; //Decrementing
// // z = x;

// // x = 4;
// // z = x ** 2; //Exponentiation


// document.getElementById("demo").innerHTML = z;


// function myFunction() { //Window prompt()
//     let person = prompt("Please enter your name","Harry Postter");
//     if (person != null){
//         document.getElementById("demo").innerHTML = "Hello " + person + "! How are you today?"; 
//     }
// }

// function myFunction() { //Prompt for his favourite drink:
//     let text;
//     let favDrink = prompt("What's your favorite drink?", "Coca-Cola");
//     switch(favDrink){
//        case "Coca-Coca":
//          text = "Excelent choice. Coca-Cala is good for your soul.";
//          break;
//         case "Pepsi" : 
//          text = "Pepsi is my favorite too! ";
//          break;
//         case "Sprite":
//           text = "Really? Are you sure the Sprite is your favorite";
//           break;
//         default : 
//         text = "I have never heard of that one.."
//     }
//     // document.getElementById("demo").innerHTML = text;
//     alert(text);//Display an alert box:
//     alert(location.hostname); //Alert the hostname of the current URL:

// }

// function myFunction() {
//     let text;
//     if (confirm("Press a button!") == true){
//        text = "You pressed OK!";
//     }else{
//         text = "You canceled";
//     }
//     document.getElementById("demo").innerHTML = text;
// }



// let result;

// // //Implicit Conversion to String
// // result = '3' + 2; //"32"
// // result = '3' + null; //"3null"

// // result = '3' * 2; //Implicit Conversion to Number
// // result = '3' - 'hello';
// // console.log(result)

// // //Math Properties (Constants)
// // document.getElementById("demo").innerHTML = 
// // "<p><b>Math.E:  </b>" + Math.E + "</p><br>" +
// // "<p><b>Math.PI: </b>" + Math.PI + "</p>";


// //Math.round()
// // document.getElementById("demo").innerHTML = Math.round(4.6);


// //Math.ceil()
// document.getElementById("demo").innerHTML = Math.ceil(5.4);


// //Math.floor()
// document.getElementById("demo").innerHTML = Math.floor(4.7);


// //Math.trunc()
// document.getElementById("demo").innerHTML = Math.trunc(-4.7);


function Submit() {
    var sideA,sideB,sideC;
    sideA = document.getElementById("sideA").value;
    sideB = document.getElementById("sideB").value;
    sideC = Math.pow(sideA,2) + Math.pow(sideB,2);
    
    sideC = Math.sqrt(sideC);
    sideC = parseInt(Math.round(sideC));

    document.getElementById("sideC").innerHTML = sideC
}