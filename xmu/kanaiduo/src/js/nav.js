$(function () {
    class Nav {
        constructor(json) {
            this.data = json;
            // console.log(this.data);


        }

        //初始化
        init() {
            this.createJieceng();
        }

        //生成阶层区
        createJieceng() {
            let data = this.data;
            console.log(data);

            function create(list) {

                let html = `
                <div class="nav">
     
                <div class="nav-left">
                    <ul class="nav-left-ul1">
                        
                        ${list.bingzheng.map((e1)=>{
                            return `<li><a href="">${e1}</a></li>`
                        }).join("")}
                    </ul>
            
                    <ul class="nav-left-ul2">
            
                    ${list.src1.map((e2)=>{
                      return `<li><a href=""><img
                               src="${e2}"
                                alt=""></a></li>`
                    }).join("")}
                        
                        
                    </ul>
                </div>
     
                <div class="nav-lbt"></div>
     
                <div class="nav-right">
                    <ul>
                        <li class="right-tp"><a href=""><img
                                    src="${list.src3}"
                                    alt=""></a>
                        </li>
     
            
                        ${list.src2.map((e3,i)=>{
                            return ` <li class="right-ul-li">
            
                            <p><a href="">
                                    <img src="${e3}"
                                        alt="">
                                </a></p>
                            <p><a href="">${list.title1[i]}</a></p>
                            <p><a href="">${list.title2[i]}</a></p>
                            <p>${list.price[i]}</p>
            
            
                        </li>`
                        }).join("")}
                       
            
                     </ul>
                 </div>
            
              </div> `;

                return html;
            };
           





            let html1 = create(data[0]);
            $(".jc1").append(html1);

            let html2 = create(data[1]);
            $(".jc2").append(html2);

            let html3 = create(data[2]);
            $(".jc3").append(html3);

            let html4 = create(data[3]);
            $(".jc4").append(html4);

            let html5 = create(data[4]);
            $(".jc5").append(html5);
            console.log("引入了轮播图");
           $(".nav-lbt").load("lbt2.html", function () {
               console.log("引入了轮播图");
               
           });


        $(".nav-left-ul1").find("li").hover(function()
        {$(this).children().css({"color":"red"});



        },function(){
            $(this).children().css({"color":"#000"});
        })



        $(".title-right").find(".dd1").hover(function()
        {$(this).children().css({"color":"red"});



        },function(){
            $(this).children().css({"color":"#6d6d6d"});
        })


        }


      



    }





    $.getJSON("../api/jieceng.json", (json) => {
        let nav = new Nav(json);
        nav.init();

    })






})