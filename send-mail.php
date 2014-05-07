<?php

    $to = "gardner.whitney@gmail.com";
    $from = $_POST['email'];
    $name = $_POST['name'];
    $subject = "Comments";
    
    $message = $name . " " . " wrote the following:" . "\n\n" . $_POST['comments'];

    $subject2 = "Copy of your Comments";
    $message2 = "Here is a copy of your message " . $first_name . "\n\n" . $_POST['comments'];

    $headers = "From:" . $from;
    $headers2 = "From:" . $to;

    mail($to,$subject,$message,$headers);

    mail($from,$subject2,$message2,$headers2);
?>