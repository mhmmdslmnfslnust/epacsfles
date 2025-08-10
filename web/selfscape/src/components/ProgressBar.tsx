import React from 'react';
import { LinearProgress, Box, Typography } from '@mui/material';

interface ProgressBarProps {
  progress: number;
  currentQuestion: number;
  totalQuestions: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ 
  progress, 
  currentQuestion, 
  totalQuestions 
}) => {
  return (
    <Box sx={{ width: '100%', mb: 3 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
        <Typography variant="body2" color="text.secondary" sx={{ minWidth: 35 }}>
          {progress}%
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ ml: 'auto' }}>
          Question {currentQuestion} of {totalQuestions}
        </Typography>
      </Box>
      <LinearProgress 
        variant="determinate" 
        value={progress} 
        sx={{
          height: 8,
          borderRadius: 4,
          '& .MuiLinearProgress-bar': {
            borderRadius: 4,
          },
        }}
      />
    </Box>
  );
};

export default ProgressBar;
