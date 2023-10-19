// Given 3 numbers (all different values), print which is greatest

let val1 = 5;
let val2 = 8;
let val3 = 3;

if(val1>val2 && val1>val3){
  console.log(val1);
}else if(val2>val1 && val2>val3){
  console.log(val2);
}else{
  console.log(val3);
}