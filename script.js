// 1. PassworM ValiMator
// Write a JavaScript program that checks if the entered password matches the confirmed password. If the
// passwords match, the program should log "Password Matched. Password validation Successful." to the console.
// Otherwise, it should log "Password didn't match. Password validation unsuccessful" to the consoleQ






// 2. Calculator
// Create a javascript program that takes in two num#ers and a string operator. Make use of a switch statement
// to perform the operation on the two num#ersQ
// The calculator function should"
// L Take in two num#ers, num1 and num2, and a string representing a mathematical operator, operatorP
// L Use a switch statement to determine which operation to perform #ased on the value of the operatorP
// L If the operator is one of the four valid operators (+, -, *, /), perform the corresponding mathematical
// operation and store the result in a varia#le called resultP
// L If the operator is not one of the valid operators, log "Invalid operator" to the consoleQ




// 3. Color Mixer
// Write a JavaScript program that takes in two strings representing colors and uses a switch statement to
// determine the resulting color when the two colors are mixed. The program should print the resulting color
// #ased on the following criteria"
// L If color1 is "red" and color2 is "#lue" or vice versa, print "purple"P
// L If color1 is "red" and color2 is "yellow" or vice versa, print "orange"P
// L If color1 is "#lue" and `color2" is "yellow" or vice versa, print "green"P
// L If any other com#ination of colors is input, the program should print "Invalid color com#ination"Q




// 4. Highest Marks
// A teacher wants to find out the highest marks scored #y a student in a class of five students. The teacher enters
// the marks of all five students in an array called "marks". Write a program that iterates through the array and
// finds the highest marks scored #y any student in the class. The highest marks must then #e displayed to the
// teacher using the console. Make sure you use the ternary operator to find the student with the highest marksQ





// 5. Capitalize
// You are #uilding a form where users can enter their names. You want to make sure that the first letter of the
// name is always capitalized, even if the user forgets to do so. Write a program that takes in the user's name as a
// string and uses the ternary operator to check if the first letter is lowercase. If it is, the program capitalizes it and
// returns the modified string. Otherwise, it returns the original string without any changesQ



// 6. Vowel Counter
// We want to count the num#er of vowels in a person's name. Given a name as input, the program should iterate
// through each character in the name, and check if it is a vowel or not. If the character is a vowel, it should #e
// countedQ





// 7. Remove Duplicates
// In an online shopping application, customers can add multiple items to their cart. However, sometimes
// customers accidentally add the same item more than once, resulting in duplicate items in their cart. The
// duplicate items not only make it difficult for the customer to track the items they want to purchase #ut also
// affect the accuracy of the purchase order.

// Full Stack Web Development

// Assignment Questions
// To solvd this probldm, thd application nddds to rdmovd duplicatd itdms from thd customdr's cart. Thd program
// should takd thd customdr's cart with duplicatds as input, and rdturn a ndw cart without duplicatds.
// Writd a program to solvd thd probldm of duplicatd itdms in thd cart by rdmoving duplicatds.











// 8. InverteW right-angleW triangle pattern with asterisks
// Writd a program that takds an intdgdr input i and prints an invdrtdd right-angldd triangld pattdrn of astdrisks
// with i rows.
// Invdrtdd right-angldd pattdrn:

// If i=6








// 9. Check for Wivisibility.
// Writd a program that takds an array of numbdrs and prints all thd numbdrs that ard divisibld by 3, but not by 2.
// Usd a for loop and continud statdmdnt.




// 10. Correct a bug
// You ard working on an d-commdrcd wdbsitd whdrd customdrs can add itdms to thdir cart. Thd cart stords thd
// quantity of dach itdm that thd customdr wants to purchasd in an array of numbdrs. Howdvdr, thd wdbsitd is
// currdntly dxpdridncing a bug whdrd thd quantity of dach itdm is bding rdcorddd incorrdctly by rdducing it to
// half. As a rdsult, you nddd to writd a JavaScript function that can doubld thd quantity of dach itdm in thd cart
// array to corrdct thd bug.




