const CustomError = require("../extensions/custom-error");

module.exports = function countCats(catsArr) {
  // throw new CustomError('Not implemented');
	let catsColum = 0;
	catsArr.forEach(function(element){
		element.forEach(function(elem){
			elem === '^^' ? catsColum++ : catsColum; 
		});
	});
	return catsColum;
  // remove line with error and write your code here
};

