Blockly.Blocks['averageOfPositiveEnteredIntegers'] = {
  init: function() {
    this.setHelpUrl('http://www.github.com/');
    this.setColour(190);
    this.appendDummyInput('funcName').appendField("averageOfPositiveEnteredIntegers", 'NAME')
                                     .appendField("()", 'PARAMSA');
    this.appendStatementInput("function", 'STACK');
    //this.appendDummyInput().appendField("    return description", 'RETURN');
    //this.appendDummyInput().appendField("    return", 'RETURNA');
    //this.appendValueInput("RETURN")
    //                       .setCheck("String");

    this.setTooltip('Function definition for largestPowerOfTwoFactorThatIsFactorOf');
    this.setInputsInline(true);
  },
}

Blockly.Blocks['controls_doWhileUntil'] = {
  /**
   * Block for 'do while/until' loop.
   * @this Blockly.Block
   */
  init: function() {
    var OPERATORS =
        [[Blockly.Msg.CONTROLS_WHILEUNTIL_OPERATOR_WHILE, 'WHILE'],
         [Blockly.Msg.CONTROLS_WHILEUNTIL_OPERATOR_UNTIL, 'UNTIL']];
    this.setHelpUrl(Blockly.Msg.CONTROLS_WHILEUNTIL_HELPURL);
    this.setColour(120);
    this.appendStatementInput('DO')
        .appendField(Blockly.Msg.CONTROLS_WHILEUNTIL_INPUT_DO);
    this.appendValueInput('BOOL')
        .setCheck('Boolean')
        .appendField(new Blockly.FieldDropdown(OPERATORS), 'MODE');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    // Assign 'this' to a variable for use in the tooltip closure below.
    var thisBlock = this;
    this.setTooltip(function() {
      var op = thisBlock.getFieldValue('MODE');
      var TOOLTIPS = {
        'WHILE': Blockly.Msg.CONTROLS_WHILEUNTIL_TOOLTIP_WHILE,
        'UNTIL': Blockly.Msg.CONTROLS_WHILEUNTIL_TOOLTIP_UNTIL
      };
      return TOOLTIPS[op];
    });
  }
};

Blockly.Blocks['input_prompt'] = {
  init: function() {
    this.setHelpUrl('http://www.github.com/');
    this.setColour(210);
    this.appendValueInput("NAME")
        .setCheck("String")
        .appendField("int( input(");
    this.appendDummyInput()
        .appendField(") )");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setTooltip('');
    //this.setPreviousStatement(true);
    //this.setNextStatement(true);
  }
};

Blockly.Blocks['printAverageOfPositiveEnteredIntegers'] = {
  init: function() {
    this.setHelpUrl('http://www.github.com/');
    this.setColour(120);
    this.appendDummyInput().appendField("print(\"Average of positive entered integers:\", averageOfPositiveEnteredIntegers())");

    this.setTooltip('Print average of positive entered integers');

  },
}

Blockly.Blocks['inputvariable_get'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(330);
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("n"), "INPUT");
    this.setOutput(true, "Number");
    this.setTooltip('');
  }
};

Blockly.Blocks['math_single'] = {
  /**
   * Block for advanced math operators with single operand.
   * @this Blockly.Block
   */
  init: function() {
    var OPERATORS =
        [['-', 'NEG'],
         [Blockly.Msg.MATH_SINGLE_OP_ROOT, 'ROOT']];
    this.setHelpUrl(Blockly.Msg.MATH_SINGLE_HELPURL);
    this.setColour(230);
    this.setOutput(true, 'Number');
    this.interpolateMsg('%1 %2',
        ['OP', new Blockly.FieldDropdown(OPERATORS)],
        ['NUM', 'Number', Blockly.ALIGN_RIGHT],
        Blockly.ALIGN_RIGHT);
    // Assign 'this' to a variable for use in the tooltip closure below.
    var thisBlock = this;
    this.setTooltip(function() {
      var mode = thisBlock.getFieldValue('OP');
      var TOOLTIPS = {
        'ROOT': Blockly.Msg.MATH_SINGLE_TOOLTIP_ROOT,
        'ABS': Blockly.Msg.MATH_SINGLE_TOOLTIP_ABS,
        'NEG': Blockly.Msg.MATH_SINGLE_TOOLTIP_NEG,
        'LN': Blockly.Msg.MATH_SINGLE_TOOLTIP_LN,
        'LOG10': Blockly.Msg.MATH_SINGLE_TOOLTIP_LOG10,
        'EXP': Blockly.Msg.MATH_SINGLE_TOOLTIP_EXP,
        'POW10': Blockly.Msg.MATH_SINGLE_TOOLTIP_POW10
      };
      return TOOLTIPS[mode];
    });
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
         [Blockly.Msg.MATH_DIVISION_SYMBOL, 'DIVIDE'],
         ["**", 'POWER']];
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
        'DIVIDE': Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_DIVIDE,
        'POWER': Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_POWER
      };
      return TOOLTIPS[mode];
    });
  }
};

Blockly.Blocks['return'] = {
  init: function() {
    this.setHelpUrl('http://www.github.com/');
    this.setColour(190);
    this.appendValueInput("RETURN")
        .setCheck("Number")
        .appendField("return");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setTooltip('');
  }
};

Blockly.Blocks['inputvariable_get'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(330);
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("x"), "INPUT");
    this.setOutput(true, "Number");
    this.setTooltip('');
  }
};