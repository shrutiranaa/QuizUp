const questions = [
    {
      question: "What is the capital of France?",
      answers: ["Berlin", "Madrid", "Paris", "Lisbon"],
      correct: 2,
    },
    {
      question: "What sports has a bat and a ball??",
      answers: ["basketball", "hockey", "cricket", "football"],
      correct: 2,
    },
    {
      question: "Which programming language is known as the backbone of web development?",
      answers: ["Python", "JavaScript", "C++", "Java"],
      correct: 1,
    },
  ];
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  const questionEl = document.getElementById("question");
  const answersEl = document.getElementById("answers");
  const nextBtn = document.getElementById("next-btn");
  const scoreEl = document.getElementById("score");
  const leaderboardEl = document.getElementById("leaderboard");
  
  function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionEl.textContent = currentQuestion.question;
    answersEl.innerHTML = "";
    currentQuestion.answers.forEach((answer, index) => {
      const btn = document.createElement("button");
      btn.textContent = answer;
      btn.addEventListener("click", () => handleAnswer(index));
      answersEl.appendChild(btn);
    });
  }
  
  function handleAnswer(selectedIndex) {
    const correctIndex = questions[currentQuestionIndex].correct;
    if (selectedIndex === correctIndex) {
      score++;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      showQuestion();
    } else {
      endQuiz();
    }
  }
  
  function endQuiz() {
    questionEl.textContent = "Quiz Completed!";
    answersEl.innerHTML = "";
    nextBtn.style.display = "none";
    scoreEl.textContent = `Your score: ${score} / ${questions.length}`;
    updateLeaderboard();
  }
  
  function updateLeaderboard() {
    const userScore = `User - ${score} / ${questions.length}`;
    const li = document.createElement("li");
    li.textContent = userScore;
    leaderboardEl.appendChild(li);
  }
  
  nextBtn.addEventListener("click", showQuestion);
  
  showQuestion();