const parseCode = (str) => {
  // Split the input string using "000" as the separator
   const [firstName, lastName, id] = encodedString.split('000');

  // Return an object with firstName, lastName, and id properties
  return { firstName, lastName, id };
};  
 
// Do not change the code below
const str = prompt("Enter str: ");
alert(JSON.stringify(parseCode(str)));
