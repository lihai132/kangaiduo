$(function () {


    $('.header').load("head.html", function () {

    })

    $('.fixed_navigation').load("cebian.html", function () {})

    $('.footer').load("footer.html", function () {})

    $('.nav').load("daohang.html", function () {
        class daohang {
            constructor(data) {
                this.data = data;
                // console.log(this.data)
            }
            init() {
                this.rannav()
                // this.rannav2()
            }
            rannav() {
                this.data.forEach((e, index) => {
                    // console.log(index)
                    var html = '';
                    var html1 = '';
                    // console.log(e);
                    var strnav = e.bigList.map((element, index) => {
                        // console.log(element);

                        html1 =
                            ` <dl>
                                                 <dt>
                                                    <a href="">${element.title}</a>
                                                 </dt>
                                                <dd >
                                                    ${element.list.map((ele,index)=>{
                                                        return` |<a href="">${ele}</a>`
                                                    }).join('')}
                                      </dd>
                         </dl>`
                        return html1

                    })

                    html = `<li><div class="list_t">
                <a href="" class="nav-list-1">${e.bigTitle[0]}</a>|
                <a href="" class="nav-list-2">${e.bigTitle[1]}</a>
                <a href="">${e.bigTitle[2]}</a>
                    </div>
                    <div class="list_pop">
                    ${strnav.join('')}
                    </div>   
                 </li>`

                    $('.nav-l-b').append(html)
                })

            }

        }

        let kang = new daohang();

        $.getJSON("json/data3.json", json => (new daohang(json)).init());
        // console.log(data)

        // console.log($(".nav-l-b li"))
        $(".nav-l-b").on('mouseenter', 'li', function () {
            let index = $(this).index();
            $(".list_pop").eq(index).addClass("active").siblings().removeClass("active");
        })
        $(".nav-l-b").on('mouseleave', 'li', function () {
            let index = $(this).index();
            $(".list_pop").eq(index).removeClass("active");
        })
    })


})