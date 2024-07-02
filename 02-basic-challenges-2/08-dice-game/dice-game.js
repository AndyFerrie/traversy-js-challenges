function diceGameSimulation(numSimulations) {
  const resultsArray = [];
  for (let i = 0; i < numSimulations; i++) {
    const dice1 = Math.ceil(Math.random() * 6);
    const dice2 = Math.ceil(Math.random() * 6);
    const sum = dice1 + dice2;
    let result;
    if (sum === 7 || sum === 11) {
      result = "win";
    } else if (sum === 2 || sum === 3 || sum === 12) {
      result = "lose";
    } else {
      result = "roll again";
    }
    resultsArray.push({
      dice1,
      dice2,
      sum,
      result,
    });
  }
  return resultsArray;
}

module.exports = diceGameSimulation;
