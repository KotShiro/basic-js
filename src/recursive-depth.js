const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arrIn) {
    if (Array.isArray(arrIn) === true) {
      let count = 0;
      let i = 0;
      while (i < arrIn.length) {
        count = Math.max(count, this.calculateDepth(arrIn[i]));
        i++;
      }
      return count += 1;
    }
    return 0;
  }
};