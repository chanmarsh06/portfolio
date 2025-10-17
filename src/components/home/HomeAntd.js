import React, { useEffect, useState } from 'react';
import { Row, Col, Typography, Button, Space, Card } from 'antd';
import { MessageOutlined, InstagramOutlined, GithubOutlined, DribbbleOutlined, DownloadOutlined } from '@ant-design/icons';
import { useTheme } from '../../context/ThemeContext';
import ProfileImg from '../../assests/chan.png';

const { Title, Paragraph } = Typography;

const HomeAntd = () => {
  const { colors } = useTheme();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const socialLinks = [
    { icon: <InstagramOutlined />, href: 'https://www.instagram.com', color: '#E4405F' },
    { icon: <DribbbleOutlined />, href: 'https://dribbble.com', color: '#EA4C89' },
    { icon: <GithubOutlined />, href: 'https://github.com', color: '#333' }
  ];

  return (
    <>
      <style>{`
        @keyframes wave {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(20deg); }
          75% { transform: rotate(-10deg); }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
      
      <section id="home" style={{ 
        minHeight: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        padding: '80px 0',
        background: colors.gradient.background,
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="4"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          animation: 'float 20s ease-in-out infinite'
        }} />

        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
          <Row gutter={[32, 32]} align="middle">
            <Col xs={24} md={6} order={{ xs: 1, md: 1 }}>
              <div style={{
                transform: isVisible ? 'translateX(0)' : 'translateX(-50px)',
                opacity: isVisible ? 1 : 0,
                transition: 'all 0.8s ease-out'
              }}>
                <Space direction="vertical" size="large" style={{ width: '100%' }}>
                  {socialLinks.map((link, index) => (
                    <Button
                      key={index}
                      type="text"
                      icon={link.icon}
                      href={link.href}
                      target="_blank"
                      size="large"
                      style={{ 
                        color: link.color, 
                        fontSize: '24px',
                        transition: 'all 0.3s ease',
                        borderRadius: '50%',
                        width: '50px',
                        height: '50px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
                      }}
                    />
                  ))}
                </Space>
              </div>
            </Col>

            <Col xs={24} md={12} order={{ xs: 3, md: 2 }}>
              <div style={{
                transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
                opacity: isVisible ? 1 : 0,
                transition: 'all 1s ease-out 0.3s'
              }}>
                <Space direction="vertical" size="large" style={{ width: '100%' }}>
                  <div>
                    <Title level={1} style={{ 
                      fontSize: 'clamp(2rem, 5vw, 3.5rem)', 
                      margin: 0, 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '12px',
                      color: colors.text
                    }}>
                      Chandrasekaran
                      <span style={{ 
                        fontSize: '2rem',
                        animation: 'wave 2s ease-in-out infinite'
                      }}>👋</span>
                    </Title>
                    <Title level={3} style={{ 
                      color: colors.primary, 
                      fontWeight: 400, 
                      margin: '8px 0'
                    }}>
                      Full Stack Developer
                    </Title>
                  </div>
                  
                  <Card style={{
                    background: colors.gradient.card,
                    backdropFilter: 'blur(10px)',
                    border: 'none',
                    borderRadius: '15px',
                    boxShadow: '0 8px 32px rgba(0,0,0,0.1)'
                  }}>
                    <Paragraph style={{ 
                      fontSize: '16px', 
                      lineHeight: '1.6', 
                      color: colors.textSecondary, 
                      margin: 0
                    }}>
                      Passionate full-stack developer creating modern, responsive web applications with cutting-edge technologies and exceptional user experiences.
                    </Paragraph>
                  </Card>

                  <Space size="middle">
                    <Button
                      type="primary"
                      size="large"
                      icon={<MessageOutlined />}
                      href="#contact"
                      style={{ 
                        borderRadius: '25px',
                        background: colors.gradient.primary,
                        border: 'none',
                        boxShadow: `0 4px 15px ${colors.primary}40`
                      }}
                    >
                      Say Hello
                    </Button>
                    <Button
                      size="large"
                      icon={<DownloadOutlined />}
                      style={{ 
                        borderRadius: '25px',
                        borderColor: colors.primary,
                        color: colors.primary
                      }}
                    >
                      Download CV
                    </Button>
                  </Space>
                </Space>
              </div>
            </Col>

            <Col xs={24} md={6} order={{ xs: 2, md: 3 }} style={{ textAlign: 'center' }}>
              <div style={{
                transform: isVisible ? 'scale(1)' : 'scale(0.8)',
                opacity: isVisible ? 1 : 0,
                transition: 'all 1.2s ease-out 0.6s'
              }}>
                <div style={{
                  width: 'clamp(200px, 30vw, 280px)',
                  height: 'clamp(200px, 30vw, 280px)',
                  borderRadius: '50%',
                  background: colors.gradient.primary,
                  margin: '0 auto',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: `0 20px 40px ${colors.primary}30`,
                  position: 'relative',
                  animation: 'pulse 4s ease-in-out infinite'
                }}>
                  <div style={{
                    position: 'absolute',
                    top: '-10px',
                    right: '-10px',
                    width: '60px',
                    height: '60px',
                    background: 'linear-gradient(135deg, #ff6b6b, #feca57)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '24px',
                    animation: 'bounce 2s ease-in-out infinite'
                  }}>
                    ⚡
                  </div>
                  <img
                    src={ProfileImg}
                    alt="Profile"
                    style={{
                      width: 'calc(100% - 20px)',
                      height: 'calc(100% - 20px)',
                      borderRadius: '50%',
                      objectFit: 'cover',
                      filter: 'brightness(1.1) contrast(1.1)'
                    }}
                  />
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
};

export default HomeAntd;