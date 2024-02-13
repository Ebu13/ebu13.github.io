<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    $to = "fulldevstudios@gmail.com";
    $subject = "İletişim Formu: $name";
    $body = "Adı: $name\nE-posta: $email\n\nMesaj:\n$message";

    if (mail($to, $subject, $body)) {
        echo "E-posta başarıyla gönderildi.";
    } else {
        echo "E-posta gönderilirken bir hata oluştu.";
    }
}
?>