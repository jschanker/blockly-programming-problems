Blockly.Python['soHeyYo'] = function(block) {

  var statements_function = //Blockly.Python.INDENT + "description = 'N/A'\n" + 
                            Blockly.Python.statementToCode(block, 'function'); 
                            //+ Blockly.Python.INDENT + "return description"; 
                            //+ Blockly.Python.valueToCode(block, 'RETURN', Blockly.Python.ORDER_ATOMIC) + "\n";
  var branch = Blockly.Python.statementToCode(block, 'STACK');

  if (Blockly.Python.STATEMENT_PREFIX) {
    branch = Blockly.Python.prefixLines(
        Blockly.Python.STATEMENT_PREFIX.replace(/%1/g,
        '\'' + block.id + '\''), Blockly.Python.INDENT) + branch;
  }

  var funcName = "soHeyYo";
  var code = 'def ' + funcName + '(n):\n' + (statements_function.length > 0 ? statements_function : 
                                                                              Blockly.Python.INDENT + "pass\n");
  code = Blockly.Python.scrub_(block, code);
  //Blockly.Python.definitions_[funcName] = code;
  //return null;
  return code;
};

Blockly.JavaScript['soHeyYo'] = function(block) {
  var statements_function = //Blockly.Python.INDENT + "var description = 'N/A';\n" +
                            Blockly.JavaScript.statementToCode(block, 'function'); 
                            //+ Blockly.JavaScript.INDENT + "return description;\n";
                            //+ Blockly.JavaScript.valueToCode(block, 'RETURN', Blockly.JavaScript.ORDER_ATOMIC) + ";\n";
  var branch = Blockly.JavaScript.statementToCode(block, 'STACK');

  if (Blockly.JavaScript.STATEMENT_PREFIX) {
    branch = Blockly.JavaScript.prefixLines(
        Blockly.JavaScript.STATEMENT_PREFIX.replace(/%1/g,
        '\'' + block.id + '\''), Blockly.JavaScript.INDENT) + branch;
  }

  var funcName = "soHeyYo";
  var code = 'function ' + funcName + '(n) {\n' + statements_function + '}';
  code = Blockly.JavaScript.scrub_(block, code);
  return code;
};

