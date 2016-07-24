<?php
set_time_limit(0);
header('Content-type:text/html;charset=utf-8');

include('conn.php');

$sql_tm_count = "SELECT productid,ProductName,comment_number FROM jd";
$sql_jd_count = "SELECT productid,ProductName,comment_number FROM jd";
$sql_meilishuo_count = "SELECT productid,ProductName,comment_number FROM meilishuo";
$sql_tb_count = "SELECT productid,ProductName,comment_number FROM tb";
$sql_yihaodian_count = "SELECT productid,ProductName,comment_number FROM yhd";

$conn->query("SET NAMES UTF8");

$tmresult = $conn->query($sql_tm_count);
$jdresult = $conn->query($sql_jd_count);
$tbresult = $conn->query($sql_tb_count);
$meilishuoresult = $conn->query($sql_meilishuo_count);
$yihaodain = $conn->query($sql_yihaodian_count);

$tmrow = $tmresult -> fetch_assoc();
$jdrow = $jdresult -> fetch_assoc();
$tbrow = $tbresult -> fetch_assoc();
$meilishuorow = $meilishuoresult -> fetch_assoc();
$yihaodianrow = $yihaodain -> fetch_assoc();

$i=0;
$data = array();

while($jdrow){
    $data[$i]['type'] = 1;
    $data[$i]['id'] = $jdrow['productid'];
    $data[$i]['id'] = $jdrow['productid'];
    $data[$i]['name'] = $jdrow['ProductName'];
    $data[$i]['number'] = $jdrow['comment_number'];
    $i++;
    $jdrow = $jdresult -> fetch_assoc();
}
while($tbrow){
    $data[$i]['type'] = 5;
    $data[$i]['id'] = $tbrow['productid'];
    $data[$i]['name'] = $tbrow['ProductName'];
    $data[$i]['number'] = $tbrow['comment_number'];
    $i++;
    $tbrow = $tbresult -> fetch_assoc();
}
while($meilishuorow){
    $data[$i]['type'] = 3;
    $data[$i]['id'] = $meilishuorow['productid'];
    $data[$i]['name'] = $meilishuorow['ProductName'];
    $data[$i]['number'] = $meilishuorow['comment_number'];
    $i++;
    $meilishuorow = $meilishuoresult -> fetch_assoc();
}
while($yihaodianrow){
    $data[$i]['type'] = 4;
    $data[$i]['id'] = $yihaodianrow['productid'];   
    $data[$i]['name'] = $yihaodianrow['ProductName'];
    $data[$i]['number'] = $yihaodianrow['comment_number'];
    $i++;
    $yihaodianrow = $yihaodain -> fetch_assoc();
}
while($tmrow){
    $data[$i]['type'] = 2;
    $data[$i]['id'] = $tmrow['productid'];
    $data[$i]['name'] = $tmrow['ProductName'];
    $data[$i]['number'] = $tmrow['comment_number'];
    $i++;
    $tmrow = $yihaodain -> fetch_assoc();
}

$jos = json_encode($data);
echo $jos;
// print_r($jos);
?>