import React from 'react';
import { Layout, BackTop } from 'antd';
import { ArrowUpOutlined } from '@ant-design/icons';
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
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <HeaderAntd />
      <Content>
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
          borderRadius: 4,
          backgroundColor: '#1890ff',
          color: '#fff',
          textAlign: 'center',
          fontSize: 14,
        }}>
          <ArrowUpOutlined />
        </div>
      </BackTop>
    </Layout>
  );
}

export default AppAntd;