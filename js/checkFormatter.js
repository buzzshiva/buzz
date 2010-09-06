var buzz = buzz || {};
buzz.util = buzz.util || {};

buzz.util.customFormat = function() {

};

var locale = "us-en";

var cellConfig = {
        uom: "LB",
        format: "00.0000",
        dataType: "Integer"
};

var addPrefix = function(UOM, newNumber) {
    var oConfig = addPrefixSetting(cellConfig);
    return YAHOO.util.Number.format(newNumber, oConfig);
};

function addPrefixSetting(cellConfig) {
        var settings;
        var oConfig = checkFormatValue(cellConfig.format);
        settings.suffix = cellConfig.uom;
    if(cellConfig.dataType === "Integer") {
       // TODO
    }else if(cellConfig.dataType === "Float"){
        settings.decimalPlaces      = oConfig["decimalPlaces"];
        settings.decimalSeparator   = oConfig["decimalSeparator"];
        settings.thousandsSeparator = oConfig["thousandsSeparator"];
    }
   return settings; 
}

function checkFormatValue(cellConfig) {
    //findLocale();
    var oConfig = [], formatStr = cellConfig.format;

    switch(locale) {
        case "us-en":
                    oConfig["decimalPlaces"] = formatStr.split(".")[1].length;
                    oConfig["decimalSeparator"] = ".";
                    oConfig["thousandsSeparator"] = ",";
                   break;
        case "fr":
                    oConfig["decimalPlaces"] = formatStr.split(",")[1].length;
                    oConfig["decimalSeparator"] = ",";
                    oConfig["thousandsSeparator"] = ".";
                   break;
        default :
                   break;
    }

    return oConfig;
}
