Blockly.Blocks['initials'] = {
  init: function() {
    this.setHelpUrl('http://www.github.com/');
    this.setColour(210);
    this.appendDummyInput('funcName').appendField("initials", 'NAME')
                                     .appendField("(fullName)", 'PARAMSA');
    this.appendStatementInput("function", 'STACK');
    this.appendDummyInput().appendField("    return", 'RETURNA');
    this.appendValueInput("RETURN")
                           .setCheck("String");

    this.setTooltip('Function definition for initials');
    this.setInputsInline(true);
  },
}

Blockly.Blocks['printInitials'] = {
  init: function() {
    this.setHelpUrl('http://www.github.com/');
    this.setColour(120);
    this.appendDummyInput()
        .appendField("name = ")
        .appendField(new Blockly.FieldTextInput("Super Original"), 'FULL_NAME');
    this.appendDummyInput().appendField("print(\"Initials of\", name, \":\", initials(name))");

    this.setTooltip('Print Initials');

  },
}

Blockly.Blocks['variables_get'] = {
  /**
   * Block for variable getter.
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl(Blockly.Msg.VARIABLES_GET_HELPURL);
    this.setColour(330);
    this.appendDummyInput()
        .appendField(Blockly.Msg.VARIABLES_GET_TITLE)
        .appendField(new Blockly.FieldVariable(
        Blockly.Msg.VARIABLES_GET_ITEM), 'VAR')
        .appendField(Blockly.Msg.VARIABLES_GET_TAIL);
    this.setOutput(true);
    this.setTooltip(Blockly.Msg.VARIABLES_GET_TOOLTIP);
    this.contextMenuMsg_ = Blockly.Msg.VARIABLES_GET_CREATE_SET;
    this.contextMenuType_ = 'variables_set';
  },
  /**
   * Return all variables referenced by this block.
   * @return {!Array.<string>} List of variable names.
   * @this Blockly.Block
   */
  getVars: function() {
    return [this.getFieldValue('VAR')];
  },
  /**
   * Notification that a variable is renaming.
   * If the name matches one of this block's variables, rename it.
   * @param {string} oldName Previous name of variable.
   * @param {string} newName Renamed variable.
   * @this Blockly.Block
   */
  renameVar: function(oldName, newName) {
    if (Blockly.Names.equals(oldName, this.getFieldValue('VAR'))) {
      this.setFieldValue(newName, 'VAR');
    }
  },
  /**
   * Add menu option to create getter/setter block for this setter/getter.
   * @param {!Array} options List of menu options to add to.
   * @this Blockly.Block
   */
  customContextMenu: function(options) {
    var option = {enabled: true};
    var name = this.getFieldValue('VAR');
    option.text = this.contextMenuMsg_.replace('%1', name);
    var xmlField = goog.dom.createDom('field', null, name);
    xmlField.setAttribute('name', 'VAR');
    var xmlBlock = goog.dom.createDom('block', null, xmlField);
    xmlBlock.setAttribute('type', this.contextMenuType_);
    option.callback = Blockly.ContextMenu.callbackFactory(this, xmlBlock);
    options.push(option);
  }
};

