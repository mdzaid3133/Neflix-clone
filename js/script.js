// switch home page to login page logic
const signInBtn = document.querySelector('#singInBtn')

signInBtn.addEventListener('click', () => {
    window.location.href = "signIn.html";
})

// open and close FAQ logic
const allFaqBtn = document.querySelectorAll('.faqBtn');

allFaqBtn.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const nextSibling = btn.nextElementSibling;
        const isAnswerVisible = nextSibling.classList.contains('show');

        if (isAnswerVisible) {
            btn.nextElementSibling.classList.remove('show');
        } else {
            allFaqBtn.forEach((btn) => {
                btn.nextElementSibling.classList.remove('show');
            });
            nextSibling.classList.add('show');
        }
    });
});

