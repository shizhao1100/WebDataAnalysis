var ShowTab = function(meg){     
       
		var Keyword = new Array;
		var KeywordCount = new Array;
		
		Keyword[0] = "喜欢";
		Keyword[1] = "满意";
		Keyword[2] = "很好";
		Keyword[3] = "质量好";
		Keyword[4] = "质量差";
		Keyword[5] = "不满意";
		Keyword[6] = "差评";
		Keyword[7] = "好评";
		Keyword[8] = "舒服";		
		Keyword[9] = "不舒服";

		for(var i =0;i<Keyword.length;i++)
		{
			KeywordCount.push(0);
		}
		for(var j=0;j<Keyword.length;j++)
		{
			for(var i = 0;i<meg.comment.length;i++)
			{
				if(meg.comment[i].indexOf(Keyword[j])>=0)
				{
					KeywordCount[j]++;
				}
			}
		}

        var width = 500;
		var height = 400;

        var dataset = KeywordCount;
        
		
         var TextData = function(Value,i){
			 if(Value!=0)
			 {
             var Result = Value +" "+ Keyword[i];
             return Result;
			 }
        }

		var svg = d3.select("#pie")
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

        svg.append("text").text("评论标签").attr("transform","translate(220,80)");


		var arcs = svg.selectAll("g")
					  .data(piedata)
					  .enter()
					  .append("g")
                      .attr("where",function(d,i){ i++; return i;})
					  .attr("transform","translate("+ (width/2) +","+ (width/2) +")");
		Getcolor =function(i){
			var Result;
			switch (i) {
				case 0: Result = "京东"; break;
                case 1: Result = "淘宝"; break;
                case 2: Result = "美丽说"; break;
				case 3: Result = "一号店"; break;
				case 4: Result = "天猫"; break;
			}
			return ReturnColor(Result);
		}

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

// addOption();

