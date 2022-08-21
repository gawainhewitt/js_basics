function factoryAddress(street, city, postcode) {
  return {
    street,
    city, 
    postcode
  };
}

function Address(street, city, postcode) {
  this.street = street;
  this.city = city;
  this.postcode = postcode;
}


// const address = {
//   street: 'Regent Road',
//   city: 'London', 
//   postcode: 'SE24 0EL'
// };

// const showAddress = (address) => {
//   for (let key in address)
//     console.log(`${key}: ${address[key]}`);
// }

// showAddress(address);

// function Circle(radius) {
//   this.radius = radius;
//   this.draw = function() {
//     console.log('draw');
//   }
// }

// const circle = new Circle(1);
// console.log(circle);
// circle.draw();

// let testing123 = ['t', 'fourteen'];

// ('radius' in circle) ? console.log('yes') : console.log('no');


// const showPrimes = (limit) => {
//   for (let num = 2; num <= limit; num ++) 
//     if (isPrime(num)) console.log(num);
// }

// const isPrime = (num) => {
//   for (let factor = 2; factor < num; factor ++)
//     if (num % factor === 0) 
//       return false;

//   return true;
// }

// showPrimes(20);

// const showStars = (rows) => {
//   let starsString = '';
//   for (let row = 0; row < rows; row++) {
//     starsString += '*';
//     console.log(starsString);
//   }
// }

// showStars(2);

// const calculateGrade = (marks) => {
//   const average = calculateAverage(marks);

//   if (average < 60) return 'F';
//   if (average < 70) return 'D';
//   if (average < 80) return 'C';
//   if (average < 90) return 'B';
//   return 'A'
// }

// const calculateAverage = (array) => {
//   let sum = 0;
//   for (value of array)
//     sum += value;
//   return sum / array.length;
// }

// const marks = [90, 70, 90];

// console.log(calculateGrade(marks));

// const sum = (limit) => {
//   let answer = 0;

//   for (let i = 0; i <= limit; i++) {
//     if ( i % 3 === 0 || i % 5 === 0 ) 
//       answer += i;
//   }

//   return answer;
// }

// console.log(sum(15));


// const movie = {
//   title: 'a', 
//   releaseYear: 2018,
//   rating: 4.5,
//   director: 'b'
// }

// const showProperties = (obj) => {
//   for (let prop in obj) {
//     if (typeof obj[prop] === 'string') 
//       console.log(`${prop} ${obj[prop]}`);
//   }
// }

// showProperties(movie);

// const array = [1, 'string', true];

// const countTruthy = (array) => {
//   let count = 0;
//   for (let item of array) {
//     if (item) count ++;
//   }
//   return count;
// }

// console.log(countTruthy(array));


// // showNumbers

// const showNumbers = (limit) => {
//   for (let i = 0; i <= limit; i++){
//     console.log(`${i} ${(i % 2 === 0) ? '"EVEN"' : '"ODD"'}`);
//   }
// }

// showNumbers(3);



// // divisable by 3 => Fizz
// // divisisable by 5 => Buzz
// // Divisible by both 3 and 5 => FizzBuzz
// // Not divisible by 3 -r 5 => number
// // Not a number => 'Not a number'

// const fizzBuzz = (num) => {
//   if (typeof num !== 'number') return NaN;
//   if (num % 15 === 0) return 'FizzBuzz';
//   if (num % 3 === 0) return 'Fizz';
//   if (num % 5 === 0) return 'Buzz'; 
//   return num;
// }

// const output = fizzBuzz(13);
// console.log(output);

// every five more than 70 -> 1 Point
// Math.floor(1.3)
// 12 points -> suspended

// const checkspeed = (speed) => {
//   const speedLimit = 70;
//   const kmPerPoint = 5;
//   if (speed > speedLimit) {
//     const points = Math.floor((speed-speedLimit)/kmPerPoint);
//     if (points >= 1) return (points >= 12) ? 'Suspended': `Points: ${points}`;
//   }
//   return 'Ok';
// }

// console.log(checkspeed(71));

