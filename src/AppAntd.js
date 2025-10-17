import React from 'react';
import { Layout, BackTop } from 'antd';
import { ArrowUpOutlined } from '@ant-design/icons';
import 'antd/dist/reset.css';
import './App.css';

// Import Ant Design components
import HeaderAntd from './components/header/HeaderAntd';
import Home from './components/home/Home';
import AboutAntd from './components/about/AboutAntd';
import SkillsAntd from './components/skills/SkillsAntd';
import ServiceAntd from './components/services/ServiceAntd';
import Qualification from './qualification/Qualification';
import Testimonial from './components/testimonial/Testimonial';
import ContactAntd from './components/contact/ContactAntd';
import Footer from './components/footer/Footer';

const { Content } = Layout;

function AppAntd() {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <HeaderAntd />
      
      <Content>
        <Home />
        <AboutAntd />
        <SkillsAntd />
        <ServiceAntd />
        <Qualification />
        <Testimonial />
        <ContactAntd />
      </Content>
      
      <Footer />
      
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