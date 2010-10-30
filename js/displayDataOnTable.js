YAHOO.example.Polling = function() {
		var counter = 0;
		var dataIncrementer = function() {
		    counter++;
		    /*return [{
			TestCase:counter,
			Value:"At the tone the time will be: ",
			Status: YAHOO.util.Date.format(new Date(), {format:"%I:%M:%S %p"}),
			Regular_Expression: "value"
		    }]*/

		    return displayInTableTestCase(arrTestCases);
		};

		var myColumnDefs = [
		    {key: "TestCase"},
		    {key: "Value"},
		    {key: "Status"},
		    {key: "Regular_Expression"}
		];

		var myDataSource = new YAHOO.util.DataSource(dataIncrementer);
		myDataSource.responseType = YAHOO.util.DataSource.TYPE_JSARRAY;
		myDataSource.responseSchema = {
		    fields: ["TestCase", "Value", "Status","Regular_Expression"]
		};

		var myDataTable = new YAHOO.widget.DataTable("polling",
			myColumnDefs, myDataSource);

		// Set up polling
		var myCallback = {
		    success: myDataTable.onDataReturnInitializeTable,
		    failure: function() {
			YAHOO.log("Polling failure", "error");
		    },
		    scope: myDataTable
		}
		myDataSource.setInterval(5000, null, myCallback)

		return {
		    oDS: myDataSource,
		    oDT: myDataTable
		};
}();
