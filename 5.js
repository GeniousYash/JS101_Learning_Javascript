// Given the days of the week in short format "Sun", "Mon" ... print in long format "Sunday", "Monday", ...

let day = "Mon";

switch (day){
  case "Sun":
    console.log("Sunday");
    break;
  case "Mon":
    console.log("Monday");
    break;
  case "Tue":
    console.log("Tuesday");
    break;
  case "Wed":
    console.log("Wednesday");
    break;
  case "Thur":
    console.log("Thursday");
    break;
  case "Fri":
    console.log("friday");
    break;
  case "Sat":
    console.log("Saturday");
    break;
  default: 
    console.log("Not a Day");
}