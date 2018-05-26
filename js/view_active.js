$(function(){
//活动页简介的收起和展开
        var limits=60;//显示长度
        var charNumbers=$("#content").html().length;//原文本长度
        var cur_status = "less";
        var flag = 0;//状态变量

        if(charNumbers>limits){
            var orgText=$("#content").html();
            var showText=orgText.substring(0,limits);
            $("#content").html(showText);
            $("#content").append("<a href='###'>>>点击展开</a>");
            $("a").on('click', function(){
                if(cur_status=="less"){
                        $("#content span").html(orgText);
                        $(this).html("<<点击收起");
                        cur_status = "more";
                    }else{
                        $("#content span").html(showText);
                        $(this).html(">>点击展开");
                        cur_status = "less";
                    }
            });
        }

    function openBox(){
       $("#light").css("display","block");
       $("#fade").css("display","block");
    }
    function closeBox() {
       $("#light").css("display","none");
        $("#fade").css("display","none");
    }

        var flag,
            num = parseInt($("#joiner").text())+1;

    $("#sure-bttn").on('click', function(){
         var tel = $("#tel").val(),
             qq = $("#qq").val(),
             wechat = $("#wechat").val(),
             reg1 = /^[1][3,4,5,7,8][0-9]{9}$/,
             reg2 = /^[1-9][0-9]{4,11}$/,
             reg3 = /^[a-zA-Z]([-_a-zA-Z0-9]{5,19})+$/;   
        if(wechat == ""||!reg3.test(wechat)){
            toastr.error("请输入正确的微信号",{
                timeOut:"1000"
            });
         }else{
            flag = 1;
         }
         if(qq == ""||!reg2.test(qq)){
            toastr.error("请输入正确的qq号",{
                timeOut:"1000"  
            });
         }else{
            flag = 1;
         }
         
         if (tel == ""||!reg1.test(tel)) {
            //alert("请输入正确的手机号");
            toastr.error('请输入正确的手机号',{
                timeOut:"1000"   
            });
         }else{
            flag = 1;
         }

         if(flag == 1){
            $("#join-bttn").css("background-color","#757575");
            $("#join-bttn").html("已报名");
            $("#light").css("display","none");
            $("#fade").css("display","none");
            $("#join-bttn").unbind("click",openBox);
            $("#joiner").text(num + "人参与");
        }
        
    });
    $("#join-bttn").bind("click",openBox);
    $("#cancel-bttn").on("click",closeBox);       
})
