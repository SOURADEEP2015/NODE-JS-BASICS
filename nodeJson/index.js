const fs = require('fs')



const employee = {
    name : "Souradip",
    age: 26,
    domain: "WEB",
}

//console.log(employee.name);
//--create a JSON from a object
const jsonData = JSON.stringify(employee);
//console.log(jsonData)
//--transform from JSON to Object
const objectFromJson = JSON.parse(jsonData);
// console.log(objectFromJson);
//fs.writeFile('data.json', jsonData,(err) => {console.log("done")})
 fs.readFile('data.json','utf-8',(err, data) => {console.log(`original data ${data}`)})
