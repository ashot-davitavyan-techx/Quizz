class quizzQuestion {
	#userAnswerIndex;

	constructor(description, answers, rightAnswerIndex){
		this.description = description;
		this.answers = answers;
		this.rightAnswerIndex = rightAnswerIndex;
	}

	isCorrect() {
		return rightAnswerIndex === answerIndex;
	}

	recordAnswer(answerIndex) {
		this.#userAnswerIndex = answerIndex;
	}

	shuffle() {
		
	}
}