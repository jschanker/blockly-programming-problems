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

  showTestOutput(0, richterDamageDescription(0), "No destruction of buildings");
  showTestOutput(2.1, richterDamageDescription(2.1), "No destruction of buildings");
  showTestOutput(4.5, richterDamageDescription(4.5), "Damage to poorly constructed buildings");
  showTestOutput(5, richterDamageDescription(5), "Damage to poorly constructed buildings");
  showTestOutput(5.812345, richterDamageDescription(5.812345), "Damage to poorly constructed buildings");
  showTestOutput("6.00", richterDamageDescription(6.00), "Many buildings considerably damaged, some collapse");
  showTestOutput(6.000001, richterDamageDescription(6.000001), "Many buildings considerably damaged, some collapse");
  showTestOutput(7, richterDamageDescription(7), "Many buildings destroyed");
  showTestOutput(7.9999, richterDamageDescription(7.9999), "Many buildings destroyed");
  showTestOutput(8, richterDamageDescription(8), "Most structures fall");
  showTestOutput(10.1, richterDamageDescription(10.1), "Most structures fall");
}

function showTestOutput(val, actualOutput, expectedOutput) {
  var cellId = "test" + val.toString();
  if(actualOutput == expectedOutput) {
      document.getElementById(cellId).style.backgroundColor = "#00FF00";
    } else {
      document.getElementById(cellId).style.backgroundColor = "#FF0000";
    }
}