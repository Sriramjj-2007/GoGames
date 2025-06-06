document.addEventListener('DOMContentLoaded', () => {
    const feedbackBtn = document.getElementById('feedback_nav');
    const feedbackForm = document.getElementById('feedbackForm');

    const gamesBtn = document.getElementById('games_nav');
    const gameCards = document.querySelectorAll('.gamesCard');

    gamesBtn.addEventListener('click', () => {
        feedbackForm.style.display = 'none';
        gameCards.forEach(card => card.style.display = 'flex');
    });

    feedbackBtn.addEventListener('click', () => {
        gameCards.forEach(card => card.style.display = 'none');
        feedbackForm.style.display = 'block';
    });


});