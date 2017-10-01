'use strict';

String.prototype.formatString = function(){
    // get function arguments
    let args;
    args = arguments;
    if (typeof arguments[0] === 'object') {
        args = arguments[0];
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
