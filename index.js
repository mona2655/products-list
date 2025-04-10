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