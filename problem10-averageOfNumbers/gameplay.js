function runCodeAndTestFunctions() {
  window.LoopTrap = 1000;
  Blockly.JavaScript.INFINITE_LOOP_TRAP = 'if(--window.LoopTrap == 0) throw "Infinite loop.";\n';
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
}

function showTestOutput(val, actualOutput, expectedOutput) {
  var cellId = "test" + val.toString();
  if(actualOutput == expectedOutput) {
      document.getElementById(cellId).style.backgroundColor = "#00FF00";
    } else {
      document.getElementById(cellId).style.backgroundColor = "#FF0000";
    }
}