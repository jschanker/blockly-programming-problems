/*
Blockly.Python['numOfHrsMinsAndSecs'] = function(block) {
  // Define a procedure with a return value.
  // First, add a 'global' statement for every variable that is assigned.

  var globals = Blockly.Variables.allVariables(block);
  for (var i = globals.length - 1; i >= 0; i--) {
    var varName = globals[i];
    if (block.arguments_.indexOf(varName) == -1) {
      globals[i] = Blockly.Python.variableDB_.getName(varName,
          Blockly.Variables.NAME_TYPE);
    } else {
      // This variable is actually a parameter name.  Do not include it in
      // the list of globals, thus allowing it be of local scope.
      globals.splice(i, 1);
    }
  }
  globals = globals.length ? '  global ' + globals.join(', ') + '\n' : '';
  var funcName = Blockly.Python.variableDB_.getName(block.getFieldValue('NAME'),
      Blockly.Procedures.NAME_TYPE);
  var branch = Blockly.Python.statementToCode(block, 'STACK');
  if (Blockly.Python.STATEMENT_PREFIX) {
    branch = Blockly.Python.prefixLines(
        Blockly.Python.STATEMENT_PREFIX.replace(/%1/g,
        '\'' + block.id + '\''), Blockly.Python.INDENT) + branch;
  }
  if (Blockly.Python.INFINITE_LOOP_TRAP) {
    branch = Blockly.Python.INFINITE_LOOP_TRAP.replace(/%1/g,
        '"' + block.id + '"') + branch;
  }
  var returnValue = Blockly.Python.valueToCode(block, 'RETURN',
      Blockly.Python.ORDER_NONE) || '';
  if (returnValue) {
    returnValue = '  return ' + returnValue + '\n';
  } else if (!branch) {
    branch = '  pass';
  }
  var args = [];
  for (var x = 0; x < block.arguments_.length; x++) {
    args[x] = Blockly.Python.variableDB_.getName(block.arguments_[x],
        Blockly.Variables.NAME_TYPE);
  }
  var code = 'def ' + funcName + '(' + args.join(', ') + '):\n' +
      globals + branch + returnValue;
  code = Blockly.Python.scrub_(block, code);
  Blockly.Python.definitions_[funcName] = code;
  return null;
};

Blockly.JavaScript['numOfHrsMinsAndSecs'] = function(block) {
  // Define a procedure with a return value.
  var funcName = Blockly.JavaScript.variableDB_.getName(
      block.getFieldValue('NAME'), Blockly.Procedures.NAME_TYPE);
  var branch = Blockly.JavaScript.statementToCode(block, 'STACK');
  if (Blockly.JavaScript.STATEMENT_PREFIX) {
    branch = Blockly.JavaScript.prefixLines(
        Blockly.JavaScript.STATEMENT_PREFIX.replace(/%1/g,
        '\'' + block.id + '\''), Blockly.JavaScript.INDENT) + branch;
  }
  if (Blockly.JavaScript.INFINITE_LOOP_TRAP) {
    branch = Blockly.JavaScript.INFINITE_LOOP_TRAP.replace(/%1/g,
        '\'' + block.id + '\'') + branch;
  }
  var returnValue = Blockly.JavaScript.valueToCode(block, 'RETURN',
      Blockly.JavaScript.ORDER_NONE) || '';
  if (returnValue) {
    returnValue = '  return ' + returnValue + ';\n';
  }
  var args = [];
  for (var x = 0; x < block.arguments_.length; x++) {
    args[x] = Blockly.JavaScript.variableDB_.getName(block.arguments_[x],
        Blockly.Variables.NAME_TYPE);
  }
  var code = 'function ' + funcName + '(' + args.join(', ') + ') {\n' +
      branch + returnValue + '}';
  code = Blockly.JavaScript.scrub_(block, code);
  Blockly.JavaScript.definitions_[funcName] = code;
  return null;
};

Blockly.Python['printNumOfHrsMinsAndSecs'] = function(block) {
  // Call a procedure with a return value.
  var funcName = Blockly.Python.variableDB_.getName(block.getFieldValue('NAME'),
      Blockly.Procedures.NAME_TYPE);
  var args = [];
  for (var x = 0; x < block.arguments_.length; x++) {
    args[x] = Blockly.Python.valueToCode(block, 'ARG' + x,
        Blockly.Python.ORDER_NONE) || 'None';
  }
  var code = funcName + '(' + args.join(', ') + ')';
  return [code, Blockly.Python.ORDER_FUNCTION_CALL];
};
*/

