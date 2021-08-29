<?php
  use PHPMailer\PHPMailer\PHPMailer;
  use PHPMailer\PHPMailer\Exception;

  require 'phpmailer/src/Exception.php';
  require 'phpmailer/srs/PHPMailer.php';

  $mail = new PHPMailer(true);
  $mail->CharSet = 'UTF-8';
  $mail->setLanguage('ru', 'phpmailer/language/');
  $mail->IsHTML(true);

  $mail->setFrom('tymanira@mail.ru', 'IrkaTuman | Web Developer');
  $mail->addAddress('tymanira@mail.ru');
  $mail->Subject = 'Привет';

  $body = '<h1>Добрый день!</h1>';

  if(trim(!empty($_POST['name']))){
    $body.='<p><strong>Имя:</strong> '.$_POST['name'].'</p>';
  }
  if(trim(!empty($_POST['email']))){
    $body.='<p><strong>Почта:</strong> '.$_POST['email'].'</p>';
  }

  $mail->Body = $body

  if(!$mail->send()){
    $message = 'Ошибка'
  } else {
    $message = 'Данные отправлены'
  }

  $response = ['message' => $message];

  header('Content-type: application/json');
  echo json_encode($response);
?>
