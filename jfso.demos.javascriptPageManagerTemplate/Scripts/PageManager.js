/* Singleton implementations: See
 * https://addyosmani.com/resources/essentialjsdesignpatterns/book/#singletonpatternjavascript
 */
var PageManagerSingleton = (function () {

    /* ++++++++++++++++++++++++++++ Usefull Stuff Area +++++++++++++++++++++++++++ */
    var _prototype = {
        ajaxCall: function (_url, _type, _successCallbBack, _errorCallBack, data) {
            $.ajax({
                async: true,
                global: false,
                cache: false,
                type: options.actions.actionName1.settings.type,
                url: options.actions.actionName1.address,
                data: data,
                contentType: 'application/json; charset=utf-8',
                beforeSend: function (evt) {
                    /* Code Here  */
                },
                success: function (response) {
                    /* Code Here  */
                    if (_successCallbBack != undefined && _successCallbBack != null) {
                        _successCallbBack();
                    }
                },
                error: function (jqXHR, textStatus) {
                    /* Code Here  */
                    console.log(jqXHR);
                    console.log(textStatus);
                    if (_errorCallBack != undefined && _errorCallBack != null) {
                        _errorCallBack();
                    }
                },
                complete: function (e) {
                    /* Code Here  */
                }
            }).done(function (data) {

            });
        }
    };

    /* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
    /* +++++++++++++++++++++++++++ Options/Settings Area ++++++++++++++++++++++++++ */

    /* define the default parameters here */
    var _defaultOptions = {
        actions: {
            actionName1: {
                address: "http://???????",
                settings: {
                    type: "GET"
                },
                call: function (data, successCallbBack, errorCallBack) {
                    _prototype.ajaxCall(
                        options.actions.actionName1.address,
                        options.actions.actionName1.settings.type,
                        successCallbBack,
                        errorCallBack,
                        data
                        );
                }
            },
            actionName2: {
                address: "http://???????",
                settings: {
                    type: "GET"
                },
                call: function (data, successCallbBack, errorCallBack) {
                    _prototype.ajaxCall(
                        options.actions.actionName1.address,
                        options.actions.actionName1.settings.type,
                        successCallbBack,
                        errorCallBack,
                        data
                        );
                }
            }
        },
        optionExample: "blabla",
        Resources: {
            section1Handler:
                {
                    text1: "blabla",
                    text2: "blabla"
                },
            section2Handler:
                {
                    text1: "blabla",
                    text2: "blabla"
                }

        },
    };

    var options = _defaultOptions;

    /* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
    /* +++++++++++++++++++++++++++ Page Load Area ++++++++++++++++++++++++++ */

    var _pageLoad = function () {
        alert("1");
        console.log(options);

        Section1Handler.moradaControlOnclickfctn(function () {

        });

    };

    /* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
    /* +++++++++++++++++++++++ Sections Handler Area +++++++++++++++++++++++ */

    var Section1Handler = (function () {

        var resources = options.Resources.section1Handler;

        function onclickFunction(callback) {

            console.log("Section1Handler.onclickFunction");

            console.log(resources.text1);

            console.log(options.actions.actionName1);

            options.actions.actionName1.call("jkhg", callback, function () {

            });

        }

        return {
            moradaControlOnclickfctn: function (callback) {
                onclickFunction(callback);
            }
        };
    }());

    var Section2Handler = (function () {

        var resources = options.Resources.section2Handler;

        function onclickFunction(callback) {

            console.log("Section1Handler.onclickFunction");

            console.log(resources.text1);

            console.log(options.actions.actionName2);

            options.actions.actionName2.call("jkhg", callback, function () {

            });

        }

        return {
            moradaControlOnclickfctn: function (callback) {
                onclickFunction(callback);
            }
        };
    }());

    /* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
    /* -------------------------- No touch Area -------------------------- */

    // PageManagerSingleton Return
    return {
        init: function (options) {
            if (!instance) {
                instance = init(options);
            }
            return instance;
        }
    };

    // Get the Singleton instance if one exists
    // or create one if it doesn't
    function init(myOptions) {
        if (myOptions == null) {
            options = _defaultOptions;
        } else {
            options = $.extend(true, _defaultOptions, myOptions);
        }

        // Singleton
        // Private methods and variables

        // Public methods and variables
        return {
            PageLoad: _pageLoad
        };

    };

    // Instance stores a reference to the Singleton
    var instance;
    /* --------------------------------------------------------------------*/
})();

