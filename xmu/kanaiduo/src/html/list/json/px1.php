<?php
$con=mysqli_connect("127.0.0.1","root","","kangaiduo");
$order=isset($_GET["order"])?$_GET["order"]:'asc' ;
$sql = "SELECT * FROM list ORDER BY price1 $order";
$result=mysqli_query($con,$sql);
$data=array("status"=>"success","msg"=>"请求成功","data"=>mysqli_fetch_all($result,MYSQLI_ASSOC));
echo json_encode($data,true);





?>
