var $doc = $('html, body');
$('.anchor').click(function() {
    $doc.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top - 95
    }, 500);
    return false;
});
