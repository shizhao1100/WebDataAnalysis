/**
 * Created by hxr on 2016/7/1.
 */
setTimeout(function(){
    var obj = [];
    var par = {};//整理后的参数
    var location = window.location.href;
    var href= location+"";
    //console.log(href);
    var href_part=href.split('?');
    //console.log(href_part);
    var part=href_part[1].split('&');
    //console.log(part);
    for(var i = 0;i < part.length;i++){
        obj[i] = part[i].split('=');
    }
    //console.log(obj);
    for(var i = 0;i < obj.length;i ++){
        par[obj[i][0]] = obj[i][1];
        if(obj[i][0] == "name"){
            document.title = obj[i][1];
        }
    }
    //console.log(par);

    $.ajax({
        url: 'php/getcommentbyid.php',//ajax提交路径
        async:false,//同步
        dataType:"json",
        type: 'get',//提交方式
        //传参不可以直接传对象
        data: { id: par.id,type:par.type},//提交参数
        //data:par,
        success: function (result) {//ajax请求完成时执行，result为返回的结果
            ShowTab(result);
            showCommentNumber(result);
            priceChange(result);
            console.log(result);
        },
        error: function () {
            alert("ajax请求处理错误");
        }
    });
},100)