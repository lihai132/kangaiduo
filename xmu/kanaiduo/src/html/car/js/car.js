$(function () {
    class Car {
        constructor() {

        }

        //初始化
        init() {
            this.createLi();
            this.addJian();
            this.addJia();
            this.addSc();
            this.addFxk();
            this.addSl();

        }


        //拿到数据渲染页面
        createLi() {
            $.ajax({
                type: "get",
                url: "php/getCat.php",
                dataType: "json",
                success: str => {
                    console.log(str);

                    let html = str.map((ele) => {
                        return ` <li class="d2-li" data-id=${ele.gooid}>
                       <input type="checkbox" class="i1">
                       <div class="d2-2"><img
                               src="${ele.src}"
                               alt=""></div>
                       <div class="d2-3"> ${ele.title}</div>
                       <div class="d2-4"><span>￥</span>
                           <span>${ele.price}</span></div>
                       <div class="d2-5">-</div>
                       <div class="d2-6">
                           <span class="jian">-</span>
                           <input type="text" value="${ele.num}" class="num">
                           <span class="jia">+</span>
                       </div>
                       <div class="d2-7"> <span>￥</span>
                           <span class="price">${ele.price*ele.num}</span></div>
                       <div class="d2-8"><a href="" class="sc">收藏</a></div>
                       <div class="d2-9"><a href="" class="dele">删除</a></div>
                       </li>`
                    }).join('');



                    // let ul = $("<ul></ul>");
                    // ul.html(html);

                    $(".d2").append(html);



                }

            })
        }












        //点击加减
        addJian() {
            $(".d2").on("click", ".d2-li", function (e) {
                let text = $(e.target).text();
                if (text == "-") {
                    let num = $(this).find('.num').val();


                    if (num == 1) {
                        num = 1;
                    } else {
                        let num = $(this).find('.num').val();
                        $(this).find('.num').val(--num);
                        let price = $(this).find(".d2-4 span").eq(1).text();

                        let price1 = price * num;

                        $(this).find(".d2-7 span").eq(1).html(price1);


                        function allprice() {
                            let checkall = checkedarr();


                            let num = 0;
                            let zj = 0;

                            checkall.forEach((ele, index) => {
                                num += $(".d2-6 .num").eq(checkall[index]).val() * 1;
                                zj += $(".d2-7 .price").eq(checkall[index]).text() * 1;
                            })

                            console.log(num, zj);
                            $(".shuliang span").text(num);
                            $(".priceall span").eq(1).text(zj);
                        };
                        allprice();

                        function checkedarr() {
                            var arr = [];
                            $(".d2 .i1").each((index, ele) => {
                                if ($(ele).prop('checked')) {
                                    arr.push(index);
                                }
                            })

                            return arr;
                        }

                        function alljg() {
                            let checkall = checkedarr();


                            let num = 0;
                            let zj = 0;

                            checkall.forEach((ele, index) => {
                                num += $(".d2-6 .num").eq(checkall[index]).val() * 1;
                                zj += $(".d2-7 .price").eq(checkall[index]).text() * 1;
                            })

                            $(".shuliang span").text(num);
                            $(".priceall span").eq(1).text(zj);
                        };
                        alljg();



                        let id = $(this).attr("data-id");
                        let num1 = $(this).find('.num').val();

                        console.log(id, num1);



                        $.ajax({
                            dype: "get",
                            url: "php/jia.php",
                            data: {
                                id: id,
                                num: num
                            },
                            success: str => {

                            }
                        })



                    }


                }




            })
        }

        addJia() {
            $(".d2").on("click", ".d2-li", function (e) {
                let text = $(e.target).text();
                if (text == "+") {
                    let num = $(this).find('.num').val();
                    $(this).find('.num').val(++num);

                    let price = $(this).find(".d2-4 span").eq(1).text();

                    let price1 = price * num;




                    $(this).find(".d2-7 span").eq(1).html(price1);



                    function checkedarr() {
                        var arr = [];
                        $(".d2 .i1").each((index, ele) => {
                            if ($(ele).prop('checked')) {
                                arr.push(index);
                            }
                        })

                        return arr;
                    }

                    function alljg() {
                        let checkall = checkedarr();


                        let num = 0;
                        let zj = 0;

                        checkall.forEach((ele, index) => {
                            num += $(".d2-6 .num").eq(checkall[index]).val() * 1;
                            zj += $(".d2-7 .price").eq(checkall[index]).text() * 1;
                        })

                        $(".shuliang span").text(num);
                        $(".priceall span").eq(1).text(zj);
                    };
                    alljg();


                    let id = $(this).attr("data-id");
                    let num1 = $(this).find('.num').val();

                    console.log(id, num1);
                    $.ajax({
                        dype: "get",
                        url: "php/jia.php",
                        data: {
                            id: id,
                            num: num
                        },
                        success: str => {

                        }
                    })
                }




            })
        }

        //输入数量
        addSl() {




            $(".d2").on("blur", ".num", function (e) {



                let num = $(e.target).val();

                if (num <= 1) {


                    num = 1;
                    console.log(num);

                    let price = $(this).parent().parent().find(".d2-4 span").eq(1).text();

                    console.log(price);

                    let price1 = price * num;

                    console.log(price1);
                    $(this).parent().parent().find(".d2-7 span").eq(1).html(price1);

                    function checkedarr() {
                        var arr = [];
                        $(".d2 .i1").each((index, ele) => {
                            if ($(ele).prop('checked')) {
                                arr.push(index);
                            }
                        })

                        return arr;
                    }

                    function alljg() {
                        let checkall = checkedarr();


                        let num = 0;
                        let zj = 0;

                        checkall.forEach((ele, index) => {
                            num += $(".d2-6 .num").eq(checkall[index]).val() * 1;
                            zj += $(".d2-7 .price").eq(checkall[index]).text() * 1;
                        })


                        $(".shuliang span").text(num);
                        $(".priceall span").eq(1).text(zj);
                    };
                    alljg();
                } else {
                    let price = $(this).parent().parent().find(".d2-4 span").eq(1).text();

                    console.log(price);

                    let price1 = price * num;

                    console.log(price1);
                    $(this).parent().parent().find(".d2-7 span").eq(1).html(price1);

                    function checkedarr() {
                        var arr = [];
                        $(".d2 .i1").each((index, ele) => {
                            if ($(ele).prop('checked')) {
                                arr.push(index);
                            }
                        })

                        return arr;
                    }

                    function alljg() {
                        let checkall = checkedarr();


                        let num = 0;
                        let zj = 0;

                        checkall.forEach((ele, index) => {
                            num += $(".d2-6 .num").eq(checkall[index]).val() * 1;
                            zj += $(".d2-7 .price").eq(checkall[index]).text() * 1;
                        })


                        $(".shuliang span").text(num);
                        $(".priceall span").eq(1).text(zj);


                    };
                    alljg();

                    console.log(this);


                    let id = $(this).parent().parent().attr("data-id");
                    let num1 = $(this).val();

                    console.log(id, num1);
                    $.ajax({
                        dype: "get",
                        url: "php/jia.php",
                        data: {
                            id: id,
                            num: num
                        },
                        success: str => {

                        }
                    })




                }



            })
        }




        //点击删除
        addSc() {



            $(".d2").on("click", ".dele", function (e) {
                event.preventDefault();

                let id = $(this).parent().parent().attr("data-id");




                $(this).parent().parent().remove();
                $.ajax({
                    type: "get",
                    url: "php/removeCart.php",
                    data: {
                        id: id
                    },
                    success: str => {

                    }
                })

            })



        }

        //复选框控制总量和总价

        addFxk() {



            function checkedarr() {
                var arr = [];
                $(".d2 .i1").each((index, ele) => {
                    if ($(ele).prop('checked')) {
                        arr.push(index);
                    }
                })

                return arr;
            }

            function alljg() {
                let checkall = checkedarr();


                let num = 0;
                let zj = 0;

                checkall.forEach((ele, index) => {
                    num += $(".d2-6 .num").eq(checkall[index]).val() * 1;
                    zj += $(".d2-7 .price").eq(checkall[index]).text() * 1;
                })

                $(".shuliang span").text(num);
                $(".priceall span").eq(1).text(zj);
            };



            $(".d2").on("click", ".i1", function () {



                let len = $(".d2-li .i1").length; //复选框的总个数
                let allchecka = $(".d2-li .i1:checked").length; //已经勾选的个数
                if (len == allchecka) {
                    $(".all-keep").prop("checked", true);
                } else {
                    $(".all-keep").prop("checked", false);
                };
                alljg();
            })

            $(".all-keep").click(() => {
                let isok = $(".all-keep").prop("checked");
                $(".d2-li .i1").prop('checked', isok);
                alljg();
            })

            $(".allsc").click(() => {
                event.preventDefault();
                let arr = checkedarr().reverse();
                let ok = confirm("你确定要删除我们吗？")
                if (ok) {
                    arr.forEach((ele, index) => {
                        $(".d2-li").eq(arr[index]).remove();

                    })

                }

                alljg();
                if ($(".d2-li .i1").length == 0) {
                    $(".d4").css({
                        "display": "none"
                    });

                    $(".foot").css({
                        "display": "none"
                    });
                }
            });

        }





    }




    //实例化
    let car = new Car();
    car.init();




})