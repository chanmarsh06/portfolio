import React, { useEffect } from 'react';
import { Layout, BackTop } from 'antd';
import { ArrowUpOutlined } from '@ant-design/icons';
import { useTheme } from './context/ThemeContext';
import './App.css';

import HeaderAntd from './components/header/HeaderAntd';
import HomeAntd from './components/home/HomeAntd';
import AboutAntd from './components/about/AboutAntd';
import SkillsAntd from './components/skills/SkillsAntd';
import ServiceAntd from './components/services/ServiceAntd';
import QualificationAntd from './qualification/QualificationAntd';
import TestimonialAntd from './components/testimonial/TestimonialAntd';
import ContactAntd from './components/contact/ContactAntd';
import FooterAntd from './components/footer/FooterAntd';
const { Content } = Layout;

function AppAntd() {
  const { colors, isDark } = useTheme();
  
  useEffect(() => {
    document.body.setAttribute('data-theme', isDark ? 'dark' : 'light');
    document.body.style.backgroundColor = colors.background;
    document.body.style.color = colors.text;
  }, [isDark, colors]);
  
  return (
    <Layout style={{ 
      minHeight: '100vh',
      background: colors.background
    }}>
      <HeaderAntd />
      <Content style={{ background: colors.background }}>
        <HomeAntd />
        <AboutAntd />
        <SkillsAntd />
        <ServiceAntd />
        <QualificationAntd />
        <TestimonialAntd />
        <ContactAntd />
      </Content>
      <FooterAntd />
      <BackTop>
        <div style={{
          height: 40,
          width: 40,
          lineHeight: '40px',
          borderRadius: 20,
          background: colors.gradient.primary,
          color: '#fff',
          textAlign: 'center',
          fontSize: 14,
          boxShadow: `0 4px 15px ${colors.primary}40`,
          transition: 'all 0.3s ease'
        }}>
          <ArrowUpOutlined />
        </div>
      </BackTop>
    </Layout>
  );
}

export default AppAntd;