const questions = [
    { question: "What is the capital of France?", answer: "Paris" },
    { question: "What is the largest country in the world?", answer: "Russia" },
    { question: "What is the highest mountain in the world?", answer: "Mount Everest" },
    { question: "What is the smallest continent in the world?", answer: "Australia" },
    { question: "What is the largest ocean in the world?", answer: "Pacific Ocean" }
  ];
  
 
  function* questionGenerator() {
    const usedIndexes = [];
    while (true) {
      const index = Math.floor(Math.random() * questions.length);
      if (!usedIndexes.includes(index)) {
        usedIndexes.push(index);
        yield questions[index];
      }
      if (usedIndexes.length === questions.length) {
        usedIndexes = [];
      }
    }
  }
  
  
  const questionGen = questionGenerator();
  function askQuestion() {
    const { question, answer } = questionGen.next().value;
    const userAnswer = prompt(question);
    if (userAnswer === answer) {
      alert("Correct!");
      score++;
    } else {
      alert(`Sorry, the correct answer was ${answer}`);
    }
  }
  
  let score = 0;
  for (let i = 0; i < 5; i++) {
    askQuestion();
  }
  alert(`Your final score is ${score}`);
  