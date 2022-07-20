let grade = 10;
switch (true) {
  case grade >= 70:
    console.log("excellent");
    break;
  case grade >= 60:
    console.log("very good");
    break;
  case grade >= 50:
    console.log("credit");
    break;
  case grade >= 40:
    console.log("pass");
    break;
  case grade < 40:
    console.log("failed");
    break;
  default:
    console.log("You didn't take the test");
}
