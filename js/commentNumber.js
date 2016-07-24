/**
 * Created by hxr on 2016/7/2.
 */
/*var by = function(name){
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
};*/
//$(document).ready(function() {
    var showCommentNumber = function (data) {
    var len = data.comment.length;
    var theTime = [];//时间
    var Time = [];

    var dataResult = {};
    dataResult.time = [];
    dataResult.count = [];
    var k = 0;//最终的k值为dataResult中数值的长度

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
    //确定每个月的评论数量
    for(var i = 0;i < len;i ++){
        if(theTime[i] != -1){
            dataResult.time.push(theTime[i]);
            dataResult.count[k] = 1;
            for(var j = i+1;j < len;j ++){
                if(theTime[j] == theTime[i]){
                    dataResult.count[k] ++;
                    theTime[j] = -1;
                }
            }
            k ++;
        }
    }
    //对每个月的评论数量按时间排序
    //    dataResult.sort(by("time"));
        //dataResult.reverse();//反转顺序，变为降序排列

        var chart = {
            type: 'column'
        };
        var title = {
            text: '评论数量分布图'
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
                text: '数量'
            }
        };
        var tooltip = {
            pointFormat: '评论数量: <b>{point.y} 个</b>'
        };
        var credits = {
            enabled: false
        };
        var series= [{
            name: '评论数量',
            data: (function () {
                var dataArr=new Array();
                for(var i=0;i<k;i++){
                    dataArr[i]=new Array();
                    dataArr[i][0] = dataResult.time[i];
                    dataArr[i][1] = dataResult.count[i];
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
        $('#commentNumber').highcharts(json);
    }
//});