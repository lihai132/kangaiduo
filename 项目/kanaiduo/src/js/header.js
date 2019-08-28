$(function () {
    $(".right-ul-li").hover(function () {



            $(this).find(".li-list").css({
                "display": "block"
            });

            $(this).css({
                "border-color": "rgba(203, 203, 203, 1)",
            });

            $(this).find(".img1").css({
                "transform": "rotate(180deg)"
            });
        },


        function () {
            $(this).find(".li-list").css({
                "display": "none"
            });

            $(this).css({
                "border-color": "rgba(203, 203, 203, 0)",

            });

            $(this).find(".img1").css({
                "transform": "rotate(0deg)"
            });
        })
})