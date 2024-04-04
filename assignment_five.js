// Chapter 2
//Looping a triangle
for (i = 0; i < 7; i++){
  let str = "";
  for(j = 0; j <= i; j++){
    str = str + "#";
  }
  console.log(str);
}

//FizzBuzz
for(i = 1; i < 100; i++){
  if((i % 3 === 0) && (i % 5 === 0)){
   console.log("FizzBuzz"); 
  }
  else if(i % 3 === 0){
    console.log("Fizz");
  }
  else if(i % 5 === 0){
    console.log("Buzz");
  }
  else console.log(i);
}

//Chessboard
let size = 8;

for (i = 0; i < size; i++){
  let str1 = "";
  for(j = 0; j < size; j++){
    
    if(i % 2 === 0){
      if (j % 2 === 0) str1 = str1 + " ";
      else str1 = str1 + "#";
    }
    else{
      if (j % 2 === 0) str1 = str1 + "#";
      else str1 = str1 + " ";
    }
    
  }
  console.log(str1);
}


// Chapter 3
//Minimum
let min = function(x, y){
  if(x > y) return y;
  else return x;
};
console.log(min(0, 10));
console.log(min(0, -10));

//Recursion
let isEven = function(x){
  if(x === 0) return true;
  if(x == -1) return false;
  else return isEven(x - 2);
};
console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));

//Bean counting
let countBs = function(string){
  counter = 0;
  for (i = 0; i <= string.length; i++)
    {
      if(string[i] == "B") counter++;
    }
  return counter;
};

let countChar = function(string, char){
  counter = 0;
  for (i = 0; i<= string.length; i++)
    {
      if(string[i] == char) counter++;
    }
  return counter;
}

console.log(countBs("BOB"));
console.log(countChar("kakkerlak", "k"));

// Chapter 4
//The sum of a range
// let range = function(start, end, step = 1){
//   let nums = [];
//   let x = (start + end)/step;
//   for(i = 0; i < x; i+=step)
//     {
//       return nums[i] = start;
//     }
//   while(start != end){
    
//   }
  
// }

// let range = function(start, end, step = 1){
//   let nums;
//   for(i = 0; i < (start + end)/(step); i++){
//     while(start != end){
//       nums[i] = start;
//       start += step;
//     }
//     console.log(nums[i]);
//   }
// }

// console.log(range(1, 10));


