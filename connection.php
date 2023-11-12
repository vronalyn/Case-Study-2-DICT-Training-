<?php
 $host = 'localhost';
 $dbname = 'covid19';
 $username = 'root';
 $password = '';	
 
 $connection = mysqli_connect($host,$username,$password,$dbname);
// Check connection
if ($connection->connect_error) {
  die("Connection failed: " . $connection->connect_error);
}

// echo "Connected successfully";
?>