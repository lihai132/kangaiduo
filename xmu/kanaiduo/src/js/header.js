$(function () {
    //cookie 的封装
    //增
    function setCookie(key, val, iDay) {
        //key：键名；val：键值；iDay：失效时间
        var now = new Date();
        now.setDate(now.getDate() + iDay);
        document.cookie = key + '=' + val + ';expires=' + now.toUTCString() + ';path=/';
    }
    //转如key，得到val
    function getCookie(key) {
        var cookies = document.cookie;


        var arr = cookies.split("; ");
        for (var ele of arr) {


            var arr2 = ele.split("=");
            if (key == arr2[0]) {

                return arr2[1];
            }
        }
    }


    //删除
    function remove() {
        setCookie(key, '', -1);
    }

    function init() {
        var username = getCookie('username');
        // var password = getCookie('password');


        if (username) {
            //有数据就提取出来显示，下次不用再写：免登陆
            $(".left span").eq(1).text(username);



        }
    }

    init();
















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