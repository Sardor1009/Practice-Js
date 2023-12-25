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
// function getSum(n){
//     let natija = 0;
//     for (let i=1; i <= n; i++ ){
//         natija += i * (n - i + 1);
//     }
//     return natija;
// }
 
// let n = 4
// console.log(getSum(n));

// Imtihon 2
// function getLongestWord(arr) {
//     let engUzunSoz = "";
//     for  (let i = 0; i < arr.length; i++ ){
//         if (arr[i].length > engUzunSoz.length){
//             engUzunSoz = arr [i];
//         }
//     }
//     return engUzunSoz
// }

// let arr = ["Abdulaziz", "Murod", "Yulduz", "Abdug'affor", "Jamila"];
// console.log( getLongestWord(arr));


// Imtihon 3
// function  getDividers(arr, n) {
//     let YangiMassiv = [];

//     for ( let i = 0; i < arr.length; i++ ){
//         if (arr[i] % n == 0){
//             YangiMassiv.push (arr[i]);
//         } 
//     }
//     return YangiMassiv
// }

// console.log(getDividers( [2, 5, 7, 10, 0, 18, 15], 5
// ));

// Imtihon 4
// function  checkWordCapitalize(str) {
//     const sozlar = str.split (" ");

//     const kattaHarf = sozlar.every ((soz) =>
//     soz[0] === soz [0].toUpperCase());

//     return kattaHarf;
// }

// let str = "Abdulaziz Programmer Is FullStack Developer"
// console.log(checkWordCapitalize(str)
// );

// Imtihon 5
// function getCharCountObj(str) {
//     return str
//     .split (" ")
//     .reduce ((acc, char) => {
//         if (!acc.some((item) => item.char === char))
//         {
//             acc.push ({char , count: 1});

//         }
//         else{
//             acc.find ((item) => item.char === char).count ++;

//         }
//         return acc;
//     }, [])
    
//     .reduce ((result, item) => {
//         result[item.char] = item.count;
//         return result 
//     } , {});
// }
// let str = "Abdulaziz Programmer"
// console.log(getCharCountObj(str));

// Imtihon 6
// function changeObjToString(obj) {
//     const ObyektQiymatlari = Object.entries(obj);
//     let natija = []

//     for (let i = 0; i < ObyektQiymatlari.length; i++){
//         natija = natija.concat(ObyektQiymatlari[i]);
//     }

//     const stringNatija = natija.join ("");

//     return stringNatija
// }

// let obj = {a: 1, b: 2, c: 3}
// console.log(changeObjToString(obj));

// Imtihon 7
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

// function  deleteProducts(){
//     const OchiriladiganId = Array.from (arguments);

//     for (let i = products.length - 1; i >= 0; i --)
//     {
//         if (
//             OchiriladiganId.includes(products[i].id)
//         )
//         {
//             products.splice (i, 1);
//         }
//     }
// return products;

// }
// console.log(deleteProducts(4, 6, 9));

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

V

