<?php
$con = mysqli_connect("127.0.0.1", "root", "", "kangaiduo");

$data = file_get_contents("../html/list/json/list.json");
$arr = json_decode($data, true);

for ($i = 0; $i < count($arr); $i++) {
  $src = $arr[$i]["src"];
  $title = $arr[$i]["title"];
  $price1 = $arr[$i]["price1"];
  $price2 = $arr[$i]["price2"];
 
  $text = $arr[$i]["text"];
 

  $sql = "INSERT INTO `list` 
  (`id`, `title`, `src`, `text`,`price1`,`price2`) VALUES ('$i', '$title', '$src', '$text', '$price1',$price2)";
  mysqli_query($con, $sql);
}
// echo $sql;

?>