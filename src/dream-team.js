const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(arrNames) {
  if (Array.isArray(arrNames)) {
    let dreamTeam = '';
    let strArrNames = arrNames.filter(elem => typeof(elem) === 'string');


    strArrNames = strArrNames.sort().map(function(name){
      return name.toLocaleUpperCase().trim().slice(0,1);
    })
strArrNames.sort().forEach(function(element, i){ 
  return dreamTeam += element.slice(0,1);
});
return dreamTeam;
  }
  return false;
  
};
