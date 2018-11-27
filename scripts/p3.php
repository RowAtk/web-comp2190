<?php
/**
 * Created by PhpStorm.
 * User: rowan
 * Date: 11/25/18
 * Time: 10:17 PM
 */

//DATA VARIABLES
global $error;
$error = createErrors(); //Error message array
$code = $title = $discipline = $author = "";
$credits = $level = $semester = 0;
$valid = true;

clog("Hello World");

if ($_SERVER["REQUEST_METHOD"] ==  "GET"){
    clog ("WRONG METHOD\n");
}else{
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        clog("CORRECT METHOD");
        if(isFormEmpty()){
            clog("Form Empty");
//            header("Location: ../p2.html");
        }else{
            clog("Form Filled");
            $code = test_input($_POST["code"]);
            $title = test_input($_POST["title"]);
            $discipline = test_input($_POST["discipline"]);
            $author = test_input($_POST[$author]);
            $credits = test_input($_POST["credits"]);
            $level = test_input($_POST["level"]);
            $semester = test_input($_POST["semester"]);

            if(strlen($code) != 4 || ! isNum($code)){
                $error['code'] = "The course code must consist of 4 Numbers only";
                $valid = false;
            }

            if(strlen($discipline) != 4 || !isStr($discipline)){
                $error["discipline"] = "The course discipline must consist of 4 letters only";
                $valid = false;
            }
            clog($valid);
            return $valid;
        }
    }else{
        echo("NO METHOD");
    }
}

function validateForm(){

    fillData();

    return false;

}

function isFormEmpty(){
    foreach ($_POST as $key => $value) {
//        echo gettype($key);
        _echo ("Field ".$key." is ".htmlspecialchars($value));
    }
    $status = false;
    foreach ($_POST as $key => $value){
        _echo($key ." " . $value);
        clog($key ." " . $value);
        switch ($key){
            case "form-id":
                break;
            case "author":
                if($value == "0"){
                    $status = true;
                }
                break;
            default:
                if($value == ""){
                    $status = true;
                }
        }
        clog($status);
    }
    return $status;
}


function fillData(){

}

function createErrors(){
    $error = array();
    foreach ($_POST as $key => $value) {
        $error[$key] = "";
    }
    return $error;
}


function test_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}


function isStr($str){
    return preg_match("/^[a-zA-Z]*$/", $str);
}


function isNum($str){
    return preg_match("/^[0-9]*$/", $str);
}


function _echo($str){
    echo $str . "<br />";
}


function clog( $data ) {
    $output = $data;
    if ( is_array( $output ) )
        $output = implode( ',', $output);

    echo "<script>console.log( 'Debug Objects: " . $output . "' );</script>";
}

