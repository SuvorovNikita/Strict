/**
 * Section: jQuery
 */

$(function() {

    //@@include('global/_global.js')
    //@@include('components/_components.js')

    var $page = $('html, body');
    $('a[href*="#"]').click(function() {
        $page.animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 400);
        return false;
    });

});