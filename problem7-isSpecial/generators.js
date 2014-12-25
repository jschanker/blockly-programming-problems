Blockly.Python['isSpecial'] = function(block) {

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

  var funcName = "isSpecial";
  var code = 'def ' + funcName + '(num):\n' + (statements_function.length > 0 ? statements_function : 
                                                                              Blockly.Python.INDENT + "pass\n");
  code = Blockly.Python.scrub_(block, code);
  //Blockly.Python.definitions_[funcName] = code;
  //return null;
  return code;
};

Blockly.JavaScript['isSpecial'] = function(block) {
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

  var funcName = "isSpecial";
  var code = 'function ' + funcName + '(num) {\n' + statements_function + '}';
  code = Blockly.JavaScript.scrub_(block, code);
  return code;
};

Blockly.Python['printIsSpecial'] = function(block) {
  // Call a procedure with a return value.
  //var funcName = Blockly.Python.variableDB_.getName(block.getFieldValue('NAME'),
  //    Blockly.Procedures.NAME_TYPE);
  var funcName = "isSpecial";
  var args = ["n"];
  /*
  for (var x = 0; x < block.arguments_.length; x++) {
    args[x] = Blockly.Python.valueToCode(block, 'ARG' + x,
        Blockly.Python.ORDER_NONE) || 'None';
  }
  */
  var code = "n = " + this.getFieldValue('NUM_INPUT') + "\n";
  code += "print(\"Is\", n, \"special:\", " + funcName + '(' + args.join(', ') + ')' + ")";
  return [code, Blockly.Python.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['printIsSpecial'] = function(block) {
  // Call a procedure with a return value.
  //var funcName = Blockly.JavaScript.variableDB_.getName(
  //    block.getFieldValue('NAME'), Blockly.Procedures.NAME_TYPE);
  var funcName = "isSpecial";
  var args = ["n"];
  /*
  for (var x = 0; x < block.arguments_.length; x++) {
    args[x] = Blockly.JavaScript.valueToCode(block, 'ARG' + x,
        Blockly.JavaScript.ORDER_COMMA) || 'null';
  }
  */
  var code = "var n = " + this.getFieldValue('NUM_INPUT') + ";\n";
  code += "alert(\"Is \" + n + \" special: \" + " + funcName + '(' + args.join(', ') + ')' + ");\n";  
  return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.Python['greaterthan1000'] = function(block) {
  var code = '(num > 1000)';
  return [code, Blockly.Python.ORDER_RELATIONAL];
};

Blockly.JavaScript['greaterthan1000'] = function(block) {
  var code = '(num > 1000)';
  return [code, Blockly.JavaScript.ORDER_RELATIONAL];
};

Blockly.Python['divisibleby3'] = function(block) {
  var code = '(num % 3 == 0)';
  return [code, Blockly.Python.ORDER_RELATIONAL];
};

Blockly.JavaScript['divisibleby3'] = function(block) {
  var code = '(num % 3 == 0)';
  return [code, Blockly.JavaScript.ORDER_RELATIONAL];
};

Blockly.Python['divisibleby5'] = function(block) {
  var code = '(num % 5 == 0)';
  return [code, Blockly.Python.ORDER_RELATIONAL];
};

Blockly.JavaScript['divisibleby5'] = function(block) {
  var code = '(num % 5 == 0)';
  return [code, Blockly.JavaScript.ORDER_RELATIONAL];
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