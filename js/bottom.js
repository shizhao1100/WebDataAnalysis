 $(document).ready(function () {
      $.ajax(
          {
              type: 'get',
              data:'',
              url: 'php/comment_number.php', //后台处理程序   
              dataType: 'json',     //接受数据格式    
              error:function(){console.log("error");},
              success:function(meg){ //请求成功后处理函数。
                  console.log(meg);
                  ShowBottomGraph(meg)           
                }
          })
 });
function ShowBottomGraph(meg){


    var svg = d3.select("#BottomGraph")
					.append("svg")
					.attr("width", 1300)
					.attr("height", 500);
    var k = 0;

    for(var i=0;i<8;i++)
    {
        for(var j=0;j<60;j++)       
        {
            svg.append("rect").attr("width",10).attr("height",10).attr("fill",function (){return bottomColor(meg[k].number)}).attr("transform","translate("+(j*20)+","+(i*20)+")").append("title").text(meg[k].name);
            k++;
        }
    }
}
function bottomColor(k){
    if(k<100)
    return "RGB(50,0,0)";
       if(k>100&&k<200)
    return "RGB(100,0,0)";
       if(k>200&&k<300)
    return "RGB(150,0,0)";
       if(k>300&&k<400)
    return "RGB(200,0,0)";
       if(k>400&&k<500)
    return "RGB(250,0,0)";
}