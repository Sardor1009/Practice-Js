// MISOLLAR PASRODA
//MISOLLAR PASRODA
//MISOLLAR PASRODA
//240- QATORDAN BOSHLANGAN
//240- QATORDAN BOSHLANGAN
//240- QATORDAN BOSHLANGAN
//240- QATORDAN BOSHLANGAN

// let classes = [
//   "birlar",
//   "minglar",
//   "millionlar",
//   "milliardlar",
//   "trillionlar",
//   "oktallionlar",
// ];
// let n = 1232434353453527;
// let numbers = n.toString();
// let obj = {};

// for (i = 0; i <= numbers.length; i += 3) {
//   obj[classes[i / 3]] =
//     i === 0 ? +numbers.slice(-i - 3) : +numbers.slice(-i - 3, -i);
// }
// console.log(obj);

// pr2

// const animals = [
//   "dog",
//   "chicken",
//   "cat",
//   "indyuk",
//   "indyuk",
//   "dog",
//   "dog",
//   "dog",
//   "chicken",
//   "rabbit",
//   "rabbit",
//   "rabbit",
// ];

// result = animals.reduce((acc, el) => {
//   if (el in acc) {
//     acc[el]++;
//   } else {
//     acc[el] = 1;
//   }
//   return acc;
// })
// console.log(acc[el]);

// console.log(result);

// 1 * 2 + 2 * 3 + 3 * 4 + 4 * 5

// function getMul(n){
//   mul = 0;
//   for(i = 1; i < n; i++){
//     mul += i * (i + 1)
//   }
//   return mul
// }

// let res = getMul(5)
// console.log(res);

// function getSUMnumbers(n) {
//   return n
//     .toString()
//     .split("")
//     .reduce((acc, el) => {
//       return (acc += +el);
//     }, 0);
// }

// function GetSumDigits(arr) {
//   return arr.reduce((el) => {
//     return getSUMnumbers(el);
//   }, []);
// }

// let arr = [1589, 31851, 512, 78, 180975];
// let res = GetSumDigits(arr)
// console.log(res);

// function AnotherSum(m) {
//   return m
//     .toString()
//     .split("")
//     .reduce((acc, el) => {
//       return (acc += +el);
//     }, 0);
// }

// function SumOfDigits(arr) {
//  return arr.map((el) => {
//     return AnotherSum(el);
//   });
// }

// let arr = [1589, 31851, 512, 78, 180975];
// let res = SumOfDigits(arr);
// console.log(res);

// const ids = [1, 4, 8];

// const products = [
//   { id: 1, name: "Bike", price: 100 },
//   { id: 2, name: "Bike", price: 100 },
//   { id: 3, name: "Bike", price: 100 },
//   { id: 4, name: "Bike", price: 800 },
//   { id: 5, name: "Bike", price: 100 },
//   { id: 6, name: "Bike", price: 100 },
//   { id: 7, name: "Bike", price: 100 },
//   { id: 8, name: "Bike", price: 200 },
//   { id: 9, name: "Bike", price: 100 },
// ];

// function getTotalPrice(products, ids) {
//   return products.reduce((acc, el) => {
//     return ids.includes(el.id) ? acc + el.price : acc;
//   }, 0);
// }

// let res = getTotalPrice(products, ids);
// console.log(res);

// pr5

// let str = "Men kelajakda kuchli dasturchi bo'laman.";

// const vowels = "aeiouo'";
// let Unvowels = ""

// for (i = 97; i <= 122; i++) {
//  (!vowels.includes(String.fromCharCode(i)))
//     ? (Unvowels += String.fromCharCode(i))
//     : Unvowels;
// }

// function getDif(str) {
//     str = str.toLowerCase()
//     let vowelcount = 0;
//     let unvowelcount = 0;
//     for(let el of str){
//         vowels.includes(el) ? vowelcount ++ : vowelcount;
//         Unvowels.includes(el) ? unvowelcount++ : unvowelcount;
//     }
//     return unvowelcount - vowelcount;
// }

