// const btns = document.querySelectorAll(".question-btn");

// btns.forEach(function(btn){
//     btn.addEventListener("click", function(e){
//         const question = e.currentTarget.parentElement.parentElement;
//         question.classList.toggle("show-text");
//     });

// });

const questions = document.querySelectorAll(".question");

questions.forEach(function (orange) {
    const btn = orange.querySelector(".question-btn");

    btn.addEventListener("click", function () {
        questions.forEach(function (item) {
            if (item !== orange) {
                item.classList.remove("show-text");
            }
        });
        orange.classList.toggle("show-text");
    });
});