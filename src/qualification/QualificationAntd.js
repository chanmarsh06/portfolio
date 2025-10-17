import React, { useEffect, useState } from 'react';
import { Tabs, Timeline, Typography, Card } from 'antd';
import { BookOutlined, BankOutlined, CalendarOutlined } from '@ant-design/icons';
import { useTheme } from '../context/ThemeContext';

const { Title, Paragraph } = Typography;

const QualificationAntd = () => {
  const { colors } = useTheme();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const educationData = [
    { title: 'Web Developer', subtitle: 'Spain Institute', date: '2021 - Present', color: colors.primary },
    { title: 'React.js Developer', subtitle: 'Spain Institute', date: '2021 - Present', color: '#ff6b6b' },
    { title: 'Node.js Developer', subtitle: 'RGASC College', date: '2021 - Present', color: '#4ecdc4' },
    { title: 'MongoDB Developer', subtitle: 'Spain Institute', date: '2021 - Present', color: '#feca57' }
  ];

  const experienceData = [
    { title: 'Full Stack Developer', subtitle: 'Tech Company', date: '2022 - Present', color: colors.primary },
    { title: 'Frontend Developer', subtitle: 'Digital Agency', date: '2021 - 2022', color: '#ff6b6b' },
    { title: 'Junior Developer', subtitle: 'Startup Inc.', date: '2020 - 2021', color: '#4ecdc4' }
  ];

  const TimelineItem = ({ data }) => (
    <Timeline
      items={data.map((item, index) => ({
        dot: (
          <div 
            className="timeline-dot"
            style={{
              width: '20px',
              height: '20px',
              borderRadius: '50%',
              background: `linear-gradient(135deg, ${item.color} 0%, ${item.color}80 100%)`,
              boxShadow: `0 6px 20px ${item.color}50, 0 0 0 4px ${item.color}20`,
              border: '3px solid white',
              position: 'relative',
              transition: 'all 0.3s ease',
              animationDelay: `${index * 0.2}s`
            }}
          >
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: 'white',
              opacity: 0.8
            }} />
          </div>
        ),
        children: (
          <Card 
            className="qualification-card"
            size="small" 
            hoverable 
            style={{ 
              marginBottom: '24px',
              background: colors.gradient.card,
              backdropFilter: 'blur(10px)',
              border: 'none',
              borderRadius: '20px',
              boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
              borderLeft: `5px solid ${item.color}`,
              transition: 'all 0.4s ease',
              position: 'relative',
              overflow: 'hidden',
              animationDelay: `${index * 0.15}s`
            }}
          >
            <div style={{
              position: 'absolute',
              top: 0,
              right: 0,
              width: '60px',
              height: '60px',
              background: `${item.color}10`,
              borderRadius: '0 0 0 60px',
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'flex-start',
              padding: '8px'
            }}>
              <div style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: item.color,
                opacity: 0.6
              }} />
            </div>
            
            <Title level={5} style={{ 
              margin: 0, 
              marginBottom: '8px',
              color: colors.text,
              fontSize: '18px',
              fontWeight: '600'
            }}>
              {item.title}
            </Title>
            <Paragraph style={{ 
              margin: 0, 
              marginBottom: '12px', 
              color: colors.textSecondary,
              fontSize: '14px',
              fontWeight: '500'
            }}>
              {item.subtitle}
            </Paragraph>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              color: item.color,
              fontSize: '13px',
              fontWeight: '600',
              background: `${item.color}15`,
              padding: '6px 12px',
              borderRadius: '15px',
              width: 'fit-content'
            }}>
              <CalendarOutlined style={{ fontSize: '14px' }} />
              {item.date}
            </div>
          </Card>
        )
      }))}
    />
  );

  const tabItems = [
    {
      key: '1',
      label: (
        <span style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '6px',
          fontSize: '14px',
          fontWeight: '500'
        }}>
          <BookOutlined style={{ fontSize: '16px' }} />
          Education
        </span>
      ),
      children: <div style={{ marginBottom: '20px' }}><TimelineItem data={educationData} /></div>
    },
    {
      key: '2',
      label: (
        <span style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '6px',
          fontSize: '14px',
          fontWeight: '500'
        }}>
          <BankOutlined style={{ fontSize: '16px' }} />
          Experience
        </span>
      ),
      children: <div style={{ marginBottom: '20px' }}><TimelineItem data={experienceData} /></div>
    }
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
        @keyframes slideInLeft {
          from { transform: translateX(-30px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        @keyframes glow {
          0%, 100% { box-shadow: 0 4px 15px rgba(0,0,0,0.1); }
          50% { box-shadow: 0 8px 30px rgba(0,0,0,0.2); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        .qualification-card {
          animation: slideInLeft 0.6s ease-out;
          animation-fill-mode: both;
        }
        .qualification-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 40px rgba(0,0,0,0.15) !important;
        }
        .timeline-dot {
          animation: pulse 3s ease-in-out infinite;
        }
        .ant-tabs-tab {
          background: ${colors.gradient.card} !important;
          border-radius: 15px !important;
          margin-right: 12px !important;
          border: 1px solid transparent !important;
          transition: all 0.4s ease !important;
          position: relative !important;
          overflow: hidden !important;
          padding: 8px 16px !important;
          min-width: auto !important;
        }
        .ant-tabs-tab::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          transition: left 0.5s ease;
        }
        .ant-tabs-tab:hover::before {
          left: 100%;
        }
        .ant-tabs-tab-active {
          background: ${colors.primary} !important;
          color: white !important;
          border: 1px solid ${colors.primary} !important;
          box-shadow: 0 6px 20px ${colors.primary}40 !important;
          transform: translateY(-1px) !important;
        }
        .ant-tabs-tab-active .anticon {
          color: white !important;
        }
        .ant-tabs-tab-active span {
          color: white !important;
        }
        .ant-tabs-tab:hover {
          transform: translateY(-1px) !important;
          box-shadow: 0 6px 15px rgba(0,0,0,0.15) !important;
        }
        .ant-tabs-ink-bar {
          display: none !important;
        }
      `}</style>

      <section id="qualification" style={{ 
        padding: '90px 0',
        background: colors.gradient.background,
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Decorative Background Elements */}
        <div style={{
          position: 'absolute',
          top: '10%',
          left: '-5%',
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          background: `${colors.primary}10`,
          filter: 'blur(40px)',
          animation: 'float 6s ease-in-out infinite'
        }} />
        <div style={{
          position: 'absolute',
          bottom: '10%',
          right: '-5%',
          width: '150px',
          height: '150px',
          borderRadius: '50%',
          background: `${colors.secondary}10`,
          filter: 'blur(30px)',
          animation: 'float 8s ease-in-out infinite reverse'
        }} />
        
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
          <div style={{
            animation: isVisible ? 'fadeIn 1s ease-out' : 'none',
            textAlign: 'center',
            marginBottom: '60px'
          }}>
            <Title level={2} style={{ 
              marginBottom: '8px', 
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              color: colors.text
            }}>
              Qualification
            </Title>
            <Paragraph style={{ color: colors.textSecondary, fontSize: '18px' }}>
              My Personal Journey
            </Paragraph>
          </div>

          <div style={{ 
            maxWidth: '900px', 
            margin: '0 auto',
            animation: isVisible ? 'slideUp 1s ease-out 0.3s both' : 'none'
          }}>
            <Card style={{
              background: colors.gradient.card,
              backdropFilter: 'blur(10px)',
              border: 'none',
              borderRadius: '25px',
              boxShadow: '0 20px 60px rgba(0,0,0,0.1)',
              padding: '20px'
            }}>
              <Tabs
                defaultActiveKey="1"
                items={tabItems}
                centered
                size="default"
              />
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default QualificationAntd;