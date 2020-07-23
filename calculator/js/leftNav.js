$(document).ready(function(){
    $('#leftNav span, #mask').click(function(){
        $('#leftNav').toggleClass('open');
        $('#mask').toggleClass("hidden");
        $('body').toggleClass("noScroll");
    });
});