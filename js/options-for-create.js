document.getElementById("upload-button").addEventListener("click", function () {
	const uploadModal = document.getElementById("file-upload-modal");
	const overlay = document.getElementById("overlay");
	uploadModal.style.display = "flex";
	overlay.style.display = "block";
});

document.getElementById("button-create").addEventListener("click", function () {
	window.location.href = "./create-quiz-page.html";
});

document.getElementById("overlay").addEventListener("click", function () {
	const uploadModal = document.getElementById("file-upload-modal");
	uploadModal.style.display = "none";
	this.style.display = "none";
});

document.getElementById("file-input").addEventListener("change", function (event) {
	const uploadModal = document.getElementById("file-upload-modal");
	const overlay = document.getElementById("overlay");
	const uploadedFile = event.target.files[0];

	if (!uploadedFile) return;

	const reader = new FileReader();
	reader.onload = function (e) {
		const fileContent = e.target.result;
		uploadModal.style.display = "none";
		overlay.style.display = "none";
		document.getElementById("file-input").value = "";
		try{
			const parsedQuiz = JSON.parse(fileContent);
			localStorage.setItem("uploadedQuizzData", JSON.stringify(parsedQuiz));
		} catch (error) {
			console.log("Invalid file format");
			alert("Invalid file format");
		}
		window.location.href = "./create-quiz-page.html";
	}

	reader.onerror = function (e) {
		console.error("Error reading file", e);
	}

	reader.readAsText(uploadedFile);

});
