import React from 'react';
import { Row, Col, Typography, Button, Space } from 'antd';
import { MessageOutlined, InstagramOutlined, GithubOutlined, DribbbleOutlined } from '@ant-design/icons';
import ProfileImg from '../../assests/profile.jpg';

const { Title, Paragraph } = Typography;

const HomeAntd = () => {
  const socialLinks = [
    { icon: <InstagramOutlined />, href: 'https://www.instagram.com' },
    { icon: <DribbbleOutlined />, href: 'https://dribbble.com' },
    { icon: <GithubOutlined />, href: 'https://github.com' }
  ];

  return (
    <section id="home" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', padding: '80px 0' }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        <Row gutter={[32, 32]} align="middle">
          <Col xs={24} md={6} order={{ xs: 1, md: 1 }}>
            <Space direction="vertical" size="large" style={{ width: '100%' }}>
              {socialLinks.map((link, index) => (
                <Button
                  key={index}
                  type="text"
                  icon={link.icon}
                  href={link.href}
                  target="_blank"
                  size="large"
                  style={{ color: '#1890ff', fontSize: '20px' }}
                />
              ))}
            </Space>
          </Col>

          <Col xs={24} md={12} order={{ xs: 3, md: 2 }}>
            <Space direction="vertical" size="large" style={{ width: '100%' }}>
              <div>
                <Title level={1} style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', margin: 0, display: 'flex', alignItems: 'center', gap: '12px' }}>
                  Chandrasekaran
                  <span style={{ fontSize: '2rem' }}>👋</span>
                </Title>
                <Title level={3} style={{ color: '#666', fontWeight: 400, margin: '8px 0' }}>
                  Web Developer
                </Title>
              </div>
              
              <Paragraph style={{ fontSize: '16px', lineHeight: '1.6', color: '#666', maxWidth: '400px' }}>
                Passionate full-stack developer creating modern, responsive web applications with cutting-edge technologies and exceptional user experiences.
              </Paragraph>

              <Button
                type="primary"
                size="large"
                icon={<MessageOutlined />}
                href="#contact"
                style={{ width: 'fit-content' }}
              >
                Say Hello
              </Button>
            </Space>
          </Col>

          <Col xs={24} md={6} order={{ xs: 2, md: 3 }} style={{ textAlign: 'center' }}>
            <div style={{
              width: 'clamp(200px, 30vw, 280px)',
              height: 'clamp(200px, 30vw, 280px)',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              margin: '0 auto',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
            }}>
              <img
                src={ProfileImg}
                alt="Profile"
                style={{
                  width: 'calc(100% - 20px)',
                  height: 'calc(100% - 20px)',
                  borderRadius: '50%',
                  objectFit: 'cover'
                }}
              />
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default HomeAntd;