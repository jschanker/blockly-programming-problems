Blockly.Python['averageOfPositiveEnteredIntegers'] = function(block) {

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

  var funcName = "averageOfPositiveEnteredIntegers";
  var code = 'def ' + funcName + '():\n' + (statements_function.length > 0 ? statements_function : 
                                                                              Blockly.Python.INDENT + "pass\n");
  code = Blockly.Python.scrub_(block, code);
  //Blockly.Python.definitions_[funcName] = code;
  //return null;
  return code;
};

Blockly.JavaScript['averageOfPositiveEnteredIntegers'] = function(block) {
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

  var funcName = "averageOfPositiveEnteredIntegers";
  var code = 'function ' + funcName + '() {\n' + statements_function + '}';
  code = Blockly.JavaScript.scrub_(block, code);
  return code;
};

Blockly.Python['controls_doWhileUntil'] = function(block) {
  // Do while/until loop.
  var until = block.getFieldValue('MODE') == 'UNTIL';
  var argument0 = Blockly.Python.valueToCode(block, 'BOOL',
      until ? Blockly.Python.ORDER_LOGICAL_NOT :
      Blockly.Python.ORDER_NONE) || 'False';
  var branch = Blockly.Python.statementToCode(block, 'DO');
  branch = Blockly.Python.addLoopTrap(branch, block.id) ||
      Blockly.Python.PASS;
  if (!until) {
    argument0 = 'not ' + argument0;
  }
  return 'while True:\n' + branch + Blockly.Python.INDENT + "if(" + argument0 + "):\n" 
    + Blockly.Python.INDENT + Blockly.Python.INDENT + "break\n";
  //return 'while ' + argument0 + ':\n' + branch;
};

Blockly.JavaScript['controls_doWhileUntil'] = function(block) {
  // Do while/until loop.
  var until = block.getFieldValue('MODE') == 'UNTIL';
  var argument0 = Blockly.JavaScript.valueToCode(block, 'BOOL',
      until ? Blockly.JavaScript.ORDER_LOGICAL_NOT :
      Blockly.JavaScript.ORDER_NONE) || 'false';
  var branch = Blockly.JavaScript.statementToCode(block, 'DO');
  branch = Blockly.JavaScript.addLoopTrap(branch, block.id);
  if (until) {
    argument0 = '!' + argument0;
  }
  return 'do {\n' + branch + '} while(' + argument0 + ');\n';
  //return 'while (' + argument0 + ') {\n' + branch + '}\n';
};

Blockly.Python['input_prompt'] = function(block) {
  var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'int(input(' + value_name + '))';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.JavaScript['input_prompt'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'parseInt(prompt(' + value_name + ',"0"))';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Python['printAverageOfPositiveEnteredIntegers'] = function(block) {
  // Call a procedure with a return value.
  //var funcName = Blockly.Python.variableDB_.getName(block.getFieldValue('NAME'),
  //    Blockly.Procedures.NAME_TYPE);
  var funcName = "averageOfPositiveEnteredIntegers";
  var args = [];
  /*
  for (var x = 0; x < block.arguments_.length; x++) {
    args[x] = Blockly.Python.valueToCode(block, 'ARG' + x,
        Blockly.Python.ORDER_NONE) || 'None';
  }
  */
  var code = "print(\"Average of positive entered integers:\", " + funcName + '(' + args.join(', ') + ')' + ")";
  return [code, Blockly.Python.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['printAverageOfPositiveEnteredIntegers'] = function(block) {
  // Call a procedure with a return value.
  //var funcName = Blockly.JavaScript.variableDB_.getName(
  //    block.getFieldValue('NAME'), Blockly.Procedures.NAME_TYPE);
  var funcName = "averageOfPositiveEnteredIntegers";
  var args = [];
  /*
  for (var x = 0; x < block.arguments_.length; x++) {
    args[x] = Blockly.JavaScript.valueToCode(block, 'ARG' + x,
        Blockly.JavaScript.ORDER_COMMA) || 'null';
  }
  */
  var code = "alert(\"Average of positive entered integers: \" + " + funcName + '(' + args.join(', ') + ')' + ");\n";  
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
    'DIVIDE': [' / ', Blockly.Python.ORDER_MULTIPLICATIVE],
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
  /*if(operator.indexOf('/') != -1) {
    // integer division - fix for negative numbers
    code = "Math.floor" + "(" + code + ")";
  }*/
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