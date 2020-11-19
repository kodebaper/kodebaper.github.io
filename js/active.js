(function ($) {
    'use strict';

    var $window = $(window);

    // Sticky Active Code
    $window.on('scroll', function () {
        if ($window.scrollTop() > 20) {
            $('.header-area').addClass('sticky');
        } else {
            $('.header-area').removeClass('sticky');
        }
        if ($('#').length > 0) {
            if ($window.scrollTop() > 157) {
                $('.post-sidebar-area').addClass('sticky');
            } else {
                $('.post-sidebar-area').removeClass('sticky');
            }
        }
    });

    // ScrollUp
    if ($.fn.scrollUp) {
        $.scrollUp({
            scrollSpeed: 1000,
            easingType: 'easeInOutQuart',
            scrollText: '<img src="/images/bootstrapicons/arahatas.svg" alt="" width="38" height="38">'
        });
    }
})(jQuery);