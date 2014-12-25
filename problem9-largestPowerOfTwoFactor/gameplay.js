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

  showTestOutput(1, largestPowerOfTwoThatIsAFactorOf(1), 1);
  showTestOutput(2, largestPowerOfTwoThatIsAFactorOf(2), 2);
  showTestOutput(4, largestPowerOfTwoThatIsAFactorOf(4), 4);
  showTestOutput(120, largestPowerOfTwoThatIsAFactorOf(120), 8);
  showTestOutput(850, largestPowerOfTwoThatIsAFactorOf(850), 2);
  showTestOutput(1000, largestPowerOfTwoThatIsAFactorOf(1000), 8);
  showTestOutput(1024, largestPowerOfTwoThatIsAFactorOf(1024), 1024);
  showTestOutput(1025, largestPowerOfTwoThatIsAFactorOf(1025), 1);
  showTestOutput(15360, largestPowerOfTwoThatIsAFactorOf(15360), 1024);
  showTestOutput(8452495638528, largestPowerOfTwoThatIsAFactorOf(8452495638528), 68719476736);
}

function showTestOutput(val, actualOutput, expectedOutput) {
  var cellId = "test" + val.toString();
  if(actualOutput == expectedOutput) {
      document.getElementById(cellId).style.backgroundColor = "#00FF00";
    } else {
      document.getElementById(cellId).style.backgroundColor = "#FF0000";
    }
}