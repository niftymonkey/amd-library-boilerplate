// ------------------------------------------------------------
// Essence lib config
// ------------------------------------------------------------
require.config({

    // paths to scripts
    paths: {

        // 3rd Party Libraries
        jquery: "jquery",

        // Internal library modules
        core: "essence/core"
    }

});

// ------------------------------------------------------------
// This function defines our library object and exposes it on
// the global object of choice
// ------------------------------------------------------------
(function (global) {
    'use strict';

    define(['core'], function (Core) {
        // create the library object
        var Essence = {
            // The human-readable name of your library
            name: "Essence Library",

            // having your library return version information is useful
            version: "0.0.1",

            // pretty-string version of the version info
            getVersionInfo: function () {
                return this.name + " v" + this.version;
            },

            // Runs this lib in *noConflict* mode, returning the `Essence` variable
            // to its previous owner. Returns a reference to this Essenceobject.
            noConflict: function () {
                return this;
            }
        };

        // let's mixin the Core functionality to the Essence object.  And since we have core as a 
        // dependency in this define function, we can just use the extend function we made 
        // in that module
        Core.extend(Essence, Core);

        // log to console that we've successfully loaded library dependencies
        // and built up our library object 
        console.log(Essence.getVersionInfo() + " loaded");

        // expose the Essence library on the global
        global["Essence"] = Essence;

        // return the Essence from our module definition
        return Essence;
    });

}(this)); // calling our library with "this" will place this library on the window global