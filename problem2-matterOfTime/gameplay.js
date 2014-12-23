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

  showTestOutput(10, numOfHrsMinsAndSecsIn(10), [0, 0, 10]);
  showTestOutput(1000, numOfHrsMinsAndSecsIn(1000), [0, 16, 40]);
  showTestOutput(8000, numOfHrsMinsAndSecsIn(8000), [2, 13, 20]);
  showTestOutput(14400, numOfHrsMinsAndSecsIn(14400), [4, 0, 0]);
  showTestOutput(123456789, numOfHrsMinsAndSecsIn(123456789), [34293, 33, 9]);

}

function showTestOutput(seconds, actualOutput, expectedOutput) {
	var cellId = "test" + seconds.toString();
	if(actualOutput[0] == expectedOutput[0] && actualOutput[1] == expectedOutput[1] && actualOutput[2] == expectedOutput[2]) {
  		document.getElementById(cellId).style.backgroundColor = "#00FF00";
  	} else {
  		document.getElementById(cellId).style.backgroundColor = "#FF0000";
  	}
}