//Question:1
var x = "ERROR! Please enter a valid password. ";
alert(x);

//Question:2


alert("Welcome to JS Land...\n Happy coding");

var message1 = "Welcome to JS Land..";
alert(message1);

var message2 = "Happy coding\nPrevent this page for creating additional dialogs.";
alert(message2);


//ALERT
//Question:1
var x = "ERROR! Please enter a valid password. ";
alert(x);

//Question:2

//Chapter # 2

Question:1
var username = "John Doe";
document.write("My username is:" + username);

Question:2

var myname;
var FirstName = "Ali";
var LastName = "Ahmed";
alert(FirstName+" "+LastName);

var message;
message = "Hello World";
alert(message);

var stu_name = "Jhone Doe";
var stu_age = "15 years old";
var stu_certi = "Certified Mobile Application Development";
alert(stu_name);
alert(stu_age);
alert(stu_certi);

Question:5


var food = ["P" , "I" , "Z" , "Z" , "A"];
var copyFood = food.slice(0,5);
document.write(copyFood +"</br>"); 
var copyFood = food.slice(0,4);
document.write(copyFood +"</br>");
var copyFood = food.slice(0,3);
document.write(copyFood +"</br>");
var copyFood = food.slice(0,2);
document.write(copyFood +"</br>");
var copyFood = food.slice(0,1);
document.write(copyFood +"</br>");
"</br>"

//Question no:6

var email;
email = "Nimra@gmail.com";
alert("My email address is " +email);

//Question no:7

var book = "“A smarter way to learn JavaScript";
alert("I am trying to learn fron the Book " +book);

//Question no : 8
document.getElementById("p1");



alert("Welcome to JS Land...\n Happy coding");

var message1 = "Welcome to JS Land..";
alert(message1);

var message2 = "Happy coding\nPrevent this page for creating additional dialogs.";
alert(message2);


//Question no:1(1)
//For Addition
var num1 = 3;
var num2 = 5;
var total = num1 + num2;
document.write("The total Sum of 3+5 is "+total + "</br>");

//For substraction
var total2 = num1 - num2;
document.write("The total Substraction of 3-5 is "+total2 + "</br>");

//For multiplication
var total3 = num1 * num2;
document.write("The total Multiplication of 3*5 is "+total3 + "</br>");

var total4 = num1 / num2;
document.write("The total division of 3/5 is "+total4 + "</br>");

var total5 = num1 % num2;
document.write("The modulus of 3%5 is "+total5 + "</br>");

//(3)

var userValue = +prompt("Enter a number");
document.write("Your Intial Value is: " +userValue + "</br>");
var userValue1 = userValue + 1;
document.write("Your Value After Increment is: " +userValue1 + "</br>");
var userValue2 = userValue1 + 7;
document.write("Your value after Addition is: " +userValue2 + "</br>");
var userValue3 = userValue2 - 1;
document.write("Your value after Decrement is: " +userValue3 + "</br>");
var userValue4 = userValue3 % 3;
document.write("The remainder is: " +userValue4 + "</br>");


//(4)
var ticket = 600;
var userTicket = +prompt("How many tickets would you buy?");
var totalTicket = ticket * userTicket;
document.write("Total cost to buy  " + userTicket +" "+ "tickets to a movie is : " +totalTicket+ "PKR" + "</br>");


//(5)
for(i=1; i<=10; i++){
    document.write("4" + "x" + i + "=" + 4*i + "</br>");
}

//(7)
var item1 = 650;
document.write("price of item 1 is " +item1 + "</br>");
var quan1 = +prompt("Quantity of item 1 is? " + "</br>");
document.write("Quantity of item 1 is " +quan1 + "</br>");

var item2 = 100;
document.write("price of item 2 is " +item2 + "</br>");
var quan2 = +prompt("Quantity of item 2 is? " );
document.write("Quantity of item 1 is " +quan2 + "</br>");

var shipping = 100;
document.write("Shipping charges " +shipping + "</br>");

var totalCost1 = item1 * quan1;
document.write("Total cost of item 1 is: " +totalCost1 + "</br>");

var totalCost2 = item2 * quan2;
document.write("Total cost of item 2 is: " +totalCost2 + "</br>");

