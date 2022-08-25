(function($) {
    $.fn.multiSelect = function(options){
        let settings = $.extend({
            color: '#33FFBD',
        }, options);

        return this.css({
            color: settings.color
        });
    }
}(jQuery));

