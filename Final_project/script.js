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
    $(`.featureProductsNav li`).mouseover(function () {
        $(this).css({
            cursor: `pointer`,
            color: `#ff2d2d`,

        })
    });
    $('.featureProductsNav li').mouseout(function () {
        $(this).css({
            color: ``
        })
    });


    // Не перебирає фото

    $(`.teamPhotoWrapper div`).mouseover(function () {
        $(this).each(function (i, elem) {
            console.log($(this) + [i]);
            $(`.accountNameOnPhoto`).css({
                display: `flex`,
            });
        });
        $(this).css({
            cursor: `pointer`
        });
    });


    $(`.teamPhotoWrapper div`).mouseout(function () {
        $(`.accountNameOnPhoto`).css({
            display: `none`
        })
    });

    // end

    $(`.subscribeButton`).mouseover(function () {
        $(this).css({
            cursor: `pointer`,
            background: `rgba(0, 0, 0, 0)`,
            border: `3px solid #ff2d2d`

        })
    });
    $(`.subscribeButton`).mouseout(function () {
        $(this).css({
            background: ``,
            border: ``

        })
    });
    $(`.sendMessageButt`).mouseover(function () {
        $(this).css({
            background: `#ffffff`,
            cursor: `pointer`,
            color: `#ff2d2d`,
            border: `3px solid #ff2d2d`

        })
    });
    $('.sendMessageButt').mouseout(function () {
        $(this).css({
            background: `#ff2d2d`,
            color: `#ffffff`,
            border: `none`
        })
    });

});