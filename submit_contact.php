<?php
// Vérification si le formulaire a été soumis
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    // Validation et nettoyage des données du formulaire
    $nom = isset($_POST['nom']) ? htmlspecialchars($_POST['nom']) : '';
    $email = isset($_POST['email']) ? htmlspecialchars($_POST['email']) : '';
    $message = isset($_POST['message']) ? htmlspecialchars($_POST['message']) : '';
    
    // Vérification des champs requis
    if (empty($nom) || empty($email) || empty($message)) {
        echo "Tous les champs doivent être remplis.";
    } else {
        // Configuration des paramètres d'email
        $to = "nowakp595@gmail.com"; // Remplacez avec l'adresse e-mail du destinataire
        $subject = "Nouveau message de contact";
        
        // Corps du message
        $body = "Nom: $nom\nEmail: $email\nMessage: \n$message";
        
        // En-têtes pour l'email
        $headers = "From: $email";
        
        // Envoi de l'email
        if (mail($to, $subject, $body, $headers)) {
            echo "Merci pour votre message, nous vous répondrons dans les plus brefs délais.";
        } else {
            echo "Une erreur s'est produite lors de l'envoi de votre message. Veuillez réessayer.";
        }
    }
}
?>