Blockly.Python['timevariables_get'] = function(block) {
  // Variable getter.
  var code = Blockly.Python.variableDB_.getName(block.getFieldValue('VAR'),
      Blockly.Variables.NAME_TYPE);
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['timevariables_set'] = function(block) {
  // Variable setter.
  var argument0 = Blockly.Python.valueToCode(block, 'VALUE',
      Blockly.Python.ORDER_NONE) || '0';
  var varName = Blockly.Python.variableDB_.getName(block.getFieldValue('VAR'),
      Blockly.Variables.NAME_TYPE);
  return varName + ' = ' + argument0 + '\n';
};

Blockly.JavaScript['timevariables_get'] = function(block) {
  // Variable getter.
  var code = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('VAR'),
      Blockly.Variables.NAME_TYPE);
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['timevariables_set'] = function(block) {
  // Variable setter.
  var argument0 = Blockly.JavaScript.valueToCode(block, 'VALUE',
      Blockly.JavaScript.ORDER_ASSIGNMENT) || '0';
  var varName = Blockly.JavaScript.variableDB_.getName(
      block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  return 'var ' + varName + ' = ' + argument0 + ';\n';
};

Blockly.Python['numOfHrsMinsAndSecs'] = function(block) {
  //var value_functionname = Blockly.Python.valueToCode(block, 'functionName', Blockly.Python.ORDER_ATOMIC);
  //var value_functionname = Blockly.Python.valueToCode(block, 'NUM_TIMES', Blockly.Python.ORDER_ATOMIC);
  var value_functionname = this.getFieldValue('NUM_TIMES');
  var statements_function = Blockly.Python.INDENT + "SECS_IN_MIN = 60;\n" + 
                            Blockly.Python.INDENT + "MINS_IN_HOUR = 60;\n" + 
                            Blockly.Python.statementToCode(block, 'function') +
                            Blockly.Python.INDENT + "return hours, minutes, remainingSeconds\n";
  var branch = Blockly.Python.statementToCode(block, 'STACK');

  if (Blockly.Python.STATEMENT_PREFIX) {
    branch = Blockly.Python.prefixLines(
        Blockly.Python.STATEMENT_PREFIX.replace(/%1/g,
        '\'' + block.id + '\''), Blockly.Python.INDENT) + branch;
  }

  value_functionname = value_functionname ? value_functionname : "0"
  var funcName = "numOfHrsMinsAndSecsIn";
  var code = 'def ' + funcName + '(seconds):\n' + statements_function;
  code = Blockly.Python.scrub_(block, code);
  //Blockly.Python.definitions_[funcName] = code;
  //return null;
  return code;
};

Blockly.JavaScript['numOfHrsMinsAndSecs'] = function(block) {
  //var value_functionname = Blockly.JavaScript.valueToCode(block, 'functionName', Blockly.JavaScript.ORDER_ATOMIC);
  var value_functionname = this.getFieldValue('NUM_TIMES');
  var statements_function = Blockly.JavaScript.INDENT + "var SECS_IN_MIN = 60;\n" + 
                            Blockly.JavaScript.INDENT + "var MINS_IN_HOUR = 60;\n" + 
                            Blockly.JavaScript.statementToCode(block, 'function') +
                            Blockly.JavaScript.INDENT + "return [hours, minutes, remainingSeconds];\n";
  var branch = Blockly.JavaScript.statementToCode(block, 'STACK');

  if (Blockly.JavaScript.STATEMENT_PREFIX) {
    branch = Blockly.JavaScript.prefixLines(
        Blockly.JavaScript.STATEMENT_PREFIX.replace(/%1/g,
        '\'' + block.id + '\''), Blockly.JavaScript.INDENT) + branch;
  }

  value_functionname = value_functionname ? value_functionname : "0"
  var funcName = "numOfHrsMinsAndSecsIn";
  var code = 'function ' + funcName + '(seconds) {\n' + statements_function + '}';
  code = Blockly.JavaScript.scrub_(block, code);
  return code;
};

Blockly.Python['printNumOfHrsMinsAndSecs'] = function(block) {
  // Call a procedure with a return value.
  //var funcName = Blockly.Python.variableDB_.getName(block.getFieldValue('NAME'),
  //    Blockly.Procedures.NAME_TYPE);
  var funcName = "numOfHrsMinsAndSecsIn";
  var args = ["seconds"];
  /*
  for (var x = 0; x < block.arguments_.length; x++) {
    args[x] = Blockly.Python.valueToCode(block, 'ARG' + x,
        Blockly.Python.ORDER_NONE) || 'None';
  }
  */
  var code = "seconds = " + this.getFieldValue('SECONDS') + "\n"; 
  code += "hours, minutes, remainingSeconds = " + funcName + '(' + args.join(', ') + ')';
  code += "\nprint(seconds, \"seconds =\", hours,\n  \"hours,\", minutes,\n  \"minutes and\",\n  remainingSeconds, \"seconds\")";
  return [code, Blockly.Python.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['printNumOfHrsMinsAndSecs'] = function(block) {
  // Call a procedure with a return value.
  //var funcName = Blockly.JavaScript.variableDB_.getName(
  //    block.getFieldValue('NAME'), Blockly.Procedures.NAME_TYPE);
  var funcName = "numOfHrsMinsAndSecsIn";
  var args = ["seconds"];
  /*
  for (var x = 0; x < block.arguments_.length; x++) {
    args[x] = Blockly.JavaScript.valueToCode(block, 'ARG' + x,
        Blockly.JavaScript.ORDER_COMMA) || 'null';
  }
  */
  var code = "var seconds = " + this.getFieldValue('SECONDS') + ";\n";  
  code += "var timeRetValues = \n  " + funcName + '(' + args.join(', ') + ');\n';
  code += "var hours = timeRetValues[0];\n";
  code += "var minutes = timeRetValues[1];\n";
  code += "var remainingSeconds = timeRetValues[2];\n";
  code += "\nalert(seconds + \" seconds = \" + hours + \n \" hours, \" + minutes + \n  \" minutes and \" + \n  remainingSeconds + \" seconds\");";
  return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
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
    // integer division
    code = "Math.floor" + "(" + code + ")";
  }
  return [code, order];
};

Blockly.Python['math_modulo'] = function(block) {
  // Remainder computation.
  var argument0 = Blockly.Python.valueToCode(block, 'DIVIDEND',
      Blockly.Python.ORDER_MULTIPLICATIVE) || '0';
  var argument1 = Blockly.Python.valueToCode(block, 'DIVISOR',
      Blockly.Python.ORDER_MULTIPLICATIVE) || '0';
  var code = argument0 + ' % ' + argument1;
  return [code, Blockly.Python.ORDER_MULTIPLICATIVE];
};

Blockly.JavaScript['math_modulo'] = function(block) {
  // Remainder computation.
  var argument0 = Blockly.JavaScript.valueToCode(block, 'DIVIDEND',
      Blockly.JavaScript.ORDER_MODULUS) || '0';
  var argument1 = Blockly.JavaScript.valueToCode(block, 'DIVISOR',
      Blockly.JavaScript.ORDER_MODULUS) || '0';
  var code = "(" + argument0 + ' % ' + argument1 + ")";
  return [code, Blockly.JavaScript.ORDER_MODULUS];
};