var totalCost = shipping + totalCost1 + totalCost2;
document.write("Total Cost of Your order is " +totalCost);

//(8)

var totalMarks = +prompt("Enter your total marks ");

var marksobt = +prompt("Enter marks obtained ");

var percentage = (marksobt/totalMarks)*100;

document.write("Total marks " +totalMarks + "</br>");

document.write("marks Obtained " +marksobt + "</br>");

document.write("Percentage " +percentage + "</br>");
/*
var C = +prompt("Enter temperature in Celcius");
var F = (+C - 32) * (5/9);
document.write(+C+ "C" +" is " +F+ "F" +"</br>");

var C = +prompt("Enter temperature in Fahrenheit");
var F = (+C - 32) * (5/9);
document.write(+C+ "C" +" is " +F+ "F" +"</br>");
*/

//Marksheet

var stu_rollno = +prompt("Enter Your Roll no");
document.write("Your roll no is " +stu_rollno +"</br>");

var sub1 = +prompt("Enter Marks of Subject 1");
document.write("Mark of subject 1 is " +sub1 +"</br>");

var sub2 = +prompt("Enter Marks of Subject 2");
document.write("Mark of subject 2 is " +sub2 +"</br>");

var sub3 = +prompt("Enter Marks of Subject 3");
document.write("Mark of subject 3 is " +sub3 +"</br>");

var total_marks = sub1 + sub2 + sub3;
document.write("Total Marks of " +stu_rollno+ " is " +total_marks +"</br>");

var marksOb = 300;
document.write("Marks Obtained is "+marksOb +"</br>")
var p = (total_marks/marksOb) * 100;
document.write("Your Percencentage is " +p +"%" +"</br>");


//9

var US = +prompt("Enter How many Dollars do you want to convert in PKR");
var valuePKR = +US * 104.80;
document.write("Total Currency in PKR is " +valuePKR);


//11
var Curr_year = +prompt("Enter Current Year");
document.write("Current Year " +Curr_year +"</br>");

var Birth_year = +prompt("Enter your Birth year");
document.write("Birth Year " +Birth_year +"</br>");

var age = Curr_year - Birth_year;
document.write("Your age is " +age +"</br>");


//12

var radius = +prompt("Enter Radius of a circle");
document.write("Radius of a Circle is " +radius +"</br>");

var pi = 3.142;
var circum = 2 * pi * radius;
document.write("The circumference is " +circum +"</br>");

var area = pi * (radius * radius);
document.write("Area of a Circle is: " +area +"</br>");



//10

var number = +prompt("Enter any number");


var number1 = number + 5;
//document.write("After Add 5" +number1);

var number2 = number1 * 10;
//document.write("After Multiply by 10 " +number2);

var number3 = number2/2;
//document.write("After Division " +number3);

document.write("Your number is: " +number + " ,"+ "After Add 5 is: " +number1+ " ,"+ "After Multiply by 10 is: " +number2 + " ," +"After Division is: " +number3);


//13

var snack = +prompt("Enter your favourite snack is");
document.write("Your Favourite snack is: " + snack +"</br>");

var age = +prompt("Enter Your Age");
document.write("Current Age is " +age +"</br>");

var max_age = 65;
document.write("Max Age is " +max_age +"</br>");

var perDay = +prompt("Enter Per day Amount of snack");
document.write("Amount of Snack per day is: " +perDay +"</br>");

var totalNeeded = (perDay * 365) * (max_age - age);
document.write("You will need " + totalNeeded + " chocolate chip to last you untill the ripe old age of " + max_age);



//CHApter 9-11

//(1)

var city = prompt("Enter Your City");
if(city === "karachi"){
    document.write("Welcome to the city of light " +city);
}
else{
    document.write("welcome to " +city + " the cleanest city of Pakistan ");
}



//(2)

var Gender = prompt("Enter your Gender");
if(Gender === "male"){
    document.write("Good Morning sir");
}
if(Gender === "female"){
    document.write("Good Morning Ma'am");
}


//(3)

var signalColor = prompt("write one of any signals color like red, blue, yellow")
if(signalColor === "red"){
    document.write("Must Stop")
}
if(signalColor === "green"){
    document.write("Move now")
}
if(signalColor === "yellow"){
    document.write("Ready To Move")
}


