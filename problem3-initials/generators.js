Blockly.Python['initials'] = function(block) {
  //var value_functionname = Blockly.Python.valueToCode(block, 'functionName', Blockly.Python.ORDER_ATOMIC);
  //var value_functionname = Blockly.Python.valueToCode(block, 'NUM_TIMES', Blockly.Python.ORDER_ATOMIC);
  var value_functionname = this.getFieldValue('NUM_TIMES');
  var statements_function = Blockly.Python.statementToCode(block, 'function') +
                            Blockly.Python.INDENT + "return " + 
                            Blockly.Python.valueToCode(block, 'RETURN', Blockly.Python.ORDER_ATOMIC) + "\n";
  var branch = Blockly.Python.statementToCode(block, 'STACK');

  if (Blockly.Python.STATEMENT_PREFIX) {
    branch = Blockly.Python.prefixLines(
        Blockly.Python.STATEMENT_PREFIX.replace(/%1/g,
        '\'' + block.id + '\''), Blockly.Python.INDENT) + branch;
  }

  value_functionname = value_functionname ? value_functionname : "0"
  var funcName = "initials";
  var code = 'def ' + funcName + '(fullName):\n' + statements_function;
  code = Blockly.Python.scrub_(block, code);
  //Blockly.Python.definitions_[funcName] = code;
  //return null;
  return code;
};

Blockly.JavaScript['initials'] = function(block) {
  //var value_functionname = Blockly.JavaScript.valueToCode(block, 'functionName', Blockly.JavaScript.ORDER_ATOMIC);
  var value_functionname = this.getFieldValue('NUM_TIMES');
  var statements_function = Blockly.JavaScript.statementToCode(block, 'function') +
                            Blockly.JavaScript.INDENT + "return " + 
                            Blockly.JavaScript.valueToCode(block, 'RETURN', Blockly.JavaScript.ORDER_ATOMIC) + ";\n";
  var branch = Blockly.JavaScript.statementToCode(block, 'STACK');

  if (Blockly.JavaScript.STATEMENT_PREFIX) {
    branch = Blockly.JavaScript.prefixLines(
        Blockly.JavaScript.STATEMENT_PREFIX.replace(/%1/g,
        '\'' + block.id + '\''), Blockly.JavaScript.INDENT) + branch;
  }

  value_functionname = value_functionname ? value_functionname : "0"
  var funcName = "initials";
  var code = 'function ' + funcName + '(fullName) {\n' + statements_function + '}';
  code = Blockly.JavaScript.scrub_(block, code);
  return code;
};

