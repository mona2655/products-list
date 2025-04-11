// function palindrome(){
//    const string = "level"
//    const lower = string.toLowerCase()

//   const newString = lower.split('').reverse().join('')

//   console.log(newString)
// }

// palindrome()

// function countVowels(){
//   const string = "javascript"
//   const lower = string.toLowerCase()
//   const vowels ="aeiou"
//   count = 0;
//   for(let i=0; i < lower.length; i++){
//    if(vowels.includes(lower[i])){
//     console.log("Vowel found:", lower[i]);
//     count++
//    }
//    console.log("Number of vowels:", count);
//   }
// }
// countVowels()

// function primeNumber(num){
  
    
//    for(let i = 2; i <=num /2 ; i++)
//    if(num % i === 0){
//        console.log("num is not a  prime")
//        return
//    }
//    console.log("its a prime number")
// }

// primeNumber(3)

// function pyramid(num){

//    for(let i= 1; i<= num; i++){
//     let row ='' 
//      for(let j = 1; j <= i; j++){
//       row += j;
//      }
//      console.log(row)
//    }
// }
// pyramid(3)

// const num =  parseInt(prompt('Please enter a number'));
// const ui = document.getElementById('result')


// function numGenertor(n){
//   let pyramid = '';
//   for(let i =1; i<= n; i++){
//     let row = ''
//     for(let j= 1; j<= i ; j++){
//       row += j;
//     }
//     pyramid += row + '<br>'
//   }
//   ui.innerHTML = pyramid
// }
// numGenertor(num)

// function largestNum (){
//     let array = [5,2, 7,9]
//     let firstNum = -Infinity;

//     let secondNum= -Infinity;

//     for(let i= 0 ; i< array.length; i++){
//          let currentVal = array[i]

//         if(currentVal > firstNum){
//             secondNum = firstNum
//             firstNum = currentVal
//         }else if
//             ( currentVal > secondNum && currentVal !== firstNum){

//             }
//         }
//         console.log("Second largest is:", secondNum);
//     }

// largestNum()

// function printNum (){
//     let array = [3, 7, 1, 9];

//     for(let i =0; i< array.length; i++){
//         console.log(array[i])
//     }
// }
// printNum()

// function sum(){
//     let array = [4, 6, 2];
//     let sum = 0;
//     for(let i =0; i< array.length; i++){
//         sum += array[i]
//     }
//     console.log(sum)
// }

// sum()

// function countOddEven(){
//     let array = [1, 2, 3, 4, 5];
//     let evenCount = 0;
//     let oddCount = 0;

// for(let i = 0; i < array.length; i++){
//     let num = array[i]
//     if(num % 2 === 0){
//         evenCount++
//     }else{
//         oddCount++
//     }
// }
// console.log('number is odd', oddCount)
// console.log('number is even', evenCount )
// }
// countOddEven()

// function largestNum(){
//     let array = [4, 1, 9, 7];
//     let largestval = array[0];
//     for(let i = 0; i < array.length; i++){
//      let  currretval =  array[i]
      
//        if(currretval > largestval){
//         largestval = currretval
//        }
//     }
//     console.log(largestval)

// }
// largestNum()

// let person = {
//     name: "Aarav",
//     age: 25,
//     city: "Delhi"
// };
// person.profession = "Engineer";
// delete person.city
// console.log(person)
// console.log("Name:",person.name)
// console.log("Age:",person.age) 
  
// let student = {
//     name: "Diya",
//     grade: "A",
//     subject: "Math",
//     rollNo: 21
//   };

//   for(let key in student){
//     console.log(key + ':', student[key])
//   }

// let numbers = [1, 2, 3, 4];

// const newarr = numbers.map((number) => number * 2)
// console.log(newarr)

// let numbers = [1, 2, 3, 4, 5, 6];

// const newArr = numbers.filter((number) => (number % 2 === 0))

// console.log(newArr)

let numbers = [1, 2, 3, 4, 5];

const value = numbers.reduce(function(p, n){
    return p + n
}, 0)
console.log(value)