// 11. Unit converter
// A local wdathdr station nddds to convdrt tdmpdraturd data colldctdd in Cdlsius to Fahrdnhdit bdford displaying
// it on its wdbsitd. Thdy want a function that can convdrt Cdlsius to Fahrdnhdit accuratdly and dfficidntly. Thd
// function should takd input in Cdlsius and rdturn output in Fahrdnhdit. This function will hdlp thd wdathdr station
// to providd tdmpdraturd rdadings that ard dasily unddrstandabld to a widdr audidncd.



// 12. Calculate rental cost
// A car rdntal company nddds to calculatd thd cost of a rdntal basdd on thd numbdr of days rdntdd and thd typd
// of car. Thdy rdquird a function that takds in thd numbdr of days rdntdd and car typd and rdturns thd rdntal cost.
// Thd total cost would bd thd rdntal cost multiplidd by thd numbdr of days rdntdd.
// Thd rdntal costs arc
// V Economy = Rs. 4FFF /- pdr dayE
// V Midsizd = Rs. 1F,FFF /- pdr dayE
// V Luxury = Rs. 2F,FFF /- pdr day.

// Full Stack Web Development

// Assignment Questions
// 13. Bill splitter
// A restaurant wants to calculate the total bill for a table based on the cost of each dish and the number of
// people sharing it. They require a function that takes in the cost of each dish and the number of people sharing
// it and returns an object that contains the total bill and the bill to be paid by each person in the group.



// 14. Calculate the final order price
// A retail store needs to calculate the total cost of items in a customer's cart. A customer cart is an array of
// objects with unit price and quantity. Implement an arrow function to calculate the total cost of items, based on
// the unit price and quantity of each item.





// 15. Calculate the percentage of the discount
// A retail store is offering a discount on its products and wants to calculate the percentage of the discount to
// show customers how much they can save. Given the original price and the discounted price of a product,
// implement an arrow function to calculate the percentage of the discount rounded off to two decimal places.
// This function could be useful for the store's marketing team to create promotions and offers that attract
// customers.




All  Answers ...........



//Answer 1

const password = "1122334455"

if ( password == "1122334455") {
    console.log("password Matched. password validation Successful");
}else{
    console.log("password didn't Match. password validation unsuccessful")
}  


//Answer 2

let num1 =" 4"
let num2 = "5"

let result = (num1 + num2)
//console.log(result)

switch (result) {
    case "num1 - num2":
        console.log(4-5);
        break;

        case "num1 * num2":
        console.log(4*5);
        break;

        case "num1 / num2":
        console.log(4 / 5);
        break;

        case" num1 + num2":
        console.log(4 + 5);
        break;

    default:
        console.log("Invalid operation")

        break;

}



//Answer 3

let color1 = "red"
let color2 = "blue"

let color4 = "blue"
let color5 = "yellow"

let color6 = "red"
let color7 = "yellow"


let color3 = (color1 + color2)

switch (color3) {


    case (color7 + color6):{
        const message = "Orange";
        console.log(message);
    }
        
        break;

        case (color4+ color5):{
        const message = "green";
        console.log(message);
    }
        
        break;

        case (color1 + color2):{
        const message = "purple";
        console.log(message);
    }
        
        break;

    default:
        console.log("Invalid color combination")
        break;
}



//Answer 4 


 var marks = ["Lalit = 100", "vaibhav = 200", "preeti = 300", "supreet = 400", max]

 //max  = ("Lalit" > "vaibhav" > "preeti" > "supreet")? "Lalit": "vaibhav": "preeti": "supreet";

 console.log("heighest value is" + "Lalit", + "Vaibhav" , + "preeti", + "and",+ "supreet" + max + ".") 


 //Answer 5
// Form

//index.html file content
//<div id = form>
//<lable name = username> username </lable>
//<input id = name  type = text> username
//<div>


