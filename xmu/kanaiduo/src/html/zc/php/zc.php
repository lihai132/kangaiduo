<?php
// 01-先连接到服务器的数据库(选择表)
/* 参数1：服务器地址 */
/* 参数2：用户名 */
/* 参数3：密码 */
/* 参数4：数据库名字 */

$db=mysqli_connect("127.0.0.1","root","","kangaiduo");

$username = $_REQUEST["username"];
$password = $_REQUEST["password"];
$sql="INSERT INTO yhxx(username,password) VALUES('$username','$password')";

$result=mysqli_query($db,$sql);


$data=array("status"=>"", "msg"=>"","data"=>"");

if($result){
    $data["status"] = "success";
    $data["msg"] = "恭喜,注册成功";
}else{
    $data["status"] = "error";
    $data["msg"] = "注册失败！"; 
}

echo json_encode($data,true);







?>