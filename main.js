       //******************chapters me Ruweida************** *

                          //************ch1**************
function ch1() {
    document.getElementById("content").innerHTML = `
        <p style="color: #007BFF; font-size: 24px;">Hello World!</p>
    `;
}
                               //*************ch2****************
//assigment
//arthimatic operator
//addition
function addition(){
    let students = 20;
    students += 6;
    document.getElementById("output").innerHTML = `Addition Result: ${students}`;
}

function subtraction(){
    let employee = 32;
    employee -= 6;
    document.getElementById("output").innerHTML = `Subtraction Result: ${employee}`;
}

function multiplication(){
    let rooms = 12;
    rooms *= 6;
    document.getElementById("output").innerHTML = `Multiplication Result: ${rooms}`;
}

function division(){
    let stud = 100;
    stud /= 4;
    document.getElementById("output").innerHTML = `Division Result: ${stud}`;
}

function comparison(){
    let result1 = 10 == 20;
    let result2 = 7 <= 60;
    let result3 = 16 >= 24;
    let result4 = 10 != 20;
    document.getElementById("output").innerHTML = `
        <strong>Comparison Results:</strong><br>
        10 == 20: ${result1} <br>
        7 <= 60: ${result2} <br>
        16 >= 24: ${result3} <br>
        10 != 20: ${result4}
    `;
}

function assignmentOp() {
    let i = 10;
    i += 5;
    let ii = 10;
    ii *= 5;
    document.getElementById("output").innerHTML = `
        <strong>Assignment Operators Results:</strong><br>
        The value of i (i += 5) is: ${i} <br>
        The value of ii (ii *= 5) is: ${ii}
    `;
}

function logic() {
    let p = true, m = true;
    let result1 = p && m;
    let o = true, z = false;
    let result2 = o && z;
    document.getElementById("output").innerHTML = `
        <strong>Logical Operators Results:</strong><br>
        true && true = ${result1} <br>
        true && false = ${result2}
    `;
}

function teneryOp() {
    let age = 10;
    let msg = (age >= 18) ? "Qof weyn baa tahay walaalo" : "you are an adult";
    document.getElementById("output").innerHTML = `<strong>Ternary Operator Result:</strong> ${msg}`;
}

              //**************ch3********************
              function exam1(){
                const age = 30;
                const message = `My age is ${age} years.<br> I live in Mogadishu.`;
                document.getElementById("output").innerHTML = message;
            }
            
            function exam2(){
                let a = 5;
                let b = 10;
                let temp = a;
                a = b;
                b = temp;
                document.getElementById("output").innerHTML = `After swap: a = ${a}, b = ${b}`;
            }
            
            function exam3(){
                let a = 3;
                let b = 6;
                a = a + b;
                b = a - b;
                a = a - b;
                document.getElementById("output").innerHTML = `After swap: a = ${a}, b = ${b}`;
            }
            
            function exam4(){
                let age = 20;
                let message = (age >= 20) ? "You can vote" : "You cannot vote";
                document.getElementById("output").innerHTML = message;
            }
            
            function exam5(){
                let age = 20;
                let message = (age >= 20) ? "You can vote" : "You are a minor";
                document.getElementById("output").innerHTML = message;
            }
            
            function exam6(){
                let result = "";
                for (let i = 0; i < 5; i++) {
                    if (i === 3) break;
                    result += i + " ";
                }
                document.getElementById("output").innerHTML = `Loop result: ${result}`;
            }
            
            function exam7(){
                let result = "";
                for (let i = 1; i <= 5; i++) {
                    result += i + " ";
                }
                document.getElementById("output").innerHTML = `Loop result: ${result}`;
            }
            
            function exam8(){
                let result = "";
                let i = 1;
                while (i <= 5) {
                    result += i + " ";
                    i++;
                }
                document.getElementById("output").innerHTML = `While loop result: ${result}`;
            }


            //********Assigment 
            //assigment
