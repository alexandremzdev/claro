// FAQ Functionality
document.addEventListener('DOMContentLoaded', function() {
    const faqQuestions = document.querySelectorAll('.how__question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const answer = this.nextElementSibling;
            const icon = this.querySelector('i');
            
            // Toggle the answer visibility
            if (answer.style.display === 'block') {
                answer.style.display = 'none';
                icon.classList.remove('fa-chevron-up');
                icon.classList.add('fa-chevron-down');
                this.classList.remove('active');
            } else {
                // Close all other answers first
                faqQuestions.forEach(otherQuestion => {
                    const otherAnswer = otherQuestion.nextElementSibling;
                    const otherIcon = otherQuestion.querySelector('i');
                    otherAnswer.style.display = 'none';
                    otherIcon.classList.remove('fa-chevron-up');
                    otherIcon.classList.add('fa-chevron-down');
                    otherQuestion.classList.remove('active');
                });
                
                // Open the clicked answer
                answer.style.display = 'block';
                icon.classList.remove('fa-chevron-down');
                icon.classList.add('fa-chevron-up');
                this.classList.add('active');
            }
        });
    });
    
    // Initialize all answers as hidden
    const faqAnswers = document.querySelectorAll('.how__answer');
    faqAnswers.forEach(answer => {
        answer.style.display = 'none';
    });
});