import { PersonalityProfile } from '../types/quiz';

export const personalityProfiles: PersonalityProfile[] = [
  {
    id: 'calm-strategist',
    name: 'The Calm Strategist',
    description: 'You approach stress with mindfulness and careful planning. You prefer quiet reflection and systematic problem-solving.',
    traits: { logical: 2, calm: 3, social: 1, active: 1 },
    tips: [
      'Continue practicing mindfulness and meditation',
      'Set aside regular quiet time for reflection',
      'Use planning tools to organize your thoughts',
      'Consider journaling to process emotions',
      'Take breaks in nature when feeling overwhelmed'
    ],
    color: '#4CAF50',
    emoji: '🧘‍♀️'
  },
  {
    id: 'social-connector',
    name: 'The Social Connector',
    description: 'You thrive on human connection and find strength in community. You process stress by talking through problems with others.',
    traits: { logical: 1, calm: 1, social: 3, active: 2 },
    tips: [
      'Maintain strong relationships with friends and family',
      'Join support groups or communities with shared interests',
      'Schedule regular social activities',
      'Practice active listening in conversations',
      'Use collaboration to solve problems creatively'
    ],
    color: '#FF9800',
    emoji: '🤝'
  },
  {
    id: 'active-achiever',
    name: 'The Active Achiever',
    description: 'You tackle stress head-on with action and movement. You find energy in physical activity and accomplishing goals.',
    traits: { logical: 1, calm: 1, social: 2, active: 3 },
    tips: [
      'Incorporate regular exercise into your routine',
      'Set clear, achievable goals to maintain motivation',
      'Try stress-relief through physical activities',
      'Break large problems into actionable steps',
      'Use movement breaks during stressful periods'
    ],
    color: '#F44336',
    emoji: '💪'
  },
  {
    id: 'logical-analyzer',
    name: 'The Logical Analyzer',
    description: 'You approach challenges with rational thinking and systematic analysis. You find comfort in understanding and organizing information.',
    traits: { logical: 3, calm: 2, social: 1, active: 1 },
    tips: [
      'Use data and research to inform decisions',
      'Create structured plans and systems',
      'Practice breaking down complex problems',
      'Set aside time for learning and skill development',
      'Use logic-based stress management techniques'
    ],
    color: '#2196F3',
    emoji: '🔬'
  },
  {
    id: 'balanced-adapter',
    name: 'The Balanced Adapter',
    description: 'You have a well-rounded approach to stress management, drawing from multiple strategies based on the situation.',
    traits: { logical: 2, calm: 2, social: 2, active: 2 },
    tips: [
      'Continue using your flexible approach to stress',
      'Experiment with different coping strategies',
      'Adapt your methods based on the situation',
      'Maintain balance across different life areas',
      'Trust your instincts about what you need'
    ],
    color: '#9C27B0',
    emoji: '⚖️'
  },
  {
    id: 'gentle-nurturer',
    name: 'The Gentle Nurturer',
    description: 'You prioritize self-care and emotional well-being. You prefer gentle, nurturing approaches to managing stress.',
    traits: { logical: 1, calm: 3, social: 2, active: 1 },
    tips: [
      'Practice self-compassion and self-care',
      'Create soothing environments at home',
      'Use gentle activities like yoga or tai chi',
      'Prioritize adequate rest and sleep',
      'Connect with supportive, caring people'
    ],
    color: '#E91E63',
    emoji: '🌸'
  }
];
