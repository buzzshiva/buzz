var buzz = buzz || {};
buzz.ui = buzz.ui || {};

var Interface = function(name, methods) {
    if (arguments.length != 2) {
        throw new Error("Interface constructor called with" + arguments.length +
                        "arguments, but expected exactly 2.");
    }

    this.name = name;
    this.methods = [];

    for (var i = 0,len = methods.length; i < len; i++) {
        if (typeof methods[i] != "string") {
            throw new Error("Interface constructor expects method name to be"
                    + "passed in as a string");
        }
        this.methods.push(methods[i]);
    }
};

// Static class Method.

Interface.ensureImplements = function(object) {
    if (arguments.length < 2) {
        throw new Error("Function Interface.ensureImplements called with " +
                        arguments.length + "arguments, but expected atleast 2.");
    }

    for (var i = 1, len = arguments.length; i < len; i++) {
        var _interface;
        _interface = arguments[i];
        if (_interface.constructor !== Interface) {
            throw new Error("Function Interface.ensureImplements expects arguments"
                    + "two and above to be instamces of Interface.");
        }

        for (var j = 0, methodLen = _interface.methods.length; j < methodLen; j++) {
            var method = _interface.methods[j];
            if (!object[method] || typeof object[method] !== 'function') {
                throw new Error("Function Interface.ensureImplements: object"
                        + "does not implement the " + _interface.name
                        + "interface.method " + method + "not found");
            }

        }

    }

};

