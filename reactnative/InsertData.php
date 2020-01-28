<?php
include 'koneksi.php';
 
$con = mysqli_connect($HostName,$HostUser,$HostPass,$DatabaseName);

$json = file_get_contents('php://input');
 
$obj = json_decode($json,true);
$fullname = $obj['fullname'];
$pass = $obj['pass'];
$picker1 = $obj['picker1'];
$picker2 = $obj['picker2'];
$email = $obj['email'];
$phone = $obj['phone'];
 
//Checking Email is already exist or not using SQL query.
$CheckSQL = "SELECT * FROM user WHERE pass='$pass'";
 
// Executing SQL Query.
$check = mysqli_fetch_array(mysqli_query($con,$CheckSQL));
 
 
if(isset($check)){
 
 $EmailExistMSG = 'Password Already Exist, Please Try Again !!!';
 
 // Converting the message into JSON format.
$EmailExistJson = json_encode($EmailExistMSG);
 
// Echo the message.
 echo $EmailExistJson ; 
 
 }
 else{
 
 // Creating SQL query and insert the record into MySQL database table.
$Sql_Query = "insert into user (fullname,pass,picker1,picker2,email,phone) values ('$fullname','$pass','$picker1','$picker2','$email','$phone')";
 
 
 if(mysqli_query($con,$Sql_Query)){
 
 // If the record inserted successfully then show the message.
$MSG = 'User Registered Successfully' ;
 
// Converting the message into JSON format.
$json = json_encode($MSG);
 
// Echo the message.
 echo $json ;
 
 }
 else{
 
 echo 'Try Again';
 
 }
 }
 mysqli_close($con);
?>