$(function () {

    var imgs = [
        "http://image.360kad.com/group2/M00/C5/13/CgAgFF1jhwiAXO6zAAFmQdpelV4654.jpg", "http://image.360kad.com/group2/M00/C5/1B/CgAgFV1jk_iABgtWAAGZyaguHmQ777.jpg", "http://image.360kad.com/group2/M00/C2/40/CgAgFF1UwqSAO1xsAAMHokT9jqU528.jpg", "http://image.360kad.com/group2/M00/C4/A8/CgAgFF1fxBmAKJ0hAAL7Fa8coPs064.jpg", "http://image.360kad.com/group2/M00/C4/A7/CgAgFF1fusWAOo7EAAF7MJxuMQk084.jpg", "http://image.360kad.com/group2/M00/C4/48/CgAgFV1ea_iAUHlAAAEJN_Gd2mo457.jpg", "http://image.360kad.com/group2/M00/C3/9C/CgAgFF1cq6-ACCEvAALQ8sVZLPY403.jpg"
    ];
    //class 构造函数
    class Lbt {
        constructor(json) {
            this.json = json;
        }

        //初始化
        init() {
            this.addList();
            this.createListnone();
            this.addListnone();




        }


        //建立侧边栏隐藏部分
        createListnone() {
            let data = this.json;
            console.log(data);

            function createnone(data) {
                let html1 = data.map((e) => {
                    return ` 
                    <dl>
                         <dt><a href="">${e.title}</a></dt>

                      <dd>
    
                      ${e.text.map((ele)=>{
                          return `| <a href="">${ele}</a>`
                      }).join("")}
                           
        
                      </dd>
    
    
                     </dl>`
                }).join("");
                let list = $("<div class='list-none'></div>");


                list.append(html1);
                return list;
            }





            let list1 = data.slice(0, 15);
            let none1 = createnone(list1);


            let list2 = data.slice(15, 20);
            let none2 = createnone(list2);


            let list3 = data.slice(20, 31);
            let none3 = createnone(list3);

            let list4 = data.slice(31, 35);
            let none4 = createnone(list4);

            let list5 = data.slice(35, 52);
            let none5 = createnone(list5);

            let list6 = data.slice(52, 68);
            let none6 = createnone(list6);

            let list7 = data.slice(68, 81);
            let none7 = createnone(list7);

            let list8 = data.slice(81, 89);
            let none8 = createnone(list8);

            let list9 = data.slice(89, 103);
            let none9 = createnone(list9);

            let list10 = data.slice(103, 112);
            let none10 = createnone(list10);

            let nonebox = $("<div class='none-box'></div>");
            nonebox.append(none1);
            nonebox.append(none2);
            nonebox.append(none3);
            nonebox.append(none4);
            nonebox.append(none5);
            nonebox.append(none6);
            nonebox.append(none7);
            nonebox.append(none8);
            nonebox.append(none9);
            nonebox.append(none10);

            $(".lbt-nav").append(nonebox);








        }



        //效果区
        //导航部分鼠标移入移出效果
        addList() {
            $(".list-dh-dl").find(".d7").hover(function () {
                $(this).find(".dd-nove1").css({
                    "display": "block"
                });


            }, function () {
                console.log("+++");
                $(this).find(".dd-nove1").css({
                    "display": "none"
                });
            })

            $(".list-dh-dl").find(".d9").hover(function () {
                $(this).find(".dd-nove2").css({
                    "display": "block"
                });


            }, function () {
                console.log("+++");
                $(this).find(".dd-nove2").css({
                    "display": "none"
                });
            })
        }


        //侧边栏部分鼠标移入移出效果
        addListnone() {

            // console.log($(".list-dh-ul").find("li"));

            $(".list-dh-ul").find("li").hover(function () {

                    // console.log($(this).index());
                    let index = $(this).index();
                    $(this).addClass("l1");
                    $(this).siblings().removeClass("l1");
                    $(".none-box >.list-none").eq(index).css({
                        "display": "block",

                    });




                    $(".none-box").css({

                        "z-index": "6"
                    });

                    $(".none-box >.list-none").eq(index).hover(function () {
                            $(".none-box >.list-none").eq(index).css({
                                "display": "block",

                            });

                            $(".none-box").css({

                                "z-index": "6"
                            });
                        },
                        function () {
                            $(".none-box >.list-none").eq(index).css({
                                "display": "none",
                                "z-index": "0"
                            });

                            $(".none-box").css({

                                "z-index": "0"
                            });
                        }
                    )


                },
                function () {
                    let index = $(this).index();
                    $(".none-box >.list-none").eq(index).css({
                        "display": "none",
                        "z-index": "0"
                    });

                    $(".none-box").css({

                        "z-index": "0"
                    });

                    $(this).removeClass("l1");

                })
        }



    }




    //实例对象

    $.getJSON("../api/cbl.json", (json) => {
        let lbt = new Lbt(json);

        lbt.init();

    })


})