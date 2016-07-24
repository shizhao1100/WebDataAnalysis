/**
 * Created by hxr on 2016/7/2.
 */
var priceChange = function (data) {
    var len = data.comment.length;
    var theTime = [];//时间
    var Time = [];
    var price = parseInt(data.Price);

    var dataResult = {};
    dataResult.time = [];
    dataResult.price = [];

    var count = [];
    //转换时间格式
    for(var i = 0;i < len;i++){
        Time[i] = data.time[i].replace(/年|月/g, "-").replace(/日/g, "");
        //去掉时、分、秒
        var arr = Time[i].split(' ');
        //去掉日
        var arr1 = arr[0].split('-');
        theTime[i] = arr1[0] + arr1[1] + '';
    }
    //对时间进行排序
    theTime.sort();
    //确定每个月的价格
    var re=[theTime[0]];
    for(var i = 1; i < theTime.length; i++)
    {
        if( theTime[i] !== re[re.length-1])
        {
            re.push(theTime[i]);
        }
    }
    for(var i = 0;i < re.length;i ++){
        dataResult.time.push(re[i]);
        dataResult.price.push(price);
    }

    var chart = {
        type: 'column'
    };
    var title = {
        text: '价格按时间变化图'
    };
    var xAxis = {
        type: 'category',
        labels: {
            rotation: -45,
            style: {
                fontSize: '13px',
                fontFamily: 'Verdana, sans-serif'
            }
        },
        title: {
            text: '时间'
        }
    };
    var yAxis ={
        min: 0,
        title: {
            text: '商品价格'
        }
    };
    var tooltip = {
        pointFormat: '商品价格: <b>{point.y} 元</b>'
    };
    var credits = {
        enabled: false
    };
    var series= [{
        name: '商品价格',
        data: (function () {
            var dataArr=new Array();
            for(var i=0;i<re.length;i++){
                dataArr[i]=new Array();
                dataArr[i][0] = dataResult.time[i];
                dataArr[i][1] = dataResult.price[i];
            }
            return dataArr;
        })(),
        /*data: [
         ['201605', 10],
         ['201606', 9],
         ],*/
        dataLabels: {
            enabled: true,
            rotation: -90,
            color: '#FFFFFF',
            align: 'right',
            format: '{point.y}', // one decimal
            y: 10, // 10 pixels down from the top
            style: {
                fontSize: '13px',
                fontFamily: 'Verdana, sans-serif'
            }
        }
    }];
    var json = {};
    json.chart = chart;
    json.title = title;
    json.xAxis = xAxis;
    json.yAxis = yAxis;
    json.tooltip = tooltip;
    json.credits = credits;
    json.series = series;
    $('#price').highcharts(json);
}