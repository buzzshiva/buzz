// Main Method 
function validateRegEx(value, newRegExp) {
	var regExp;
	if(newRegExp){	
		regExp = newRegExp;
	} else {
		regExp = /^(\d{1,3},(\d{3},)*\d{3}(\.\d{1,3})?|\d{1,3}(\.\d{3})?)$/;
	}

	var strvalid;

	if(value) {
		if(value.match(regExp)) {
			strvalid = "success";
		} else {
			strvalid = "failed";
		}
	} else {
		strvalid = "empty value";
			
	}
	return strvalid;
}


// Test case Objects
var arrTestCases;
   arrTestCases = [{"value":"0","regex":"","fnToExecute":validateRegEx},
                   {"value":"123","regex":"","fnToExecute":validateRegEx},
                   {"value":"123,123","regex":/^(\d{1,3},(\d{3},)*\d{3}(\.\d{1,3})?|\d{1,3}(\.\d{3})?)$/,"fnToExecute":validateRegEx},
                   {"value":"12345","regex":"","fnToExecute":validateRegEx},
                   {"value":"1234,123","regex":/^(\d{1,3}.(\d{3}.)*\d{3}(\,\d{1,3})?|\d{1,3}(\,\d{3})?)$/;,"fnToExecute":validateRegEx}
                  ];
	

// Testcase Method
function runTestCase(arrTestObject) {
    var fn, value, regex, testcase = 0,arr, txtMsg=[], status;    
    for(arr in arrTestObject) {
      if(arrTestObject.hasOwnProperty(arr)) {
        fn = arrTestObject[arr].fnToExecute;
		value = arrTestObject[arr].value;
		regex = arrTestObject[arr].regex;
		status = fn(value, regex);	
		txtMsg[testcase] = "Executing Testcase...#"+ (testcase+1) + " for value : "+value + " Status :"+status +"<br/>";              
		testcase++;
      }
    }
    
    return txtMsg.concat().join(" ");
}


// Testcase Method
function displayInTableTestCase(arrTestObject) {
    var fn, value, regex, testcase = 0,arr, txtMsgNew=[], status, testCounter = 1;    
    for(arr in arrTestObject) {
      if(arrTestObject.hasOwnProperty(arr)) {
      	var tmpObj = {};
        fn 	= 	arrTestObject[arr].fnToExecute;
	value 	= arrTestObject[arr].value;
	regex 	= arrTestObject[arr].regex;
	status 	= fn(value, regex);
	
	tmpObj.TestCase 		= testCounter; 
	tmpObj.Value 			= value;
	tmpObj.Status 			= status;
	tmpObj.Regular_Expression 	= regex;


	testCounter++; 
	testcase++;
      }
      txtMsgNew.push(tmpObj);
    }
    
    
    return txtMsgNew;
}


// Execute Testcase 
// runTestCase(arrTestCases);