function confirmSubmission(event) {
    event.preventDefault();
    const overlay = document.getElementById('confirmationOverlay');
    const popup = document.getElementById('confirmationPopup');
    overlay.classList.add('active');
    popup.classList.add('active');
    popup.setAttribute('aria-hidden', 'false');
    popup.focus();

    document.getElementById('confirmYes').addEventListener('click', () => {
        overlay.classList.remove('active');
        popup.classList.remove('active');
        popup.setAttribute('aria-hidden', 'true');
        event.target.submit();
    });

    document.getElementById('confirmNo').addEventListener('click', () => {
        overlay.classList.remove('active');
        popup.classList.remove('active');
        popup.setAttribute('aria-hidden', 'true');
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            overlay.classList.remove('active');
            popup.classList.remove('active');
            popup.setAttribute('aria-hidden', 'true');
        }
        if (e.key === 'Enter') {
            document.getElementById('confirmYes').click();
        }
    });
}