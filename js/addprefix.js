var buzz = buzz || {};
buzz.util = buzz.util || {};

buzz.util.addPrefixFn = function() {
    var addPrefix = function(UOM, newNumber) {
        return YAHOO.util.Number.format(newNumber, {
            suffix: UOM,
            decimalPlaces : 3
        });
    };

    var AddPrefixLogic = {
        inputElement: inputelement,
        divElement: divelement,
        onClick: function () {
            YAHOO.util.Dom.removeClass(this.divElement, 'show');
            YAHOO.util.Dom.removeClass(this.inputElement, 'hide');
            YAHOO.util.Dom.addClass(this.divElement, 'hide');
            YAHOO.util.Dom.addClass(this.inputElement, 'show');
            this.inputElement.focus();
        },
        onBlur: function() {
            YAHOO.util.Dom.removeClass(this.inputElement, 'show');
            YAHOO.util.Dom.addClass(this.inputElement, 'hide');
            YAHOO.util.Dom.removeClass(this.divElement, 'hide');
            YAHOO.util.Dom.addClass(this.divElement, 'show');
            this.divElement.innerHTML = addPrefix(' LB', this.inputElement.value);
        }
    };


    function bind(fn, scope) {
        return function () {
            return fn.apply(scope, arguments);
        }
    }

    AddPrefixLogic.onClick = bind(AddPrefixLogic.onClick, AddPrefixLogic);
    AddPrefixLogic.onBlur = bind(AddPrefixLogic.onBlur, AddPrefixLogic);
    YAHOO.util.Event.addListener("divElement", "click", AddPrefixLogic.onClick);
    YAHOO.util.Event.addListener("inputElement", "blur", AddPrefixLogic.onBlur);

};