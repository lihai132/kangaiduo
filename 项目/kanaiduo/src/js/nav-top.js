$(function () {
    class Navtop {
        constructor(json1, json2) {
            this.json1 = json1;
            this.json2 = json2;

            // console.log(this.json1);
            // console.log(this.json2);

        }

        //初始化
        init() {
            this.createTop1();
            this.addnavtop();
            this.createTop2();
        }



        //生成第一个楼层
        createTop1() {
            let data = this.json1;

            // console.log(data1);
            // console.log(data2);
            let html1 = data.map((ele) => {
                return `<li>
                <div class="tp">
                    <a href="">
                        <img style="width:150px;height:150px;"
                            src="${ele.src}"
                            title="${ele.title}">
                    </a>

                </div>

                
                <div class="jiekou">
                    <span>${ele.zk}</span>
                    <span>折</span>
                </div>
                <dl class="li-dl">
                    <dd><a href="">${ele.title}</a></dd>
                    <dd>
                        <span>${ele.price1}</span>
                        <span>${ele.price2}</span>
                    </dd>
                </dl>
            </li>`
            }).join("");


            let ul1 = $("<ul class='ul-1'></ul>");
            ul1.append(html1);

            // let navdiv = $("<div class='top1-nav-div'></div>")
            // navdiv.append(ul1);







            $(".top1-nav").append(ul1);




        }

        //生成第二个楼层

        createTop2() {
            let data = this.json2;

            console.log(data);

            // let data1 = data.slice(0, 5);
            // let data2 = data.slice(5, 10);
            // let data3 = data.slice(10, 15);
            // console.log(data1);
            // console.log(data2);
            // console.log(data3);

            var arr = data;
            var arrNum = [];
            var ranNum = 5;

            for (var i = 0; i < ranNum; i++) {

                arrNum[i] = Math.floor(Math.random() * 15);

                if (i > 0) {

                    for (var j = 0; j < i; j++) {

                        if (arrNum[j] == arrNum[i]) {

                            i--;

                            break;

                        }

                    }

                }

            }

            // console.log(arrNum);

            let num1 = arrNum[0];
            let num2 = arrNum[1];
            let num3 = arrNum[2];
            let num4 = arrNum[3];
            let num5 = arrNum[4];
            let data1 = [data[num1], data[num2], data[num3], data[num4], data[num5]];
            // console.log(data1);


            function createList(data) {
                let html = data.map((ele) => {
                    return `
                    <li>
                          <div class="tp">
                              <a href="">
                                <img style="width:150px;height:150px;"
                                src="${ele.src}"
                                title="">
                              </a>
    
                             </div>
                             <dl class="li-dl">
                             <dd><a href="">${ele.title}</a></dd>
                             <dd> ${ele.price}</dd>
                             </dl>
                    </li>`
                }).join('');

                let ul1 = $("<ul class='ul-2'></ul>");
                ul1.append(html);

                $(".top2-nav").html(ul1);
            }
            createList(data1);



            $(".right-3").find("img").click(() => {

                var arr = data;
                var arrNum = [];
                var ranNum = 5;

                for (var i = 0; i < ranNum; i++) {

                    arrNum[i] = Math.floor(Math.random() * 15);

                    if (i > 0) {

                        for (var j = 0; j < i; j++) {

                            if (arrNum[j] == arrNum[i]) {

                                i--;

                                break;

                            }

                        }

                    }

                }

                console.log(arrNum);

                let num1 = arrNum[0];
                let num2 = arrNum[1];
                let num3 = arrNum[2];
                let num4 = arrNum[3];
                let num5 = arrNum[4];
                let data1 = [data[num1], data[num2], data[num3], data[num4], data[num5]];
                console.log(data1);

                // console.log(data1);
                createList(data1);

            })




        }

        //navtop1点击切换效果
        addnavtop() {
            $(".n").click(() => {
                console.log("===");

                $(".ul-1").css({
                    "transform": "translateX(-100%)",
                    "transition-duration": "0.5s"

                });

                $(".right-1").text("2/2");



                $(".p").click(() => {
                    console.log("===");

                    $(".ul-1").css({
                        "transform": "translateX(0)",
                        "transition-duration": "0.5s"

                    });

                    $(".right-1").text("1/2");

                })

            })
        }

    }




















    //实例化
    $.getJSON("../api/nav-top1.json", (json1) => {

        $.getJSON("../api/nav-top2.json", (json2) => {
            let navtop = new Navtop(json1, json2);

            navtop.init();

        })

    })





})