//arthimatic operator
//addition
function addition(){
    let students =20;
    students = students+6;
    console.log("addition program=")
    console.log(students ,"<br><br>");
    }
    //subtraction 
    function subtraction(){
    let employee =32;
    employee = employee-6;
    console.log("subtraction program=")
    console.log(employee ,"<br><br>");
    }
    
    //multiplication 
    function multiplication(){
    let rooms =12;
    rooms = rooms*6;
    console.log("multiplication program =")
    console.log(rooms ,"<br><br>");
    }
    //devision
    function devision(){
    let stud=100;
    stud = stud/4;
    console.log("div program=")
    console.log(stud ,"<br><br>");
    }
    //companition operator
    function companition (){
    let x = 10;
    let y = 20;
    let result = x == y;
    console.log("companition operator=")
    console.log(result ,"<br><br>")
    }
    let e= 7;
    let a = 60;
    console.log("7 <= 60=")
    console.log(e<= a ,"<br><br>")
    
    var n1= 16;
    var n2 = 24;
    console.log("companition operator=")
    console.log(n1>=n2 ,"<br><br>")
    
    let k1= 10;
    let k2 = 20;
    console.log("companition operator=")
    console.log(k1 != k2,"<br><br>")
    
    
    //assigment operator
    function assigmentop(){
    let i=10;
    v=10+20;
    i +=5;
    console.log("the value of i is:i=")
    console.log(i ,"<br><br>")
    let ii=10;
    vv=10+20;
    ii *=5;
    console.log("the value of ii is:ii=")
    console.log(i ,"<br><br>")
    }
    
    //logic operator
    function logic(){
    let p = true;
    let m = true;
    console.log("logic operator=")
    console.log(p && m, "<br><br>"); 
    
    
    let o = true;
    let z = false;
    console.log("logic operator=")
    console.log(o && z ,"<br><br>"); 
    }
    //tenaty operator
    function teneryop(){
        let age = 10;
        let msg = (age >=18)?"qof weyn baa tahay walaalo":"dee waad yartahay soo weenaaw"
        console.log(msg);
    }
    //temp
    function temp(){
        let a = 10
        let b = 20
        let temp = a
        a = b
        b = temp
        console.log("after swaping a = "+ a+",b= "  +b)
    }
    
    //if statement
    function ifstatement(){
        let age = 18;
        if (age >=18){
            console.log("you are an adult")
        }
    
    
    }
    
      
    //if-else
    function ifelse (){
       
        let hour = 7;
    if (hour >=6 && hour < 12)
        console.log('good morning');
    else if(hour>=12 && hour <18)
        console.log('good afternoon')
    else{
        console.log('good evening')
    }
    
    
    }
    //switch case
    function switchcase(){
        let value = 34;
        switch(typeof value){
        case "number":
            console.log("number")
            break;
        case "string":
            console.log("string")
            break;
        case "boolean":
                console.log("boolean")
                break;
        defult:
                console.log("othrs")
                break; 
    
    
    
        }
    
    }
    
    // nastedif
    function nastedif(){  
    for(let i = 0; i < 5; i ++ ){
        console.log(`the current value of i is :${i}.`);
        for(let j = 0; j< 5; j++){
            console.log(`j:${j}`);
        }
        console.log("------------");
    }
    }
    
    
    
    //loops
    function forloop(){
    
    
    for (let i = 1; i<=5;i++){
        console.log(i);
    
        
    for (let j = 1; j<=3;j++){
        console.log("inner loop"+j);
    
    }
    }
    }
    //while loop
    function whileloop(){
        let r = 0;
        while(r<=10){
            console.log(r);
            r++
        }
    
    }
    //dowhile loop
    function dowhile(){
        let w = 3;
        do{
            console.log(w)
            w++;
        }
        while(w<=9)
    }
    //break loop
    function breakloops(){
        for(let s = 1; s <= 5; s++){
            if(s == 3){
                break;
            }
            console.log(s);
        }
    
    }
    function continueloops(){
        for(let s = 1; s <= 5; s++){
            if(s == 3){
                continue;
            }
            console.log(s);
        }
    
    }
    //ch3
    function exam1(){
        const age = 30;
        const massage =`my age is ${age} years.
        i live in mogadisho.`;
    }
    function exam2(){
        let a = 5;
        let b = 10;
        let temp = a;
        a=b;
        b=temp;
        console.log("after swapp : a="+a+",b="+b);
    }
    function exam3(){
        let a=3;
        let b=6;
        a=a+b;
        b=a-b;
        a=a-b;
        console.log("after swapp : a="+a+",b="+b)
    }
    function exam4(){
        let age = 20;
        if (age>=20){
            console.log("you can vote")
        }
    }
    function exam5(){
        let age = 20;
        if (age>=20){
            console.log("you can vote")
        }else{
            console.log("you are a minor")
        }
    }
    function exam6(){
        for (let i =0;i<5;i++){
            if(i===3){
                break
            }
            console.log(i)
        }
    
    }
    function exam7(){
        for (let i=1;i<=5;i++)
            console.log(i);
    }
    function exam8(){
        let i =1;
        while(i<=5){
            console.log(i);
            i++
        }
    }
    //assigment
    function displayInfo() {
        // Get the values of ID, name, and selected option
        var id = document.getElementById("id").value;
        var name = document.getElementById("name").value;
        var displayOption = document.getElementById("displayOption").value;
    
        var resultText = "";
    
        // Based on the selected option, display the corresponding information
        if (displayOption === "id") {
            resultText = "ID: " + id;
        } else if (displayOption === "name") {
            resultText = "Name: " + name;
        } else if (displayOption === "both") {
            resultText = "ID: " + id + " - Name: " + name;
        }
    
        // Display the result on the page
        document.getElementById("result").innerText = resultText;
    }
            


            //**********ch4*********** 
            function ex1(){
                const sayHello = () => "Hello, World!";
                document.getElementById("output").innerHTML = sayHello();
            }
    
            function ex2(){
                function greet(name){
                    document.getElementById("output").innerHTML = `Hello, ${name}!`;
                }
                greet("Ruweida");
            }
    
            function ex3(){
                const doubleNumber = (number) => {
                    return number * 2;
                };
                document.getElementById("output").innerHTML = `Double of 3 is: ${doubleNumber(3)}`;
            }
    
            function ex4(){
                function add(a, b){
                    return a + b;
                }
                const result = add(3, 4);
                document.getElementById("output").innerHTML = `Addition result: ${result}`;
            }
            function ex5(){
                var globalVariable = "I am in global scope";
                function sayHello(){
                    document.getElementById("output").innerHTML = globalVariable;
                }
                sayHello();
            }
    
            function ex6(){
                document.getElementById("output").innerHTML = "Please wait 2 seconds...";
                setTimeout(() => {
                    document.getElementById("output").innerHTML = "This is an arrow function callback executed after 2 seconds";
                }, 2000);
            }
            //lap
            //lap
