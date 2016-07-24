<?php

header('Content-type:text/html;charset=utf-8');

include('conn.php');


$conn->query("SET NAMES UTF8");

$data = array();

$sql_tm_count = "SELECT Count(*) FROM tm where Price < 100";
$sql_jd_count = "SELECT Count(*) FROM jd where Price < 100";
$sql_tb_count = "SELECT Count(*) FROM tb where Price < 100";
$sql_meilishuo_count = "SELECT Count(*) FROM meilishuo where Price < 100";
$sql_yihaodian_count = "SELECT Count(*) FROM yhd where Price < 100";


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

$data['D_0100']['TM'] = $tmrow['Count(*)'];
$data['D_0100']['TB'] = $tbrow['Count(*)'];
$data['D_0100']['JD'] = $jdrow['Count(*)'];
$data['D_0100']['MLS'] = $meilishuorow['Count(*)'];
$data['D_0100']['YHD'] = $yihaodianrow['Count(*)'];

$sql_tm_count = "SELECT Count(*) FROM tm where Price > 400 and Price < 500";
$sql_jd_count = "SELECT Count(*) FROM jd where Price > 400 and Price < 500";
$sql_tb_count = "SELECT Count(*) FROM tb where Price > 400 and Price < 500";
$sql_meilishuo_count = "SELECT Count(*) FROM meilishuo where Price > 400 and Price < 500";
$sql_yihaodian_count = "SELECT Count(*) FROM yhd where Price > 400 and Price < 500";

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



$data['D_400500']['TM'] = $tmrow['Count(*)'];
$data['D_400500']['TB'] = $tbrow['Count(*)'];
$data['D_400500']['JD'] = $jdrow['Count(*)'];
$data['D_400500']['MLS'] = $meilishuorow['Count(*)'];
$data['D_400500']['YHD'] = $yihaodianrow['Count(*)'];


$sql_tm_count = "SELECT Count(*) FROM tm where Price > 100 and Price < 200";
$sql_jd_count = "SELECT Count(*) FROM jd where Price > 100 and Price < 200";
$sql_tb_count = "SELECT Count(*) FROM tb where Price > 100 and Price < 200";
$sql_meilishuo_count = "SELECT Count(*) FROM meilishuo where Price > 100 and Price < 200";
$sql_yihaodian_count = "SELECT Count(*) FROM yhd where Price > 100 and Price < 200";


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

$data['D_100200']['TM'] = $tmrow['Count(*)'];
$data['D_100200']['TB'] = $tbrow['Count(*)'];
$data['D_100200']['JD'] = $jdrow['Count(*)'];
$data['D_100200']['MLS'] = $meilishuorow['Count(*)'];
$data['D_100200']['YHD'] = $yihaodianrow['Count(*)'];




$sql_tm_count = "SELECT Count(*) FROM tm where Price > 200 and Price < 300";
$sql_jd_count = "SELECT Count(*) FROM jd where Price > 200 and Price < 300";
$sql_tb_count = "SELECT Count(*) FROM tb where Price > 200 and Price < 300";
$sql_meilishuo_count = "SELECT Count(*) FROM meilishuo where Price > 200 and Price < 300";
$sql_yihaodian_count = "SELECT Count(*) FROM yhd where Price > 200 and Price < 300";


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


$data['D_200300']['TM'] = $tmrow['Count(*)'];
$data['D_200300']['TB'] = $tbrow['Count(*)'];
$data['D_200300']['JD'] = $jdrow['Count(*)'];
$data['D_200300']['MLS'] = $meilishuorow['Count(*)'];
$data['D_200300']['YHD'] = $yihaodianrow['Count(*)'];

$sql_tm_count = "SELECT Count(*) FROM tm where Price > 300 and Price < 400";
$sql_jd_count = "SELECT Count(*) FROM jd where Price > 300 and Price < 400";
$sql_tb_count = "SELECT Count(*) FROM tb where Price > 300 and Price < 400";
$sql_meilishuo_count = "SELECT Count(*) FROM meilishuo where Price > 300 and Price < 400";
$sql_yihaodian_count = "SELECT Count(*) FROM yhd where Price > 300 and Price < 400";


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


$data['D_300400']['TM'] = $tmrow['Count(*)'];
$data['D_300400']['TB'] = $tbrow['Count(*)'];
$data['D_300400']['JD'] = $jdrow['Count(*)'];
$data['D_300400']['MLS'] = $meilishuorow['Count(*)'];
$data['D_300400']['YHD'] = $yihaodianrow['Count(*)'];


$jos = json_encode($data);
echo $jos;
// print_r($jos);
?>