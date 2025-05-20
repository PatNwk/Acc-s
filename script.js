function confirmSubmission(event) {
    event.preventDefault();
    const form = event.target;
    const overlay = document.getElementById('confirmationOverlay');
    const popup = document.getElementById('confirmationPopup');
    const feedbackMessage = document.getElementById("feedbackMessage");

    const nom = document.getElementById('nom');
    const prenom = document.getElementById('prenom');
    const email = document.getElementById('email');
    const telephone = document.getElementById('telephone');
    const message = document.getElementById('message');

    const namePattern = /^[A-Za-zÀ-ÖØ-öø-ÿ\s'-]+$/;
    const emailPattern = /^[\w.-]+@[\w.-]+\.[a-zA-Z]{2,}$/;
    const phonePattern = /^0[1-9][0-9]{8}$/;

    feedbackMessage.textContent = "";
    feedbackMessage.className = "";

    let isValid = true;

    if (!namePattern.test(nom.value)) {
        feedbackMessage.textContent += "Erreur : Le champ Nom est invalide. ";
        isValid = false;
    }

    if (!namePattern.test(prenom.value)) {
        feedbackMessage.textContent += "Erreur : Le champ Prénom est invalide. ";
        isValid = false;
    }

    if (!emailPattern.test(email.value)) {
        feedbackMessage.textContent += "Erreur : L'email est invalide. ";
        isValid = false;
    }

    if (!phonePattern.test(telephone.value)) {
        feedbackMessage.textContent += "Erreur : Le numéro de téléphone est invalide. ";
        isValid = false;
    }

    if (message.value.trim() === "") {
        feedbackMessage.textContent += "Erreur : Le message ne peut pas être vide. ";
        isValid = false;
    }

    if (!isValid) {
        feedbackMessage.className = "error";
        feedbackMessage.setAttribute("role", "alert");
        feedbackMessage.setAttribute("aria-live", "assertive");
        return;
    }

    overlay.classList.add('active');
    popup.classList.add('active');
    popup.setAttribute('aria-hidden', 'false');
    popup.focus();

    document.getElementById('confirmYes').onclick = () => {
        closePopup();
        feedbackMessage.textContent = "Formulaire envoyé avec succès !";
        feedbackMessage.className = "success";
        feedbackMessage.setAttribute("role", "alert");
        form.submit();
    };

    document.getElementById('confirmNo').onclick = closePopup;
    document.addEventListener('keydown', handleEscapeKey);

    function handleEscapeKey(e) {
        if (e.key === 'Escape') {
            closePopup();
        }
    }

    function closePopup() {
        overlay.classList.remove('active');
        popup.classList.remove('active');
        popup.setAttribute('aria-hidden', 'true');
        document.removeEventListener('keydown', handleEscapeKey);
    }
}