function myname(){
    console.log(`Ali\nJamac\nAli`);

 }
//lap 2
function cal(){
    const currentHour = new Date().getHours();
    const currentMinute = new Date().getMinutes();
    
    switch (true) {
        case (currentHour < 5):
            console.log("It's before 5:00 AM.");
            break;
        case (currentHour === 5 && currentMinute === 0):
            console.log("It's 5:00 AM.");
            break;
        case (currentHour < 12):
            console.log(`It's ${currentHour}:${currentMinute < 10 ? '0' + currentMinute : currentMinute} AM.`);
            break;
        case (currentHour === 12):
            console.log(`It's 12:${currentMinute < 10 ? '0' + currentMinute : currentMinute} PM.`);
            break;
        default:
            console.log(`It's ${currentHour - 12}:${currentMinute < 10 ? '0' + currentMinute : currentMinute} PM.`);
    }
    

 }
 //lap 3
 function switch1(){
    function calculator(num1, num2, operation) {
        switch (operation) {
            case 'add':
                return num1 + num2;
            case 'subtract':
                return num1 - num2;
            case 'multiply':
                return num1 * num2;
            case 'divide':
                return num2 !== 0 ? num1 / num2 : 'Cannot divide by zero';
            default:
                return 'Invalid operation';
        }
    }
    console.log(calculator(10, 5, 'add'));       // Output: 15
    console.log(calculator(10, 5, 'subtract'));  // Output: 5
    console.log(calculator(10, 5, 'multiply'));  // Output: 50
    console.log(calculator(10, 5, 'divide'));    // Output: 2
    
 }


            //********ch5********** //
            function Array_Literal() {
                const name = ["Aisha", "Sabriin", "Najma"];
                document.getElementById("output").innerHTML = name;
            }
    
            function Cons_Array() {
                const magacaayl = new Array("C.raxmaan", "C.raxiim", "C.majiid");
                document.getElementById("output").innerHTML = magacaayl;
            }
    
            function Empty_Array() {
                const myArray = [];
                myArray[0] = "First";
                myArray[1] = "Middle";
                myArray[2] = "Last";
                document.getElementById("output").innerHTML = myArray;
            }
    
            function arfom() {
                const arrayFromstr = Array.from("Hello");
                document.getElementById("output").innerHTML = arrayFromstr;
            }
    
            function spread() {
                const sourceArray = [4, 5, 6];
                const newArray = [...sourceArray];
                document.getElementById("output").innerHTML = newArray;
            }
    
            function myArray1() {
                const myArray1 = Array.of(5, 6, 7);
                document.getElementById("output").innerHTML = myArray1;
            }
    
            function push_methode() {
                const fruits = ["Banana", "Mango"];
                fruits.push("Apple");
                document.getElementById("output").innerHTML = fruits;
            }
    
            function unshift_methode() {
                const fruit = ["Banana", "Mango"];
                fruit.unshift("Apple");
                document.getElementById("output").innerHTML = fruit;
            }
    
            function updating() {
                const magaalo1 = ["Muqdisho", "Kismaayo", "Ceelbuur"];
                magaalo1[1] = "Hargeisa";
                document.getElementById("output").innerHTML = magaalo1;
            }
    
            function pop_metode() {
                const fruits = ["Banana", "Mango"];
                fruits.pop();
                document.getElementById("output").innerHTML = fruits;
            }
    
            function qrr() {
                const qof = {
                    firstName: "Mohamed",
                    lastName: "Ali",
                    age: 30
                };
                document.getElementById("output").innerHTML = JSON.stringify(qof, null, 2);
            }
    
            function ilhan() {
                function Baniaadam(firstName, lastName, age) {
                    this.firstName = firstName;
                    this.lastName = lastName;
                    this.age = age;
                }
                const baniaadam = new Baniaadam("Mohamed", "Ali", 30);
                document.getElementById("output").innerHTML = JSON.stringify(baniaadam, null, 2);
            }
    
            function haan() {
                class Dad {
                    constructor(firstName, lastName, age) {
                        this.firstName = firstName;
                        this.lastName = lastName;
                        this.age = age;
                    }
                }
                const dad = new Dad("Mohamed", "Ali", 30);
                document.getElementById("output").innerHTML = JSON.stringify(dad, null, 2);
            }
    
            function naw() {
                const dad = {
                    firstName: "Mohamed",
                    lastName: "Ali",
                    age: 30,
                    email: "mohamed.ali@email.com"
                };
                dad.age = 31;
                document.getElementById("output").innerHTML = JSON.stringify(dad, null, 2);
            }
    
            function waal() {
                const fai = {
                    firstName: "Mohamed",
                    lastName: "Ali",
                    getFullName: function () {
                        return this.firstName + " " + this.lastName;
                    }
                };
                document.getElementById("output").innerHTML = fai.getFullName();
            }
    
            function sawd() {
                const sus = {
                    name: "Faiza",
                    education_level: "Bachelor",
                    gra_status: "Active"
                };
                let output = "";
                for (let index in sus) {
                    output += `${index}: ${sus[index]}<br>`;
                }
                document.getElementById("output").innerHTML = output;
            }
    
            function poop() {
                const test = {
                    name: "Jonson",
                    city: "New York",
                    age: 30
                };
                document.getElementById("output").innerHTML = JSON.stringify(test, null, 2);
            }
    
            function jiij() {
                const wew = {
                    name: "Mohamed",
                    age: 30,
                    hobbies: ["Reciting Quran", "Praying", "Reading", "Swimming"]
                };
                document.getElementById("output").innerHTML = JSON.stringify(wew, null, 2);
            }
    
            function huuuh() {
                const jsonString2 = '{"name": "Mohammed Ali", "age": 30}';
                const jsonObject2 = JSON.parse(jsonString2);
                document.getElementById("output").innerHTML = jsonObject2.name;
            }
    
            function uuui() {
                const person = { name: "Mohammed Ali", age: 30 };
                const jsonString3 = JSON.stringify(person);
                document.getElementById("output").innerHTML = jsonString3;
            }      
            
            
