function operation(x, y, op) {
      if (op === '+')return x + y
      else if (op === '-')return x - y
      else if (op === '*')return x * y
      else if (op === '/')return x / y
      else return NaN
  }
  
  console.log(operation(1, 2, '+'))
  console.log(operation(1, '2', '-'))
  console.log(operation('123', '2', '*'))
  console.log(operation('Text', '2', '/'))