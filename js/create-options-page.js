document.getElementById("upload-button").addEventListener("click", function () {
	const uploadModal = document.getElementById("file-upload-modal");
	const overlay = document.getElementById("overlay");
	uploadModal.style.display = "flex";
	overlay.style.display = "block";
});

document.getElementById("create-button").addEventListener("click", function () {
	
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
		console.log(fileContent);
		uploadModal.style.display = "none";
		overlay.style.display = "none";
		document.getElementById("file-input").value = "";
		// window.location.href = ;
	}

	reader.onerror = function (e) {
		console.error("Error reading file", e);
	}

	reader.readAsText(uploadedFile);

});