Blockly.Python['printSoHeyYo'] = function(block) {
  // Call a procedure with a return value.
  //var funcName = Blockly.Python.variableDB_.getName(block.getFieldValue('NAME'),
  //    Blockly.Procedures.NAME_TYPE);
  var funcName = "soHeyYo";
  var args = ["num"];
  /*
  for (var x = 0; x < block.arguments_.length; x++) {
    args[x] = Blockly.Python.valueToCode(block, 'ARG' + x,
        Blockly.Python.ORDER_NONE) || 'None';
  }
  */
  var code = "num = " + this.getFieldValue('NUM_INPUT') + "\n";
  code += "print(\"SoHeyYo says for\", num, \":\", " + funcName + '(' + args.join(', ') + ')' + ")";
  return [code, Blockly.Python.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['printSoHeyYo'] = function(block) {
  // Call a procedure with a return value.
  //var funcName = Blockly.JavaScript.variableDB_.getName(
  //    block.getFieldValue('NAME'), Blockly.Procedures.NAME_TYPE);
  var funcName = "soHeyYo";
  var args = ["num"];
  /*
  for (var x = 0; x < block.arguments_.length; x++) {
    args[x] = Blockly.JavaScript.valueToCode(block, 'ARG' + x,
        Blockly.JavaScript.ORDER_COMMA) || 'null';
  }
  */
  var code = "var num = " + this.getFieldValue('NUM_INPUT') + ";\n";
  code += "alert(\"SoHeyYo says for \" + num + \": \" + " + funcName + '(' + args.join(', ') + ')' + ");\n";  
  return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.Python['math_number'] = function(block) {
  // Numeric value.
  var code = parseFloat(block.getFieldValue('NUM'));
  var order = code < 0 ? Blockly.Python.ORDER_UNARY_SIGN :
              Blockly.Python.ORDER_ATOMIC;
  return [code, order];
};

Blockly.JavaScript['math_number'] = function(block) {
  // Numeric value.
  var code = parseFloat(block.getFieldValue('NUM'));
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.Python['math_arithmetic'] = function(block) {
  // Basic arithmetic operators, and power.
  var OPERATORS = {
    'ADD': [' + ', Blockly.Python.ORDER_ADDITIVE],
    'MINUS': [' - ', Blockly.Python.ORDER_ADDITIVE],
    'MULTIPLY': [' * ', Blockly.Python.ORDER_MULTIPLICATIVE],
    'DIVIDE': [' // ', Blockly.Python.ORDER_MULTIPLICATIVE],
    'POWER': [' ** ', Blockly.Python.ORDER_EXPONENTIATION]
  };
  var tuple = OPERATORS[block.getFieldValue('OP')];
  var operator = tuple[0];
  var order = tuple[1];
  var argument0 = Blockly.Python.valueToCode(block, 'A', order) || '0';
  var argument1 = Blockly.Python.valueToCode(block, 'B', order) || '0';
  var code = argument0 + operator + argument1;
  return [code, order];
  // In case of 'DIVIDE', division between integers returns different results
  // in Python 2 and 3. However, is not an issue since Blockly does not
  // guarantee identical results in all languages.  To do otherwise would
  // require every operator to be wrapped in a function call.  This would kill
  // legibility of the generated code.
};

Blockly.JavaScript['math_arithmetic'] = function(block) {
  // Basic arithmetic operators, and power.
  var OPERATORS = {
    'ADD': [' + ', Blockly.JavaScript.ORDER_ADDITION],
    'MINUS': [' - ', Blockly.JavaScript.ORDER_SUBTRACTION],
    'MULTIPLY': [' * ', Blockly.JavaScript.ORDER_MULTIPLICATION],
    'DIVIDE': [' / ', Blockly.JavaScript.ORDER_DIVISION],
    'POWER': [null, Blockly.JavaScript.ORDER_COMMA]  // Handle power separately.
  };
  var tuple = OPERATORS[block.getFieldValue('OP')];
  var operator = tuple[0];
  var order = tuple[1];
  var argument0 = Blockly.JavaScript.valueToCode(block, 'A', order) || '0';
  var argument1 = Blockly.JavaScript.valueToCode(block, 'B', order) || '0';
  var code;
  // Power in JavaScript requires a special case since it has no operator.
  if (!operator) {
    code = 'Math.pow(' + argument0 + ', ' + argument1 + ')';
    return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
  }
  code = argument0 + operator + argument1;
  if(operator.indexOf('/') != -1) {
    // integer division - fix for negative numbers
    code = "Math.floor" + "(" + code + ")";
  }
  return [code, order];
};

Blockly.Python['inputvariable_get'] = function(block) {
  // Variable getter.
  var code = Blockly.Python.variableDB_.getName(block.getFieldValue('INPUT'),
      Blockly.Variables.NAME_TYPE);
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.JavaScript['inputvariable_get'] = function(block) {
  // Variable getter.
  var code = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('INPUT'),
      Blockly.Variables.NAME_TYPE);
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.Python['return'] = function(block) {
  var value_return = Blockly.Python.valueToCode(block, 'RETURN', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'return ' + value_return + '\n';
  return code;
};

Blockly.JavaScript['return'] = function(block) {
  var value_return = Blockly.JavaScript.valueToCode(block, 'RETURN', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'return ' + value_return + ';\n';
  return code;
};







Blockly.Python['math_number_property'] = function(block) {
  // Check if a number is even, odd, prime, whole, positive, or negative
  // or if it is divisible by certain number. Returns true or false.
  var number_to_check = block.getFieldValue('NUMBER_TO_CHECK') || 'n';
  var dropdown_property = 'DIVISIBLE_BY';//block.getFieldValue('PROPERTY');
  var code;
  if (dropdown_property == 'PRIME') {
    Blockly.Python.definitions_['import_math'] = 'import math';
    var functionName = Blockly.Python.provideFunction_(
        'math_isPrime',
        ['def ' + Blockly.Python.FUNCTION_NAME_PLACEHOLDER_ + '(n):',
         '  # https://en.wikipedia.org/wiki/Primality_test#Naive_methods',
         '  # If n is not a number but a string, try parsing it.',
         '  if type(n) not in (int, float, long):',
         '    try:',
         '      n = float(n)',
         '    except:',
         '      return False',
         '  if n == 2 or n == 3:',
         '    return True',
         '  # False if n is negative, is 1, or not whole,' +
             ' or if n is divisible by 2 or 3.',
         '  if n <= 1 or n % 1 != 0 or n % 2 == 0 or n % 3 == 0:',
         '    return False',
         '  # Check all the numbers of form 6k +/- 1, up to sqrt(n).',
         '  for x in range(6, int(math.sqrt(n)) + 2, 6):',
         '    if n % (x - 1) == 0 or n % (x + 1) == 0:',
         '      return False',
         '  return True']);
    code = functionName + '(' + number_to_check + ')';
    return [code, Blockly.Python.ORDER_FUNCTION_CALL];
  }
  switch (dropdown_property) {
    case 'EVEN':
      code = number_to_check + ' % 2 == 0';
      break;
    case 'ODD':
      code = number_to_check + ' % 2 == 1';
      break;
    case 'WHOLE':
      code = number_to_check + ' % 1 == 0';
      break;
    case 'POSITIVE':
      code = number_to_check + ' > 0';
      break;
    case 'NEGATIVE':
      code = number_to_check + ' < 0';
      break;
    case 'DIVISIBLE_BY':
      var divisor = Blockly.Python.valueToCode(block, 'DIVISOR',
          Blockly.Python.ORDER_MULTIPLICATIVE);
      // If 'divisor' is some code that evals to 0, Python will raise an error.
      if (!divisor || divisor == '0') {
        return ['False', Blockly.Python.ORDER_ATOMIC];
      }
      code = number_to_check + ' % ' + divisor + ' == 0';
      break;
  }
  return [code, Blockly.Python.ORDER_RELATIONAL];
};

Blockly.JavaScript['math_number_property'] = function(block) {
  // Check if a number is even, odd, prime, whole, positive, or negative
  // or if it is divisible by certain number. Returns true or false.
  var number_to_check = block.getFieldValue('NUMBER_TO_CHECK') || 'n';
  var dropdown_property = 'DIVISIBLE_BY';//block.getFieldValue('PROPERTY');
  var code;
  if (dropdown_property == 'PRIME') {
    // Prime is a special case as it is not a one-liner test.
    var functionName = Blockly.JavaScript.provideFunction_(
        'math_isPrime',
        [ 'function ' + Blockly.JavaScript.FUNCTION_NAME_PLACEHOLDER_ + '(n) {',
          '  // https://en.wikipedia.org/wiki/Primality_test#Naive_methods',
          '  if (n == 2 || n == 3) {',
          '    return true;',
          '  }',
          '  // False if n is NaN, negative, is 1, or not whole.',
          '  // And false if n is divisible by 2 or 3.',
          '  if (isNaN(n) || n <= 1 || n % 1 != 0 || n % 2 == 0 ||' +
            ' n % 3 == 0) {',
          '    return false;',
          '  }',
          '  // Check all the numbers of form 6k +/- 1, up to sqrt(n).',
          '  for (var x = 6; x <= Math.sqrt(n) + 1; x += 6) {',
          '    if (n % (x - 1) == 0 || n % (x + 1) == 0) {',
          '      return false;',
          '    }',
          '  }',
          '  return true;',
          '}']);
    code = functionName + '(' + number_to_check + ')';
    return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
  }
  switch (dropdown_property) {
    case 'EVEN':
      code = number_to_check + ' % 2 == 0';
      break;
    case 'ODD':
      code = number_to_check + ' % 2 == 1';
      break;
    case 'WHOLE':
      code = number_to_check + ' % 1 == 0';
      break;
    case 'POSITIVE':
      code = number_to_check + ' > 0';
      break;
    case 'NEGATIVE':
      code = number_to_check + ' < 0';
      break;
    case 'DIVISIBLE_BY':
      var divisor = Blockly.JavaScript.valueToCode(block, 'DIVISOR',
          Blockly.JavaScript.ORDER_MODULUS) || '0';
      code = number_to_check + ' % ' + divisor + ' == 0';
      break;
  }
  return [code, Blockly.JavaScript.ORDER_EQUALITY];
};