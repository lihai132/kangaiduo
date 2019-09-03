$(function () {



    //7天免登录


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

    $(".an").click(function () {


        event.preventDefault();
        var keep = document.getElementById("autologin");
        let username = $(".zh-value").val();
        let password = $(".mm-value").val();

        //保存在cookie中


        if (keep.checked) {

            setCookie("username", username, 15);
            setCookie("password", password, 15);

        }















        $.ajax({
            type: "post",
            url: "php/dl.php",
            data: `username=${username}&password=${password}`,
            dataType: "json",
            success: function (response) {
                // console.log(response.status);
                if (response.status == "success") {
                    window.open("http://127.0.0.1/code/kangaiduo/xmu/kanaiduo/src/index1.html")
                }


            }

        })

    })

    function init() {
        var username = getCookie('username');
        var password = getCookie('password');


        if (password && username) {
            //有数据就提取出来显示，下次不用再写：免登陆

            console.log("+++");

            $(".zh-value").val(username);
            $("mm-value").val(password);
        }
    }
    init();


})