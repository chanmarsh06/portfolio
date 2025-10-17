import React, { useEffect, useState } from 'react';
import { Card, Progress, Row, Col, Typography, Space, Tag } from 'antd';
import { CodeOutlined, DatabaseOutlined, RocketOutlined } from '@ant-design/icons';
import { useTheme } from '../../context/ThemeContext';

const { Title, Paragraph } = Typography;

const SkillsAntd = () => {
  const { colors } = useTheme();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const frontendSkills = [
    { name: 'HTML', level: 90, color: '#e34c26' },
    { name: 'CSS', level: 85, color: '#1572b6' },
    { name: 'JavaScript', level: 80, color: '#f7df1e' },
    { name: 'React', level: 85, color: '#61dafb' },
    { name: 'Vue.js', level: 70, color: '#4fc08d' },
    { name: 'TypeScript', level: 75, color: '#3178c6' }
  ];

  const backendSkills = [
    { name: 'Node.js', level: 80, color: '#339933' },
    { name: 'Python', level: 75, color: '#3776ab' },
    { name: 'MongoDB', level: 70, color: '#47a248' },
    { name: 'MySQL', level: 80, color: '#4479a1' },
    { name: 'Express.js', level: 85, color: '#000000' },
    { name: 'REST APIs', level: 90, color: colors.primary }
  ];

  const technologies = [
    { name: 'React', color: '#61dafb' },
    { name: 'Node.js', color: '#339933' },
    { name: 'MongoDB', color: '#47a248' },
    { name: 'Express.js', color: '#000000' },
    { name: 'JavaScript', color: '#f7df1e' },
    { name: 'TypeScript', color: '#3178c6' },
    { name: 'Python', color: '#3776ab' },
    { name: 'MySQL', color: '#4479a1' },
    { name: 'Git', color: '#f05032' },
    { name: 'Docker', color: '#2496ed' },
    { name: 'AWS', color: '#ff9900' },
    { name: 'Firebase', color: '#ffca28' }
  ];

  const SkillCard = ({ title, icon, skills, delay = 0 }) => (
    <Card
      title={
        <Space>
          <div style={{
            fontSize: '24px',
            color: colors.primary,
            background: `${colors.primary}20`,
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            {icon}
          </div>
          <span style={{ color: colors.text, fontSize: '18px' }}>{title}</span>
        </Space>
      }
      style={{ 
        height: '100%',
        background: colors.gradient.card,
        backdropFilter: 'blur(10px)',
        border: 'none',
        borderRadius: '20px',
        boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
        animation: isVisible ? `slideUp 1s ease-out ${delay}s both` : 'none'
      }}
    >
      <Space direction="vertical" size="middle" style={{ width: '100%' }}>
        {skills.map((skill, index) => (
          <div key={index}>
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              marginBottom: '8px' 
            }}>
              <span style={{ fontWeight: 500, color: colors.text }}>{skill.name}</span>
              <span style={{ color: skill.color, fontWeight: 'bold' }}>{skill.level}%</span>
            </div>
            <Progress 
              percent={skill.level} 
              showInfo={false}
              strokeColor={{
                '0%': skill.color,
                '100%': `${skill.color}80`,
              }}
              trailColor={colors.border}
              strokeWidth={8}
              style={{ marginBottom: '4px' }}
            />
          </div>
        ))}
      </Space>
    </Card>
  );

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
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
      `}</style>

      <section id="skills" style={{ 
        padding: '90px 0',
        background: colors.gradient.background,
        position: 'relative',
        overflow: 'hidden'
      }}>
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
              Skills
            </Title>
            <Paragraph style={{ color: colors.textSecondary, fontSize: '18px' }}>
              My Technical Level
            </Paragraph>
          </div>

          <Row gutter={[32, 32]}>
            <Col xs={24} lg={12}>
              <SkillCard
                title="Frontend Developer"
                icon={<CodeOutlined />}
                skills={frontendSkills}
                delay={0.2}
              />
            </Col>
            
            <Col xs={24} lg={12}>
              <SkillCard
                title="Backend Developer"
                icon={<DatabaseOutlined />}
                skills={backendSkills}
                delay={0.4}
              />
            </Col>
          </Row>

          <Row style={{ marginTop: '48px' }}>
            <Col span={24}>
              <Card 
                title={
                  <Space>
                    <div style={{
                      fontSize: '24px',
                      color: '#ff6b6b',
                      background: 'rgba(255, 107, 107, 0.1)',
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <RocketOutlined />
                    </div>
                    <span style={{ color: colors.text, fontSize: '18px' }}>Technologies & Tools</span>
                  </Space>
                }
                style={{
                  background: colors.gradient.card,
                  backdropFilter: 'blur(10px)',
                  border: 'none',
                  borderRadius: '20px',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
                  animation: isVisible ? 'slideUp 1s ease-out 0.6s both' : 'none'
                }}
              >
                <Space size={[12, 16]} wrap>
                  {technologies.map((tech, index) => (
                    <Tag 
                      key={index} 
                      style={{ 
                        padding: '8px 16px', 
                        fontSize: '14px',
                        borderRadius: '20px',
                        border: `2px solid ${tech.color}20`,
                        background: `${tech.color}10`,
                        color: tech.color,
                        fontWeight: '500',
                        animation: `float 3s ease-in-out infinite ${index * 0.1}s`
                      }}
                    >
                      {tech.name}
                    </Tag>
                  ))}
                </Space>
              </Card>
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
};

export default SkillsAntd;