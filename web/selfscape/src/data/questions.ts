import { Question } from '../types/quiz';

export const quizQuestions: Question[] = [
  {
    id: 'stress-response',
    text: 'When you face a stressful situation, what\'s your first instinct?',
    type: 'multiple-choice',
    answers: [
      {
        id: 'analyze',
        text: 'Step back and analyze the situation logically',
        score: { logical: 3, calm: 2, social: 0, active: 1 }
      },
      {
        id: 'talk-it-out',
        text: 'Talk to friends or family about it',
        score: { logical: 0, calm: 1, social: 3, active: 1 }
      },
      {
        id: 'take-action',
        text: 'Jump into action to solve it immediately',
        score: { logical: 1, calm: 0, social: 1, active: 3 }
      },
      {
        id: 'breathe-reflect',
        text: 'Take deep breaths and reflect quietly',
        score: { logical: 1, calm: 3, social: 0, active: 0 }
      }
    ]
  },
  {
    id: 'relaxation-preference',
    text: 'Which activity sounds most appealing for relaxation?',
    type: 'multiple-choice',
    answers: [
      {
        id: 'meditation',
        text: 'Meditation or mindfulness practice',
        score: { logical: 1, calm: 3, social: 0, active: 0 }
      },
      {
        id: 'exercise',
        text: 'Physical exercise or sports',
        score: { logical: 0, calm: 1, social: 1, active: 3 }
      },
      {
        id: 'socializing',
        text: 'Spending time with loved ones',
        score: { logical: 0, calm: 1, social: 3, active: 1 }
      },
      {
        id: 'learning',
        text: 'Reading or learning something new',
        score: { logical: 3, calm: 2, social: 0, active: 0 }
      }
    ]
  },
  {
    id: 'work-stress',
    text: 'How do you typically handle work pressure?',
    type: 'multiple-choice',
    answers: [
      {
        id: 'prioritize',
        text: 'Create lists and prioritize systematically',
        score: { logical: 3, calm: 2, social: 0, active: 1 }
      },
      {
        id: 'team-support',
        text: 'Seek support from colleagues',
        score: { logical: 1, calm: 1, social: 3, active: 1 }
      },
      {
        id: 'power-through',
        text: 'Work harder and faster to get through it',
        score: { logical: 0, calm: 0, social: 0, active: 3 }
      },
      {
        id: 'take-breaks',
        text: 'Take regular breaks and pace myself',
        score: { logical: 1, calm: 3, social: 0, active: 1 }
      }
    ]
  },
  {
    id: 'social-energy',
    text: 'How much do you enjoy social gatherings?',
    type: 'slider',
    sliderMin: 1,
    sliderMax: 5,
    sliderLabels: { min: 'Prefer solitude', max: 'Love crowds' },
    traits: { social: 1 } // multiplier for slider value
  },
  {
    id: 'planning-style',
    text: 'When planning your day, you prefer to:',
    type: 'multiple-choice',
    answers: [
      {
        id: 'detailed-schedule',
        text: 'Have a detailed schedule with specific times',
        score: { logical: 3, calm: 1, social: 0, active: 2 }
      },
      {
        id: 'flexible-goals',
        text: 'Set flexible goals and adapt as needed',
        score: { logical: 1, calm: 2, social: 1, active: 1 }
      },
      {
        id: 'go-with-flow',
        text: 'Go with the flow and see what happens',
        score: { logical: 0, calm: 2, social: 2, active: 1 }
      },
      {
        id: 'energy-based',
        text: 'Plan based on my energy levels',
        score: { logical: 1, calm: 3, social: 0, active: 2 }
      }
    ]
  },
  {
    id: 'problem-solving',
    text: 'Your approach to solving problems is usually:',
    type: 'multiple-choice',
    answers: [
      {
        id: 'research-first',
        text: 'Research thoroughly before taking action',
        score: { logical: 3, calm: 2, social: 0, active: 0 }
      },
      {
        id: 'brainstorm-others',
        text: 'Brainstorm with others to get different perspectives',
        score: { logical: 1, calm: 1, social: 3, active: 1 }
      },
      {
        id: 'trial-and-error',
        text: 'Try different solutions until something works',
        score: { logical: 0, calm: 0, social: 0, active: 3 }
      },
      {
        id: 'intuitive',
        text: 'Trust my intuition and inner wisdom',
        score: { logical: 0, calm: 3, social: 1, active: 1 }
      }
    ]
  },
  {
    id: 'stress-symptoms',
    text: 'Which stress symptoms do you experience most often? (Select all that apply)',
    type: 'checkbox',
    answers: [
      {
        id: 'overthinking',
        text: 'Overthinking and mental loops',
        score: { logical: 1, calm: -1, social: 0, active: 0 }
      },
      {
        id: 'physical-tension',
        text: 'Physical tension and restlessness',
        score: { logical: 0, calm: -1, social: 0, active: 1 }
      },
      {
        id: 'social-withdrawal',
        text: 'Wanting to withdraw from social situations',
        score: { logical: 0, calm: 0, social: -1, active: 0 }
      },
      {
        id: 'procrastination',
        text: 'Procrastination and avoidance',
        score: { logical: -1, calm: 0, social: 0, active: -1 }
      }
    ]
  },
  {
    id: 'ideal-weekend',
    text: 'Your ideal weekend would include:',
    type: 'multiple-choice',
    answers: [
      {
        id: 'quiet-home',
        text: 'Quiet time at home with hobbies',
        score: { logical: 2, calm: 3, social: 0, active: 1 }
      },
      {
        id: 'social-activities',
        text: 'Social activities and time with friends',
        score: { logical: 0, calm: 1, social: 3, active: 2 }
      },
      {
        id: 'adventure',
        text: 'Adventure and physical activities',
        score: { logical: 0, calm: 0, social: 1, active: 3 }
      },
      {
        id: 'learning-projects',
        text: 'Working on interesting projects or learning',
        score: { logical: 3, calm: 1, social: 0, active: 2 }
      }
    ]
  }
];
