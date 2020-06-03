(function($) {

    // --- Tab Content Switcher ---

    var tabButton = '.tab-button';
    var tabsContent = '.tabs-content';
    var tabContent = '.tab-content';

    $(tabButton).click(function(e) {
       e.preventDefault();

       var id = $(this).attr('data-tab'),
           content = $(tabContent + '[data-tab="'+ id +'"]');

       $(tabButton + '.tab-active').removeClass('tab-active');
       $(this).addClass('tab-active');

       $(tabContent + '.tab-active').removeClass('tab-active');
       content.addClass('tab-active');
    });




    // --- Set Equal Height of Tab Content ---

    var elHeight  = '';
    var maxHeight  = '';

    getMaxHeight();
    setMaxHeight();

    $(window).on('resize', function() {
        resetMaxHeight();
        getMaxHeight();
        setMaxHeight();
    });

    function getMaxHeight() {
        $(tabsContent).find(tabContent).each(function () {
            elHeight = $(this).outerHeight();
            if (elHeight > maxHeight) {
                return maxHeight = elHeight;
            }
        });
    }

    function setMaxHeight() {
        $(tabsContent).find(tabContent).each(function () {
            $(this).outerHeight(maxHeight);
//            console.log(maxHeight);
        });
    }

    function resetMaxHeight() {
        $(tabsContent).find(tabContent).each(function () {
            $(this).outerHeight('');
            return maxHeight = '';
        });
    }

})(jQuery);
