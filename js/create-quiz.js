document.getElementById("button-add-question").addEventListener("click", function(){
	const overlay = document.getElementById("create-overlay");
	const form = document.getElementById("question-form");
	overlay.style.display = "block";
	form.style.display = "flex";
});

document.getElementById("create-overlay").addEventListener("click", function(){
	const form = document.getElementById("question-form");
	const container = document.getElementById("question-answers");
	form.style.display = "none";
	this.style.display = "none";
	container.innerHTML = "";
});

document.getElementById("button-add-answer").addEventListener("click", function(){
	const container = document.getElementById("question-answers");
	const input = document.createElement("input");
	input.classList.add("quiz-input");
	input.classList.add("mid-font");
	input.placeholder = "Answer";
	container.appendChild(input);
});

const answersList = document.getElementById("question-answers");

const answersObserver = new MutationObserver(function(mutationsList){
	const buttonAdd = document.getElementById("button-add-answer");
	for (const mutation of mutationsList) {
		if (mutation.type === "childList") {
			if (answersList.children.length >= 4) {
				buttonAdd.style.display = "none";
			} else {
				buttonAdd.style.display = "block";
			}
		}
	}
});

answersObserver.observe(answersList, {
	childList: true,
});