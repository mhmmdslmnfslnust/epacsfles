import React, { useState, useEffect } from 'react';
import { Container, Paper, Box, Typography, Button, Fade } from '@mui/material';
import Question from './Question';
import Result from './Result';
import ProgressBar from './ProgressBar';
import { QuizState, UserAnswer } from '../types/quiz';
import { quizQuestions } from '../data/questions';
import { calculateQuizResult, getProgressPercentage } from '../utils/scoring';

const Quiz: React.FC = () => {
  const [quizState, setQuizState] = useState<QuizState>({
    currentQuestionIndex: 0,
    answers: [],
    isCompleted: false
  });

  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    // Load saved state from localStorage
    const saved = localStorage.getItem('selfscape-quiz-state');
    if (saved) {
      try {
        const savedState = JSON.parse(saved);
        setQuizState(savedState);
        setShowWelcome(false);
      } catch (error) {
        console.error('Failed to load saved quiz state:', error);
      }
    }
  }, []);

  useEffect(() => {
    // Save state to localStorage whenever it changes
    if (!showWelcome) {
      localStorage.setItem('selfscape-quiz-state', JSON.stringify(quizState));
    }
  }, [quizState, showWelcome]);

  const handleAnswerChange = (answer: UserAnswer) => {
    setQuizState(prev => {
      const existingAnswerIndex = prev.answers.findIndex(
        a => a.questionId === answer.questionId
      );

      let newAnswers;
      if (existingAnswerIndex >= 0) {
        newAnswers = [...prev.answers];
        newAnswers[existingAnswerIndex] = answer;
      } else {
        newAnswers = [...prev.answers, answer];
      }

      return {
        ...prev,
        answers: newAnswers
      };
    });
  };

  const handleNext = () => {
    if (quizState.currentQuestionIndex < quizQuestions.length - 1) {
      setQuizState(prev => ({
        ...prev,
        currentQuestionIndex: prev.currentQuestionIndex + 1
      }));
    } else {
      // Complete the quiz
      const result = calculateQuizResult(quizState.answers);
      setQuizState(prev => ({
        ...prev,
        isCompleted: true,
        result
      }));
    }
  };

  const handleRestart = () => {
    setQuizState({
      currentQuestionIndex: 0,
      answers: [],
      isCompleted: false
    });
    setShowWelcome(true);
    localStorage.removeItem('selfscape-quiz-state');
  };

  const startQuiz = () => {
    setShowWelcome(false);
  };

  const currentQuestion = quizQuestions[quizState.currentQuestionIndex];
  const currentAnswer = quizState.answers.find(
    a => a.questionId === currentQuestion?.id
  );

  const progress = getProgressPercentage(
    quizState.currentQuestionIndex,
    quizQuestions.length
  );

  if (showWelcome) {
    return (
      <Container maxWidth="md" sx={{ py: 4 }}>
        <Fade in={showWelcome} timeout={800}>
          <Paper elevation={3} sx={{ p: 6, textAlign: 'center' }}>
            <Typography variant="h2" sx={{ mb: 2, fontSize: '4rem' }}>
              🧭
            </Typography>
            <Typography variant="h3" gutterBottom color="primary" fontWeight="bold">
              Welcome to Selfscape
            </Typography>
            <Typography variant="h6" sx={{ mb: 3, color: 'text.secondary' }}>
              Discover Your Stress Management Style
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, maxWidth: 600, mx: 'auto' }}>
              This personalized quiz will help you understand how you naturally handle stress 
              and provide you with tailored tips for better well-being. Answer honestly for 
              the most accurate results.
            </Typography>
            <Box sx={{ mb: 4 }}>
              <Typography variant="body2" color="text.secondary">
                📊 {quizQuestions.length} thoughtful questions<br/>
                ⏱️ Takes about 3-5 minutes<br/>
                🎯 Get your personalized stress management profile
              </Typography>
            </Box>
            <Button
              variant="contained"
              size="large"
              onClick={startQuiz}
              sx={{ px: 4, py: 1.5, fontSize: '1.1rem' }}
            >
              Start Your Journey
            </Button>
          </Paper>
        </Fade>
      </Container>
    );
  }

  if (quizState.isCompleted && quizState.result) {
    return (
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Fade in={true} timeout={800}>
          <div>
            <Result result={quizState.result} onRestart={handleRestart} />
          </div>
        </Fade>
      </Container>
    );
  }

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Fade in={true} timeout={500}>
        <Box>
          <ProgressBar
            progress={progress}
            currentQuestion={quizState.currentQuestionIndex + 1}
            totalQuestions={quizQuestions.length}
          />
          <Question
            question={currentQuestion}
            answer={currentAnswer}
            onAnswerChange={handleAnswerChange}
            onNext={handleNext}
            showNext={true}
          />
        </Box>
      </Fade>
    </Container>
  );
};

export default Quiz;
