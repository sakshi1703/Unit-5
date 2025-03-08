// STEP 1: conacanenate firstname with stu_code

let email = "Sakshi@gmail.com";
let stu_code = "ft38_328";

function concanenate(email, stu_code){
    let firstName = email.split("@")[0];
    console.log(stu_code + firstName) 
}

concanenate(email, stu_code);


// step 2: convert to lower case
function tolowercase(email, stu_code){
    let firstName = email.split("@")[0];
    let ans = (stu_code + firstName).toLowerCase()
    console.log(ans)
}

tolowercase(email, stu_code)

// step 3: remove vowels

let string = "ft38_328sakshi"

function removeVowels(string){
  
    let bag = []
    for(let i=0; i < string.length; i++){

        bag.push(string[i])

        if(string[i] === "a" || string[i] === "e" || string[i] === "i" || string[i] === "o" || string[i] === "u"){
            bag.pop()
        }
    }
    let res = bag.join("")
    console.log(res)
}

removeVowels(string)

// step 4: extract number
let str = "ft38_328sksh";

function extractnumber(str){
    let num = [];
    for(let i=0; i<str.length; i++){
        if(str[i] >=0 && str[i] <=9){
            num.push(str[i])
        }
    }
    let result = num.join("")
    console.log(result)
}
extractnumber(str)

// step 5: remove prime numbers

let number = 38328;

function removePrime(number){

    let bag = [];
    for(let i=0; i<number.length; i++){
        // bag = bag + number[i]
        if(number % i !== 0){
            bag.push(number[i])
        }
    }
    console.log(bag);

}

removePrime(number);

// step 6: select char at even indexes

let char = "ft38_328Sakshi";


function evenindex(char){

    let even = []
    for(let i=0; i<char.length; i++){
        if(i%2===0){
            even.push(char[i])
        }
    }
    let answer = even.join("")
    console.log(answer)
}

evenindex(char);

// step 7: convert string to numbers

let strng = "f3_2Skh";
let bag = []
function convertonum(strng){
    for(let i=0; i<strng.length; i++){
        if(strng[i] >=0 && strng[i] <=9){
            bag.push(28 + " ")
        }
        if(strng[i] === "!" || strng[i] === "_" || strng[i] === "@" || strng[i] === "#" || strng[i] === "$" || strng[i] === "%" || strng[i] === "^" || strng[i] === "&" || strng[i] === "*"){
            bag.push(27 + " ")
        }
    }
    let reult = bag.join("")
    console.log(reult)
}

convertonum(strng)