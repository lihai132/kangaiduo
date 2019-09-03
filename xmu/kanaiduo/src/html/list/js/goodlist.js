$(function () {
    class List {
        constructor(data) {
            console.log(data);

        }

        //初始化
        init() {

        }








    }




    $.ajax({
        type: "post",
        url: "../json/list.php",
        type: "json",
        success: function (response) {
            console.log(11111);

            var data = JSON.parse(response);

            let list = new List(data);
            list.init();


        }
    })









})