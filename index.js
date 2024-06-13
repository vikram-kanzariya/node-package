function add(a , b){
  return (a + b);
}

function diff(a , b){
  if(a >= b){
    return a - b;
  }
  return b - a;
}

function multiply(a , b){
  return (a * b);
}

function divide(a , b){
  return (a / b);
}

module.exports = {
  add , diff , multiply , divide
}
