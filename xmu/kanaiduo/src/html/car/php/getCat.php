<?php

$con = mysqli_connect("127.0.0.1", "root", "", "kangaiduo");
$sql = "SELECT cart.*,list.title,list.src FROM cart , list WHERE cart.gooid = list.id";

$result = mysqli_query($con, $sql);
$data = mysqli_fetch_all($result, MYSQLI_ASSOC);
echo json_encode($data, true);

?>