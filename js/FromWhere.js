var ShowFromWhere = function(meg){     
       
        var width = 400;
		var height = 400;

        var dataset = new Array();
        

        dataset.push(parseInt(meg.JD));
        dataset.push(parseInt(meg.TB));
        dataset.push(parseInt(meg.MLS));
        dataset.push(parseInt(meg.YHD));
        dataset.push(parseInt(meg.TM));
		
         var TextData = function(Value,i){
             var Result;
            switch(i){
                case 0: Result = Value+" "+"京东"; break;
                case 1: Result =  Value+" "+"淘宝"; break;
                case 2: Result =  Value+" "+"美丽说"; break;
				case 3: Result =  Value+" "+"一号店"; break;
				case 4: Result =  Value+" "+"天猫"; break;
            }
            return Result;
        }

		var svg = d3.select("#FromWhere")
					.append("svg")
					.attr("width", width)
					.attr("height", height);
		
		var pie = d3.layout.pie();

		
		
		var outerRadius = 150;	//外半径
		var innerRadius = 0;	//内半径，为0则中间没有空白

		var arc = d3.svg.arc()	//弧生成器
					.innerRadius(innerRadius)	//设置内半径
					.outerRadius(outerRadius);	//设置外半径
		
		var color = d3.scale.category10();
		
        var piedata = pie(dataset);

        svg.append("text").text("各电商商品数量").attr("transform","translate(140,20)");


		var arcs = svg.selectAll("g")
					  .data(piedata)
					  .enter()
					  .append("g")
                      .attr("where",function(d,i){ i++; return i;})
					  .attr("transform","translate("+ (width/2) +","+ (width/2) +")");


		arcs.append("path")
			.attr("fill",function(d,i){
				return color(i);
			})
			.attr("d",function(d){
				return arc(d);
			});
		
		arcs.append("text")
			.attr("transform",function(d){
				return "translate(" + arc.centroid(d) + ")";
			})
			.attr("text-anchor","middle")
			.text(function(d,i){    
				return TextData(d.data,i);
			});

       
}

 $(document).ready(function () {
      $.ajax(
          {
              type: 'get',
              data:'',
              url: 'php/FromWhere.php', //后台处理程序   
              dataType: 'json',     //接受数据格式    
              error:function(){console.log("error");},
              success:function(meg){ //请求成功后处理函数。
                  console.log(meg);
                  ShowFromWhere(meg)           
                }
          })
 });

// addOption();

