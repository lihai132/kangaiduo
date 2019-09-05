<?php
$con = mysqli_connect("127.0.0.1", "root", "", "kangaiduo");

/* 需要往数据库中插入一条数据 */
/* (1) 检查购物车中是否存在指定的商品，如果存在那么就更新数量 */
/* (2) 如果购物车中不存在指定的商品，那么就加入一条新的数据 */
$id = $_REQUEST["id"];

$sql = "DELETE FROM `cart` WHERE gooid='$id'";
mysqli_query($con,$sql);








?>