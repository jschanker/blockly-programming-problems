Blockly.Blocks['powerup'] = {
  init: function() {
    this.setColour(120);
    this.appendDummyInput()
        .appendField("powerUp()");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('Power Up!');
  }
};

Blockly.Blocks['powerupmulticall'] = {
  init: function() {
    var powerUpNum = "0";
    this.setColour(120);
    this.appendDummyInput()
        .appendField("powerUp")
        .appendField(powerUpNum, 'NUM_TIMES')
        .appendField("Times()");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('Power up multiple times!');
  },
  mutationToDom: function() {
    var container = document.createElement('mutation');
    var numTimes = this.getFieldValue('NUM_TIMES');
    container.setAttribute('my_num_times', numTimes);
    return container;
  },

  domToMutation: function(xmlElement) {
    if(xmlElement.getAttribute('my_num_times') && this.getFieldValue('NUM_TIMES')) {
      this.setFieldValue(xmlElement.getAttribute('my_num_times'), 'NUM_TIMES');
    }
  },

  onchange: function() {
    // TODO: Update without lagging
  }
};

Blockly.Blocks['multipowerup'] = {
  init: function() {
    this.setHelpUrl('http://www.github.com/');
    this.setColour(210);
    /*this.appendValueInput("functionName")
        .setCheck("Number")
        .appendField("powerUp");
    this.appendDummyInput()
        .appendField(num + "Times()");*/
    this.appendDummyInput('funcName').appendField("powerUp")
        .appendField("0", 'NUM_TIMES')
        .appendField("Times()");
    this.appendStatementInput("function");
    this.setInputsInline(true);
    this.setTooltip('Function definition for Multi Power Up');

  },

    //alert(this.getFieldValue('NUM_TIMES'));
    //this.setMutator(null);
    //this.unplug(true, true);
    /**
    * Dispose of this block.
    * @param {boolean} healStack If true, then try to heal any gap by connecting
    *     the next statement with the previous statement.  Otherwise, dispose of
    *     all children of this block.
    * @param {boolean} animate If true, show a disposal animation and sound.
    * @param {boolean} opt_dontRemoveFromWorkspace If true, don't remove this
    *     block from the workspace's list of top blocks.
    */
    /**
    * Fill a block with initial values.
    * @param {!Blockly.Workspace} workspace The workspace to use.
    * @param {string} prototypeName The typename of the block.
    */
    //Blockly.Block.prototype.fill = function(workspace, prototypeName)
    //this.dispose(true,true,false);

    //this.setMutator(new Blockly.Mutator(['controls_if_elseif']));
    //node.addEventListener(name, wrapFunc, false); utils.js
    //Blockly.fireUiEventNow(node, eventName); or fireUiEvent(node, eventName) //synchronously

  onchange: function() {
    var num = 0;
    var descendants = this.getDescendants();
    var len = descendants.length;
    var myNum = this.getFieldValue('NUM_TIMES');
    
    for(var i = 1; i < len; i++) {
      var numTimes = descendants[i].getFieldValue('NUM_TIMES');

      if(numTimes) {
        num += parseInt(numTimes);
      } else {
        num++;
      }
      //else if(numTimes != myNum) {
        // No infinite recursion
      //  num++;
      //}
    }

    if(this.getFieldValue('NUM_TIMES') && myNum != num)
    {
      var blocks = Blockly.mainWorkspace.getTopBlocks(true);
      var paddedNum = num.toString();
      var bailoutCounter = 0;
      var foundMatch = false;

      while(bailoutCounter < 20 && (foundMatch || bailoutCounter == 0)) {
        foundMatch = false;
        for (var x = 0, block; block = blocks[x]; x++) {
          if(block.getColour() == 210 && block.getFieldValue('NUM_TIMES') == paddedNum) {
            foundMatch = true;
            paddedNum = "0" + paddedNum;
          }
        }
        bailoutCounter++;
      }

      // only do when NUM_TIMES has been defined
      this.setFieldValue(paddedNum.toString(), 'NUM_TIMES');
      //updateToolboxFunctions(this, myNum);
      updateToolboxFunctions();
    }

    /******
    if(!this.workspace) {
        // disposed
        console.log("Disposed", myNum);
    *****/
  },
};