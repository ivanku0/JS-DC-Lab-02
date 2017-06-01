module.exports = function() {
   console.log("im the exports");
  }

exports.one = function () {
  console.log("im the one")
}

console.log(exports.one());
