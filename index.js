function scuberGreetingForFeet(distance) {
  if (distance <= 400) {
    return "This one is on me!";
  } else if (distance > 400 && distance <= 2000) {
    return "That will be twenty bucks.";
  } else if (distance > 2000 && distance <= 2500) {
    return "I will gladly take your thirty bucks.";
  } else {
    return "No can do.";
  }
}

function ternaryCheckCity(city) {
  return city === "NYC" ? "Ok, sounds good." : "No go.";
}

function switchOnCharmFromTip(tip) {
  switch (tip) {
    case "generous":
      return "Thank you so much.";
    case "not as generous":
      return "Thank you.";
    default:
      return "Bye.";
  }
}

// Example function calls (optional for testing)
console.log(scuberGreetingForFeet(199)); // "This one is on me!"
console.log(scuberGreetingForFeet(1500)); // "That will be twenty bucks."
console.log(scuberGreetingForFeet(2200)); // "I will gladly take your thirty bucks."
console.log(scuberGreetingForFeet(3000)); // "No can do."

console.log(ternaryCheckCity("NYC")); // "Ok, sounds good."
console.log(ternaryCheckCity("LA")); // "No go."

console.log(switchOnCharmFromTip("generous")); // "Thank you so much."
console.log(switchOnCharmFromTip("not as generous")); // "Thank you."
console.log(switchOnCharmFromTip("other")); // "Bye."