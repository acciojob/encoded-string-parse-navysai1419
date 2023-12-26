 const parts = str.split("000");

  // Remove any leading or trailing empty strings caused by "000"
  const cleanParts = parts.filter(part => part !== "");

  // Extract firstName, lastName, and id from the cleanParts array
  const firstName = cleanParts[0] || "";
  const lastName = cleanParts[1] || "";
  const id = cleanParts[2] || "";

  // Return an object with the extracted values
  return {
    firstName: firstName,
    lastName: lastName,
    id: id
  }; 
};   

// Prompt the user to enter a string
const userInput = prompt("Enter str:");

// Call the parseCode function with user input
const result = parseCode(userInput);

// Display the result using alert
alert(JSON.stringify(result));
