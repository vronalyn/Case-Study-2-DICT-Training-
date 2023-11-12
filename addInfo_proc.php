<?php
   include 'connection.php';
   header('Content-type: application/json');

   if (empty($_POST['name']))
   {
      die("Name is Emtpy!");
   }
   if (empty($_POST['gender']))
   {
      die("Gender is Emtpy!");
   }
   if (empty($_POST['age']))
   {
      die("Age is Emtpy!");
   }
   if (empty($_POST['mobile_no']))
   {
      die("Mobile No. is Emtpy!");
   }

   if (empty($_POST['body_temp']))
   {
      die("Body Temperature is Emtpy!");
   }
   if (empty($_POST['diagnosed']))
   {
      die("Diagnosed is Emtpy!");
   }
   if (empty($_POST['encounter']))
   {
      die("Encounter is Emtpy!");
   }
   if (empty($_POST['vaccinated']))
   {
      die("Vaccinated is Emtpy!");
   }
   if (empty($_POST['nationality']))
   {
      die("Nationality is Emtpy!");
   }


   $name = $_POST['name'];
   $gender = $_POST['gender'];
   $age = $_POST['age'];
   $mobile_no = $_POST['mobile_no'];
   $body_temp = $_POST['body_temp'];
   $diagnosed = $_POST['diagnosed'];
   $encounter = $_POST['encounter'];
   $vaccinated = $_POST['vaccinated'];
   $nationality = $_POST['nationality'];


   $result = array(
      "status"=>"error",
   );
   

   if (mysqli_query(
            $connection,
            "call addInfo_proc(
                '" . $name . "',
                '" . $gender . "',
                '" . $age . "',
                '" . $mobile_no . "',
                '" . $body_temp . "',
                '" . $diagnosed . "',
                '" . $encounter . "',
                '" .$vaccinated . "',
                '". $nationality ."')"))
   {
      $result = array(
         "status"=>"ok"
      );
   }

   //close the database
   mysqli_close($connection);

   echo json_encode($result);

?>