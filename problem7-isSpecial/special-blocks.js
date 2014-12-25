Blockly.Blocks['isSpecial'] = {
  init: function() {
    this.setHelpUrl('http://www.github.com/');
    this.setColour(190);
    this.appendDummyInput('funcName').appendField("isSpecial", 'NAME')
                                     .appendField("(num)", 'PARAMSA');
    this.appendStatementInput("function", 'STACK');
    //this.appendDummyInput().appendField("    return description", 'RETURN');
    //this.appendDummyInput().appendField("    return", 'RETURNA');
    //this.appendValueInput("RETURN")
    //                       .setCheck("String");

    this.setTooltip('Function definition for isSpecial');
    this.setInputsInline(true);
  },
}

Blockly.Blocks['printIsSpecial'] = {
  init: function() {
    this.setHelpUrl('http://www.github.com/');
    this.setColour(120);
    this.appendDummyInput()
        .appendField("n = ")
        .appendField(new Blockly.FieldTextInput("36"), 'NUM_INPUT');
    this.appendDummyInput().appendField("print(\"Is\", n, \"special:\", isSpecial(n))");

    this.setTooltip('Print whether number is special');

  },
}

Blockly.Blocks['greaterthan1000'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(50);
    this.appendDummyInput()
        .appendField("num > 1000");
    this.setOutput(true, "Boolean");
    this.setTooltip('');
  }
};

Blockly.Blocks['divisibleby3'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(150);
    this.appendDummyInput()
        .appendField("num % 3 == 0");
    this.setOutput(true, "Boolean");
    this.setTooltip('');
  }
};

Blockly.Blocks['divisibleby5'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(250);
    this.appendDummyInput()
        .appendField("num % 5 == 0");
    this.setOutput(true, "Boolean");
    this.setTooltip('');
  }
};

Blockly.Blocks['return'] = {
  init: function() {
    this.setHelpUrl('http://www.github.com/');
    this.setColour(190);
    this.appendValueInput("RETURN")
        .setCheck("Boolean")
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