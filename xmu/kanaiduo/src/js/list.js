$(function () {
    $("#header").load("header.html", function () {});

    $("#list-dh").load("list-dh.html", function () {
        $(".list-dh-ul").css({
            "display": "none"
        });



        $(".list-dh-dl dt").eq(0).hover(function () {
                $(".list-dh-ul").css({
                    "display": "block"
                });
            },
            function () {
                $(".list-dh-ul").css({
                    "display": "none"
                });
            })
    });


    $("#footer").load("footer.html", function () {});



})