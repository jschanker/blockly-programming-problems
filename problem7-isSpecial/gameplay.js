function runCodeAndTestFunctions() {
  var code = Blockly.JavaScript.workspaceToCode();
  try {
    eval(code);
  } catch(e) {
    if(e.toString().indexOf("Reference") != -1) {
      alert(e.toString() + "\nMake sure variables are defined before they're used.  Variables defined inside of the function will not be available outside of it.");
    } else {
      alert(e.toString());
    }
  }

  showTestOutput(1005, isSpecial(1005), true);
  showTestOutput(10000, isSpecial(10000), true);
  showTestOutput(3003, isSpecial(3003), true);
  showTestOutput(168421, isSpecial(168421), true);
  showTestOutput(-12345, isSpecial(-12345), false);
  showTestOutput(-235, isSpecial(-235), false);
  showTestOutput(36, isSpecial(36), true);
  showTestOutput(28, isSpecial(28), false);
}

function showTestOutput(val, actualOutput, expectedOutput) {
  var cellId = "test" + val.toString();
  if(actualOutput == expectedOutput) {
      document.getElementById(cellId).style.backgroundColor = "#00FF00";
    } else {
      document.getElementById(cellId).style.backgroundColor = "#FF0000";
    }
}