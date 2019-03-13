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
            background: `#f6f2f2`,
            cursor: `pointer`,
            color: `#ff2d2d`,
            width: 227,
            height: 55,
            border: `2px solid #ff2d2d`

        })
    });
    $('.contactUsButt').mouseout(function () {
        $(this).css({
            background: `#ff2d2d`,
            color: `#ffffff`,
            width: 227,
            height: 55,
            border: `none`
        })
    });
    $(`.learnMoreButt`).mouseover(function () {
        $(this).css({
            background: `#ff0000`,
            cursor: `pointer`,
            color: `white`,

        })
    });
    $('.learnMoreButt').mouseout(function () {
        $(this).css({
            background: ``,
            color: `#ff2d2d`
        })
    });
});