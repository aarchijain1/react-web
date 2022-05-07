<?php
if(isset($_POST['sendmail'])){
    require_once 'vendor/autoload.php';
    require_once 'credential.php';


// Create the Transport
$transport = (new Swift_SmtpTransport('smtp.googlemail.com',465, 'ssl'))
  ->setUsername(EMAIL)
  ->setPassword(PASS)
;

// Create the Mailer using your created Transport
$mailer = new Swift_Mailer($transport);

// Create a message
$message = (new Swift_Message($_POST['subject']))
  ->setFrom([EMAIL => 'Aarchi Jain'])
  ->setTo(['aarchi.jain0409@gmail.com', 'arghchandiwal@gmail.com'])
  //->setTo($_POST['email'])
  ->setBody($_POST['message'])
  ;

// Send the message
if($mailer->send($message)){
    echo "Mail Sent..!!";
}
else{
    echo "Failed To Send..!!";
}
}
?>