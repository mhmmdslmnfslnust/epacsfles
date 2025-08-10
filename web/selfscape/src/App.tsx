import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline, AppBar, Toolbar, Typography, Box } from '@mui/material';
import Quiz from './components/Quiz';

const theme = createTheme({
  palette: {
    primary: {
      main: '#6366f1', // Modern indigo
      light: '#8b92f7',
      dark: '#4338ca',
    },
    secondary: {
      main: '#ec4899', // Modern pink
      light: '#f472b6',
      dark: '#be185d',
    },
    background: {
      default: '#f8fafc',
      paper: '#ffffff',
    },
    text: {
      primary: '#1e293b',
      secondary: '#64748b',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h3: {
      fontWeight: 700,
    },
    h4: {
      fontWeight: 600,
    },
    h6: {
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          textTransform: 'none',
          fontWeight: 600,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 16,
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ 
        minHeight: '100vh', 
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        pb: 4
      }}>
        <AppBar 
          position="static" 
          elevation={0}
          sx={{ 
            background: 'transparent',
            backdropFilter: 'blur(10px)',
            borderBottom: '1px solid rgba(255,255,255,0.1)'
          }}
        >
          <Toolbar>
            <Typography 
              variant="h5" 
              component="div" 
              sx={{ 
                flexGrow: 1, 
                fontWeight: 700,
                color: 'white'
              }}
            >
              🧭 Selfscape
            </Typography>
            <Typography 
              variant="body2" 
              sx={{ 
                color: 'rgba(255,255,255,0.8)',
                fontStyle: 'italic'
              }}
            >
              Discover Your Inner Landscape
            </Typography>
          </Toolbar>
        </AppBar>
        
        <Quiz />
      </Box>
    </ThemeProvider>
  );
}

export default App;
