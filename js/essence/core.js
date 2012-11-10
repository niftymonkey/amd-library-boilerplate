define(["jquery"], function ($) {
    "use strict";

    /**
     * Function that takes a property name and returns a new function that you can call
     * with an object in order to get the property off of that object
     *
     * May be quite useful in a map or reduce function
     *
     * @param name the name of the property to return
     *
     * @return {Function} the new "get property" function
     */
    var prop = function (name) {
        return function (object) {
            return object[name];
        }
    };

    // return an object that exposes all of the functions from this module
    return {
        // expose our prop method (yay revealing module pattern)
        prop: prop,
        // expose an extend function (which in this case is just jQuery's
        extend: $.extend
    };

});