Blockly.Python['printInitials'] = function(block) {
  // Call a procedure with a return value.
  //var funcName = Blockly.Python.variableDB_.getName(block.getFieldValue('NAME'),
  //    Blockly.Procedures.NAME_TYPE);
  var funcName = "initials";
  var args = ["name"];
  /*
  for (var x = 0; x < block.arguments_.length; x++) {
    args[x] = Blockly.Python.valueToCode(block, 'ARG' + x,
        Blockly.Python.ORDER_NONE) || 'None';
  }
  */
  var code = "name = \"" + this.getFieldValue('FULL_NAME') + "\"\n";
  code += "print(\"Initials of\", name, \":\", " + funcName + '(' + args.join(', ') + ')' + ")";
  return [code, Blockly.Python.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['printInitials'] = function(block) {
  // Call a procedure with a return value.
  //var funcName = Blockly.JavaScript.variableDB_.getName(
  //    block.getFieldValue('NAME'), Blockly.Procedures.NAME_TYPE);
  var funcName = "initials";
  var args = ["name"];
  /*
  for (var x = 0; x < block.arguments_.length; x++) {
    args[x] = Blockly.JavaScript.valueToCode(block, 'ARG' + x,
        Blockly.JavaScript.ORDER_COMMA) || 'null';
  }
  */
  var code = "var name = \"" + this.getFieldValue('FULL_NAME') + "\";\n";
  code += "alert(\"Initials of \" + name + \": \" + " + funcName + '(' + args.join(', ') + ')' + ");\n";  
  return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};



Blockly.Python['variables_get'] = function(block) {
  // Variable getter.
  var code = Blockly.Python.variableDB_.getName(block.getFieldValue('VAR'),
      Blockly.Variables.NAME_TYPE);
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['variables_set'] = function(block) {
  // Variable setter.
  var argument0 = Blockly.Python.valueToCode(block, 'VALUE',
      Blockly.Python.ORDER_NONE) || '0';
  var varName = Blockly.Python.variableDB_.getName(block.getFieldValue('VAR'),
      Blockly.Variables.NAME_TYPE);
  return varName + ' = ' + argument0 + '\n';
};


Blockly.JavaScript['variables_get'] = function(block) {
  // Variable getter.
  var code = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('VAR'),
      Blockly.Variables.NAME_TYPE);
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['variables_set'] = function(block) {
  // Variable setter.
  var argument0 = Blockly.JavaScript.valueToCode(block, 'VALUE',
      Blockly.JavaScript.ORDER_ASSIGNMENT) || '0';
  var varName = Blockly.JavaScript.variableDB_.getName(
      block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  return varName + ' = ' + argument0 + ';\n';
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
    // integer division
    code = "Math.floor" + "(" + code + ")";
  }
  return [code, order];
};





Blockly.Python['text_concatenation'] = function(block) {
  // Text concatenation
  var OPERATORS = {
    'ADD': [' + ', Blockly.Python.ORDER_ADDITIVE]
  };
  var tuple = OPERATORS[block.getFieldValue('OP')];
  var operator = tuple[0];
  var order = tuple[1];
  var argument0 = Blockly.Python.valueToCode(block, 'A', order) || '\"\"';
  var argument1 = Blockly.Python.valueToCode(block, 'B', order) || '\"\"';
  var code = argument0 + operator + argument1;
  return [code, order];
};

Blockly.JavaScript['text_concatenation'] = function(block) {
  // Text concatenation
  var OPERATORS = {
    'ADD': [' + ', Blockly.JavaScript.ORDER_ADDITION],
  };
  var tuple = OPERATORS[block.getFieldValue('OP')];
  var operator = tuple[0];
  var order = tuple[1];
  var argument0 = Blockly.JavaScript.valueToCode(block, 'A', order) || '\"\"';
  var argument1 = Blockly.JavaScript.valueToCode(block, 'B', order) || '\"\"';
  var code = argument0 + operator + argument1;
  return [code, order];
};

Blockly.Python['text'] = function(block) {
  // Text value.
  var code = Blockly.Python.quote_(block.getFieldValue('TEXT'));
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.JavaScript['text'] = function(block) {
  // Text value.
  var code = Blockly.JavaScript.quote_(block.getFieldValue('TEXT'));
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.Python['text_indexOf'] = function(block) {
  // Search the text for a substring.
  // Should we allow for non-case sensitive???
  var operator = block.getFieldValue('END') == 'FIRST' ? 'find' : 'rfind';
  var argument0 = Blockly.Python.valueToCode(block, 'FIND',
      Blockly.Python.ORDER_NONE) || '\'\'';
  var argument1 = Blockly.Python.valueToCode(block, 'VALUE',
      Blockly.Python.ORDER_MEMBER) || '\'\'';
  var code = argument1 + '.' + operator + '(' + argument0 + ') + 1';
  return [code, Blockly.Python.ORDER_MEMBER];
};

Blockly.Python['text_charAt'] = function(block) {
  // Get letter at index.
  // Note: Until January 2013 this block did not have the WHERE input.
  var where = block.getFieldValue('WHERE') || 'FROM_START';
  var at = Blockly.Python.valueToCode(block, 'AT',
      Blockly.Python.ORDER_UNARY_SIGN) || '1';
  var text = Blockly.Python.valueToCode(block, 'VALUE',
      Blockly.Python.ORDER_MEMBER) || '\'\'';
  switch (where) {
    case 'FIRST':
      var code = text + '[0]';
      return [code, Blockly.Python.ORDER_MEMBER];
    case 'LAST':
      var code = text + '[-1]';
      return [code, Blockly.Python.ORDER_MEMBER];
    case 'FROM_START':
      // Blockly uses one-based indicies.
      if (Blockly.isNumber(at)) {
        // If the index is a naked number, decrement it right now.
        at = parseInt(at, 10) - 1;
      } else {
        // If the index is dynamic, decrement it in code.
        at = 'int(' + at + ' - 1)';
      }
      var code = text + '[' + at + ']';
      return [code, Blockly.Python.ORDER_MEMBER];
    case 'FROM_END':
      var code = text + '[-' + at + ']';
      return [code, Blockly.Python.ORDER_MEMBER];
    case 'RANDOM':
      Blockly.Python.definitions_['import_random'] = 'import random';
      var functionName = Blockly.Python.provideFunction_(
          'text_random_letter',
          ['def ' + Blockly.Python.FUNCTION_NAME_PLACEHOLDER_ + '(text):',
           '  x = int(random.random() * len(text))',
           '  return text[x];']);
      code = functionName + '(' + text + ')';
      return [code, Blockly.Python.ORDER_FUNCTION_CALL];
  }
  throw 'Unhandled option (text_charAt).';
};

Blockly.JavaScript['text_indexOf'] = function(block) {
  // Search the text for a substring.
  var operator = block.getFieldValue('END') == 'FIRST' ?
      'indexOf' : 'lastIndexOf';
  var argument0 = Blockly.JavaScript.valueToCode(block, 'FIND',
      Blockly.JavaScript.ORDER_NONE) || '\'\'';
  var argument1 = Blockly.JavaScript.valueToCode(block, 'VALUE',
      Blockly.JavaScript.ORDER_MEMBER) || '\'\'';
  var code = argument1 + '.' + operator + '(' + argument0 + ') + 1';
  return [code, Blockly.JavaScript.ORDER_MEMBER];
};

Blockly.JavaScript['text_charAt'] = function(block) {
  // Get letter at index.
  // Note: Until January 2013 this block did not have the WHERE input.
  var where = block.getFieldValue('WHERE') || 'FROM_START';
  var at = Blockly.JavaScript.valueToCode(block, 'AT',
      Blockly.JavaScript.ORDER_UNARY_NEGATION) || '1';
  var text = Blockly.JavaScript.valueToCode(block, 'VALUE',
      Blockly.JavaScript.ORDER_MEMBER) || '\'\'';
  switch (where) {
    case 'FIRST':
      var code = text + '.charAt(0)';
      return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
    case 'LAST':
      var code = text + '.slice(-1)';
      return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
    case 'FROM_START':
      // Blockly uses one-based indicies.
      if (Blockly.isNumber(at)) {
        // If the index is a naked number, decrement it right now.
        at = parseFloat(at) - 1;
      } else {
        // If the index is dynamic, decrement it in code.
        at += ' - 1';
      }
      var code = text + '.charAt(' + at + ')';
      return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
    case 'FROM_END':
      var code = text + '.slice(-' + at + ').charAt(0)';
      return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
    case 'RANDOM':
      var functionName = Blockly.JavaScript.provideFunction_(
          'text_random_letter',
          [ 'function ' + Blockly.JavaScript.FUNCTION_NAME_PLACEHOLDER_ +
              '(text) {',
            '  var x = Math.floor(Math.random() * text.length);',
            '  return text[x];',
            '}']);
      code = functionName + '(' + text + ')';
      return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
  }
  throw 'Unhandled option (text_charAt).';
};