<!DOCTYPE html>
<?php
session_start();
if ($_POST['logout'] == 'true') {
    $_SESSION = array(); //Clear the variables.
	session_destroy();
	setcookie ('PHPSESSID', '',TIME()-3600,'/','',0, 0);
	$_POST['logout'] = 'false';
	require ('includes/login_functions.inc.php');
}
 
if ($_SERVER['REQUEST_METHOD'] == 'POST') {

	// Need two helper files:
	require ('includes/login_functions.inc.php');
	require ('../php/mysqli_connect.php');
		
	// Check the login:
	list ($check, $data) = check_login($dbc, $_POST['email'], $_POST['Password']);
	
	if ($check) { // OK!
		
		// Set the session data:
		session_start();
		$_SESSION['UserName'] = $data['UserName'];
		$_SESSION['FirstName'] = $data['FirstName'];
		unset($errors);
			
	} else { // Unsuccessful!
		$errors = $data;
	}
		
	mysqli_close($dbc); // Close the database connection.

} // End of the main submit conditional.


?>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="Joshua Monson">
<form class="form-horizontal">
<fieldset>

<!-- Form Name -->
<legend>Clock In</legend>

<!-- Text input-->
<div class="form-group">
  <label class="col-md-4 control-label" for="textinput">Text Input</label>  
  <div class="col-md-4">
  <input id="textinput" name="textinput" type="text" placeholder="placeholder" class="form-control input-md">
  <span class="help-block">help</span>  
  </div>
</div>

<!-- Select Multiple -->
<div class="form-group">
  <label class="col-md-4 control-label" for="selectmultiple">Select Multiple</label>
  <div class="col-md-4">
    <select id="selectmultiple" name="selectmultiple" class="form-control" multiple="multiple">
      <option value="N6827W">N6827W</option>
      <option value="N801VH">N801VH</option>
    </select>
  </div>
</div>

</fieldset>
</form>