//chapter6
//chapter 6
let boxElement = document.getElementsByClassName("box");
for (let i=0;  i<boxElement.length; i++){
   boxElement[i].style.border="3px dashed black";
}
let paraElement=document.getElementsByTagName("p")
for(i=0; i<paraElement.length; i++){
   paraElement[i].style.fontFamily="bold";
   paraElement[i].style.margin="40px";
}


let firstpara=document.querySelector("P")
let firstbox =document.querySelector("box")
//exmple 3
let element =document.getElementbyid="mylink";
   element.style.textdecoration="none";
//example 4
let pragraph =document.getElementbyid("paragraph");
pragraph.innertext="setting p tag text using inner.text properties"
pragraph.innercontent="setting p tag text using inner.content properties"





   //*********** chapters Sumayo cusmaan xassan***************

// Chapter 1 Examples
function iky() {
    document.write('Hello World<br>');
}
//chapter2
function EX1() {
    let result = 5 + 3;
    document.write(result + '<br>');
}

function any() {
    let isEqual = 2 === 3;
    document.write(isEqual + '<br>');
}

function yama() {
    let count = 10;
    count += 5;
    document.write(count + '<br>');
}

function yap() {
    let num = 10;
    let strNum = "5";
    document.write(num > strNum + '<br>');
}

//chapter3
// Chapter 3 Examples
function zero() {
    let a = 5;
    let b = 8;
    let temp = a;
    a = b;
    b = temp;

    document.write("After swapping: a = " + a + ", b = " + b + "<br>");
}

function osman() {
    let age = 18;
    if (age >= 18) {
        document.write('You are an adult<br>');
    }
}

function emir() {
    let age = 20;
    if (age >= 18) {
        document.write('You are an adult<br>');
    } else {
        document.write('You are not an adult<br>');
    }
}

function ruweda() {
    let grade = 90;
    if (grade >= 90) {
        document.write('A+<br>');
    } else if (grade >= 80) {
        document.write('B+<br>');
    } else if (grade >= 70) {
        document.write('B-<br>');
    } else if (grade >= 65) {
        document.write('C+<br>');
    } else {
        document.write('C-<br>');
    }
}
// Chapter 4 Examples

function tiy() {
    const sayHello = () => "Hello World!";
    document.write(sayHello() + '<br>');
}

function haab() {
    function greet(name) {
        document.write(`Hello, ${name}!<br>`);
    }
    greet("Ruweida");
}

