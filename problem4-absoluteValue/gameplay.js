function runCodeAndTestFunctions() {
  var code = Blockly.JavaScript.workspaceToCode();
  try {
    eval(code);
  } catch(e) {
    if(e.toString().indexOf("Reference") != -1) {
      alert(e.toString() + "\n Make sure variables are defined before they're used.  Variables defined inside of the function will not be available outside of it.");
    } else {
      alert(e.toString());
    }
  }

  showTestOutput(-16.25, absoluteValue(-16.25), 16.25);
  showTestOutput(0, absoluteValue(0), 0);
  showTestOutput(20, absoluteValue(20), 20);

}

function showTestOutput(val, actualOutput, expectedOutput) {
  var cellId = "test" + val.toString();
  if(actualOutput == expectedOutput) {
      document.getElementById(cellId).style.backgroundColor = "#00FF00";
    } else {
      document.getElementById(cellId).style.backgroundColor = "#FF0000";
    }
}