// let res = getDif(str);
// console.log(res);

// pr6

// let numbers = [10, 12, 2003, 1434, 443, 434, 23432, 3434524];

// function GetNumberDigit(numbers){
//    return numbers.reduce((acc, el)=> (
//      {...acc, [el]: el.toString().length}
//     ), {})
// }

// let res = GetNumberDigit(numbers)
// console.log(res);

// pr7

// const obj = {
//   a: false,
//   b: 12,
//   c: "salom",
//   e: 102,
//   f: null,
//   g: -1,
//   h: "",
// };

// function GetTrueFalse(obj) {
//   truthy = {};
//   falsy = {};
//   let entries = Object.entries(obj);
//   for (let [key, value] of entries) {
//     value ? (truthy[key] = value) : (falsy[key] = value);
//   }
//   return {
//     truthy: truthy,
//     falsy: falsy
//   };
// }

// let res = GetTrueFalse(obj);
// console.log(res);

// let arr = [10, 5, 7, 8, 11, 3, 1, 6];

// function getCloseSum(arr) {
//   return arr.map((el, i) => {
//     // if (i === 0) {
//     //   return arr[0] + arr[1];
//     // } else if (i === arr.length - 1) {
//     //   return arr[arr.length - 1] + arr[arr.length - 2];
//     // } else {
//     //   return arr[i] + arr[i + 1] + arr[i - 1];
//     // }

//     return (arr[i-1]|| 0) + (arr[i +1]|| 0 )+ arr[i]
//   });
// }

// let res = getCloseSum(arr);
// console.log(res);
// let count = 0;
// func()
// function func(){
//   console.log("func", count)
//   count++;
//   return func()
// }

// function factorial(n){
//   if (n ===1){
//     return 1;
//   }
//   return n * factorial(n-1)
// }

// let res = factorial(6)
// console.log(`1 dan  gacha sonlar kopaytmasi bu:`, res);

// Imtihon 1

// function getSum(n) {
//   mul1 = 1;
//   mul2 = 1;
//   for (i = 1; i <= 2 * n - 1; i += 2) {
//     mul1 *= i;
//   }
//   for (i = 2; i <= 2 * n; i += 2) {
//     mul2 *= i;
//   }
//   return mul1 + mul2;
// }

// let res = getSum(3);
// console.log(res);

// Imtihon 2

// function getHighestNumberOfDigits(arr) {
//   max = arr[0];
//   for (el of arr) {;
//     if (max < el) {
//       max =el;
//     }
//   }
//   return max;
// }

// let arr = [1589, 31851, 512, 180975, 78, 123456768798];
// let res = getHighestNumberOfDigits(arr);
// console.log(res);

// function GetTheLongestWord(arr) {

//   for (let el of arr) {
//     let Length = el.length;
//     if (arr[0].length < Length) {
//       arr[0] = el;
//     }
//   }
//   return arr[0];
// }

// let arr = ["Abdulaziz", "Murodullajonn", "Yulduz", "Abdug'affor", "tyyyjfgnndfsdfdgfhjgkhjfgdfdvsfd"];
// let res = GetTheLongestWord(arr);
// console.log(res);

// Imtihon 3

// function getStringArr(arr) {
//   let out = []
//   for(let el of arr){
//     if(typeof el === "string"){
//       out.push(el);
//     }
//   }
//   return out;
// }

// let arr = [1, "Abdulaziz", "Elbek", false, [], "Jurabek", {}];
// let res = getStringArr(arr);
// console.log(res);

// Imtihon 4

// function getPunctuationNumber(str) {
//   let number = 0;
//   for (let el of str) {
//     punctuationSigns.includes(el) ? number++ : number;
//   }
//   return number;
// }

