class quizz {
	constructor(title, questions = [], description){
		this.title = title;
		this.questions = questions;
		this.description = description;
	}

	addQuestion(question) {
		this.questions.push(question);
	}

	answerQuestion(questionIndex, answerIndex){
		this.questions[questionIndex].recordAnswer(answerIndex);
	}

	grade(){
		let rightAnswers;
		for (question in questions){
			rightAnswers += question.grade();
		}
		return rightAnswers;
	}

	shuffle(){

	}
}
