$(function () {

    //拿到id
    var res = window.location.search.substring();
    var id = res.split("=")[1];
    console.log(id);

    //发送网络请求
    $.ajax({
        type: "get",
        url: "../json/xqy.php",
        data: {
            id: 3
        },

        success: function (str) {
            console.log(str);





        }


    })
})