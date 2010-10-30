var buzz = buzz || {};
buzz.util = buzz.util || {};

buzz.util.commonFn = function() {

};

buzz.util.commonFnBind = function(fn) {
    var args = [];
    for (var n = 1; n < arguments.length; n++)
        args.push(arguments[n]);
    return function () {
        return fn.apply(this, args);
    };
};

// btnOne.onclick = BindArguments(WriteDigit, 1);


