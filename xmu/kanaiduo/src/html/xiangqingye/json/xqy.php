<?php
$con=mysqli_connect("127.0.0.1","root","","kangaiduo");

$id = $_REQUEST["id"];

$checkid="SELECT * FROM list where id=$id";

$res=$con->query($checkid);
$arr = $res->fetch_all(MYSQLI_ASSOC); 

echo json_encode($arr);

//防止乱码
// $conn->set_charset('utf8');

//关闭连接，防止资源浪费
// $res->close();
// $conn->close();

?>