// Chapter 2

min = function(x, y){
  if(x > y) return y;
  else return x;
};
console.log(min(0, 10));
console.log(min(0, -10));

//

isEven = function(x){
  if(x === 0) return true;
  if(x == -1) return false;
  else return isEven(x - 2);
};
console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));

//

countBs = function(string){
  counter = 0;
  for (i = 0; i <= string.length; i++)
    {
      if(string[i] == "B") counter++;
    }
  return counter;
};

countChar = function(string, char){
  counter = 0;
  for (i = 0; i<= string.length; i++)
    {
      if(string[i] == char) counter++;
    }
  return counter;
}

console.log(countBs("BOB"));
console.log(countChar("kakkerlak", "k"));

// Chapter 3

// Chapter 4
