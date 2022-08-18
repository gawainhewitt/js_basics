// every five more than 70 -> 1 Point
// Math.floor(1.3)
// 12 points -> suspended

const checkspeed = (speed) => {
  const speedLimit = 70;
  const kmPerPoint = 5;
  if (speed > speedLimit) {
    const points = Math.floor((speed-speedLimit)/kmPerPoint);
    if (points >= 1) return (points >= 12) ? 'Suspended': `Points: ${points}`;
  }
  return 'Ok';
}

console.log(checkspeed(71));

