function getCoreXML() {
  coreXML = "<block type = \"multipowerup\">\n\t<field name = \"NUM_TIMES\">0</field>\n</block>\n<block type = \"powerup\"></block>";
  return coreXML;
}

function makeXMLMultiPowerUpCode(num) {
  if(num)
    return "<block type=\"powerupmulticall\"><b><mutation my_num_times=\"" + num.toString() + "\"></mutation></b>" 
          + "<field name=\"NUM_TIMES\">" + num.toString() + "</field></block>\n";
  return "";
}

function updateToolboxFunctions() {
  var newXML = getCoreXML();
  var blocks = Blockly.mainWorkspace.getTopBlocks(true);
  var numOfBlocks = 0;
  var multiPowerUpValues = [];

  for(var z = 0, block; block = blocks[z]; z++) {
    if(block.getColour() == 210 && block.getFieldValue('NUM_TIMES')) {
      multiPowerUpValues.push(block.getFieldValue('NUM_TIMES'));
    }
  }

  for(var t = 0, block; block = blocks[t]; t++) {
    if(block.getColour() == 210 && block.getFieldValue('NUM_TIMES')) {
      multiPowerUpValues.push(block.getFieldValue('NUM_TIMES'));
    }
    var descendants = block.getDescendants();
    for(var u = 0, attachedBlock; attachedBlock = descendants[u]; u++) {
      if(attachedBlock.getColour() != 210 && attachedBlock.getFieldValue('NUM_TIMES')) {
        if(multiPowerUpValues.indexOf(attachedBlock.getFieldValue('NUM_TIMES')) == -1) {
          // function no longer exists; remove block
          console.log("Removing function because it no longer exists or to prevent infinite recursion.");
          attachedBlock.dispose(true, true, false);
        }
      }
    }
  }

  for (var x = 0, block; block = blocks[x]; x++) {
    if(block.getColour() == 210 && block.getFieldValue('NUM_TIMES') && parseInt(block.getFieldValue('NUM_TIMES')) != 0) {
      newXML += makeXMLMultiPowerUpCode(block.getFieldValue('NUM_TIMES'));
    }
    var descendants = block.getDescendants();
    for(var y = 0, attachedBlock; attachedBlock = descendants[y]; y++) {
      if(attachedBlock.getColour() != 210) {
        if(numOfBlocks >= 20) {
          attachedBlock.dispose(true, true, false);
          console.log("Too many blocks!");
        } else {
          console.log(numOfBlocks);
          numOfBlocks++;
        }
      }
    }
  }
  document.getElementById('toolbox').innerHTML = newXML;
  Blockly.updateToolbox(document.getElementById('toolbox'));
}

function addBars(numberOfBars)
{
    var startRed = parseInt(document.stateForm.startRed.value);
    var startGreen = parseInt(document.stateForm.startGreen.value);
    var startBlue = parseInt(document.stateForm.startBlue.value);

    var endRed = parseInt(document.stateForm.endRed.value);
    var endGreen = parseInt(document.stateForm.endGreen.value);
    var endBlue = parseInt(document.stateForm.endBlue.value);

    var meterTable = document.getElementsByName("meter")[0];
    var meterLength = meterTable.rows[0].cells.length - 1;
    var startNumberOfFilledInBars = parseInt(document.stateForm.numberOfFilledInBars.value);
    var endNumberOfFilledInBars = startNumberOfFilledInBars + numberOfBars;

    var redDelta = (endRed - startRed)/meterLength;
    var greenDelta = (endGreen - startGreen)/meterLength;
    var blueDelta = (endBlue - startBlue)/meterLength;

    var currentRed;
    var currentGreen;
    var currentBlue;
    var currentColor;

    document.stateForm.deltaRed.value = redDelta;
    document.stateForm.deltaGreen.value = greenDelta;
    document.stateForm.deltaBlue.value = blueDelta;

    if(endNumberOfFilledInBars >= meterLength)
    {
        endNumberOfFilledInBars = meterLength;
    }

    for(var i = startNumberOfFilledInBars; i <= endNumberOfFilledInBars; i++)
    {
        currentRed = (Math.round(startRed + i*redDelta)).toString(16);
        currentGreen = (Math.round(startGreen + i*greenDelta)).toString(16);
        currentBlue = (Math.round(startBlue + i*blueDelta)).toString(16);

        if(currentRed.length == 1)
        {
            currentRed = "0".concat(currentRed);
        }

        if(currentGreen.length == 1)
        {
            currentGreen = "0".concat(currentGreen);
        }

        if(currentBlue.length == 1)
        {
            currentBlue = "0".concat(currentBlue);
        }

        currentColor = "#".concat(currentRed, currentGreen, currentBlue);
        meterTable.rows[0].cells[i].bgColor = currentColor;
    }

    document.stateForm.numberOfFilledInBars.value = endNumberOfFilledInBars;
}

function removeBars(numberOfBars)
{
    var meterTable = document.getElementsByName("meter")[0];
    var meterLength = meterTable.rows[0].cells.length;
    var startNumberOfFilledInBars = parseInt(document.stateForm.numberOfFilledInBars.value);
    var endNumberOfFilledInBars = startNumberOfFilledInBars - numberOfBars;

    if(endNumberOfFilledInBars < 0)
    {
        endNumberOfFilledInBars = 0;
    }

    for(var i = startNumberOfFilledInBars; i >= endNumberOfFilledInBars; i--)
    {
        meterTable.rows[0].cells[i].bgColor = "#FFFFFF";
    }

    document.stateForm.numberOfFilledInBars.value = endNumberOfFilledInBars;
}

function powerUp() {
  addBars(1);
}

function generatePowerUpMeter(width)
{
  var textLabels = "None";
  var delta = width / 65;
  for(var i = 0; i < delta; i++) {
    textLabels += "&nbsp;";
  }
  textLabels += "Very Weak";
  for(var i = 0; i < delta; i++) {
    textLabels += "&nbsp;";
  }
  textLabels += "Weak";
  for(var i = 0; i < delta; i++) {
    textLabels += "&nbsp;";
  }
  textLabels += "Moderate";
  for(var i = 0; i < delta; i++) {
    textLabels += "&nbsp;";
  }
  textLabels += "Strong";
  for(var i = 0; i < delta; i++) {
    textLabels += "&nbsp;";
  }
  textLabels += "Very Strong";
  for(var i = 0; i < 10; i++) {
    textLabels += "&nbsp;";
  }
  textLabels += "SUPERHERO!";

  var meterCode = "<TABLE BORDER = \"1\"><TR><TD><TABLE BORDER = \"0\" CELLPADDING = \"0\" CELLSPACING = \"0\" id = \"meter\" NAME = \"meter\">\n<TR>";
  for(var i = 0; i < width; i++) {
    meterCode += "<TD HEIGHT = \"50\" WIDTH = \"1\" BGCOLOR = \"#FFFFFF\"></TD>\n";
  }
  meterCode += "</TR>\n";
  meterCode += "<TR><TD class = \"meterStatus\" COLSPAN = \"" + width + "\"><NOBR>" + textLabels + "</NOBR></TD></TR>";
  meterCode += "</TABLE>\n</TD>\n</TR>\n</TABLE>\n";
  document.getElementById("meterDiv").innerHTML = meterCode;
}
function runPowerUps() {
  removeBars(1500);
  updateToolboxFunctions();
  var code = Blockly.JavaScript.workspaceToCode();
  eval(code);
  var a, b;
}

