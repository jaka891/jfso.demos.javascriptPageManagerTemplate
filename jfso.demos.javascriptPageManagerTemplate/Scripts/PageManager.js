/* Singleton implementations: See
 * https://addyosmani.com/resources/essentialjsdesignpatterns/book/#singletonpatternjavascript
 */
var PageManagerSingleton = (function () {

    // Instance stores a reference to the Singleton
    var instance;

    /* define the default parameters here */
    var _defaultOptions = {
        actions: [],
    };

    var options = {};

    function init(myOptions) {

        if (myOptions) {
            options = myOptions;
        } else {
            options = $.extend(_defaultOptions, options);
        }

        // Singleton

        // Private methods and variables
        var _pageLoad = function () {
            alert("1");
            console.log(options);

            Section1Handler().moradaControlOnclickfctn(function () {
                alert(3);
            });

            Section1Handler().moradaControlOnclickfctn(function () {
                alert(4);
            });

        };

        return {// Public methods and variables
            PageLoad: _pageLoad
        };

    };

    var Section1Handler = (function () {

        function onclickFunction(callback) {
            alert(2);

            if (callback) {
                callback();
            }
        }

        return {
            moradaControlOnclickfctn: onclickFunction
        };
    });

    return {
        // Get the Singleton instance if one exists
        // or create one if it doesn't
        init: function (options) {
            if (!instance) {
                instance = init(options);
            }
            return instance;
        },
    };

})();