Blockly.Blocks['variables_set'] = {
  /**
   * Block for variable setter.
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl(Blockly.Msg.VARIABLES_SET_HELPURL);
    this.setColour(330);
    this.interpolateMsg(
        // TODO: Combine these messages instead of using concatenation.
        Blockly.Msg.VARIABLES_SET_TITLE + ' %1 ' +
        Blockly.Msg.VARIABLES_SET_TAIL + ' %2',
        ['VAR', new Blockly.FieldVariable(Blockly.Msg.VARIABLES_SET_ITEM)],
        ['VALUE', null, Blockly.ALIGN_RIGHT],
        Blockly.ALIGN_RIGHT);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.VARIABLES_SET_TOOLTIP);
    this.contextMenuMsg_ = Blockly.Msg.VARIABLES_SET_CREATE_GET;
    this.contextMenuType_ = 'variables_get';
  },
  /**
   * Return all variables referenced by this block.
   * @return {!Array.<string>} List of variable names.
   * @this Blockly.Block
   */
  getVars: function() {
    return [this.getFieldValue('VAR')];
  },
  /**
   * Notification that a variable is renaming.
   * If the name matches one of this block's variables, rename it.
   * @param {string} oldName Previous name of variable.
   * @param {string} newName Renamed variable.
   * @this Blockly.Block
   */
  renameVar: function(oldName, newName) {
    if (Blockly.Names.equals(oldName, this.getFieldValue('VAR'))) {
      this.setFieldValue(newName, 'VAR');
    }
  },
  customContextMenu: Blockly.Blocks['variables_get'].customContextMenu
};

Blockly.Blocks['math_number'] = {
  /**
   * Block for numeric value.
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl(Blockly.Msg.MATH_NUMBER_HELPURL);
    this.setColour(230);
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0',
        Blockly.FieldTextInput.numberValidator), 'NUM');
    this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.MATH_NUMBER_TOOLTIP);
  }
};

Blockly.Blocks['text'] = {
  /**
   * Block for text value.
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl(Blockly.Msg.TEXT_TEXT_HELPURL);
    this.setColour(160);
    this.appendDummyInput()
        .appendField(this.newQuote_(true))
        .appendField(new Blockly.FieldTextInput(''), 'TEXT')
        .appendField(this.newQuote_(false));
    this.setOutput(true, 'String');
    this.setTooltip(Blockly.Msg.TEXT_TEXT_TOOLTIP);
  },
  /**
   * Create an image of an open or closed quote.
   * @param {boolean} open True if open quote, false if closed.
   * @return {!Blockly.FieldImage} The field image of the quote.
   * @private
   */
  newQuote_: function(open) {
    if (open == Blockly.RTL) {
      var file = 'quote1.png';
    } else {
      var file = 'quote0.png';
    }
    return new Blockly.FieldImage(Blockly.pathToMedia + file, 12, 12, '"');
  }
};

Blockly.Blocks['text_charAt'] = {
  /**
   * Block for getting a character from the string.
   * @this Blockly.Block
   */
  init: function() {
    this.WHERE_OPTIONS =
        [[Blockly.Msg.TEXT_CHARAT_FROM_START, 'FROM_START'],
         [Blockly.Msg.TEXT_CHARAT_FROM_END, 'FROM_END'],
         [Blockly.Msg.TEXT_CHARAT_FIRST, 'FIRST'],
         [Blockly.Msg.TEXT_CHARAT_LAST, 'LAST'],
         [Blockly.Msg.TEXT_CHARAT_RANDOM, 'RANDOM']];
    this.setHelpUrl(Blockly.Msg.TEXT_CHARAT_HELPURL);
    this.setColour(160);
    this.setOutput(true, 'String');
    this.appendValueInput('VALUE')
        .setCheck('String')
        .appendField(Blockly.Msg.TEXT_CHARAT_INPUT_INTEXT);
    this.appendDummyInput('AT');
    this.setInputsInline(true);
    this.updateAt_(true);
    this.setTooltip(Blockly.Msg.TEXT_CHARAT_TOOLTIP);
  },
  /**
   * Create XML to represent whether there is an 'AT' input.
   * @return {Element} XML storage element.
   * @this Blockly.Block
   */
  mutationToDom: function() {
    var container = document.createElement('mutation');
    var isAt = this.getInput('AT').type == Blockly.INPUT_VALUE;
    container.setAttribute('at', isAt);
    return container;
  },
  /**
   * Parse XML to restore the 'AT' input.
   * @param {!Element} xmlElement XML storage element.
   * @this Blockly.Block
   */
  domToMutation: function(xmlElement) {
    // Note: Until January 2013 this block did not have mutations,
    // so 'at' defaults to true.
    var isAt = (xmlElement.getAttribute('at') != 'false');
    this.updateAt_(isAt);
  },
  /**
   * Create or delete an input for the numeric index.
   * @param {boolean} isAt True if the input should exist.
   * @private
   * @this Blockly.Block
   */
  updateAt_: function(isAt) {
    // Destroy old 'AT' and 'ORDINAL' inputs.
    this.removeInput('AT');
    this.removeInput('ORDINAL', true);
    // Create either a value 'AT' input or a dummy input.
    if (isAt) {
      this.appendValueInput('AT').setCheck('Number');
      if (Blockly.Msg.ORDINAL_NUMBER_SUFFIX) {
        this.appendDummyInput('ORDINAL')
            .appendField(Blockly.Msg.ORDINAL_NUMBER_SUFFIX);
      }
    } else {
      this.appendDummyInput('AT');
    }
    if (Blockly.Msg.TEXT_CHARAT_TAIL) {
      this.removeInput('TAIL', true);
      this.appendDummyInput('TAIL')
          .appendField(Blockly.Msg.TEXT_CHARAT_TAIL);
    }
    var menu = new Blockly.FieldDropdown(this.WHERE_OPTIONS, function(value) {
      var newAt = (value == 'FROM_START') || (value == 'FROM_END');
      // The 'isAt' variable is available due to this function being a closure.
      if (newAt != isAt) {
        var block = this.sourceBlock_;
        block.updateAt_(newAt);
        // This menu has been destroyed and replaced.  Update the replacement.
        block.setFieldValue(value, 'WHERE');
        return null;
      }
      return undefined;
    });
    this.getInput('AT').appendField(menu, 'WHERE');
  }
};

