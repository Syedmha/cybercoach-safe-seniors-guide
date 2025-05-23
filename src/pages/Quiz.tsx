
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Check, X } from 'lucide-react';

const quizQuestions = [
  {
    id: 1,
    question: "You receive an email claiming to be from your bank asking you to verify your account details by clicking a link. What should you do?",
    options: [
      "Click the link immediately to secure your account",
      "Call your bank directly using the number on your card",
      "Reply to the email with your details",
      "Forward the email to friends for advice"
    ],
    correct: 1,
    explanation: "Always contact your bank directly using official contact details. Banks never ask for sensitive information via email."
  },
  {
    id: 2,
    question: "You see a pop-up on your computer saying 'Your computer is infected! Call this number immediately.' What should you do?",
    options: [
      "Call the number right away",
      "Close the pop-up and run your antivirus software",
      "Give them remote access to fix the problem",
      "Pay for their cleaning service"
    ],
    correct: 1,
    explanation: "These are fake security warnings. Close the pop-up and run your legitimate antivirus software instead."
  },
  {
    id: 3,
    question: "Someone calls claiming to be from the Australian Tax Office saying you owe money and must pay immediately. What should you do?",
    options: [
      "Pay immediately to avoid trouble",
      "Ask for their details and hang up, then call the ATO directly",
      "Give them your tax file number to verify",
      "Transfer money to their account"
    ],
    correct: 1,
    explanation: "The ATO doesn't demand immediate payment over the phone. Always hang up and call the ATO directly on their official number."
  }
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
  };

  const handleNext = () => {
    if (selectedAnswer === quizQuestions[currentQuestion].correct) {
      setScore(score + 1);
    }
    setShowResult(true);
  };

  const handleContinue = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setQuizCompleted(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setQuizCompleted(false);
  };

  if (quizCompleted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-white">
        <header className="bg-indigo-600 text-white py-6 px-4">
          <div className="max-w-4xl mx-auto flex items-center gap-4">
            <Link to="/" className="text-white hover:text-indigo-200">
              <ArrowLeft className="w-8 h-8" />
            </Link>
            <h1 className="text-2xl md:text-3xl font-bold">Quiz Complete!</h1>
          </div>
        </header>

        <main className="max-w-2xl mx-auto px-4 py-8">
          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <div className="bg-green-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="w-12 h-12 text-green-600" />
            </div>
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Well Done!</h2>
            <p className="text-xl text-gray-600 mb-6">
              You scored {score} out of {quizQuestions.length} questions correctly!
            </p>
            <div className="space-y-4">
              <button
                onClick={resetQuiz}
                className="w-full bg-indigo-600 text-white py-4 px-6 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition-colors"
              >
                Take Quiz Again
              </button>
              <Link
                to="/tips"
                className="block w-full bg-green-600 text-white py-4 px-6 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors text-center"
              >
                Read Safety Tips
              </Link>
              <Link
                to="/"
                className="block w-full bg-gray-200 text-gray-800 py-4 px-6 rounded-lg text-lg font-semibold hover:bg-gray-300 transition-colors text-center"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-white">
      <header className="bg-indigo-600 text-white py-6 px-4">
        <div className="max-w-4xl mx-auto flex items-center gap-4">
          <Link to="/" className="text-white hover:text-indigo-200">
            <ArrowLeft className="w-8 h-8" />
          </Link>
          <div className="flex-1">
            <h1 className="text-2xl md:text-3xl font-bold">Cyber Safety Quiz</h1>
            <p className="text-indigo-200 text-lg">Question {currentQuestion + 1} of {quizQuestions.length}</p>
          </div>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-lg p-8">
          {!showResult ? (
            <>
              <h2 className="text-xl font-semibold text-gray-800 mb-8 leading-relaxed">
                {quizQuestions[currentQuestion].question}
              </h2>
              
              <div className="space-y-4 mb-8">
                {quizQuestions[currentQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswerSelect(index)}
                    className={`w-full p-4 text-left text-lg rounded-lg border-2 transition-all duration-200 ${
                      selectedAnswer === index
                        ? 'border-indigo-500 bg-indigo-50 text-indigo-800'
                        : 'border-gray-200 hover:border-gray-300 text-gray-800'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>

              <button
                onClick={handleNext}
                disabled={selectedAnswer === null}
                className={`w-full py-4 px-6 rounded-lg text-lg font-semibold transition-colors ${
                  selectedAnswer !== null
                    ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                Submit Answer
              </button>
            </>
          ) : (
            <div className="text-center">
              <div className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 ${
                selectedAnswer === quizQuestions[currentQuestion].correct
                  ? 'bg-green-100'
                  : 'bg-red-100'
              }`}>
                {selectedAnswer === quizQuestions[currentQuestion].correct ? (
                  <Check className="w-10 h-10 text-green-600" />
                ) : (
                  <X className="w-10 h-10 text-red-600" />
                )}
              </div>
              
              <h3 className={`text-2xl font-semibold mb-4 ${
                selectedAnswer === quizQuestions[currentQuestion].correct
                  ? 'text-green-600'
                  : 'text-red-600'
              }`}>
                {selectedAnswer === quizQuestions[currentQuestion].correct ? 'Correct!' : 'Incorrect'}
              </h3>
              
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                {quizQuestions[currentQuestion].explanation}
              </p>
              
              <button
                onClick={handleContinue}
                className="w-full bg-indigo-600 text-white py-4 px-6 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition-colors"
              >
                {currentQuestion < quizQuestions.length - 1 ? 'Next Question' : 'Finish Quiz'}
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Quiz;
