/**
 * Created by hxr on 2016/6/26.
 */
$(document).ready(function() {
    var dataUrl,type;
    dataUrl = "php/sellNumber.php";
    type = 1;
    $.ajax({
        type: "get",
        url: dataUrl,
        dataType: "json", /*这句可用可不用，没有影响*/
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            console.log(data);
            console.log(data.length);
            for(var i = 0;i < data.length;i++){
                $("#data").append("<p style='line-height: 30px;font-size: 18px'><a href='wordCloud.html'>"+data[i].name+"</a></p>");
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert(errorThrown);
        }
    });
    $(".form-control").change(function(){
        value = $(".form-control").val();
       console.log('change');

        if(value === "按销量从高到低"){
            dataUrl = "php/sellNumber.php";
            type = 1;
        }else if(value === "按价格从高到低"){
            dataUrl = "php/sellPrice.php";
            type = 2;
        }else if(value === "按评论数量从高到低"){
            dataUrl = "php/comment_number.php";     
            type = 3;
        }
        $.ajax({
            type: 'get',
            data:'',
            url: dataUrl,
            dataType: "json", /*这句可用可不用，没有影响*/
            contentType: "application/json; charset=utf-8",
            success: function (data) {
                console.log(data);
                console.log(data.length);
                var divshow = $("#data");
                divshow.text("");// 清空数据
                /*if(type === 1){
                 *//*排序*//*
                 var obj = {};
                 for(var i = 0;i < data.rows.length;i ++){
                 if(data.rows[i].number >= ){
                 data.rows[i]
                 }
                 }
                 *//*添加内容*//*
                 for(var i = 0;i < data.rows.length;i ++){
                 $("#data").append("<p><a href='#'>"+data.rows[i].name+"</a></p>");
                 }
                 }else if(type === 2){

                 }else if(type === 3){

                 }*/
                for(var i = 0;i < data.length;i ++){
                    $("#data").append("<p><a href='#'>"+data[i].name+"</a></p>");
                }
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                alert(errorThrown);
            }
        });
    });
})
/*
$("button").click(function(){
 $.post("/example/jquery/demo_test_post.asp",
 {
 name:"Donald Duck",
 city:"Duckburg"
 },
 function(data,status){
 alert("数据：" + data + "\n状态：" + status);
 });
 });
 */