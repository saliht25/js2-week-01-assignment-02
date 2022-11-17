const calculateTotal = (num1, num2, num3) => {
  let sum = num1+num2+num3
    return sum
  }
;

const calculateTotalOfItemsOfArray = (myArr) => {
  let total=0;
  for (let i = 0; i < 
    myArr.length; i += 1) {
    total += myArr[i]
    }
    return total
  };

const reverseTheString = (string) => {
  let new_string="";
  for (let i=string.length-1; i>=0; i--){
    new_string+=string[i];
  }
  return new_string.toLowerCase() ;
};

const isPalindrome = (S) => {
  let str = "" + S;
  let len = str.length;
  for (let i = 0; i < parseInt(len / 2, 10); i++)
  {
      if (str[i] != str[len - 1 - i ])
          return false;
  }
  return true;
};

export {
  calculateTotal,
  calculateTotalOfItemsOfArray,
  reverseTheString,
  isPalindrome,
};