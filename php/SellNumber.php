<?php
set_time_limit(0);
header('Content-type:text/html;charset=utf-8');

include('conn.php');

$sql_meilishuo_count = "SELECT ProductName,SaleNum FROM meilishuo";
$sql_tb_count = "SELECT ProductName,SaleNum FROM tb";
$sql_tm_count = "SELECT ProductName,SaleNum FROM tb";
$sql_yihaodian_count = "SELECT ProductName,SaleNum FROM yhd";

$conn->query("SET NAMES UTF8");

$tbresult = $conn->query($sql_tb_count);
$tmresult = $conn->query($sql_tm_count);
$meilishuoresult = $conn->query($sql_meilishuo_count);
$yihaodain = $conn->query($sql_yihaodian_count);

$tmrow = $tmresult -> fetch_assoc();
$tbrow = $tbresult -> fetch_assoc();
$meilishuorow = $meilishuoresult -> fetch_assoc();
$yihaodianrow = $yihaodain -> fetch_assoc();

$i=0;
$data = array();

while($tbrow){
    $data[$i]['name'] = $tbrow['ProductName'];
    $data[$i]['number'] = $tbrow['SaleNum'];
    $i++;
    $tbrow = $tbresult -> fetch_assoc();
}
while($meilishuorow){
    $data[$i]['name'] = $meilishuorow['ProductName'];
    $data[$i]['number'] = $meilishuorow['SaleNum'];
    $i++;
    $meilishuorow = $meilishuoresult -> fetch_assoc();
}
while($yihaodianrow){
    $data[$i]['name'] = $yihaodianrow['ProductName'];
    $data[$i]['number'] = $yihaodianrow['SaleNum'];
    $i++;
    $yihaodianrow = $yihaodain -> fetch_assoc();
}
while($tmrow){
    $data[$i]['name'] = $tmrow['ProductName'];
    $data[$i]['number'] = $tmrow['SaleNum'];
    $i++;
    $tmrow = $yihaodain -> fetch_assoc();
}

$jos = json_encode($data);
echo $jos;
// print_r($jos);
?>