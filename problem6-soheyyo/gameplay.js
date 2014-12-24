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

  showTestOutput(0, soHeyYo(0), "So!");
  showTestOutput(-12, soHeyYo(-12), "Hey!Yo!");
  showTestOutput(100, soHeyYo(100), "So!");
  showTestOutput(-1024, soHeyYo(-1024), "Hey!");
  showTestOutput(45, soHeyYo(45), "So!");
  showTestOutput(-39, soHeyYo(-39), "Yo!");
  showTestOutput(35, soHeyYo(35), "So!");
  if(!soHeyYo(-41)) {
    document.getElementById("test-41").style.backgroundColor = "#00FF00";
  } else {
    document.getElementById("test-41").style.backgroundColor = "#FF0000";
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