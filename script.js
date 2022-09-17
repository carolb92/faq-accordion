const questions = document.querySelectorAll(".question");

questions.forEach(function(question){
    question.addEventListener("click", function(){
        this.classList.toggle("active");
        
        let answer = this.nextElementSibling;
        answer.classList.toggle("hide");
    });
});


