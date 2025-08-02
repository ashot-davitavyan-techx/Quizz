document.getElementById("button-add-question").addEventListener("click", function(){
	const overlay = document.getElementById("create-overlay");
	const form = document.getElementById("question-form");
	overlay.style.display = "block";
	form.style.display = "flex";
});