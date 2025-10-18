import React, { useEffect, useState } from 'react';
import { Card, Button, Row, Col, Typography, Space } from 'antd';
import { HiDownload } from 'react-icons/hi';
import { HiTrophy, HiFolderOpen, HiFaceSmile } from 'react-icons/hi2';

import { useTheme } from '../../context/ThemeContext';
import AboutImg from '../../assests/chan.png';
import CV from '../../assests/Chandrasekaran_React_Resume.pdf';

const { Title, Paragraph } = Typography;

const AboutAntd = () => {
  const { colors } = useTheme();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const infoData = [
    { icon: <HiTrophy />, title: 'Experience', subtitle: '2.6+ Years Working', color: '#ff6b6b' },
    { icon: <HiFolderOpen />, title: 'Completed', subtitle: '25+ Projects', color: '#4ecdc4' },
    { icon: <HiFaceSmile />, title: 'Support', subtitle: 'Online 24/7', color: '#45b7d1' }
  ];

  const handleDownload = () => {
    window.open(CV, '_blank'); // Opens the PDF preview in a new tab
  };

  return (
    <>
      <style>{`
        @keyframes slideUp {
          from { transform: translateY(50px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleIn {
          from { transform: scale(0.8); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
      `}</style>

      <section id="about" style={{
        padding: '90px 0',
        background: colors.gradient.background,
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div className="global-container">
          <div style={{
            animation: isVisible ? 'fadeIn 1s ease-out' : 'none',
            textAlign: 'center',
            marginBottom: '40px'
          }}>
            <Title level={2} style={{
              marginBottom: '4px',
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              color: colors.text
            }}>
              About Me
            </Title>
            <Paragraph style={{ color: colors.textSecondary, fontSize: '18px', margin: 0 }}>
              My Introduction
            </Paragraph>
          </div>

          <Row gutter={[32, 32]} align="middle">
            <Col xs={24} lg={12} style={{ textAlign: 'center' }}>
              <div style={{
                animation: isVisible ? 'scaleIn 1s ease-out 0.3s both' : 'none'
              }}>
                <div style={{
                  width: 'clamp(250px, 35vw, 350px)',
                  height: 'clamp(250px, 35vw, 350px)',
                  margin: '0 auto',
                  borderRadius: '50%',
                  background: colors.gradient.card,
                  backdropFilter: 'blur(10px)',
                  padding: '20px',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <img
                    src={AboutImg}
                    alt="About"
                    style={{
                      width: '100%',
                      height: '100%',
                      borderRadius: '50%',
                      objectFit: 'cover',
                      border: '4px solid rgba(255,255,255,0.3)',
                      boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
                    }}
                  />
                </div>
              </div>
            </Col>

            <Col xs={24} lg={12}>
              <div style={{
                animation: isVisible ? 'slideUp 1s ease-out 0.6s both' : 'none'
              }}>
                <Space direction="vertical" size="large" style={{ width: '100%' }}>
                  <Row gutter={[16, 16]}>
                    {infoData.map((item, index) => (
                      <Col xs={24} sm={8} key={index}>
                        <Card
                          hoverable
                          style={{
                            textAlign: 'center',
                            height: '140px',
                            background: colors.gradient.card,
                            backdropFilter: 'blur(10px)',
                            border: 'none',
                            borderRadius: '20px',
                            boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
                            transition: 'all 0.3s ease'
                          }}
                          bodyStyle={{ padding: '20px' }}
                        >
                          <Space direction="vertical" size="small" style={{ width: '100%' }}>
                            <div style={{
                              fontSize: '28px',
                              color: item.color,
                              background: `${item.color}20`,
                              width: '50px',
                              height: '50px',
                              borderRadius: '50%',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              margin: '0 auto'
                            }}>
                              {item.icon}
                            </div>
                            <Title level={5} style={{ margin: 0, fontSize: '16px', color: colors.text }}>
                              {item.title}
                            </Title>
                            <Paragraph style={{ margin: 0, fontSize: '12px', color: colors.textSecondary }}>
                              {item.subtitle}
                            </Paragraph>
                          </Space>
                        </Card>
                      </Col>
                    ))}
                  </Row>

                  <Card style={{
                    background: colors.gradient.card,
                    backdropFilter: 'blur(10px)',
                    border: 'none',
                    borderRadius: '20px',
                    boxShadow: '0 8px 32px rgba(0,0,0,0.1)'
                  }}>
                    <Paragraph style={{
                      fontSize: '16px',
                      lineHeight: '1.8',
                      color: colors.textSecondary,
                      margin: 0,
                      textAlign: { xs: 'center', md: 'left' },
                    }}>
                      Frontend Developer with 2.5+ years of experience building scalable, high-performance web applications using React.js, TypeScript, and Redux Toolkit. Passionate about delivering elegant, optimized UI solutions and expanding into full-stack development with Node.js and MongoDB. Experienced in CI/CD, RESTful APIs, and Agile environments.
                      {/* I’m a passionate MERN Stack Developer with 2.5+ years of experience building scalable applications using React.js, TypeScript, and Redux Toolkit, specializing in high-performance UIs, state management, and API integration. I’ve developed HRMS portals, performance management systems, and template engines, delivering 30–40% efficiency improvements through reusable component architecture. Currently upskilling in Node.js, Express, and MongoDB to transition into full-stack development, and when I’m not coding, I’m on the cricket field—fueling discipline, competitiveness, and teamwork in everything I build. */}
                    </Paragraph>
                  </Card>

                  <Button
                    type="primary"
                    size="large"
                    icon={<HiDownload />}
                    onClick={handleDownload}
                    href={CV}
                    download
                    style={{
                      borderRadius: '25px',
                      background: 'linear-gradient(135deg, #ff6b6b 0%, #feca57 100%)',
                      border: 'none',
                      boxShadow: '0 4px 15px rgba(255, 107, 107, 0.4)',
                      width: 'fit-content'
                    }}
                  >
                    Download CV
                  </Button>
                </Space>
              </div>
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
};

export default AboutAntd;