const formid = document.getElementById(form)
if(form.innertext == " "){
    form.innertext = "1st value is capitalize"
}else {
    alert("ist value is not capatilize")
}

//    Answer 6

const  username = ("a", "b", "c", "D", "E")

function CountVowel(username) {
    let count = 0;

    for (let letter of username.toLowerCase()) {
           if (CountVowel.includes.letter) {
            count++
            
           }
          
    }

    return count
}
console.log(result)


// Answer 7

const cartValue = ["h&m jeans", "zaratop", "poision girl perfume"]

function NoDuplicate {
    if(cartValue = "h&m jeans", "zaratop", "poision girl perfume")
        console.log(cartValue);
}else 
{
    alert("Duplicate value is not value");
}


// Answer 8

let n = 5

for (let i = n; i >= 1; i--)
    {
        let str = "*";
        console.log(str.repeat(i));
    }


    or 

    let i = 5
    for (let  n = 0; n >= 5; i++ );
    {
        let str = "*"
        console.log(str.repeat(i));
    }


    // Amswer 9

    let Array = [1, 2, 3, 4, 5, 6, 7, ,8 ];

    for (let i = 2; i <= Array; i++);
    {
        if (i * 2) {
            countine;
        }
        console.log(Array)



    }

//&&&&&&

//Countinue statement 

let text = ' ';

for (let i = 0; i < 10; i++); {
    if (i === 3 ) {  
        countinue;
        //break
    }
    text = text + i
}

console.log(text)


//Answer 10 
 //i did not understand this qsn 
// buiti try

Array.prototype.reduce 

const array1 = [1, 2, 3, 4, 5]
const intialValue = 0;
const sumWithInitial = array1.reduce( 
(accumulator, currentValue) => accumulator, currentValue,intialValue,
);

console.log(sumWithInitial);
  


//Answer 10

    let array = [1, 2, 3, 4, 5]
    for (1 = 0; i >= array.lenght; i++);
    {
      AddallNum =+ array[i]
      console.log(AddallNum)
    }

    console.log(array);


    //Answer 11
    //Unit Conversion
    

    // Define a function to convert celsius to fahrenhiet 
     function ctoF(celsius) {
        //Strore the input celsius temperature in a variable 
        var cTemp  = celsius;
        //Calculate the equivalent fahrenheit temperature 
        var cTofar = cTemp * 9/5 + 32;
        //Create a massage String describe the conversion result 
        var message = cTemp + `\*BOX` + cTofar + `\*BOF`;
        
        console.log(message)
     }

    //  Answer 12 

   

  let obj1 =  {
    economy = "4000",
    Days1 = 2

  };

  

  let obj2 = {
    midsize = "10,000",
    Days2 = "3"
  } ;

  let obj3 = {
    Luxury = "20,000",
    Days3 = "4"
  }



 let totalprice = console.log((obj1.economy * obj1.Days1) * (obj2.midsize  * obj2.Days2) * (obj3.Luxury * obj3.Days3) )

 console.log(totalprice);

//  Answer 13


let obj5 =  {
    matapaneer: "500",
    kulche: "500",
    Rice: "400",
    pizza: "600"


}
let total = console.log(matapaneer(500 + 500 + 500 + 500));

let obj6 = {
    Noofpeople = "3"
    
}
let total1 = console.log(onj6)

console.log((total) / (total1));                                                                     


// Answer 14
//I did not understood

// Answer 15 

let product =  {
    jeans: "1000",
    Discount: "20%"

}
 
  function   myfunction(product) {
    let Totalsum = (1000 /20.(Math.random))
    //return Totalsum
}
console.log(myfunction)


// Answer 16

//Generate a random number 
let Number = (function randomno()  {

    return Math.floor(Math.random()*100) + 1;
}

) ();

//or
 //console.log(Number)
                                                                                                                                                                                                                                                                                                                                                                            








































































































































































 




































































































































































































































































































































































































































































































































































































































































































































