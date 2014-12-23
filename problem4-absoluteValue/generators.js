Blockly.Python['absoluteValue'] = function(block) {

  var statements_function = Blockly.Python.statementToCode(block, 'function');// +
                            //Blockly.Python.INDENT + "return " + 
                            //Blockly.Python.valueToCode(block, 'RETURN', Blockly.Python.ORDER_ATOMIC) + "\n";
  var branch = Blockly.Python.statementToCode(block, 'STACK');

  if (Blockly.Python.STATEMENT_PREFIX) {
    branch = Blockly.Python.prefixLines(
        Blockly.Python.STATEMENT_PREFIX.replace(/%1/g,
        '\'' + block.id + '\''), Blockly.Python.INDENT) + branch;
  }

  var funcName = "absoluteValue";
  var code = 'def ' + funcName + '(x):\n' + (statements_function.length > 0 ? statements_function : 
                                                                              Blockly.Python.INDENT + "pass\n");
  code = Blockly.Python.scrub_(block, code);
  //Blockly.Python.definitions_[funcName] = code;
  //return null;
  return code;
};

Blockly.JavaScript['absoluteValue'] = function(block) {
  var statements_function = Blockly.JavaScript.statementToCode(block, 'function');// +
                            //Blockly.JavaScript.INDENT + "return " + 
                            //Blockly.JavaScript.valueToCode(block, 'RETURN', Blockly.JavaScript.ORDER_ATOMIC) + ";\n";
  var branch = Blockly.JavaScript.statementToCode(block, 'STACK');

  if (Blockly.JavaScript.STATEMENT_PREFIX) {
    branch = Blockly.JavaScript.prefixLines(
        Blockly.JavaScript.STATEMENT_PREFIX.replace(/%1/g,
        '\'' + block.id + '\''), Blockly.JavaScript.INDENT) + branch;
  }

  var funcName = "absoluteValue";
  var code = 'function ' + funcName + '(x) {\n' + statements_function + '}';
  code = Blockly.JavaScript.scrub_(block, code);
  return code;
};

Blockly.Python['printAbsoluteValue'] = function(block) {
  // Call a procedure with a return value.
  //var funcName = Blockly.Python.variableDB_.getName(block.getFieldValue('NAME'),
  //    Blockly.Procedures.NAME_TYPE);
  var funcName = "absoluteValue";
  var args = ["num"];
  /*
  for (var x = 0; x < block.arguments_.length; x++) {
    args[x] = Blockly.Python.valueToCode(block, 'ARG' + x,
        Blockly.Python.ORDER_NONE) || 'None';
  }
  */
  var code = "num = " + this.getFieldValue('NUM') + "\n";
  code += "print(\"Absolute value of\", num, \":\", " + funcName + '(' + args.join(', ') + ')' + ")";
  return [code, Blockly.Python.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['printAbsoluteValue'] = function(block) {
  // Call a procedure with a return value.
  //var funcName = Blockly.JavaScript.variableDB_.getName(
  //    block.getFieldValue('NAME'), Blockly.Procedures.NAME_TYPE);
  var funcName = "absoluteValue";
  var args = ["num"];
  /*
  for (var x = 0; x < block.arguments_.length; x++) {
    args[x] = Blockly.JavaScript.valueToCode(block, 'ARG' + x,
        Blockly.JavaScript.ORDER_COMMA) || 'null';
  }
  */
  var code = "var num = " + this.getFieldValue('NUM') + ";\n";
  code += "alert(\"Absolute value of \" + num + \": \" + " + funcName + '(' + args.join(', ') + ')' + ");\n";  
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