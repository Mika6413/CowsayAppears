const userInfo = require("./information");
const cowsay = require("./node_modules/cowsay");
console.log(
  cowsay.say({
    text: `Hi, my name is ${userInfo.name} and I'm studying in ${userInfo.campus}`,
    e: "oO",
    T: "U ",
  })
);