function yoji() {
    const doubleNumber = (number) => {
        return number * 2;
    };
    document.write(doubleNumber(3) + '<br>');
}

function jajar() {
    function add(a, b) {
        return a + b;
    }
    document.write(add(3, 4) + '<br>');
}

function time() {
    var globalVariable = "I am in global scope";
    function sayHello() {
        document.write(globalVariable + '<br>');
    }
    sayHello();
    document.write(globalVariable + '<br>');
}

function mobel() {
    setTimeout(() => {
        document.write("This is an arrow function callback executed after 2 seconds<br>");
    }, 2000);
}
//lap sumayo
/*Lap 1*/

// question-1
function lab1(){
    alert('Ismail\nabdi\nmohamed')
}

/*Lap 2*/

// question-2
function Work() {
    const now = new Date();
    const hours = now.getHours();

    switch (true) {
        case (hours >= 4 && hours < 6):
            alert("4:00 AM - 6:00 AM: Morning exercise.");
            break;
        case (hours >= 6 && hours < 8):
            alert("6:00 AM - 8:00 AM: Breakfast and getting ready for the day.");
            break;
        case (hours >= 8 && hours < 12):
            alert("8:00 AM - 12:00 PM: Work or study.");
            break;
        case (hours >= 12 && hours < 14):
            alert("12:00 PM - 2:00 PM: Lunch break.");
            break;
        case (hours >= 14 && hours < 18):
            alert("2:00 PM - 6:00 PM: Continue working or studying.");
            break;
        case (hours >= 18 && hours < 20):
            alert("6:00 PM - 8:00 PM: Dinner and relaxation.");
            break;
        case (hours >= 20 && hours < 22):
            alert("8:00 PM - 10:00 PM: Leisure activities or reading.");
            break;
        default:
            alert("After 10:00 PM: Wind down and prepare for bed.");
         break;
 }
}

/*Lap 3*/
   
// question-3
function add(a, b){
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "Error: Division by zero!";
    }
    return a / b;
}

function calculator() {
    const operation = prompt("Enter operation (+, -, *, /):");
    const num1 = parseFloat(prompt("Enter first number:"));
    const num2 = parseFloat(prompt("Enter second number:"));
    let result;

    switch (operation) {
        case '+':
            result = add(num1, num2);
            break;
        case '-':
            result = subtract(num1, num2);
            break;
        case '*':
            result = multiply(num1, num2);
            break;
        case '/':
            result = divide(num1, num2);
            break;
        default:
            result = "Invalid operation!";
            break;
    }

    alert(Result= `${result}`);
}

function Hello(){
    let num1, num2;
    num1 = 40;
    num2 = 50;
    console.log("arithmatic operator");
    console.log("add=", num1 + num2);
    console.log("sub=", num1 - num2);
    console.log("mul=", num1 * num2);
    console.log("div=", num1 / num2);
    
    console.log("comparison operator");
    console.log("equal=", num1 == num2);
    console.log("greater=", num1 > num2);
    console.log("lesden=", num1 < num2);
    console.log("greater den or equal=", num1 >= num2);
    console.log("les den or equal=", num1 <= num2);
    console.log("not equal=", num1 != num2);
    
    
    console.log ("assignment operator");
    console.log("num+=3", num1+=3);
    console.log("num-=3", num1-=3);
    console.log("num*=3", num1*=3);
    console.log("num/=3", num1/=3);
    
    console.log("logical operator");
    console.log("num1<0 && num2<0 = ",num1<0 && num2<0);
    console.log("num1>0 || num2>0 = ",num1>0 || num2>0);
    console.log("!(num1=6)=",!(num1=6),);
    }
 

// Chapter 5 Examples

// Array literal
function q() {
    const names = ['ahmed', " ".repeat(7) + 'mohammed', " ".repeat(7) + 'ali'];
    document.write(names[0] + "<br>");
    document.write(names[1] + "<br>");
    document.write(names[2] + "<br>");
}

// Array constructor
function qq() {
    const names = new Array("ahmed", "mohammed", "ali"); 
    document.write(names + "<br>");
}

// Empty array
function qqq() {
    const myArray = [];
    myArray[0] = "first";
    myArray[1] = "second";
    document.write(myArray + "<br>");
}

// Array.from()
function qqqq() {
    const arrayFromStr = Array.from("hello"); 
    document.write(arrayFromStr + "<br>");
}

// Array initializer
function qqqqq() {
    const newArray = new Array(3);
    document.write(newArray + "<br>");
}

// Spread operator
function d() {
    const sourceArray = [1, 2, 3];
    const newArray = [...sourceArray];
    document.write(sourceArray + "<br>");
    document.write(newArray + "<br>");
}

// Array.of()
function dd() {
    const myArray = Array.of(1, 2, 3); 
    document.write(myArray + "<br>");
}

