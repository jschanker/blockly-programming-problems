Blockly.Blocks['numOfHrsMinsAndSecs'] = {
  init: function() {
    this.setHelpUrl('http://www.github.com/');
    this.setColour(210);
    /*this.appendValueInput("functionName")
        .setCheck("Number")
        .appendField("powerUp");
    this.appendDummyInput()
        .appendField(num + "Times()");*/
    this.appendDummyInput('funcName').appendField("numOfHrsMinsAndSecsIn")
                                     .appendField("(seconds)");
    this.appendDummyInput().appendField("    SECS_IN_MIN = 60   ");
    this.appendDummyInput().appendField("    MINS_IN_HOUR = 60");
    this.appendStatementInput("function");
    this.appendDummyInput().appendField("    return hours, minutes, remainingSeconds");
    //this.setInputsInline(true);
    this.setTooltip('Function definition for Hours, Minutes, and Seconds');

  },
}

Blockly.Blocks['hours_get'] = {
  init: function() {
    this.setColour(330);
    this.appendDummyInput()
        .appendField("hours");
    //this.setOutput(true);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('hours variable');
  }
};

Blockly.Blocks['minutes_get'] = {
  init: function() {
    this.setColour(330);
    this.appendDummyInput()
        .appendField("minutes");
    //this.setOutput(true);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('minutes variable');
  }
};

Blockly.Blocks['seconds_get'] = {
  init: function() {
    this.setColour(330);
    this.appendDummyInput()
        .appendField("seconds");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setOutput(true);
    this.setTooltip('seconds variable');
  }
};

Blockly.Blocks['remainingseconds_get'] = {
  init: function() {
    this.setColour(330);
    this.appendDummyInput()
        .appendField("remainingSeconds");
    //this.setOutput(true);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('remainingSeconds variable');
  }
};