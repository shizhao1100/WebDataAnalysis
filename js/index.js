/**
 * Created by hxr on 2016/6/26.
 */
//参数type表示：
// 1: 京东
// 2: 天猫
// 3：美丽说
// 4：一号店
// 5：淘宝

var currentPage = 0;
var resource = {};
function ulrHtml(id,type,name){
    console.log(id);
    console.log(type);
    console.log(name);
    var toUrl = "wordCloud.html?id="+id+"&type="+type+"&name="+name;
    document.location.href = toUrl;
    //window.open(toUrl);
}
$(document).ready(function() {
    var dataUrl,type;
    dataUrl = "php/sellNumber.php";
    type = 1;
    function appendData(data,page){
        var k = 13;//每页显示20条数据
        var i = page*13;
        if(currentPage <= 0){//如果是第一页
            $('#previous').addClass('disabled'); // Disables visually
        }
        $("#data").text('');
        //考虑：如果是最后一页
        while(k > 0 && i < data.length){
            $("#data").append("<p style='line-height: 30px;font-size: 18px;width:320px;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;-webkit-text-overflow:ellipsis;'>"
            + '<a href="javascript:void(0);" onclick="ulrHtml(\''+data[i].id+'\',\''+data[i].type+'\',\''+data[i].name+'\')">'
            +data[i].name+"</a></p>");
            //"<a href='wordCloud.html?id=1&name=11'>"+data[i].name+"</a></p>");
            k --;
            i ++;
        }
    }
    var by = function(name){
            return function(o, p){
                var a, b;
                if (typeof o === "object" && typeof p === "object" && o && p) {
                    //去除没有销量的
                    if(o[name] == ""){
                        a = 0;
                    }else{
                        a = parseInt(o[name]);
                    }
                    if(p[name] == ""){
                        b = 0;
                    }else{
                        b = parseInt(p[name]);
                    }
                    if (a === b) {
                        return 0;
                    }
                    if (typeof a === typeof b) {
                        return a < b ? -1 : 1;
                    }
                    return typeof a < typeof b ? -1 : 1;
                }else {
                    throw ("error");
                }
            }
    }
    function order(arr){
        if(type == 1){
            //var a = sortBy(arr,"number","desc");
            //console.log(a);
            arr.sort(by("number"));
            arr.reverse();//反转顺序，变为降序排列
        }else if(type == 2){
            arr.sort(by("number"));
            arr.reverse();//反转顺序，变为降序排列
            console.log("2");
        }else if(type == 3){
            arr.sort(by("number"));
            arr.reverse();//反转顺序，变为降序排列
            console.log("3");
        }
    }
    function paging(url){
        $.ajax({
            type: "GET",
            async:false,
            url:url,
            dataType:"json",
            success: function(data){
                console.log(data);
                //排序
                order(data);
                resource = data;
                appendData(data,currentPage);
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                alert(errorThrown);
            }
        });
    }
    paging(dataUrl);

    $(".form-control").change(function(){
        var value = $(".form-control").val();

        if(value === "按销量从高到低"){
            dataUrl = "php/sellNumber.php";
            type = 1;
        }else if(value === "按价格从高到低"){
            dataUrl = "php/sellPrice.php";
            //dataUrl = "./json/price.json";
            type = 2;
        }else if(value === "按评论数量排行"){
            dataUrl = "php/comment_number.php";     
            type = 3;
        }
        paging(dataUrl);
    });
    $("#previous").click(function () {
        if(currentPage <= 0){
            $('#previous').addClass('disabled'); // Disables visually
            console.log('不能上一页了');
        }else{
            currentPage --;
            console.log(currentPage);
            $('#next').removeClass('disabled');
            appendData(resource,currentPage);
        }
    });
    $("#next").click(function () {
        if(currentPage >= parseInt(resource.length/45)){
            $('#next').addClass('disabled');
            appendData(resource,currentPage);
        }else{
            currentPage ++;
            $('#previous').removeClass('disabled');
            appendData(resource,currentPage);
        }
    });
});