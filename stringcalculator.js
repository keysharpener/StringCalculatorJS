function Add(inputNumbers) {
    if (inputNumbers == "")
        return 0;

    inputNumbers = FormatInputStringWithDefaultSeparator(inputNumbers);
    var splitNumbers = inputNumbers.split(",");
    var result = 0;
    splitNumbers.forEach(function (numberAsString) {
        result = result + parseInt(numberAsString);
    }, this);
    return result;
}

function FormatInputStringWithDefaultSeparator(stringToFormat) {
    var defaultSeparator = ",";
    var separatorToUse = defaultSeparator;
    if (stringToFormat.substring(0, 2) == "//") {
        separatorToUse = stringToFormat[2];
        stringToFormat = stringToFormat.substring(4).replace(separatorToUse, defaultSeparator);
    }
    if (stringToFormat.includes("\n"))
        stringToFormat = stringToFormat.replace("\n", defaultSeparator);
    return stringToFormat;
}


module.exports = {
    Add: Add
};