// Adding element
function ddd() {
    const fruits = ["banana", "mango"];
    fruits.unshift("apple");
    document.write(fruits + "<br>");
}

// Removing element
function dddd() {
    const qudaar = ["banana", "mango", "cherry"];
    qudaar.pop();
    document.write(qudaar + "<br>");
}

// Updating elements
function ddddd() {
    const fawaakih = ["banana", "mango", "cherry"];
    fawaakih[1] = "orange"; 
    document.write(fawaakih + "<br>");
}

// For loop
function u() {
    const rwww = ["banana", "mango", "cherry"];
    for (let i = 0; i < rwww.length; i++) { 
        document.write(rwww[i] + "<br>");
    }
}

// ForEach method
function uu() {
    const fruits = ["banana", "mango", "cherry"];
    fruits.forEach(function (fruit) {
        document.write(fruit + "<br>");
    });
}

// For...of loop
function uuu() {
    const fruits = ["banana", "mango", "cherry"];
    for (const fruit of fruits) {
        document.write(fruit + "<br>");
    }
}

// Map method
function uuuu() {
    const numbers = [1, 2, 3];
    const squaredNumbers = numbers.map((num) => num * num); 
    document.write(squaredNumbers + "<br>");
}

// Accessing index with forEach
function uuuuu() {
    const fruits = ["banana", "mango", "cherry"];
    fruits.forEach((fruit, index) => {
        document.write(`fruit at index ${index} is ${fruit}<br>`);
    });
}

// Object Examples

// Example 1
function k(){
    const qof = {
        firstName: "mohamed",
        lastName: "ali",
        age: 30
    };
    document.write(JSON.stringify(qof) + "<br>");
}

// Example 2
function kk(){
    function Baniaadam(firstName, lastName, age) { 
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    const baniaadam = new Baniaadam("mohamed", "ali", 30);
    document.write(JSON.stringify(baniaadam) + "<br>");
}

// Example 3
function kkk(){
    class Dad {
        constructor(firstName, lastName, age) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
        }
    }
    const dad = new Dad("mohamed", "ali", 30);
    document.write(JSON.stringify(dad) + "<br>");
}

// Example 4
function kkkk(){
    const dad = {
        firstName: "mohamed",
        lastName: "ali",
        age: 30,
        email: "mohamed.ali@email.com"
    };
    document.write(dad.firstName + "<br>");
    document.write(dad["lastName"] + "<br>");
    dad.age = 31;
    document.write(JSON.stringify(dad) + "<br>");
}

// Example 5
function kkkkk(){
    const fai = {
        firstName: "mohamed",
        lastName: "ali",
        getFullName: function () {
            return this.firstName + " " + this.lastName;
        },
    };
    document.write(fai.getFullName() + "<br>");
}

// Example 6
function kkkkkk(){
    const sus = {
        name: 'faiza',
        education_level: 'bachelor',
        gra_status: 'active'
    };
    for (let index in sus) {
        document.write(`${index}: ${sus[index]}<br>`);
    }
}

// JSON

// Example 7
function kkkkkkk(){
    const test = {
        "name": "Jonson",
        "city": "New York",
        "age": 30
    };
    document.write(JSON.stringify(test) + "<br>");
}

// Example 8
function klj(){
    const wew = {
        "name": "mohamed",
        "age": 30,
        "hobbies": ["reciting quran", "praying", "reading", "swimming"]
    };
    document.write(JSON.stringify(wew) + "<br>");
}

// Example 9
function pop(){
    const jsonString2 = '{"name": "mohammed ali", "age": 30}'; 
    const jsonObject2 = JSON.parse(jsonString2);
    document.write(jsonObject2.name + "<br>"); 
}

// Example 10
function liik(){
    const person = {name: "mohammed ali", age: 30};
    const jsonString3 = JSON.stringify(person);
    document.write(jsonString3 + "<br>");
}





//// Assignment
// Selections

// if statement 
function sumayo1() {
    let age = 18;
    if (age <= 18) {
        document.write('You are a baby<br>');
    }
}

// if-else statement
function sumayo2() {
    let age = 20;
    if (age >= 18) {
        document.write('You are an Adult<br>');
    } else {
        document.write('You are less than 18 years<br>');
    }
}

// nested if
function sumayo3() {
    let score = 100;

    if (score >= 90) {
        document.write("Grade: A<br>");
    } else if (score >= 80) {
        document.write("Grade: B<br>");
    } else if (score >= 70) {
        document.write("Grade: C<br>");
    } else {
        document.write("Grade: D<br>");
    }
}

// switch statement
function sumayo4() {
    let day = 5;

    switch (day) {
        case 1:
            document.write("Monday<br>");
            break;
        case 2:
            document.write("Tuesday<br>");
            break;
        case 3:
            document.write("Sunday<br>");
            break;
        case 4:
            document.write("Wednesday<br>");
            break;
        case 5:
            document.write("Friday<br>");
            break;
        default:
            document.write("Weekend<br>");
    }
}

