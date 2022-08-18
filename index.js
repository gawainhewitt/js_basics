const array = [1, 'string', true];

const countTruthy = (array) => {
  let count = 0;
  for (let item of array) {
    if (item) count ++;
  }
  return count;
}

console.log(countTruthy(array));


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