Blockly.Blocks['text_indexOf'] = {
  /**
   * Block for finding a substring in the text.
   * @this Blockly.Block
   */
  init: function() {
    var OPERATORS =
        [[Blockly.Msg.TEXT_INDEXOF_OPERATOR_FIRST, 'FIRST'],
         [Blockly.Msg.TEXT_INDEXOF_OPERATOR_LAST, 'LAST']];
    this.setHelpUrl(Blockly.Msg.TEXT_INDEXOF_HELPURL);
    this.setColour(160);
    this.setOutput(true, 'Number');
    this.appendValueInput('VALUE')
        .setCheck('String')
        .appendField(Blockly.Msg.TEXT_INDEXOF_INPUT_INTEXT);
    this.appendValueInput('FIND')
        .setCheck('String')
        .appendField(new Blockly.FieldDropdown(OPERATORS), 'END');
    if (Blockly.Msg.TEXT_INDEXOF_TAIL) {
      this.appendDummyInput().appendField(Blockly.Msg.TEXT_INDEXOF_TAIL);
    }
    this.setInputsInline(true);
    this.setTooltip(Blockly.Msg.TEXT_INDEXOF_TOOLTIP);
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

Blockly.Blocks['text_concatenation'] = {
  /**
   * Block for basic arithmetic operator.
   * @this Blockly.Block
   */
  init: function() {
    var OPERATORS =
        [[Blockly.Msg.MATH_ADDITION_SYMBOL, 'ADD']];
    //this.setHelpUrl(Blockly.Msg.MATH_ARITHMETIC_HELPURL);
    this.setColour(160);
    this.setOutput(true, 'String');
    this.appendValueInput('A')
        .setCheck('String');
    this.appendValueInput('B')
        .setCheck('String')
        .appendField(new Blockly.FieldDropdown(OPERATORS), 'OP');
    this.setInputsInline(true);
    // Assign 'this' to a variable for use in the tooltip closure below.
    var thisBlock = this;
    this.setTooltip(function() {
      var mode = thisBlock.getFieldValue('OP');
      var TOOLTIPS = {
        'ADD': "Returns the Concatenation of Two Strings"
      };
      return TOOLTIPS[mode];
    });
  }
};