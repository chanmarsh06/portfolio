import React, { useEffect, useState } from 'react';
import { Layout, Typography, Space, Button } from 'antd';
import { InstagramOutlined, FacebookOutlined, SendOutlined, HeartFilled } from '@ant-design/icons';
import { useTheme } from '../../context/ThemeContext';

const { Footer } = Layout;
const { Title, Text } = Typography;

const FooterAntd = () => {
  const { colors, isDark } = useTheme();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const footerLinks = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#portfolio' },
    { label: 'Testimonials', href: '#testimonials' }
  ];

  const socialLinks = [
    { icon: <InstagramOutlined />, href: 'https://www.instagram.com', color: '#E4405F' },
    { icon: <SendOutlined />, href: 'https://telegram.org', color: '#0088cc' },
    { icon: <FacebookOutlined />, href: 'https://www.facebook.com', color: '#1877f2' }
  ];

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
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        @keyframes heartBeat {
          0%, 100% { transform: scale(1); }
          25% { transform: scale(1.2); }
          50% { transform: scale(1.1); }
          75% { transform: scale(1.15); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-10px) rotate(1deg); }
          66% { transform: translateY(-5px) rotate(-1deg); }
        }
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(74, 144, 226, 0.3); }
          50% { box-shadow: 0 0 30px rgba(74, 144, 226, 0.6); }
        }
        @keyframes sparkle {
          0%, 100% { opacity: 0; transform: scale(0) rotate(0deg); }
          50% { opacity: 1; transform: scale(1) rotate(180deg); }
        }
        .footer-title {
          background: linear-gradient(45deg, #4A90E2, #7B68EE, #FF6B9D);
          background-size: 200% 200%;
          animation: gradientShift 3s ease infinite, glow 2s ease-in-out infinite;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .social-btn {
          position: relative;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        .social-btn:hover {
          transform: translateY(-8px) scale(1.1);
          animation: float 2s ease-in-out infinite;
        }
        .social-btn::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          background: radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%);
          transition: all 0.4s ease;
          border-radius: 50%;
          transform: translate(-50%, -50%);
        }
        .social-btn:hover::before {
          width: 100px;
          height: 100px;
        }
        .footer-link {
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
        }
        .footer-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, #4A90E2, transparent);
          transition: all 0.3s ease;
          transform: translateX(-50%);
        }
        .footer-link:hover::after {
          width: 100%;
        }
        .sparkle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: #FFD700;
          border-radius: 50%;
          animation: sparkle 2s ease-in-out infinite;
        }
        .particle {
          position: absolute;
          width: 2px;
          height: 2px;
          background: rgba(255,255,255,0.3);
          border-radius: 50%;
          animation: float 4s ease-in-out infinite;
        }
      `}</style>

      <Footer style={{ 
        background: isDark ? colors.gradient.background : 'linear-gradient(135deg, #2c3e50 0%, #34495e 100%)',
        color: 'white', 
        textAlign: 'center',
        padding: '60px 24px 30px',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <Space direction="vertical" size="large" style={{ width: '100%' }}>
            <div style={{
              animation: isVisible ? 'slideUp 1s ease-out' : 'none'
            }}>
              <Title level={2} style={{ 
                color: colors.primary, 
                margin: 0,
                fontSize: 'clamp(2rem, 4vw, 2.5rem)'
              }}>
                Chan
              </Title>
            </div>
            
            <div style={{
              animation: isVisible ? 'slideUp 1s ease-out 0.2s both' : 'none'
            }}>
              <Space wrap size="large" style={{ justifyContent: 'center' }}>
                {footerLinks.map((link, index) => (
                  <Button 
                    key={index} 
                    type="link" 
                    href={link.href} 
                    style={{ 
                      color: 'rgba(255,255,255,0.8)',
                      fontSize: '16px',
                      fontWeight: '500',
                      transition: 'all 0.3s ease',
                      padding: '8px 16px',
                      borderRadius: '20px'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.color = colors.primary;
                      e.target.style.background = 'rgba(255,255,255,0.1)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.color = 'rgba(255,255,255,0.8)';
                      e.target.style.background = 'transparent';
                    }}
                  >
                    {link.label}
                  </Button>
                ))}
              </Space>
            </div>

            <div style={{
              animation: isVisible ? 'slideUp 1s ease-out 0.4s both' : 'none'
            }}>
              <Space size="large">
                {socialLinks.map((social, index) => (
                  <Button
                    key={index}
                    className="social-btn"
                    type="text"
                    icon={social.icon}
                    href={social.href}
                    target="_blank"
                    style={{ 
                      color: 'white',
                      fontSize: '24px',
                      width: '50px',
                      height: '50px',
                      borderRadius: '50%',
                      background: `${social.color}20`,
                      border: `2px solid ${social.color}40`,
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background = social.color;
                      e.target.style.borderColor = social.color;
                      e.target.style.transform = 'translateY(-3px)';
                      e.target.style.boxShadow = `0 8px 25px ${social.color}40`;
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = `${social.color}20`;
                      e.target.style.borderColor = `${social.color}40`;
                      e.target.style.transform = 'translateY(0)';
                      e.target.style.boxShadow = 'none';
                    }}
                  />
                ))}
              </Space>
            </div>

            <div style={{
              animation: isVisible ? 'fadeIn 1s ease-out 0.6s both' : 'none',
              borderTop: '1px solid rgba(255,255,255,0.1)',
              paddingTop: '20px',
              marginTop: '20px'
            }}>
              <Text style={{ 
                color: 'rgba(255,255,255,0.6)',
                fontSize: '14px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                flexWrap: 'wrap'
              }}>
                © 2024 Chan. Made with 
                <HeartFilled style={{ color: '#ff6b6b', animation: 'pulse 2s ease-in-out infinite' }} />
                All Rights Reserved
              </Text>
            </div>
          </Space>
        </div>
      </Footer>
    </>
  );
};

export default FooterAntd;