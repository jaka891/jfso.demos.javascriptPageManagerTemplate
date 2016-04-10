/* Directive */
"use strict"

/* Singleton implementations: See
 * https://addyosmani.com/resources/essentialjsdesignpatterns/book/#singletonpatternjavascript
 */
var PageManager = (function () {

    /* ++++++++++++++++++++++++++++ Usefull Stuff Area +++++++++++++++++++++++++++ */
    var _prototype = {
        ajaxCall: function (_url, _type, _successCallbBack, _errorCallBack, data) {
            $.ajax({
                async: true,
                global: false,
                cache: false,
                type: _type,
                url: _url,
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

        }
    };

    var options = _defaultOptions;

    /* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
    /* +++++++++++++++++++++++++++ Page Load Area ++++++++++++++++++++++++++ */

    var _pageLoad = function () {
        //alert("1");
        //console.log(options);

        //Section1Handler.moradaControlOnclickfctn(function () {

        //});



        //console.log(tt);
    };

    /* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
    /* +++++++++++++++++++++++ Sections Handler Area +++++++++++++++++++++++ */

    var Section1Handler = (function () {

        var resources = options.Resources.section1Handler;

        function onclickFunction(callback) {

            console.log("Section1Handler.onclickFunction");

            console.log(resources.text1);

            console.log(options.actions.actionName1);

            var data = {
                'prop1': 'sadasd',
                'prop2': 'dfsdf'
            };

            options.actions.actionName1.call(data, callback, function () {

            });

            options.actions.actionName1.call(
                data,
                function () {
                    alert("sucesso");
                },
                function () {
                    alert("erro");
                }
            );

        }

        return {
            moradaControlOnclickfctn: function (callback) {
                onclickFunction(callback);
            },
            preencheDados: function (callback) {

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

    // Instance stores a reference to the Singleton
    var instance;

    // Prototype

    var Options = (function () {
        function Options() { }

        var optionsPrototype = {
            actions: {},
            otherProperty: "",
            Resources: [],
        };
        //actions, otherProperty, Resources
        return function () {
            Options.prototype = optionsPrototype;
            return new Options();
        };
    })();

    var _PageManagerPrototype = {
        Options: new Options()
    };

    // PageManagerSingleton Return
    return function () {
        var output = {
            init: _init,
            //PageLoad: _pageLoad
            options: options
        };

        output.prototype = _PageManagerPrototype;

        return output;
    };

    // Get the Singleton instance if one exists
    // or create one if it doesn't
    function _init(myOptions) {
        
        if (myOptions == null) {
            options = _defaultOptions;
        } else {
            options = $.extend(true, _defaultOptions, myOptions);
        }

        var instance = this

        delete instance.init;

        instance.PageLoad = _pageLoad;
        instance.reinit = function (myOptions) {
            _init(myOptions);
        };

        //instance.prototype = _PageManagerPrototype;

        // Public methods and variables
        return instance;

    };

    /* --------------------------------------------------------------------*/
})();

