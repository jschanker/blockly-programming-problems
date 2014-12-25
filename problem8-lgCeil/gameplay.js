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

  showTestOutput(1, lgCeil(1), 0);
  showTestOutput(1.05, lgCeil(1.05), 1);
  showTestOutput(2, lgCeil(2), 1);
  showTestOutput(2.0001, lgCeil(2.0001), 2);
  showTestOutput(3, lgCeil(3), 2);
  showTestOutput(4, lgCeil(4), 2);
  showTestOutput(5, lgCeil(5), 3);
  showTestOutput(8.2531, lgCeil(8.2351), 4);
  showTestOutput(10.21, lgCeil(10.21), 4);
  showTestOutput(1000, lgCeil(1000), 10);
  showTestOutput(16384, lgCeil(16384), 14);
  showTestOutput(1000000000.12345, lgCeil(1000000000.12345), 30);
}

function showTestOutput(val, actualOutput, expectedOutput) {
  var cellId = "test" + val.toString();
  if(actualOutput == expectedOutput) {
      document.getElementById(cellId).style.backgroundColor = "#00FF00";
    } else {
      document.getElementById(cellId).style.backgroundColor = "#FF0000";
    }
}