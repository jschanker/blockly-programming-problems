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

  showTestOutput("SC", initials("Super Cool"), "S.C.");
  showTestOutput("AM", initials("Aardvark Missing"), "A.M.");
  showTestOutput("WW", initials("World Web"), "W.W.");
  showTestOutput("CP", initials("Computer Power"), "C.P.");

}

function showTestOutput(seconds, actualOutput, expectedOutput) {
  var cellId = "test" + seconds.toString();
  if(actualOutput == expectedOutput) {
      document.getElementById(cellId).style.backgroundColor = "#00FF00";
    } else {
      document.getElementById(cellId).style.backgroundColor = "#FF0000";
    }
}