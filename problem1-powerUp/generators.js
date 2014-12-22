Blockly.JavaScript['powerup'] = function(block) {
  // Assembles JavaScript into code variable.
  var code = 'powerUp();\n';
  return code;
};

Blockly.Python['powerup'] = function(block) {
  // Assembles Python into code variable.
  var code = 'powerUp()\n';
  return code;
};

Blockly.Python['multipowerup'] = function(block) {
  //var value_functionname = Blockly.Python.valueToCode(block, 'functionName', Blockly.Python.ORDER_ATOMIC);
  //var value_functionname = Blockly.Python.valueToCode(block, 'NUM_TIMES', Blockly.Python.ORDER_ATOMIC);
  var value_functionname = this.getFieldValue('NUM_TIMES');
  var statements_function = Blockly.Python.statementToCode(block, 'function');
  var branch = Blockly.Python.statementToCode(block, 'STACK');

  if (Blockly.Python.STATEMENT_PREFIX) {
    branch = Blockly.Python.prefixLines(
        Blockly.Python.STATEMENT_PREFIX.replace(/%1/g,
        '\'' + block.id + '\''), Blockly.Python.INDENT) + branch;
  }

  value_functionname = value_functionname ? value_functionname : "0"
  var funcName = "powerUp" + value_functionname + "Times";
  var code = 'def ' + funcName + '():\n' + statements_function;
  code = Blockly.Python.scrub_(block, code);
  //Blockly.Python.definitions_[funcName] = code;
  //return null;
  return code;
};

Blockly.JavaScript['multipowerup'] = function(block) {
  //var value_functionname = Blockly.JavaScript.valueToCode(block, 'functionName', Blockly.JavaScript.ORDER_ATOMIC);
  var value_functionname = this.getFieldValue('NUM_TIMES');
  var statements_function = Blockly.JavaScript.statementToCode(block, 'function');
  var branch = Blockly.JavaScript.statementToCode(block, 'STACK');

  if (Blockly.JavaScript.STATEMENT_PREFIX) {
    branch = Blockly.JavaScript.prefixLines(
        Blockly.JavaScript.STATEMENT_PREFIX.replace(/%1/g,
        '\'' + block.id + '\''), Blockly.JavaScript.INDENT) + branch;
  }

  value_functionname = value_functionname ? value_functionname : "0"
  var funcName = "powerUp" + value_functionname + "Times";
  var code = 'function ' + funcName + '() {\n' + statements_function + '}';
  code = Blockly.JavaScript.scrub_(block, code);
  return code;
};

Blockly.JavaScript['powerupmulticall'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'powerUp' + this.getFieldValue('NUM_TIMES') + 'Times();\n';
  return code;
};

Blockly.Python['powerupmulticall'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'powerUp' + this.getFieldValue('NUM_TIMES') + 'Times()\n';
  return code;
};