var n = $(window).height() * 0.75;
var m = n * 0.6; // where to update the card

var updownArr = [false, false, false, false];


window.onload = function() {

    scrollTo();

    //onload animation
    $('.mainContent').fadeIn(1000);

    scrollAndReavealOnLoad();
    modalTitleOnLoad();
}


function modalTitleOnLoad() {
    $('.modal-chapter-titles li').on("dblclick", function() {

        if ($("#bp-li").hasClass('chapter-highlighted')) {
            window.location.href = "basic-probability.html";
        } else if ($("#cp-li").hasClass('chapter-highlighted')) {
            window.location.href = "compound-probability.html";
        } else if ($("#pd-li").hasClass('chapter-highlighted')) {
            window.location.href = "probability-distribution.html";
        } else if ($("#bi-li").hasClass('chapter-highlighted')) {
            window.location.href = "compound-probability.html";
        } else if ($("#fi-li").hasClass('chapter-highlighted')) {
            window.location.href = "compound-probability.html";
        } else if ($("#ra-li").hasClass('chapter-highlighted')) {
            window.location.href = "compound-probability.html";
        }


    })

    $('.modal-chapter-titles li').on("click", function() {
        $('.modal-chapter-titles li').removeClass('chapter-highlighted');
        $(this).addClass('chapter-highlighted');

        if ($("#bp-li").hasClass('chapter-highlighted')) {
            if ($(window).width() < 750) {
                window.location.href = "basic-probability.html";
            } else {
                hideAllTiles();
                $('#bp').css("display", "block");
            }
        } else if ($("#cp-li").hasClass('chapter-highlighted')) {

            if ($(window).width() < 750) {
                window.location.href = "compound-probability.html";
            } else {

                hideAllTiles();
                $('#cp').css("display", "block");
            }
        } else if ($("#pd-li").hasClass('chapter-highlighted')) {

            if ($(window).width() < 750) {

                window.location.href = "probability-distribution.html";


            } else {

                hideAllTiles();
                $('#pd').css("display", "block");
            }
        } else if ($("#fi-li").hasClass('chapter-highlighted')) {

            if ($(window).width() < 750) {

                window.location.href = "index.html";


            } else {

                hideAllTiles();
                $('#fi').css("display", "block");
            }
        } else if ($("#ra-li").hasClass('chapter-highlighted')) {

            if ($(window).width() < 750) {

                window.location.href = "index.html";


            } else {

                hideAllTiles();
                $('#ra').css("display", "block");
            }
        } else if ($("#bi-li").hasClass('chapter-highlighted')) {

            if ($(window).width() < 750) {
                window.location.href = "index.html";


            } else {

                hideAllTiles();
                $('#bi').css("display", "block");
            }
        }



    });

}




$(window).scroll(function() {
    ScrollProgressBar();
    chapterBackgroundColorChange();
    downArrowHide();

    var scrollTopH = $(window).scrollTop();
    scrollAndReveal();

});



function scrollAndReavealOnLoad() {

    if ($(window).scrollTop() < $('#section1').offset().top - m) {
        updownArr[0] = true;
        downArrowShow();

    } else if ($(window).scrollTop() < $('#section2').offset().top - m) {

        moveToMiddle($('#section-1'));
        updownArr[1] = true;
        titleChangeToChapter();

    } else if ($(window).scrollTop() < $('#section3').offset().top - m) {

        moveToMiddle($('#section-2'));
        updownArr[2] = true;
        titleChangeToChapter();

    } else {
        titleChangeToChapter();
    }

}

