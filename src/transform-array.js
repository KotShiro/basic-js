const CustomError = require("../extensions/custom-error");

module.exports = function transform( arrIn ) {
  if (Array.isArray(arrIn) === false) throw new Error('Ooops, smth went wrong...');

  let arrOut = [];
  let count = 0;
  for (let i=0; i < arrIn.length; i++){
    switch (arrIn[i]) {
      case '--discard-next':
        i++;
        break;
      case '--discard-prev':
        if (i > 0 && arrIn[i - 2] !== '--discard-next') {
        arrOut.pop();
        }
        break;
      case '--double-next':
        if (i < arrIn.length - 1) {
          arrOut.push(arrIn[i+1]);
        }
        i;
        break;
      case '--double-prev':
        if (i > 0 && arrIn[i - 2] !== '--discard-next') {
          arrOut.push(arrIn[i-1])
        }
        break;
      default:
        arrOut.push(arrIn[i]);
    }
  }
  
  return arrOut; 
};
