const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let gameCalculateHanoi = {
    turns: 0,
    seconds: 0
  };
  gameCalculateHanoi.turns = Math.pow(2, disksNumber) - 1;
  gameCalculateHanoi.seconds = Math.floor((gameCalculateHanoi.turns / turnsSpeed ) * 3600);
  return gameCalculateHanoi;
};
