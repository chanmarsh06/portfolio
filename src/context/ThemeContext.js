import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDark(savedTheme === 'dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
  };

  const theme = {
    isDark,
    colors: {
      primary: isDark ? '#8b5cf6' : '#667eea',
      secondary: isDark ? '#a855f7' : '#764ba2',
      background: isDark ? '#0f172a' : '#ffffff',
      surface: isDark ? '#1e293b' : '#f8fafc',
      text: isDark ? '#f1f5f9' : '#334155',
      textSecondary: isDark ? '#94a3b8' : '#64748b',
      border: isDark ? '#334155' : '#e2e8f0',
      gradient: {
        primary: isDark 
          ? 'linear-gradient(135deg, #8b5cf6 0%, #a855f7 100%)'
          : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        background: isDark
          ? 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)'
          : 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
        card: isDark
          ? 'rgba(30, 41, 59, 0.95)'
          : 'rgba(255, 255, 255, 0.95)'
      }
    }
  };

  return (
    <ThemeContext.Provider value={{ ...theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};