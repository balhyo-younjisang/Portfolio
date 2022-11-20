$(document).ready(function () {
    $('li').hover(function () {
        $(this.lastChild).css('display', 'inline');
    }, function () {
        $(this.lastChild).css('display', 'none');
    });
});
