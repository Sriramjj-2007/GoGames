document.addEventListener('DOMContentLoaded', () => {
    const feedbackBtn = document.getElementById('feedback_nav');
    const feedbackForm = document.getElementById('feedbackForm');

    const gamesBtn = document.getElementById('games_nav');
    const gamesCard = document.getElementById('gamesCard');

    feedbackBtn.addEventListener('click', () => {
        // Toggle visibility
        gamesCard.style.display = 'none';
        feedbackForm.style.display = 'block';

    });

    gamesBtn.addEventListener('click', () => {
        // Toggle visibility
        feedbackForm.style.display = 'none';
        gamesCard.style.display = 'block';
    });
});