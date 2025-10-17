import React from 'react';
import { Layout, Typography, Space, Button } from 'antd';
import { InstagramOutlined, FacebookOutlined, SendOutlined } from '@ant-design/icons';

const { Footer } = Layout;
const { Title, Text } = Typography;

const FooterAntd = () => {
  const footerLinks = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#portfolio' },
    { label: 'Testimonials', href: '#testimonials' }
  ];

  const socialLinks = [
    { icon: <InstagramOutlined />, href: 'https://www.instagram.com' },
    { icon: <SendOutlined />, href: 'https://telegram.org' },
    { icon: <FacebookOutlined />, href: 'https://www.facebook.com' }
  ];

  return (
    <Footer style={{ 
      background: '#001529', 
      color: 'white', 
      textAlign: 'center',
      padding: '48px 24px 24px'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <Space direction="vertical" size="large" style={{ width: '100%' }}>
          <Title level={2} style={{ color: 'white', margin: 0 }}>Chan</Title>
          
          <Space wrap size="large">
            {footerLinks.map((link, index) => (
              <Button key={index} type="link" href={link.href} style={{ color: 'rgba(255,255,255,0.8)' }}>
                {link.label}
              </Button>
            ))}
          </Space>

          <Space size="large">
            {socialLinks.map((social, index) => (
              <Button
                key={index}
                type="text"
                icon={social.icon}
                href={social.href}
                target="_blank"
                style={{ color: 'white', fontSize: '20px' }}
              />
            ))}
          </Space>

          <Text style={{ color: 'rgba(255,255,255,0.6)' }}>
            © Chan. All Rights Reserved
          </Text>
        </Space>
      </div>
    </Footer>
  );
};

export default FooterAntd;