//(6)

//MarkSheet

var Student = +prompt("Enter Your Roll no");
document.write("Roll no is " +Student + "</br>");


var Student_name = prompt("Enter Your name");
document.write("Your Name " +Student_name + "</br>");


var marks1 = +prompt("Enter Your marks of first subject");
document.write("Marks of subject one is " +marks1 + "</br>");

var marks2 = +prompt("Enter Your marks of second subject");
document.write("Marks of subject two is " +marks2 + "</br>");

var marks3 = +prompt("Enter Your marks of third subject");
document.write("Marks of subject two is " +marks3 + "</br>");

var total = marks1 + marks2 + marks3;
document.write("Total Marks " +total +"</br>");

var marksObt = 300;
document.write("Marks obtained "+marksObt +"</br>")
var stu_percentage = (total/marksObt) * 100;
document.write("Percentage " +stu_percentage + "%" +"</br>");

if(stu_percentage >= 10 && stu_percentage < 39){
    document.write("Fail!! Your percentage is " +stu_percentage +"</br>");
}

if(stu_percentage >= 40 && stu_percentage < 50){
    document.write("Grade is D" + "</br>" + "You Need To Improve");
}
if(stu_percentage >= 50 && stu_percentage < 60){
    document.write("Grade is C" + "</br>" + "You Need To Improve");
}
if(stu_percentage >= 60 && stu_percentage < 70){
    document.write("Grade is B" + "</br>" + "You Need To Improve");
}
if(stu_percentage >= 70 && stu_percentage < 80){
    document.write("Grade is A" + "</br>" + "CONGRATULATION!! You Got " +stu_percentage + "%" );

}
if(stu_percentage >= 80 && stu_percentage < 90){
    document.write("Grade is A+" + "</br>" + "CONGRATULATION!! You Got " +stu_percentage + "%" );
    
}
if(stu_percentage >= 90 && stu_percentage < 100){
    document.write("Grade is A-1" + "</br>" + "CONGRATULATION!! You Got " +stu_percentage + "%" );
    
}

//(8)

var number = +prompt("Enter a number");
if(number % 3 === 0){
    document.write("Enterened number is divisible by 3")
}
else{
    document.write("Enterened number is not divisible by 3")
}

var even_num = +prompt("Enter a number");
if(even_num % 2 === 0){
    document.write("Enterened number is even");
}
else{
    document.write("Enterened number is odd");
}

//(10)
var T = +prompt("Enter current temperature");
if (T > 10 && T <= 20){
    document.write("OMG! Today’s weather is so Cool.")
}

else if(T > 20 && T <= 30){
    document.write("Today’s Weather is cool.")
}
else if(T > 30 && T <= 40){
    document.write("The Weather today is Normal.")
}
else if(T > 40 && T <= 50){
    document.write("It is too hot outside.")
}
else{
    document.write("It is too hot outside.")
}


//(11)

var char = prompt("Enter your alphabet ");
if(char >= "A" && char <= "Z"){
    alert("It is UpperCase letter")
}
else if(char >= "a" && char <= "z"){
    alert("It is LowerCase letter")
}
else{
    alert("It is not an Alphabet");
}



//Chapter 12-13
//(2)
var a = +prompt("Enter a first number");
var b = +prompt("Enter a second number");
if( a === b){
    alert("Both numbers are equal")
}
else if(a > b){
    alert("First Number is greater than Second Number");
}
else if(a < b){
    alert("Second Number is greater than the First Number");
}
else{
    alert("It is not a Number")
}

//(3)

var n = +prompt("Enter a number");
if(n === 0){
    alert("It is zero number")
}
else if(n > 0){
    alert("It is Positive number")
}
else if(n < 0){
    alert("It is negative number")
}
else{
    alert("It is not a number")
}


//(4)

//(5)
var User_pass = prompt("Please Enter Your Password");
var password = "NSMur@123";
if(User_pass === password){
    alert("“Correct! The password you entered matches the original password");
}
else if(User_pass != password){
    alert("Incorrect Password");
}


//(4)


 