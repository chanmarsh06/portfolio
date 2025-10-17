import React from 'react';
import ReactDOM from 'react-dom/client';
import { ConfigProvider, theme } from 'antd';
import AppAntd from './AppAntd';
import { ThemeProvider, useTheme } from './context/ThemeContext';

const ThemedApp = () => {
  const { colors, isDark } = useTheme();
  
  const antdTheme = {
    token: {
      colorPrimary: colors.primary,
      borderRadius: 8,
      fontFamily: '"Poppins", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      colorBgBase: colors.background,
      colorTextBase: colors.text,
    },
    algorithm: isDark ? theme.darkAlgorithm : theme.defaultAlgorithm,
    components: {
      Layout: {
        bodyBg: colors.background,
        headerBg: colors.surface,
      },
      Card: {
        borderRadius: 20,
        colorBgContainer: colors.surface,
      },
      Button: {
        borderRadius: 8,
      },
    },
  };

  return (
    <ConfigProvider theme={antdTheme}>
      <AppAntd />
    </ConfigProvider>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <ThemedApp />
    </ThemeProvider>
  </React.StrictMode>
);