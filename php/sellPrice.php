<?php
set_time_limit(0);
header('Content-type:text/html;charset=utf-8');

include('conn.php');

$sql_jd_count = "SELECT ProductName,Price FROM jd";
$sql_meilishuo_count = "SELECT ProductName,Price FROM meilishuo";
$sql_tb_count = "SELECT ProductName,Price FROM tb";
$sql_yihaodian_count = "SELECT ProductName,Price FROM yhd";

$conn->query("SET NAMES UTF8");

$jdresult = $conn->query($sql_jd_count);
$tbresult = $conn->query($sql_tb_count);
$meilishuoresult = $conn->query($sql_meilishuo_count);
$yihaodain = $conn->query($sql_yihaodian_count);

$jdrow = $jdresult -> fetch_assoc();
$tbrow = $tbresult -> fetch_assoc();
$meilishuorow = $meilishuoresult -> fetch_assoc();
$yihaodianrow = $yihaodain -> fetch_assoc();

$i=0;
$data = array();

while($tbrow){
    $data[$i]['name'] = $tbrow['ProductName'];
    $data[$i]['number'] = $tbrow['Price'];
    $i++;
    $tbrow = $tbresult -> fetch_assoc();
}
while($jdrow){
    $data[$i]['name'] = $jdrow['ProductName'];
    $data[$i]['number'] = $jdrow['Price'];
    $i++;
    $jdrow = $jdresult -> fetch_assoc();
}
while($meilishuorow){
    $data[$i]['name'] = $meilishuorow['ProductName'];
    $data[$i]['number'] = $meilishuorow['Price'];
    $i++;
    $meilishuorow = $meilishuoresult -> fetch_assoc();
}
while($yihaodianrow){
    $data[$i]['name'] = $yihaodianrow['ProductName'];
    $data[$i]['number'] = $yihaodianrow['Price'];
    $i++;
    $yihaodianrow = $yihaodain -> fetch_assoc();
}

$jos = json_encode($data);
echo $jos;
// print_r($jos);
?>