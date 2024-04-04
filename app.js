console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function printOdds(count) {
  for (let i = 0; i <= count; i++) {
    if (i % 2 !== 0) {
      console.log(i);
    }
  }
}
printOdds(40);

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

function checkAge(userName, age) {
  const aboveSixteen = `Congrats ${userName}, you can drive!`;
  const belowSixteen = `Sorry ${userName}, but you need to wait until you're 16.`;

  if (age === undefined || userName === undefined) {
    console.log("Need Name and Age.");
  } else if (age < 16) {
    console.log(belowSixteen);
  } else {
    console.log(aboveSixteen);
  }
}
checkAge("Marie", 17);

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

function cartesianPlane(x, y) {
  if (x == undefined || y == undefined) {
    console.log("Invalid");
    returnnull;
  }
  if (x === 0 && y === 0) {
    console.log("Origin.");
  } else if (x === 0) {
    console.log("y-axis");
  } else if (y === 0) {
    console.log("x-axis");
  } else if (x > 0 && y > 0) {
    console.log("Quadrant 1");
  } else if (x < 0 && y > 0) {
    console.log("Quadrant 2");
  } else if (x < 0 && y < 0) {
    consolelog("Quadrant 3");
  } else if (x > 0 && y < 0) {
    console.log("Quadrant 4");
  }
}
cartesianPlane(0, 2);

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");
function triangle(trngl1, trngl2, trngl3) {
  if (trngl1 + trngl2 < trngl3) {
    return "Invalid Triangle";
  }
  if (trngl1 === trngl2 && trngl2 === trngl3) {
    return "Equilateral Triangle";
  }
  if (trngl1 === trngl2 || trngl1 === trngl3 || trngl2 === trngl3) {
    return "Isosceles Triangle";
  }

  return "Scalene Triangle";
}

console.log(triangle(1, 6, 8));
console.log(triangle(2, 2, 2));
console.log(triangle(3, 3, 4));
console.log(triangle(4, 1, 2));

// Exercise 5 Section
console.log("EXERCISE 5:\n==========\n");

function dataPlan(planLimit, currDay, usageSoFar) {
  const daysRemaining = 30 - currDay;
  const dataRemaining = planLimit - usageSoFar;
  const idealAverage = (planLimit / 30).toFixed(2);
  const currAvgUsage = (usageSoFar / currDay).toFixed(2);
  const projectedUsage = currAvgUsage * 30;
  const exceededUsage = (projectedUsage - planLimit).toFixed(2);
  const underUsage = planLimit - projectedUsage;
  const newIdealUsage = (dataRemaining / daysRemaining).toFixed(2);

  let output = "";
  output += `${currDay} days used, ${daysRemaining} days remaining\nAverage daily use: ${currAvgUsage} GB/day\n`;

  if (exceededUsage > 0) {
    output += `You are Exceeding your average daily use (${currAvgUsage} GB/day), contonuing this high usage, you'll exceed your data plan by ${exceededUsage} GB.\nTo stay below your data plan, use no more than ${newIdealUsage} GB/day.`;
  } else if (currAvgUsage < idealAverage) {
    output += ` You are under your average daily use (${currAvgUsage} GB/day), continuing this reserved usage level, you'll still have ${underUsage} GB.\nTo take avantage of every last GB you have, start using ${newIdealUsage} GB/day.`;
  } else {
    output += "You are using the best out of your plan.";
  }

  console.log(output);
}
dataPlan(100, 15, 56);
dataPlan(100, 23, 39);
dataPlan(100, 15, 50);
