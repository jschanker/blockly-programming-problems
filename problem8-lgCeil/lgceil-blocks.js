Blockly.Blocks['lgCeil'] = {
  init: function() {
    this.setHelpUrl('http://www.github.com/');
    this.setColour(190);
    this.appendDummyInput('funcName').appendField("lgCeil", 'NAME')
                                     .appendField("(y)", 'PARAMSA');
    this.appendStatementInput("function", 'STACK');
    //this.appendDummyInput().appendField("    return description", 'RETURN');
    //this.appendDummyInput().appendField("    return", 'RETURNA');
    //this.appendValueInput("RETURN")
    //                       .setCheck("String");

    this.setTooltip('Function definition for lgCeil');
    this.setInputsInline(true);
  },
}

Blockly.Blocks['printSoHeyYo'] = {
  init: function() {
    this.setHelpUrl('http://www.github.com/');
    this.setColour(120);
    this.appendDummyInput()
        .appendField("num = ")
        .appendField(new Blockly.FieldTextInput("36"), 'NUM_INPUT');
    this.appendDummyInput().appendField("print(\"Ceiling of binary log of \", num, \":\", lgCeil(num))");

    this.setTooltip('Print Absolute Value');

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