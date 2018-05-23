<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

<script>
$(document).ready(function() {
    var s = $("#navigation");
    var ss = $(".wsite-menu-wrap");
    var w = $('#wrapper');

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
        console.log(position);
        if(position > 500 ) {
           // s.addClass('navmenu-stick');
            w.addClass('wrapper-hack');

        }
        //$('div').text('Scrolling Down Scripts');
    } else {
         console.log('scrollUp');
         ss.removeClass("submenu-stick");
         //s.removeClass('navmenu-stick');
         w.removeClass('wrapper-hack');
         //$('div').text('Scrolling Up Scripts');
    }
    position = scroll;
});


});
</script>