// ternary operator
function sumayo5() {
    let age = 20;

    let underage = (age >= 70) ? "You are under 18<br>" : "You are not under 18<br>";
    document.write(underage);
}

// Loops

// for loop
function sumayo6() {
    for (let j = 0; j < 6; j++) {
        document.write('Num ' + j + '<br>');
    }
}

// while loop
function sumayo7() {
    let nums = 1;

    while (nums <= 5) {
        document.write(nums + '<br>');
        nums++;
    }
}

// do-while loop
function sumayo8() {
    let p = 1;

    do {
        document.write("Number: " + p + "<br>");
        p++;
    } while (p <= 5);
}

// break loop
function sumayo9() {
    const names = ['John', 'Suu', 'Ruu', 'Xassan'];
    for (let p = 0; p < names.length; p++) {
        document.write(names[p] + '<br>');
        if (p === 2) break;
    }
}

// continue loop
function sumayo10() {
    const names = ['John', 'Suu', 'Ruu', 'Xassan'];
    for (let s = 0; s < names.length; s++) {
        if (s === 2) continue;
        document.write(names[s] + '<br>');
    }
}
 // Sample data array
 function juudaanl(){
 const data = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" },
];
// Q1: Display ID, Name, or Both
function displayIDOrName() {
    var id = document.getElementById("inputId").value;
    var name = document.getElementById("inputName").value;
    var output = "";
  
    if (id && name) {
      output = "ID: " + id + ", Name: " + name;
    } else if (id) {
      output = "ID: " + id;
    } else if (name) {
      output = "Name: " + name;
    } else {
      output = "Please enter at least one value to get the info.";
    }
  
    document.getElementById("outputQ1").textContent = output;
  }
  
  // Q2: Display Vowels and Consonants
  function displayVowelsAndConsonants() {
    var name = document.getElementById("inputName2").value;
    if (!name) {
      document.getElementById("outputQ2").textContent = "Please enter a name.";
      return;
    }
  
    var vowels = name.split("").filter(function (char) {
      return "aeiouAEIOU".indexOf(char) !== -1;
    });
    var consonants = name.split("").filter(function (char) {
      return vowels.indexOf(char) === -1 && /[a-zA-Z]/.test(char);
    });
  
    var output =
      "Vowels: " + vowels.join(", ") + " (Total: " + vowels.length + ")<br>" +
      "Consonants: " + consonants.join(", ") + " (Total: " + consonants.length + ")";
    document.getElementById("outputQ2").innerHTML = output;
  }
  
 
function filterResults() {
    const idInput = document.getElementById("id").value.trim();
    const nameInput = document.getElementById("name").value.trim();
    const resultsDiv = document.getElementById("results");

    // Clear previous results
    resultsDiv.innerHTML = "";

    let filteredData = data;

    if (idInput) {
        const idNumber = parseInt(idInput);
        if (!isNaN(idNumber)) {
            filteredData = filteredData.filter(item => item.id === idNumber);
        }
    }

    if (nameInput) {
        filteredData = filteredData.filter(item => item.name.toLowerCase() === nameInput.toLowerCase());
    }

    if (filteredData.length > 0) {
        filteredData.forEach(item => {
            resultsDiv.innerHTML += `<p>ID: ${item.id}, Name: ${item.name}</p>`;
        });
    } else {
        resultsDiv.innerHTML = "<p>No matching results found.</p>";
    }
}
}


function juudaanl() {
    const data = [
        { id: 1, name: "Alice" },
        { id: 2, name: "Bob" },
        { id: 3, name: "Charlie" },
    ];

    // Clear the current document's content
    document.write("<h1>Sample Data</h1>");

    if (data.length > 0) {
        data.forEach(item => {
            document.write(`ID: ${item.id}, Name: ${item.name}<br>`);
        });
    } else {
        document.write("No data available.<br>");
    }
}



                //*************project js*******************

// search-box open close js code
let navbar = document.querySelector(".navbar");

// sidebar open close js code
let navLinks = document.querySelector(".nav-links");
let menuOpenBtn = document.querySelector(".navbar .bx-menu");
let menuCloseBtn = document.querySelector(".nav-links .bx-x");
menuOpenBtn.onclick = function() {
navLinks.style.left = "0";
}
menuCloseBtn.onclick = function() {
navLinks.style.left = "-100%";
}


