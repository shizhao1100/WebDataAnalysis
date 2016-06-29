<?php

header('Content-type:text/html;charset=utf-8');

include('conn.php');

$sql_tm_count = "SELECT Count(*) FROM tm";
$sql_jd_count = "SELECT Count(*) FROM jd";
$sql_tb_count = "SELECT Count(*) FROM tb";
$sql_meilishuo_count = "SELECT Count(*) FROM meilishuo";
$sql_yihaodian_count = "SELECT Count(*) FROM yhd";

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

// print_r($jdrow['Count(*)']);
// print_r($tbrow['Count(*)']);
// print_r($meilishuorow['Count(*)']);

$data = array();

$data['TM'] = $tmrow['Count(*)'];
$data['TB'] = $tbrow['Count(*)'];
$data['JD'] = $jdrow['Count(*)'];
$data['MLS'] = $meilishuorow['Count(*)'];
$data['YHD'] = $yihaodianrow['Count(*)'];

$jos = json_encode($data);
echo $jos;
// print_r($jos);
?>