<?php

include_once("../posts/connection.php");
$errors = [];
$data = [];

if (empty($_POST['name'])) {
    $errors['name'] = 'Name is required.';
}

if (empty($_POST['email'])) {
    $errors['email'] = 'Email is required.';
}

if (empty($_POST['country'])) {
    $errors['country'] = 'Country is required.';
}

if (empty($_POST['device'])) {
    $errors['device'] = 'Device is required.';
}

if (!empty($errors)) {
    $data['success'] = false;
    $data['errors'] = $errors;
} else {
    // $conn = mysqli_connect("localhost", "guest", "guest", "jutu");
        
    // // Check connection
    // if($conn === false){
    //     die("ERROR: Could not connect. "
    //         . mysqli_connect_error());
    // }
    $conn = get_connection();
    
    // Taking all 5 values from the form data(input)
    $name =  $_POST['name'];    
    $email = $_POST['email'];
    $country = $_POST['country'];
    $device = $_POST['device'];
        
    // Performing insert query execution
    // here our table name is college
    $sql = "INSERT INTO contacts(`name`, `email`, `device`,`country`)  
    VALUES ('$name',
        '$email','$device','$country')";
    if(mysqli_query($conn, $sql)){
        // echo "<h3>data stored in a database successfully."
        //     . " Please browse your localhost php my admin"
        //     . " to view the updated data</h3>";

    } else{
        // echo "ERROR: Hush! Sorry $sql. "
        //     . mysqli_error($conn);
            $errors['data']="Server Error. Pleas try again later.";
    }
    
        
    // Close connection
    mysqli_close($conn);

    if (!empty($errors)) {
        $data['success'] = false;
        $data['errors'] = $errors;
    } else {
        $data['success'] = true;
        $data['message'] = 'Success';
    }


}

echo json_encode($data);
