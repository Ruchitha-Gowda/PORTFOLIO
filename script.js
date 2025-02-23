// Toggle FAQ Answer
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('active');
    });
});

// handle ask a question form submission
const askForm = document.getElementById('ask-question-form');
const confirmationMessage = document.getElementById('confirmation-message');

askForm.addEventListener('submit', function(event) {
    event.preventDefault();

    // get the question frm txtarea
    const userQuestion = document.getElementById('user-question').value;

    //shw confirmation msg
    confirmationMessage.style.display = 'block';

    askForm.reset();

    // hide the confirmation msg after a few seconds
    setTimeout(() => {
        confirmationMessage.style.display = 'none';
    }, 5000);
})

//to handle scroll detection
document.addEventListener("DOMContentLoaded", () => {
    let lastScrollY = window.scrollY;
    const headerEl = document.querySelector(".header");

    window.onscroll= () => {
        let currentScrollY = window.pageYOffset;
        if (currentScrollY > lastScrollY) {
            //scrolling down -hide header
            headerEl.style.top = "-100px";
        }else{
            //scrolling up - show header
            headerEl.style.top = "0";
        }
        lastScrollY = currentScrollY;
        console.log("ScrollY:", currentScrollY, "Header top:", headerEl.style.top);
    };
});
