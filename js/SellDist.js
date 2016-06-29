 var SellDist = function(meg,Width,Height){   
        

        var D_0100   = parseInt(meg.D_0100.MLS)+parseInt(meg.D_0100.YHD)+parseInt(meg.D_0100.TM)+parseInt(meg.D_0100.TB)+parseInt(meg.D_0100.JD);
        var D_100200 = parseInt(meg.D_100200.MLS)+parseInt(meg.D_100200.YHD)+parseInt(meg.D_100200.TM)+parseInt(meg.D_100200.TB)+parseInt(meg.D_100200.JD);
        var D_200300 = parseInt(meg.D_200300.MLS)+parseInt(meg.D_200300.YHD)+parseInt(meg.D_200300.TM)+parseInt(meg.D_200300.TB)+parseInt(meg.D_200300.JD);
        var D_300400 = parseInt(meg.D_300400.MLS)+parseInt(meg.D_300400.YHD)+parseInt(meg.D_300400.TM)+parseInt(meg.D_300400.TB)+parseInt(meg.D_300400.JD);
        var D_400500 = parseInt(meg.D_400500.MLS)+parseInt(meg.D_400500.YHD)+parseInt(meg.D_400500.TM)+parseInt(meg.D_400500.TB)+parseInt(meg.D_400500.JD);

        var MLS = new Array();
        var YHD = new Array();
        var TM = new Array();
        var TB = new Array();
        var JD = new Array();

        MLS.push(parseInt(meg.D_0100.MLS));
        MLS.push(parseInt(meg.D_100200.MLS));
        MLS.push(parseInt(meg.D_200300.MLS));
        MLS.push(parseInt(meg.D_300400.MLS));
        MLS.push(parseInt(meg.D_400500.MLS));

        YHD.push(parseInt(meg.D_0100.YHD));
        YHD.push(parseInt(meg.D_100200.YHD));
        YHD.push(parseInt(meg.D_200300.YHD));
        YHD.push(parseInt(meg.D_300400.YHD));
        YHD.push(parseInt(meg.D_400500.YHD));

        TM.push(parseInt(meg.D_0100.TM));
        TM.push(parseInt(meg.D_100200.TM));
        TM.push(parseInt(meg.D_200300.TM));
        TM.push(parseInt(meg.D_300400.TM));
        TM.push(parseInt(meg.D_400500.TM));

        TB.push(parseInt(meg.D_0100.TB));
        TB.push(parseInt(meg.D_100200.TB));
        TB.push(parseInt(meg.D_200300.TB));
        TB.push(parseInt(meg.D_300400.TB));
        TB.push(parseInt(meg.D_400500.TB));

        JD.push(parseInt(meg.D_0100.JD));
        JD.push(parseInt(meg.D_100200.JD));
        JD.push(parseInt(meg.D_200300.JD));
        JD.push(parseInt(meg.D_300400.JD));
        JD.push(parseInt(meg.D_400500.JD));

        var width = Width;  
        var height = Height;  
        var dataset = [];  
        var num = 5;  //数组的数量  

        dataset.push(D_0100);
        dataset.push(D_100200);  
        dataset.push(D_200300);    
        dataset.push(D_300400);  
        dataset.push(D_400500);  
       
        var svg = d3.select("#SellDist").append("svg")  
                                .attr("width",width)  
                                .attr("height",height);  

       svg.append("text").text("各电商商品价格分布").attr("transform","translate(240,30)");


       var appendsmllRect = function(color,text_,x,y){ svg.append("rect").attr("width",15).attr("height",15).attr("fill",color).attr("transform","translate("+x+","+y+")");
                                                       svg.append("text").text(text_).attr("transform","translate("+(x+30)+","+(y+15)+")");}

       svg.append("rect").text("各电商商品价格分布").attr("transform","translate(240,20)");

       appendsmllRect("RGB(230,131,168)","美丽说",450,100);
       appendsmllRect("RGB(24,83,141)","一号店",450,130);
       appendsmllRect("RGB(229,75,77)","天猫",450,160);
       appendsmllRect("RGB(164,196,191)","淘宝",450,190);
       appendsmllRect("RGB(23,125,127)","京东",450,220);

        var xAxisScale = d3.scale.ordinal()  
                        .domain(d3.range(dataset.length))  
                        .rangeRoundBands([0,500]);  
                              
        var yAxisScale = d3.scale.linear()  
                        .domain([0,d3.max(dataset)])  
                        .range([500,0]);  
                              
        var xAxis = d3.svg.axis()  
                        .scale(xAxisScale)
                        .tickFormat(function(d,i){
                            return 0+100*i+"-"+100*(i+1);
                        })
                        .orient("bottom");  
          
        var yAxis = d3.svg.axis()  
                        .scale(yAxisScale)  
                        .orient("left");  
  
        var xScale = d3.scale.ordinal()  
                        .domain(d3.range(dataset.length))  
                        .rangeRoundBands([0,500],0.05);  
                              
        var yScale = d3.scale.linear()  
                        .domain([0,d3.max(dataset)])  
                        .range([0,500]);  

        function ShowRect(type,data,BeforeData,color){  
        svg.selectAll(type)  
           .data(data)  
           .enter()  
           .append("rect")  
           .attr("x", function(d,i){  
                return 60 + xScale(i);  
           } )  
           .attr("y",function(d,i){  
                return 50 + 500 - yScale(d) -yScale(BeforeData[i]) ;  
           })  
           .attr("width", function(d,i){  
                return xScale.rangeBand();  
           })  
           .attr("height",yScale)  
           .attr("fill",color);  
        }
        var  BeforeData = [0,0,0,0,0];

        function GetBeforData(data){
            for(var i=0;i<5;i++)
            {
                BeforeData[i] = BeforeData[i]+data[i];
            }
        }
        
        ShowRect("MLS",MLS,BeforeData,"RGB(230,131,168)");
        GetBeforData(MLS);
        ShowRect("YHD",YHD,BeforeData,"RGB(24,83,141)");
        GetBeforData(YHD);
        ShowRect("TM",TM,BeforeData,"RGB(229,75,77)");
        GetBeforData(TM);
        ShowRect("TB",TB,BeforeData,"RGB(164,196,191)");
        GetBeforData(TB);
        ShowRect("JD",JD,BeforeData,"RGB(23,125,127)");


        svg.selectAll("Recttext")  
            .data(dataset)  
            .enter()
            .append("text")  
            .attr("x", function(d,i){  
                return 60 + xScale(i);  
           } )  
           .attr("y",function(d,i){  
                return 50 + 500 - yScale(d) ;  
           })  
            .attr("dx", function(d,i){  
                return xScale.rangeBand()/3;  
           })  
            .attr("dy", 15)  
            .attr("text-anchor", "begin")  
            .attr("font-size", 14)  
            .attr("fill","white")  
            .text(function(d,i){  
                return d;  
            });  
             
        svg.append("g")  
            .attr("class","axis")  
            .attr("transform","translate(60,550)")  
            .call(xAxis);  
              
        svg.append("g")  
            .attr("class","axis")  
            .attr("transform","translate(60,50)")  
            .call(yAxis);   
}    

 $(document).ready(function () {
      $.ajax(
          {
              type: 'get',
              data:'',
              url: 'php/SellDist.php', //后台处理程序   
              dataType: 'json',     //接受数据格式    
              error:function(){console.log("error");},
              success:function(meg){ //请求成功后处理函数。
                  console.log(meg);
                  SellDist(meg,550,600)           
                }
          })
 });
         