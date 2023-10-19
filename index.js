// Given the year of birth, if the age is between 13 and 19 (both included) print Teenage and in between 20 and 29 (both included) print Twenties

let Dob = 2001;

let currentYear = 2023;

if((currentYear-Dob>=13) && (currentYear-Dob<=19)){
  console.log("Teenage");
}else if((currentYear-Dob>=20) && (currentYear-Dob<=29)){
  console.log("Twenties");
}else{
  console.log("Out of Range");
}