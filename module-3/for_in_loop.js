"use strict";
function printObjectProperties(obj) {
    if (Object.keys(obj).length === 0) 
    {
      console.log("Object is empty");
    } 
    else 
    {
      for (let prop in obj) 
      {
        console.log(`${prop}: ${obj[prop]}`);
      }
    }
  }
  const myObject = {
    name: "Mehedi",
    course: "Mern Stack Development",
    batch: 4
  };
  printObjectProperties(myObject);