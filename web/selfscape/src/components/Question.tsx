import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  RadioGroup,
  FormControlLabel,
  Radio,
  Slider,
  Box,
  FormGroup,
  Checkbox,
  Button
} from '@mui/material';
import { Question as QuestionType, UserAnswer } from '../types/quiz';

interface QuestionProps {
  question: QuestionType;
  answer?: UserAnswer;
  onAnswerChange: (answer: UserAnswer) => void;
  onNext: () => void;
  showNext: boolean;
}

const Question: React.FC<QuestionProps> = ({ 
  question, 
  answer, 
  onAnswerChange, 
  onNext,
  showNext 
}) => {
  const handleMultipleChoiceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onAnswerChange({
      questionId: question.id,
      answerId: event.target.value
    });
  };

  const handleSliderChange = (event: Event, value: number | number[]) => {
    onAnswerChange({
      questionId: question.id,
      sliderValue: value as number
    });
  };

  const handleCheckboxChange = (answerId: string, checked: boolean) => {
    const currentAnswers = Array.isArray(answer?.answerId) ? (answer?.answerId || []) : [];
    let newAnswers: string[];
    
    if (checked) {
      newAnswers = [...currentAnswers, answerId];
    } else {
      newAnswers = currentAnswers.filter(id => id !== answerId);
    }
    
    onAnswerChange({
      questionId: question.id,
      answerId: newAnswers
    });
  };

  const renderQuestionContent = () => {
    switch (question.type) {
      case 'multiple-choice':
        return (
          <RadioGroup
            value={answer?.answerId || ''}
            onChange={handleMultipleChoiceChange}
          >
            {question.answers?.map((ans) => (
              <FormControlLabel
                key={ans.id}
                value={ans.id}
                control={<Radio />}
                label={ans.text}
                sx={{ mb: 1 }}
              />
            ))}
          </RadioGroup>
        );

      case 'slider':
        return (
          <Box sx={{ px: 2, py: 4 }}>
            <Slider
              value={answer?.sliderValue || question.sliderMin || 1}
              onChange={handleSliderChange}
              min={question.sliderMin || 1}
              max={question.sliderMax || 5}
              step={1}
              marks
              valueLabelDisplay="auto"
            />
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1 }}>
              <Typography variant="caption" color="text.secondary">
                {question.sliderLabels?.min}
              </Typography>
              <Typography variant="caption" color="text.secondary">
                {question.sliderLabels?.max}
              </Typography>
            </Box>
          </Box>
        );

      case 'checkbox':
        return (
          <FormGroup>
            {question.answers?.map((ans) => (
              <FormControlLabel
                key={ans.id}
                control={
                  <Checkbox
                    checked={Array.isArray(answer?.answerId) && (answer?.answerId || []).includes(ans.id)}
                    onChange={(e) => handleCheckboxChange(ans.id, e.target.checked)}
                  />
                }
                label={ans.text}
                sx={{ mb: 1 }}
              />
            ))}
          </FormGroup>
        );

      default:
        return null;
    }
  };

  const isAnswered = () => {
    if (!answer) return false;
    
    switch (question.type) {
      case 'multiple-choice':
        return !!answer.answerId;
      case 'slider':
        return answer.sliderValue !== undefined;
      case 'checkbox':
        return Array.isArray(answer.answerId) && answer.answerId.length > 0;
      default:
        return false;
    }
  };

  return (
    <Card sx={{ maxWidth: 600, mx: 'auto', mb: 3 }}>
      <CardContent sx={{ p: 4 }}>
        <Typography variant="h6" gutterBottom sx={{ mb: 3 }}>
          {question.text}
        </Typography>
        
        {renderQuestionContent()}
        
        {showNext && (
          <Box sx={{ mt: 4, textAlign: 'right' }}>
            <Button
              variant="contained"
              onClick={onNext}
              disabled={!isAnswered()}
              size="large"
            >
              {showNext ? 'Next Question' : 'Complete Quiz'}
            </Button>
          </Box>
        )}
      </CardContent>
    </Card>
  );
};

export default Question;
