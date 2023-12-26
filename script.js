const parseCode = (str) => {
  // Split the input string using "000" as the separator
  const parts = str.split("0");

  // Extract the firstName, lastName, and id from the parts array
  const firstName = parts[0];
  const lastName = parts[1]; 
  const id = parts[2];

  // Create and return an object with the extracted values
  const result = {
    firstName,
    lastName,
    id 
  };

  console.log(result); // Log the result to the console for debugging

  return result;
};
 
// Do not change the code below
const str = prompt("Enter str: ");
alert(JSON.stringify(parseCode(str)));
