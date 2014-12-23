Blockly.Blocks['numOfHrsMinsAndSecs'] = {
  init: function() {
    this.setHelpUrl('http://www.github.com/');
    this.setColour(210);
    this.appendDummyInput('funcName').appendField("numOfHrsMinsAndSecsIn", 'NAME')
                                     .appendField("(seconds)", 'PARAMSA');
    this.appendDummyInput().appendField("    SECS_IN_MIN = 60   ");
    this.appendDummyInput().appendField("    MINS_IN_HOUR = 60");
    this.appendStatementInput("function", 'STACK');
    this.appendDummyInput().appendField("    return hours, minutes, remainingSeconds", 'RETURN');

    this.setTooltip('Function definition for Hours, Minutes, and Seconds');

  },
}

Blockly.Blocks['printNumOfHrsMinsAndSecs'] = {
  init: function() {
    this.setHelpUrl('http://www.github.com/');
    this.setColour(120);
    this.appendDummyInput()
        .appendField("seconds = ")
        .appendField(new Blockly.FieldTextInput("8000"), 'SECONDS');
    this.appendDummyInput().appendField("hours, minutes, remainingSeconds = ");
    this.appendDummyInput().appendField("       numOfHrsMinsAndSecsIn(seconds)");
    this.appendDummyInput().appendField("print(seconds,\"seconds =\", hours,");
    this.appendDummyInput().appendField("              \"hours,\", minutes,");
    this.appendDummyInput().appendField("              \"minutes and\",");
    this.appendDummyInput().appendField("              remainingSeconds, \"seconds\")");

    this.setTooltip('Print Hours, Minutes, and Seconds');

  },
}

Blockly.Blocks['timevariables_get'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(330);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["hours", "hours"], ["minutes", "minutes"], ["seconds", "seconds"], ["remainingSeconds", "remainingSeconds"], ["MINS_IN_HOUR", "MINS_IN_HOUR"], ["SECS_IN_MIN", "SECS_IN_MIN"], ["SECS_IN_HOUR", "SECS_IN_HOUR"]]), 'VAR');
    this.setOutput(true, "Number");
    this.setTooltip('');
  }
};

Blockly.Blocks['timevariables_set'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(330);
    this.appendDummyInput()
        .appendField("Set ")
        .appendField(new Blockly.FieldDropdown([["hours", "hours"], ["minutes", "minutes"], ["remainingSeconds", "remainingSeconds"], ["SECS_IN_HOUR", "SECS_IN_HOUR"]]), 'VAR')
        .appendField("to");
    this.appendValueInput('VALUE')
        .setCheck("Number");
    //this.setValueInput(true);
        //this.appendDummyInput()
        //.appendField(Blockly.Msg.VARIABLES_GET_TITLE)
        //.appendField(new Blockly.FieldVariable(
        //Blockly.Msg.VARIABLES_GET_ITEM), 'VAR')
        //.appendField(Blockly.Msg.VARIABLES_GET_TAIL);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

Blockly.Blocks['math_modulo'] = {
  /**
   * Block for remainder of a division.
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl(Blockly.Msg.MATH_MODULO_HELPURL);
    this.setColour(230);
    this.setOutput(true, 'Number');
    this.interpolateMsg(Blockly.Msg.MATH_MODULO_TITLE,
                        ['DIVIDEND', 'Number', Blockly.ALIGN_RIGHT],
                        ['DIVISOR', 'Number', Blockly.ALIGN_RIGHT],
                        Blockly.ALIGN_RIGHT);
    this.setInputsInline(true);
    this.setTooltip(Blockly.Msg.MATH_MODULO_TOOLTIP);
  }
};

Blockly.Blocks['math_arithmetic'] = {
  /**
   * Block for basic arithmetic operator.
   * @this Blockly.Block
   */
  init: function() {
    var OPERATORS =
        [[Blockly.Msg.MATH_ADDITION_SYMBOL, 'ADD'],
         [Blockly.Msg.MATH_SUBTRACTION_SYMBOL, 'MINUS'],
         [Blockly.Msg.MATH_MULTIPLICATION_SYMBOL, 'MULTIPLY'],
         [Blockly.Msg.MATH_DIVISION_SYMBOL, 'DIVIDE']];
    this.setHelpUrl(Blockly.Msg.MATH_ARITHMETIC_HELPURL);
    this.setColour(230);
    this.setOutput(true, 'Number');
    this.appendValueInput('A')
        .setCheck('Number');
    this.appendValueInput('B')
        .setCheck('Number')
        .appendField(new Blockly.FieldDropdown(OPERATORS), 'OP');
    this.setInputsInline(true);
    // Assign 'this' to a variable for use in the tooltip closure below.
    var thisBlock = this;
    this.setTooltip(function() {
      var mode = thisBlock.getFieldValue('OP');
      var TOOLTIPS = {
        'ADD': Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_ADD,
        'MINUS': Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_MINUS,
        'MULTIPLY': Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_MULTIPLY,
        'DIVIDE': Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_DIVIDE
      };
      return TOOLTIPS[mode];
    });
  }
};