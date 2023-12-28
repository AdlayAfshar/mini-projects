// section-center

// question-title

// question-text

const questions = document.querySelectorAll('.question');

questions.forEach((question) => {
    const btn = question.querySelector('.btn');

    btn.addEventListener('click', () => {
        question.classList.toggle('show-text');
    })
})