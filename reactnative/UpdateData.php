<?php

include 'koneksi.php';

$con = mysqli_connect($HostName,$HostUser,$HostPass,$DatabaseName);

 $json = file_get_contents('php://input');

 $obj = json_decode($json,true);
 $id = $obj['id'];
 $fullname = $obj['fullname'];
 $pass = $obj['pass'];
 $picker1 = $obj['picker1'];
 $picker2 = $obj['picker2'];
 $email = $obj['email'];
 $phone = $obj['phone'];
 
 // Creating SQL query and insert the record into MySQL database table.
 $Sql_Query = "UPDATE user SET fullname= '$fullname', pass = '$pass', picker1 = '$picker1', picker2 = '$picker2', email = '$email', phone = '$phone' WHERE id = $id";
 
 if(mysqli_query($con,$Sql_Query)){
 
 // If the record inserted successfully then show the message.
$MSG = 'Record Successfully Inserted Into MySQL Database.' ;
 
// Converting the message into JSON format.
$json = json_encode($MSG);
 
// Echo the message.
 echo $json ;
 
 }
 else{
 
 echo 'Try Again';
 
 }
 mysqli_close($con);
?>