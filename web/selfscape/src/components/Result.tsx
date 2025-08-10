import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Box,
  Chip,
  List,
  ListItem,
  ListItemText,
  Button,
  Divider
} from '@mui/material';
import { RadialBarChart, RadialBar, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { QuizResult } from '../types/quiz';

interface ResultProps {
  result: QuizResult;
  onRestart: () => void;
}

const Result: React.FC<ResultProps> = ({ result, onRestart }) => {
  const { profile, traitScores } = result;

  // Prepare data for charts
  const chartData = Object.entries(traitScores).map(([trait, score]) => ({
    name: trait.charAt(0).toUpperCase() + trait.slice(1),
    value: Math.max(score, 1), // Ensure minimum value for visibility
    fill: getTraitColor(trait)
  }));

  const maxScore = Math.max(...Object.values(traitScores));
  const normalizedData = chartData.map(item => ({
    ...item,
    percentage: Math.round((item.value / maxScore) * 100)
  }));

  return (
    <Box sx={{ maxWidth: 800, mx: 'auto' }}>
      {/* Main Profile Card */}
      <Card sx={{ mb: 3, textAlign: 'center', background: `linear-gradient(135deg, ${profile.color}20, ${profile.color}10)` }}>
        <CardContent sx={{ p: 4 }}>
          <Typography variant="h2" sx={{ mb: 2, fontSize: '4rem' }}>
            {profile.emoji}
          </Typography>
          <Typography variant="h4" gutterBottom color={profile.color} fontWeight="bold">
            {profile.name}
          </Typography>
          <Typography variant="body1" sx={{ mb: 3, maxWidth: 600, mx: 'auto' }}>
            {profile.description}
          </Typography>
        </CardContent>
      </Card>

      {/* Trait Scores Visualization */}
      <Card sx={{ mb: 3 }}>
        <CardContent sx={{ p: 4 }}>
          <Typography variant="h6" gutterBottom>
            Your Stress Management Profile
          </Typography>
          <Box sx={{ height: 300, mb: 3 }}>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={chartData}
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  dataKey="value"
                  label={({ name, percentage }) => `${name}: ${percentage}%`}
                >
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </Box>
          
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, justifyContent: 'center' }}>
            {normalizedData.map((trait) => (
              <Chip
                key={trait.name}
                label={`${trait.name}: ${trait.percentage}%`}
                sx={{
                  backgroundColor: trait.fill,
                  color: 'white',
                  fontWeight: 'bold'
                }}
              />
            ))}
          </Box>
        </CardContent>
      </Card>

      {/* Tips and Recommendations */}
      <Card sx={{ mb: 3 }}>
        <CardContent sx={{ p: 4 }}>
          <Typography variant="h6" gutterBottom>
            Personalized Tips for You
          </Typography>
          <List>
            {profile.tips.map((tip, index) => (
              <React.Fragment key={index}>
                <ListItem sx={{ px: 0 }}>
                  <ListItemText
                    primary={
                      <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                        <Typography
                          variant="h6"
                          sx={{
                            color: profile.color,
                            mr: 1,
                            minWidth: 'auto',
                            fontSize: '1.2rem'
                          }}
                        >
                          •
                        </Typography>
                        <Typography variant="body1">
                          {tip}
                        </Typography>
                      </Box>
                    }
                  />
                </ListItem>
                {index < profile.tips.length - 1 && <Divider />}
              </React.Fragment>
            ))}
          </List>
        </CardContent>
      </Card>

      {/* Actions */}
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Button
          variant="outlined"
          onClick={onRestart}
          size="large"
          sx={{ mr: 2 }}
        >
          Take Quiz Again
        </Button>
        <Button
          variant="contained"
          onClick={() => {
            const text = `I just took the Selfscape quiz and I'm "${profile.name}"! ${profile.description}`;
            navigator.clipboard.writeText(text);
            alert('Result copied to clipboard!');
          }}
          size="large"
        >
          Share Result
        </Button>
      </Box>
    </Box>
  );
};

function getTraitColor(trait: string): string {
  const colors: Record<string, string> = {
    logical: '#2196F3',
    calm: '#4CAF50',
    social: '#FF9800',
    active: '#F44336'
  };
  return colors[trait] || '#9C27B0';
}

export default Result;