// Display cart items and calculate total price
function displayCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Remove invalid cart items
    cart = cart.filter(product => product && product.name && product.price);

    // Save cleaned cart
    localStorage.setItem('cart', JSON.stringify(cart));

    cartItemsContainer.innerHTML = '';
    let totalPrice = 0;

    cart.forEach((product, index) => {
        const cartItemDiv = document.createElement('div');
        cartItemDiv.classList.add('cart-item');
        cartItemDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>Price: $${product.price}</p>
            <div class="quantity-control">
                <button onclick="updateQuantity(${index}, -1)">-</button>
                <button onclick="updateQuantity(${index}, 1)">+</button>
            </div>
            <p>Total: $${(product.price * product.quantity).toFixed(+1)}</p>
            <button onclick="removeFromCart(${index})">Remove</button>`;
        cartItemsContainer.appendChild(cartItemDiv);
        totalPrice += product.price * product.quantity;
    });

    // Calculate discount
    let discount = calculateDiscount(totalPrice);

    const discountedTotal = totalPrice - discount;

    // Display total and discount
    totalPriceElement.innerHTML = `
        <p>Subtotal: $${totalPrice.toFixed(2)}</p>
        ${discount > 0 ? `<p>Discount: -$${discount.toFixed(2)} (${(discount / totalPrice * 100).toFixed(0)}%)</p>` : ''}
        <p><strong>Total: $${discountedTotal.toFixed(2)}</strong></p>`;
}

function calculateDiscount(totalPrice) {
    if (totalPrice >= 540) return totalPrice * 0.1; // 10% discount
    if (totalPrice >= 270) return totalPrice * 0.05; // 5% discount
    return 0;
}

function updateQuantity(index, change) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (!cart[index]) return;

    cart[index].quantity += change;

    if (cart[index].quantity <= 0) {
        cart.splice(index, 1);
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart();
}

function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart();
}

function openCheckout() {
    const modal = document.getElementById('checkout-modal');
    const checkoutItemsContainer = document.getElementById('checkout-items');
    const checkoutTotalElement = document.getElementById('checkout-total');
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    cart = cart.filter(product => product && product.name && product.price);

    checkoutItemsContainer.innerHTML = '';
    let totalPrice = 0;

    cart.forEach(product => {
        const checkoutItemDiv = document.createElement('div');
        checkoutItemDiv.classList.add('checkout-item');
        checkoutItemDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>Quantity: ${product.quantity}</p>
            <p>Price: $${product.price}</p>
            <p>Total: $${(product.price * product.quantity).toFixed(2)}</p>`;
        checkoutItemsContainer.appendChild(checkoutItemDiv);
        totalPrice += product.price * product.quantity;
    });

    let discount = calculateDiscount(totalPrice);
    const discountedTotal = totalPrice - discount;

    checkoutTotalElement.innerHTML = `
        <p>Subtotal: $${totalPrice.toFixed(2)}</p>
        ${discount > 0 ? `<p>Discount: -$${discount.toFixed(2)} (${(discount / totalPrice * 100).toFixed(0)}%)</p>` : ''}
        <p><strong>Total: $${discountedTotal.toFixed(2)}</strong></p>`;

    modal.style.display = 'block';
}

function closeCheckout() {
    const modal = document.getElementById('checkout-modal');
    modal.style.display = 'none';
}

function confirmPayment() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let totalPrice = 0;

    cart = cart.filter(product => product && product.name && product.price);

    cart.forEach(product => {
        totalPrice += product.price * product.quantity;
    });

    let discount = calculateDiscount(totalPrice);
    const discountedTotal = totalPrice - discount;

    if (cart.length === 0) {
        Swal.fire({
            icon: 'error',
            title: 'Your cart is empty!',
            text: 'Please add items to the cart before proceeding to payment.',
            confirmButtonText: 'Okay',
        });
        return;
    }


    
    // Get the current date and time
    const now = new Date();
    const formattedDate = now.toLocaleDateString(); // E.g., "1/11/2025"
    const formattedTime = now.toLocaleTimeString(); // E.g., "2:30:00 PM"

    let receipt = `
        Receipt\n
        ------------------------------------\n
        Date: ${formattedDate} Time: ${formattedTime}\n
        *----*---*----*---*----*---*----*--\n
        Items Purchased:\n`;

    cart.forEach(product => {
        receipt += `${product.name} - Quantity: ${product.quantity} - $${(product.price * product.quantity).toFixed(2)}\n`;
    });

    receipt += `
        ------------------------------------\n
        Subtotal: $${totalPrice.toFixed(2)}\n
        Discount: -$${discount.toFixed(2)}\n
        Total: $${discountedTotal.toFixed(2)}\n
        ------------------------------------\n
        Thank you for shopping with us!`;


        
//fnjidghjfnv,zlmnkbflhi
    Swal.fire({
        icon: 'success',
        title: 'Payment Successful!',
        html: `<pre>${receipt}</pre>`,
        confirmButtonText: 'Close',
    }).then(() => {
        localStorage.removeItem('cart');
        closeCheckout();
        displayCart();
    });
}

window.onload = () => {
    displayCart();
};