// let str = "Hello! How. are you? I'm doing great. What's new?";
// const punctuationSigns = [
//   "!",
//   '"',
//   "#",
//   "$",
//   "%",
//   "&",
//   "'",
//   "(",
//   ")",
//   "*",
//   "+",
//   ",",
//   "-",
//   ".",
//   "/",
//   ":",
//   ";",
//   "<",
//   "=",
//   ">",
//   "?",
//   "@",
//   "[",
//   "\\",
//   "]",
//   "^",
//   "_",
//   "`",
//   "{",
//   "|",
//   "}",
//   "~",
//   "'",
// ];
// let res = getPunctuationNumber(str);
// console.log(res);

// Imtihon 5

// function switchLetters(str) {
//   let out = "";
//   for (el of str) {
//     if (el.codePointAt() >= 65 && el.codePointAt() <= 90) {
//       out += el.toLowerCase();
//     } else if (el.codePointAt() >= 97 && el.codePointAt() <= 122) {
//       out += el.toUpperCase();
//     } else {
//       out += " ";
//     }
//   }
//   return out;
// }
// let str = "Abdulaziz Programmer";
// let res = switchLetters(str);
// console.log(res);

// Imtihon 6

// function changeObjToArr(obj) {
//   return Object.entries(obj).map(([key, value]) => key + value);
// }

// const inputObj = { a: 1, b: 2, c: 3, c: 4 };
// const outputArr = changeObjToArr(inputObj);

// console.log(outputArr);

// function changeObjToArr(obj) {
//   let result = [];
//   let out = Object.entries(obj);
//   for (let [key, value] of out) {
//      result[key] += value
//   }
//   return result;
// }
// let obj = { a: 1, b: 2, c: 3 };
// let res = changeObjToArr(obj);
// console.log(res);

// Imtihon

// function seperateStudents(students) {
//   let grant = [];
//   let contract = [];
//   for (let el of students) {
//     el.isGrant === true ? grant.push(el.name) : contract.push(el.name);
//   }
//   return {
//     grant,
//    contract,
//   };
// }

// let students = [
//   { name: "Jurabek", isGrant: false },
//   { name: "Elbek", isGrant: true },
//   { name: "Shamshod", isGrant: false },
//   { name: "Kamola", isGrant: false },
//   { name: "Gulnoza", isGrant: true },
//   { name: "Savlatbek", isGrant: false },
// ];

// let res = seperateStudents(students);
// console.log(res);

// Imtihon 8

// const products = [
//   { id: 1, name: 'Bike', price: 100 },
//   { id: 2, name: 'TV', price: 400 },
//   { id: 3, name: 'Album', price: 800 },
//   { id: 4, name: 'Book', price: 600 },
//   { id: 5, name: 'Phone', price: 500 },
//   { id: 6, name: 'Computer', price: 1000 },
//   { id: 7, name: 'Skate', price: 300 },
//   { id: 8, name: 'Keyboard', price: 200 },
//   { id: 9, name: 'Bottle', price: 700 },
// ];

// function increaseProductPrice(products, id, n) {
//     for (let i = 0; i < products.length; i ++){
//         if (products[i].id === id) {
//             products[i].price += (products[i].price * n) / 100;

//         }
//     }
//     return products ;
// }
// console.log(increaseProductPrice(products, 6, 20)
// );

// Imtihon 9

// function count(str, char) {
//     let count = 0;

//     for (let i = 0; i <str.length; i ++) {
//         if (str[i] === char ){
//             count ++;
//         }
//     }
//     return count;
// }
// let str = "Abdulaziz Programmer"
// let char = "a"
// console.log(count(str, char));

// Imtihon 10
// let obj = {
// 	a: 10,
// 	b: 5,
// 	c: 15
// };
// function getInverse(obj){
//     const yangiObyekt = {};

//     for ( const key in obj){
//         const natija = obj[key];
//         yangiObyekt[natija] = key;
//     }
//     return yangiObyekt;

// }

// console.log(getInverse(obj));
