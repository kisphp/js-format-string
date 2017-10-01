String.prototype.formatString = function(){
    // get function arguments
    var args;
    if (typeof arguments[0] === 'object') {
        args = arguments[0];
    } else {
        args = arguments;
    }

    // replace variables in string
    return this.replace(/{([a-z_\d+]+)}/g, function(match, index){
        // return replaced variable
        let output = args[index];
        if (typeof output === 'undefined') {
            output = '';
        }

        return output;
    });
};
