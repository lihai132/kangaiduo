$(function () {

    /* 图形验证码 */
    let imgCodeText = "";
    /* 短信验证码 */
    var dxText = "";
    //密码
    let passwordA = "";
    let passwordB = "";
    //用户名
    let usernameText = "";
    //手机号码
    let phoneText = "";
    //验证码
    let yzmText = "";

    //获取页面的标签
    let oPhone = $(".sjhm");
    let oYzm = $(".yzmk");
    let oJym = $(".jymk");
    let oPassword1 = $(".mm1k");
    let oPassword2 = $(".mm2k");;
    let oSendphone = $(".bt1")



    /* 验证码处理 */
    new Captcha({
        fontSize: 20
    }).draw(document.querySelector('#captcha'), r => {
        console.log(r, '验证码1');
        imgCodeText = r;
        imgCodeText = imgCodeText.toLowerCase();
    });

    //正则表达式
    //手机正则表达式
    let regphone = /^1[3-9]\d{9}$/;
    /* 1开头 第二位3-9 后面全都是数字 11位 */

    //密码正则表达式
    let regpassword = /^[a-zA-Z0-9]{6,16}$/;
    //大小写字母加数字，6到16位

    //输入框失去焦点事件
    oPhone.blur(() => {

        phoneText = $.trim(oPhone.val());
        if (phoneText.length != 0 && regphone.test(phoneText)) {
            oPhone.css("border-color", "green");
            $(".sjtx").text("手机验证通过")
            $(".sjtx").css("color", "green");

        } else {
            oPhone.css("border-color", "red");

            $(".sjtx").css("color", "red");

            $(".sjtx").text("手机号码错误")
        }

    })


    //验证手机号码是否已被注册
    oPhone.blur(() => {
        phoneText = $.trim(oPhone.val());
        console.log(phoneText);


        $.ajax({
            type: "get",
            url: "php/zc1.php",

            data: {
                phone: phoneText
            },

            success: function (response) {
                // let arr = JSON.parse(response);
                console.log(response);



                /* 先检查请求的结果，然后做出对应的处理 */
                if (response == 0) {
                    $(".sjtx").text("恭喜你，手机号码可以注册")


                } else {
                    $(".sjtx").text("抱歉，手机号码已经被注册")
                }
            }
        });



    })




    oYzm.blur(() => {
        yzmText = $.trim(oYzm.val());
        yzmText = yzmText.toLowerCase();
        if (yzmText.length != 0 && yzmText == imgCodeText) {
            oYzm.css("border-color", "green");
            $(".yzmtx").text("验证码通过")
            $(".yzmtx").css("color", "green");

        } else {
            oYzm.css("border-color", "red");

            $(".yzmtx").css("color", "red");

            $(".yzmtx").text("验证码错误")
        }

    })

    oPassword1.blur(() => {
        passwordA = $.trim(oPassword1.val());
        if (passwordA.length != 0 && regpassword.test(passwordA)) {
            oPassword1.css("border-color", "green");
            $(".mmtx").text("密码格式正确")
            $(".mmtx").css("color", "green");

        } else {
            oPassword1.css("border-color", "red");

            $(".mmtx").css("color", "red");

            $(".mmtx").text("密码格式错误")
        }

    })

    oPassword2.blur(() => {
        passwordB = $.trim(oPassword2.val());
        if (passwordB.length != 0 && passwordA == passwordB) {
            oPassword2.css("border-color", "green");
            $(".mmtx1").text("密码正确")
            $(".mmtx1").css("color", "green");

        } else {
            oPassword2.css("border-color", "red");

            $(".mmtx1").css("color", "red");

            $(".mmtx1").text("密码错误")
        }

    })

    //手机验证码

    function formatterDateTime() {
        var date = new Date()
        var month = date.getMonth() + 1
        var datetime = date.getFullYear() +
            "" // "年"
            +
            (month >= 10 ? month : "0" + month) +
            "" // "月"
            +
            (date.getDate() < 10 ? "0" + date.getDate() : date
                .getDate()) +
            "" +
            (date.getHours() < 10 ? "0" + date.getHours() : date
                .getHours()) +
            "" +
            (date.getMinutes() < 10 ? "0" + date.getMinutes() : date
                .getMinutes()) +
            "" +
            (date.getSeconds() < 10 ? "0" + date.getSeconds() : date
                .getSeconds());
        return datetime;
    }

    var sjyzm = 123456;
    // oSendphone.click(() => {
    //     event.preventDefault();
    //     //生成6位手机验证码
    //     // sjyzm = parseInt(Math.random() * 1000000);

    //     sjyzm = 123456;
    //     //检查手机号码是否正确
    //     var text = $.trim(oPhone.val())



    //     if (text.length != 0 && regphone.test(text)) {

    //         /* 发送网络请求：发短信 */
    //         $.ajax({
    //             type: 'post',
    //             url: 'http://route.showapi.com/28-1',
    //             dataType: 'json',
    //             data: {
    //                 "showapi_timestamp": formatterDateTime(),
    //                 "showapi_appid": '102239', //这里需要改成自己的appid
    //                 "showapi_sign": 'a6213de463534d85aba5ec24bfa3dffc', //这里需要改成自己的应用的密钥secret
    //                 "mobile": text,
    //                 "content": `{"code":${sjyzm},"minute":"3","comName":"购酒网"}`,
    //                 "tNum": "T150606060601",
    //                 "big_msg": ""
    //             },
    //             error: function (XmlHttpRequest, textStatus, errorThrown) {
    //                 alert("操作失败!");
    //             },
    //             success: function (result) {
    //                 console.log(result) //console变量在ie低版本下不能用
    //                 // alert(result.showapi_res_code)
    //             }
    //         });

    //         var count = 60;
    //         var timer = setInterval(function () {
    //             count--;
    //             if (count <= 0) {
    //                 oSendphone.html("发送短信验证码");
    //                 clearInterval(timer);
    //             } else {
    //                 oSendphone.html("重试 " + count + "s");
    //             }
    //         }, 1000);
    //     } else {
    //         alert("手机号码不正确");
    //     }

    // })

    //手机验证码验证

    oJym.blur(() => {

        dxText = $.trim(oJym.val());
        if (dxText.length != 0 && dxText == sjyzm) {
            oJym.css("border-color", "green");
            $(".jymtext").text("验证码通过")
            $(".jymtext").css("color", "green");

        } else {
            oPhone.css("border-color", "red");

            $(".jymtext").css("color", "red");

            $(".jymtext").text("验证码错误")
        }

    })




    //给注册按钮添加点击事件
    $(".zcan").click(() => {

        let isture = $("#autologin").prop("checked");
        console.log(isture);

        event.preventDefault();
        if (phoneText.length != 0 && yzmText.length != 0 && passwordA.length != 0 && passwordB.length != 0 && dxText.length != 0 && isture == true) {
            console.log("----");
            $.ajax({
                type: "post",
                url: "php/zc.php",
                dataType: "json",
                data: `username=${phoneText}&password=${passwordA}&`,

                success: function (response) {
                    console.log(response);
                    /* 先检查请求的结果，然后做出对应的处理 */
                    if (response.status == "success") {
                        alert(response.msg);
                        /* 跳转到登录页面 */
                        window.location.href = "http://127.0.0.1/code/kangaiduo/xmu/kanaiduo/src/html/dlu/dl.html";

                    } else {
                        alert(response.msg);
                    }
                }
            });

        }



    })























})