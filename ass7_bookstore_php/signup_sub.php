<!doctype html>
<html lang="en">
<head>
<!-- Required meta tags -->
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1,
shrink-to-fit=no">
<!-- Bootstrap CSS -->
<link rel="stylesheet"
href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css"
integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwi
GgFAW/dAiS6JXm" crossorigin="anonymous">
<title>Hello, world!</title>
</head>
<body>
<!-- Optional JavaScript -->
<!-- jQuery first, then Popper.js, then Bootstrap JS -->
<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/G
pGFF93hXpG5KkN" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js"
integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakF
PskvXusvfa0b4Q" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js"
integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjU
ar5+76PVCmYl" crossorigin="anonymous"></script>
</body>
</html>
<?php
require "conn.php";
$conn = db_connect();
$username = $_REQUEST['user_name'];
$password = $_REQUEST['pass_word'];
$confirm = $_REQUEST['confirm_password'];
$sql = "INSERT INTO `signup` (`username`, `password`, `confirm`) VALUES
('$username', '$password', '$confirm');";
if(mysqli_query($conn, $sql)){
echo '<div class="alert alert-success alert-dismissible fade show"
role="alert">
<strong>User Registered successfully</strong><a style =
"text-decoration:none; color: darkgreen;"href="home.php"> Click here to Login</a>
</div>';
} else{
echo "ERROR: Hush! Sorry $sql. "
. mysqli_error($conn);
}
// Close connection
mysqli_close($conn);
?>