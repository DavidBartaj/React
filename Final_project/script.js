$(document).ready(function () {

    $('.navLi').mouseover(function () {
        $(this).css({
            background: `#ff3f40`,
            cursor: `pointer`,

        })
    });
    $('.navLi').mouseout(function () {
        $(this).css({
            background: ``,
        })
    });
    $(`.contactUsButt`).mouseover(function () {
        $(this).css({
            background: `#e12b2b`,
            cursor: `pointer`,

        })
    });
    $('.contactUsButt').mouseout(function () {
        $(this).css({
            background: ``,
        })
    });

});