import { UserAnswer, QuizResult, PersonalityProfile } from '../types/quiz';
import { quizQuestions } from '../data/questions';
import { personalityProfiles } from '../data/profiles';

export function calculateQuizResult(answers: UserAnswer[]): QuizResult {
  const traitScores: Record<string, number> = {
    logical: 0,
    calm: 0,
    social: 0,
    active: 0
  };

  // Calculate scores based on answers
  answers.forEach(userAnswer => {
    const question = quizQuestions.find(q => q.id === userAnswer.questionId);
    if (!question) return;

    if (question.type === 'multiple-choice' && userAnswer.answerId) {
      const answer = question.answers?.find(a => a.id === userAnswer.answerId);
      if (answer) {
        Object.entries(answer.score).forEach(([trait, score]) => {
          traitScores[trait] = (traitScores[trait] || 0) + score;
        });
      }
    } else if (question.type === 'checkbox' && Array.isArray(userAnswer.answerId)) {
      userAnswer.answerId.forEach(answerId => {
        const answer = question.answers?.find(a => a.id === answerId);
        if (answer) {
          Object.entries(answer.score).forEach(([trait, score]) => {
            traitScores[trait] = (traitScores[trait] || 0) + score;
          });
        }
      });
    } else if (question.type === 'slider' && userAnswer.sliderValue !== undefined) {
      if (question.traits) {
        Object.entries(question.traits).forEach(([trait, multiplier]) => {
          traitScores[trait] = (traitScores[trait] || 0) + (userAnswer.sliderValue! * multiplier);
        });
      }
    }
  });

  // Normalize scores to positive values
  const minScore = Math.min(...Object.values(traitScores));
  if (minScore < 0) {
    Object.keys(traitScores).forEach(trait => {
      traitScores[trait] -= minScore;
    });
  }

  // Find the best matching personality profile
  const profile = findBestMatchingProfile(traitScores);

  return {
    profile,
    traitScores,
    completedAt: new Date()
  };
}

function findBestMatchingProfile(userScores: Record<string, number>): PersonalityProfile {
  let bestMatch = personalityProfiles[0];
  let smallestDistance = Infinity;

  personalityProfiles.forEach(profile => {
    // Calculate Euclidean distance between user scores and profile traits
    let distance = 0;
    Object.keys(userScores).forEach(trait => {
      const userScore = userScores[trait] || 0;
      const profileScore = profile.traits[trait] || 0;
      distance += Math.pow(userScore - profileScore * 3, 2); // Scale profile scores
    });

    distance = Math.sqrt(distance);

    if (distance < smallestDistance) {
      smallestDistance = distance;
      bestMatch = profile;
    }
  });

  return bestMatch;
}

export function getProgressPercentage(currentQuestionIndex: number, totalQuestions: number): number {
  return Math.round(((currentQuestionIndex + 1) / totalQuestions) * 100);
}