function scrollAndReveal() {
    var scrollTopH = $(window).scrollTop();
    if (scrollTopH <= $('#section1').offset().top - m) {


        if (updownArr[0] !== true) {
            titleChangeToST();
            //from section1 to section0, v1 move down
            moveDown($('#section-1'));
            updownArr[0] = true;
        }

        updownArr[1] = false;
        updownArr[2] = false;
        updownArr[3] = false;



    } else if (scrollTopH <= $('#section2').offset().top - m) {
        if (scrollTopH > $('#section1').offset().top - m) {


            if (updownArr[0] == true) {

                titleChangeToChapter();
                moveToMiddle($('#section-1'));

            } else if (updownArr[2] == true) {
                //section2 to section 1, v2 slide down disappear, v1 slidedown show

                moveDown($('#section-2'));
                moveToMiddle($('#section-1'));
            }


            updownArr[1] = true;
            updownArr[0] = false;
            updownArr[2] = false;
            updownArr[3] = false;


        }

    } else if (scrollTopH < $('#section3').offset().top - m) {
        if (scrollTopH > $('#section2').offset().top - m) {


            if (updownArr[1] == true) {
                //section1 to section2, v1 slide up disappear, v2 slide up show

                moveUp($('#section-1'));
                moveToMiddle($('#section-2'));


            } else if (updownArr[3] == true) {
                //section 3 to section 2, v3 slide down hide, v2 slide down show      
                moveDown($('#section-3'));
                moveToMiddle($('#section-2'));

            }



            updownArr[1] = false;
            updownArr[3] = false;

            updownArr[2] = true;
            updownArr[0] = false;



        }
    } else if (scrollTopH > $('#section3').offset().top - m) {

        if (updownArr[3] !== true) {

            moveUp($('#section-2'));
            moveToMiddle($('#section-3'));

            updownArr[3] = true;
        }

        updownArr[0] = false;
        updownArr[1] = false;
        updownArr[2] = false;

    }
}


function moveDown(div) {
    div.animate({
        top: 2 * n
    }, 150);

}

function moveToMiddle(div) {
    div.show();
    div.animate({
        top: 0
    }, 150);
}

function moveUp(div) {
    div.animate({
        top: -2 * n
    }, 150);

}



function titleChangeToChapter() {
    var bodyId = document.body.id;


    var n = bodyId - 1;
    var title = ["Chapter 1: Basic Probability", "Chapter 2: Compound Probability", "Chapter 3: Probability Distribution", "Chapter 4: Bayesian Inference", "Chapter 5: Frequentist Inference", "Chapter 6: Regression Analysis"];

    $("#seeing-theory").fadeOut(function() {
        $(this).replaceWith("<a onclick='toTop()' id='seeing-theory'>" + title[n] + "</a>").fadeIn();
    });
}



function titleChangeToST() {
    $("#seeing-theory").fadeOut(function() {
        $(this).replaceWith("<a href='index.html' id='seeing-theory' >Seeing Theory</a>").fadeIn();
    });

}

function downArrowHide() {
    $('.scroll-down').hide("fade");

}

function downArrowShow() {
    $('.scroll-down').show("fade");
    $('.scroll-down').fadeIn(1000).fadeOut(1000).fadeIn(1000).fadeOut(1000).fadeIn(1000);

}



//Progress
function ScrollProgressBar() {
    var wh = $(window).height();

    max = $('.col-left').width();


    var section1toTop = $('#section1').offset().top;
    var scrolltoTop = $(window).scrollTop() - section1toTop;
    var lasttoTop = $('#section3').offset().top - section1toTop;

    var x = (scrolltoTop / lasttoTop) * max;


    if (x > max) {
        x = max;
    }
    $('.progress-bar-color').css('width', x);

}


//scrollTo

