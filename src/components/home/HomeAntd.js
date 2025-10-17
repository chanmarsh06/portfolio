import React, { useEffect, useState } from 'react';
import { Row, Col, Typography, Button, Space, Card } from 'antd';
import { HiMail, HiDownload } from 'react-icons/hi';
import { FaInstagram, FaGithub, FaDribbble, FaLinkedin } from 'react-icons/fa';
import { useTheme } from '../../context/ThemeContext';
import ProfileImg from '../../assests/chan.png';
import CV from '../../assests/Chandrasekaran_React_Resume.pdf';


const { Title, Paragraph } = Typography;

const HomeAntd = () => {
  const { colors } = useTheme();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const socialLinks = [
    { icon: <FaInstagram />, href: 'https://www.instagram.com', color: '#E4405F' },
    { icon: <FaDribbble />, href: 'https://dribbble.com', color: '#EA4C89' },
    { icon: <FaGithub />, href: 'https://github.com', color: '#333' },
    { icon: <FaLinkedin />, href: 'https://linkedin.com', color: '#0077B5' }
  ];

const handleDownload = () => {
  window.open(CV, '_blank'); // Opens the PDF preview in a new tab
};



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
        
        @media (max-width: 767px) {
          .mobile-center { text-align: center !important; }
          .mobile-social { justify-content: center !important; }
          .mobile-buttons { justify-content: center !important; }
          .mobile-title-center { justify-content: center !important; }
          .mobile-card { text-align: center !important; }
          .mobile-flex-col { flex-direction: column !important; }
          .mobile-full-width { width: 100% !important; }
        }
        
        @media (min-width: 768px) {
          .desktop-title { justify-content: flex-start !important; }
          .desktop-card { text-align: left !important; }
          .desktop-buttons { justify-content: flex-start !important; }
          .desktop-flex-row { flex-direction: row !important; }
        }
        
        @media (max-width: 576px) {
          .mobile-padding { padding: 0 16px !important; }
          .mobile-title { font-size: 1.8rem !important; }
          .mobile-subtitle { font-size: 1.1rem !important; }
          .mobile-text { font-size: 14px !important; }
          .mobile-gap { gap: 16px !important; }
        }
      `}</style>

      <section id="home" style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        padding: 'clamp(40px, 8vh, 80px) 0',
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

        <div className="container mobile-padding" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 clamp(16px, 4vw, 24px)', position: 'relative', zIndex: 1 }}>
          <Row gutter={[{ xs: 16, sm: 20, md: 24, lg: 32, xl: 40 }, { xs: 20, sm: 24, md: 32, lg: 40 }]} align="middle">
            {/* TODO: Enable social links in future */}
            {/* <Col xs={24} sm={24} md={4} lg={3} xl={3} order={{ xs: 1, sm: 1, md: 1 }}>
              <div style={{
                transform: isVisible ? 'translateX(0)' : 'translateX(-50px)',
                opacity: isVisible ? 1 : 0,
                transition: 'all 0.8s ease-out'
              }}>
                <Space direction={{ xs: 'horizontal', md: 'vertical' }} size={{ xs: 'middle', md: 'large' }} style={{ width: '100%' }} className="mobile-social">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        color: '#fff', 
                        fontSize: 'clamp(18px, 3vw, 22px)',
                        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                        borderRadius: '50%',
                        width: 'clamp(48px, 8vw, 56px)',
                        height: 'clamp(48px, 8vw, 56px)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: `linear-gradient(135deg, ${link.color}, ${link.color}dd)`,
                        boxShadow: `0 8px 25px ${link.color}40, 0 4px 12px rgba(0,0,0,0.15)`,
                        border: 'none',
                        textDecoration: 'none'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.transform = 'translateY(-4px) scale(1.1)';
                        e.target.style.boxShadow = `0 12px 35px ${link.color}50, 0 6px 15px rgba(0,0,0,0.2)`;
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.transform = 'translateY(0) scale(1)';
                        e.target.style.boxShadow = `0 8px 25px ${link.color}40, 0 4px 12px rgba(0,0,0,0.15)`;
                      }}
                    >
                      {link.icon}
                    </a>
                  ))}
                </Space>
              </div>
            </Col> */}

            <Col xs={24} sm={24} md={24} lg={24} xl={24} order={{ xs: 2, sm: 2, md: 2 }}>
              <div style={{
                transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
                opacity: isVisible ? 1 : 0,
                transition: 'all 1s ease-out 0.3s'
              }}>
                <Space direction="vertical" size={{ xs: 'middle', md: 'large' }} style={{ width: '100%' }} className="mobile-center">
                  <div>
                    <Title level={1} className="mobile-title desktop-title mobile-title-center" style={{
                      fontSize: 'clamp(1.5rem, 5vw, 4rem)',
                      margin: '0 0 16px 0',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 'clamp(8px, 2vw, 16px)',
                      color: colors.text,
                      flexWrap: 'wrap',
                      fontWeight: 700,
                      letterSpacing: '-0.02em'
                    }}>
                      Chandrasekaran
                      <span style={{
                        fontSize: 'clamp(1.5rem, 4vw, 2rem)',
                        animation: 'wave 2s ease-in-out infinite'
                      }}>👋</span>
                    </Title>
                    <Title level={3} className="mobile-subtitle" style={{
                      color: colors.primary,
                      fontWeight: 500,
                      margin: '0 0 32px 0',
                      fontSize: 'clamp(1rem, 2.5vw, 1.8rem)',
                      textAlign: { xs: 'center', md: 'left' },
                      letterSpacing: '0.5px'
                    }}>
                      MERN Stack Developer | React & Next.js Specialist
                    </Title>
                  </div>

                  <div className="mobile-flex-col desktop-flex-row mobile-gap" style={{
                    display: 'flex',
                    gap: 'clamp(20px, 4vw, 40px)',
                    alignItems: 'center',
                    marginBottom: '40px'
                  }}>
                    <Card className="mobile-card desktop-card" style={{
                      background: colors.gradient.card,
                      backdropFilter: 'blur(20px)',
                      border: `1px solid ${colors.primary}20`,
                      borderRadius: 'clamp(12px, 2vw, 20px)',
                      boxShadow: `0 12px 40px rgba(0,0,0,0.15), 0 0 0 1px ${colors.primary}10`,
                      padding: 'clamp(20px, 3vw, 32px)',
                      position: 'relative',
                      overflow: 'hidden',
                      flex: 1,
                      minWidth: 0
                    }}>
                      <div style={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        width: '60px',
                        height: '60px',
                        background: `linear-gradient(135deg, ${colors.primary}20, ${colors.primary}10)`,
                        borderRadius: '0 0 0 60px'
                      }} />
                      <Paragraph className="mobile-text" style={{
                        fontSize: 'clamp(12px, 2vw, 18px)',
                        lineHeight: '1.7',
                        color: colors.textSecondary,
                        margin: 0,
                        textAlign: { xs: 'center', md: 'left' },
                        fontWeight: 400,
                        position: 'relative',
                        zIndex: 1
                      }}>
                     MERN Stack Developer specializing in React.js and Next.js with 2.6+ years of experience building scalable, high-performance web applications. Proficient in Node.js, Express, MongoDB, Redux, and modern frontend ecosystems, with hands-on experience in CI/CD pipelines and AWS deployment. Passionate about clean architecture, state management, and delivering seamless user experiences.
                      </Paragraph>
                    </Card>

                    <div style={{
                      transform: isVisible ? 'scale(1)' : 'scale(0.8)',
                      opacity: isVisible ? 1 : 0,
                      transition: 'all 1.2s ease-out 0.6s',
                      flexShrink: 0
                    }}>
                      <div style={{
                        width: 'clamp(180px, 30vw, 250px)',
                        height: 'clamp(180px, 30vw, 250px)',
                        borderRadius: '50%',
                        background: colors.gradient.primary,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: `0 clamp(10px, 3vw, 20px) clamp(20px, 6vw, 40px) ${colors.primary}30`,
                        position: 'relative',
                        animation: 'pulse 4s ease-in-out infinite'
                      }}>
                        <div style={{
                          position: 'absolute',
                          top: 'clamp(-8px, -2vw, -10px)',
                          right: 'clamp(-8px, -2vw, -10px)',
                          width: 'clamp(40px, 8vw, 60px)',
                          height: 'clamp(40px, 8vw, 60px)',
                          background: 'linear-gradient(135deg, #ff6b6b, #feca57)',
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: 'clamp(16px, 4vw, 24px)',
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
                  </div>

                  <div className="mobile-flex-col desktop-flex-row mobile-center" style={{
                    display: 'flex',
                    gap: 'clamp(16px, 3vw, 24px)',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginTop: '8px'
                  }}>
                    <Space size="middle" wrap className="mobile-buttons desktop-buttons mobile-full-width" style={{ justifyContent: 'center' }}>
                      <Button
                        type="primary"
                        size={{ xs: 'middle', md: 'large' }}
                        icon={<HiMail />}
                        href="#contact"
                        style={{
                          borderRadius: 'clamp(25px, 4vw, 30px)',
                          background: colors.gradient.primary,
                          border: 'none',
                          boxShadow: `0 6px 20px ${colors.primary}30, 0 2px 8px ${colors.primary}20`,
                          fontSize: 'clamp(13px, 2.5vw, 16px)',
                          height: 'clamp(44px, 8vw, 52px)',
                          padding: '0 clamp(20px, 4vw, 32px)',
                          fontWeight: 600,
                          transform: 'translateY(0)',
                          transition: 'all 0.3s ease'
                        }}
                      >
                        Say Hello
                      </Button>
                      <Button
                        size={{ xs: 'middle', md: 'large' }}
                        icon={<HiDownload />}
                        onClick={handleDownload}
                        style={{
                          borderRadius: 'clamp(25px, 4vw, 30px)',
                          borderColor: colors.primary,
                          color: colors.primary,
                          fontSize: 'clamp(13px, 2.5vw, 16px)',
                          height: 'clamp(44px, 8vw, 52px)',
                          padding: '0 clamp(20px, 4vw, 32px)',
                          fontWeight: 600,
                          borderWidth: '2px',
                          background: 'transparent',
                          transition: 'all 0.3s ease'
                        }}
                      >
                        Download CV
                      </Button>


                    </Space>

                    <Space size="small" className="mobile-social" style={{ marginTop: '16px' }}>
                      {socialLinks.map((link, index) => (
                        <a
                          key={index}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            color: '#fff',
                            fontSize: 'clamp(14px, 2.5vw, 18px)',
                            transition: 'all 0.3s ease',
                            borderRadius: '50%',
                            width: 'clamp(40px, 7vw, 48px)',
                            height: 'clamp(40px, 7vw, 48px)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            background: `linear-gradient(135deg, ${link.color}, ${link.color}dd)`,
                            boxShadow: `0 4px 12px ${link.color}30`,
                            border: 'none',
                            textDecoration: 'none'
                          }}
                          onMouseEnter={(e) => {
                            e.target.style.transform = 'translateY(-2px) scale(1.05)';
                            e.target.style.boxShadow = `0 6px 16px ${link.color}40`;
                          }}
                          onMouseLeave={(e) => {
                            e.target.style.transform = 'translateY(0) scale(1)';
                            e.target.style.boxShadow = `0 4px 12px ${link.color}30`;
                          }}
                        >
                          {link.icon}
                        </a>
                      ))}
                    </Space>
                  </div>
                </Space>
              </div>
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
};

export default HomeAntd;