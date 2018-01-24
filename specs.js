module.exports = {
    getSpecs,
    fnGetArgValue
};

function fnGetArgValue(arr, argStr) {
    return arr.filter(function(item, i) {
        if (arr[i - 1] == argStr) {
            return true
        }
    })
}

function getSpecs(args) {
    var specArr = [];
    selectedPage = fnGetArgValue(args, '-p');
    specArr.push('spec/'+selectedPage+'.js');
    
    return (specArr);
}