function scrollTo() {

    $("#one").click(function() {
        toSection($("#section1"));
    });

    $("#two").click(function() {
        toSection($("#section2"));
    });

    $("#three").click(function() {
        toSection($("#section3"));
    });


    $(".scroll-down").click(function() {
        toSection($("#section1"));
        $(".scroll-down").css("display", "none");
    });


    //Modal Menu Scrolling to chapter
    $(".nav-unit-wrapper-s").click(function() {
        parent_id = $(this).parent().attr('id');
        current_page = $(this).parent().attr('class');


        if (current_page) {
            closeNav();

            if ($(this).hasClass("tile1")) {
                toSection($("#section1"));
            } else if ($(this).hasClass("tile2")) {
                toSection($("#section2"));
            } else if ($(this).hasClass("tile3")) {
                toSection($("#section3"));
            }

        } else {
            if (parent_id == "bp") {

                toNewChapterUnit(this, "basic-probability.html");


            } else if (parent_id == "cp") {

                toNewChapterUnit(this, "compound-probability.html");

            } else if (parent_id == "pd") {

                toNewChapterUnit(this, "probability-distribution.html");

            } else if (parent_id == "bi") {

                toNewChapterUnit(this, "bayesian-inference.html");

            }


        }








    });


    function toSection(section) {
        var n = section;
        var pos = { 'scrollTop': n.offset().top }
        $('html,body').animate(pos, 'slow');
    }

    function toNewChapterUnit(thisObj, chapter) {
        var url = chapter;

        var n = $(thisObj);

        if (n.hasClass("tile1")) {
            url = url + "#section1";
        } else if (n.hasClass("tile2")) {
            url = url + "#section2";
        } else if (n.hasClass("tile3")) {
            url = url + "#section3";
        }



        window.location.href = url;
    }



}


function toTop() {
    $('html,body').animate({
            scrollTop: $("#section0").offset().top
        },
        'slow');
}



function chapterBackgroundColorChange() {
    var xh = $(window).height() * 0.45;
    var alpha;
    var n = 0.1;
    var bg_color = $('.col-left').css('background-color');
    bg_color = bg_color.slice(3, -1);



    if ($(window).scrollTop() >= xh) {
        alpha = 0;

    } else if ($(window).scrollTop() >= n * xh) {

        alpha = $(window).scrollTop() - n * xh;
        alpha = 1 - alpha / ((1 - n) * xh);

    } else if ($(window).scrollTop() >= 0) {
        alpha = 1;
    }
    $('body').css('background', "rgba" + bg_color + "," + alpha + ")");
    $('#section-0').css('opacity', alpha);
}



/*MODAL*/

$(window).resize(function() {

    if ($(window).width() < 750) {
        hideAllTiles();


    } else {
        displayCurrentClass();
    }
});

function displayCurrentClass() {
    if ($("#bp-li").hasClass('chapter-highlighted')) {
        $('#bp').css("display", "block");
    } else if ($("#cp-li").hasClass('chapter-highlighted')) {
        $('#cp').css("display", "block");
    } else if ($("#pd-li").hasClass('chapter-highlighted')) {
        $('#pd').css("display", "block");
    } else if ($("#fi-li").hasClass('chapter-highlighted')) {
        $('#fi').css("display", "block");
    } else if ($("#ra-li").hasClass('chapter-highlighted')) {
        $('#ra').css("display", "block");
    } else if ($("#bi-li").hasClass('chapter-highlighted')) {
        $('#bi').css("display", "block");
    }
}


function hideAllTiles() {
    $('#bp').css("display", "none");
    $('#cp').css("display", "none");
    $('#pd').css("display", "none");
    $('#fi').css("display", "none");
    $('#ra').css("display", "none");
    $('#bi').css("display", "none");

}




function openNav() {

    $('#myNav').show("fade");

    // add listener to disable scroll
    disableScroll();
}

function closeNav() {

    $('#myNav').hide("slow");

    enableScroll();
}


var keys = { 37: 1, 38: 1, 39: 1, 40: 1 };

function preventDefault(e) {
    e = e || window.event;
    if (e.preventDefault)
        e.preventDefault();
    e.returnValue = false;
}

function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
        preventDefault(e);
        return false;
    }
}

function disableScroll() {
    if (window.addEventListener) // older FF
        window.addEventListener('DOMMouseScroll', preventDefault, false);
    window.onwheel = preventDefault; // modern standard
    window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
    window.ontouchmove = preventDefault; // mobile
    document.onkeydown = preventDefaultForScrollKeys;
}

function enableScroll() {
    if (window.removeEventListener)
        window.removeEventListener('DOMMouseScroll', preventDefault, false);
    window.onmousewheel = document.onmousewheel = null;
    window.onwheel = null;
    window.ontouchmove = null;
    document.onkeydown = null;
}