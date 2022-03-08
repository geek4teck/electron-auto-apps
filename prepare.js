const fs = require("fs");
const config = require("./config.json");

const data = JSON.parse(fs.readFileSync("package.json", "utf-8"));
data.productName = config.productName;
fs.writeFileSync("package.json", JSON.stringify(data));
console.log(data);
