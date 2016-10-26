$(function() {
    _app.init();

});

$(window).load(function() {
    if (GetIEVersion() > 0) {
        var browser = GetIEVersion();
        $('html').addClass('IE' + browser);
    }
});

// Window resize
var width = $(window).width();
var resize = 0;
$(window).resize(function() {
    var _self = $(this);
    resize++;
    setTimeout(function() {
        resize--;
        if (resize === 0) {
            // Done resize ...
            if (_self.width() !== width) {
                width = _self.width();
                // Done resize width ...
            }
        }
    }, 100);
});

$(window).scroll(function() {

});
