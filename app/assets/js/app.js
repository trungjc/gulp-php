var isTouchDevice = 'ontouchstart' in document.documentElement;

var iOS = /(iPhone|iPad|iPod)/i.test(navigator.userAgent);

var chrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor); 


var isMobileScreen = function() {
    return document.body.clientWidth < 768;
};
var isTabletAndMobile = function() {
    return document.body.clientWidth < 1024;
};
var isMobileMenuBreakpoint = function() {
    return document.body.clientWidth < 1200;
};

//Smart Resize
(function($, sr) {
    var debounce = function(func, threshold, execAsap) {
        var timeout;
        return function debounced() {
            var obj = this,
                args = arguments;

            function delayed() {
                if (!execAsap)
                    func.apply(obj, args);
                timeout = null;
            };
            if (timeout)
                clearTimeout(timeout);
            else if (execAsap)
                func.apply(obj, args);
            timeout = setTimeout(delayed, threshold || 200);
        };
    };
    // smartresize
    jQuery.fn[sr] = function(fn) {
        return fn ? this.bind('resize', debounce(fn)) : this.trigger(sr);
    };
})(jQuery, 'smartresize');

function GetIEVersion() {
    var sAgent = window.navigator.userAgent;
    var Idx = sAgent.indexOf("MSIE");

    // If IE, return version number.
    if (Idx > 0)
        return parseInt(sAgent.substring(Idx + 5, sAgent.indexOf(".", Idx)));

    // If IE 11 then look for Updated user agent string.
    else if (!!navigator.userAgent.match(/Trident\/7\./))
        return 11;

    else
        return 0; //It is not IE
}

var _app = {
    init: function() {
        'use strict';
        _app.global.init();
    },
    global:  {
        init: function () {
            this.mobileSlide();
        },
        mobileSlide: function () {
            var sideslider = $('[data-toggle=collapse-side]');
            var sel = sideslider.attr('data-target');
            var sel2 = sideslider.attr('data-target-2');
            sideslider.click(function(event){
              $(sel).toggleClass('in');
              $(sel2).toggleClass('out');
            });
        }
    },

}
