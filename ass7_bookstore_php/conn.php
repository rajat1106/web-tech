<?php
function db_connect(){
$conn = mysqli_connect("localhost", "root", "", "college");
if(!$conn){
echo "Can't connect database " . mysqli_connect_error($conn);
exit;
}
return $conn;
}
?>