<?php
// Formdan gelen verileri alın
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

// Mail gönderme işlemi
$to = 'fulldevstudios@gmail.com'; // Alıcı e-posta adresi
$subject = 'Yeni İletişim Mesajı';
$body = "Adı: $name\nE-posta: $email\n\nMesaj:\n$message";

// E-postayı gönder
$mail_sent = mail($to, $subject, $body);

// E-posta başarıyla gönderildiyse
if ($mail_sent) {
    // Ana sayfaya yönlendirme yap
    header('Location: index.html');
    exit;
} else {
    // Gönderme başarısızsa, hata mesajı gösterme veya başka bir şey yapma
    echo 'E-posta gönderilirken bir hata oluştu.';
}
?>
