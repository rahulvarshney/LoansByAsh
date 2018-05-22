<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

<script>
$(document).ready(function() {
    var s = $("#navigation");
    var ss = $(".wsite-menu-wrap");

    var pos = s.position();
    $(window).scroll(function() {
        var windowpos = $(window).scrollTop();

        if (windowpos >= pos.top) {
            ss.addClass("submenu-stick");
        } else if (windowpos < pos.top) {
            //ss.removeClass("submenu-stick");
         // document.querySelector('.wsite-menu-wrap').style.top = '150px !important';
        }
    });


var position = $(window).scrollTop();

// should start at 0

$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if(scroll > position) {
        console.log('scrollDown');
        //$('div').text('Scrolling Down Scripts');
    } else {
         console.log('scrollUp');
         ss.removeClass("submenu-stick");
         //$('div').text('Scrolling Up Scripts');
    }
    position = scroll;
});


});
</script>