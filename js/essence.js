// ------------------------------------------------------------
// Essence lib config
// ------------------------------------------------------------
require.config({

    // paths to scripts
    paths: {
        // 3rd Party Libraries
        jquery: "libs/jquery",

        // Internal library modules
        core: "essence/core"
    }

});

// ------------------------------------------------------------
// Create and define the Essence lib
// ------------------------------------------------------------
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

        // function that will allow us to access internal libraries
        getLib: function (libName) {
            return require(libName);
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

    // return the Essence from our module definition
    return Essence;
});
