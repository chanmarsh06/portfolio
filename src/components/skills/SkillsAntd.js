import React, { useEffect, useState } from 'react';
import { Card, Progress, Row, Col, Typography, Space, Tag } from 'antd';
import { HiCode, HiDatabase, HiLightningBolt, HiServer } from 'react-icons/hi';
import { useTheme } from '../../context/ThemeContext';
import { 
  SiHtml5, SiCss3, SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiRedux, SiMui, SiBootstrap, SiJest,
  SiNodedotjs, SiExpress, SiMongodb, SiMysql, SiJsonwebtokens, SiPython, SiGit, SiFirebase, SiPostman
} from 'react-icons/si';
import { FaAws, FaDocker, FaGitAlt } from 'react-icons/fa';
import { MdOutlineCode } from 'react-icons/md';

const { Title, Paragraph } = Typography;

const SkillsAntd = () => {
  const { colors } = useTheme();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const frontendSkills = [
    { name: 'HTML5', level: 90, color: '#e34c26', icon: <SiHtml5 color="#e34c26" /> },
    { name: 'CSS3 / SCSS', level: 85, color: '#1572b6', icon: <SiCss3 color="#1572b6" /> },
    { name: 'JavaScript', level: 85, color: '#f7df1e', icon: <SiJavascript color="#f7df1e" /> },
    { name: 'TypeScript', level: 80, color: '#3178c6', icon: <SiTypescript color="#3178c6" /> },
    { name: 'React.js', level: 90, color: '#61dafb', icon: <SiReact color="#61dafb" /> },
    { name: 'Next.js', level: 85, color: '#000000', icon: <SiNextdotjs color="#000000" /> },
    { name: 'Redux / Redux Toolkit', level: 80, color: '#764abc', icon: <SiRedux color="#764abc" /> },
    { name: 'Material-UI', level: 85, color: '#007fff', icon: <SiMui color="#007fff" /> },
    { name: 'Bootstrap', level: 75, color: '#7952b3', icon: <SiBootstrap color="#7952b3" /> },

  ];

  const backendSkills = [
    { name: 'Node.js', level: 85, color: '#339933', icon: <SiNodedotjs color="#339933" /> },
    { name: 'Express.js', level: 80, color: '#000000', icon: <SiExpress color="#000000" /> },
    { name: 'MongoDB', level: 80, color: '#47a248', icon: <SiMongodb color="#47a248" /> },
    { name: 'MySQL', level: 75, color: '#4479a1', icon: <SiMysql color="#4479a1" /> },
    { name: 'JWT Authentication', level: 80, color: '#ffca28', icon: <SiJsonwebtokens color="#ffca28" /> },
    { name: 'API Integration', level: 85, color: colors.primary, icon: <HiServer color={colors.primary} /> },
        { name: 'Jest (Testing)', level: 70, color: '#99424f', icon: <SiJest color="#99424f" /> },
    { name: 'RESTful APIs', level: 90, color: '#ff7f50', icon: <HiServer color="#ff7f50" /> },
    { name: 'Git & GitHub', level: 85, color: '#f05032', icon: <SiGit color="#f05032" /> }
  ];

  const technologies = [
    { name: 'React', color: '#61dafb', icon: <SiReact color="#61dafb" /> },
    { name: 'Node.js', color: '#339933', icon: <SiNodedotjs color="#339933" /> },
    { name: 'MongoDB', color: '#47a248', icon: <SiMongodb color="#47a248" /> },
    { name: 'Express.js', color: '#000000', icon: <SiExpress color="#000000" /> },
    { name: 'JavaScript', color: '#f7df1e', icon: <SiJavascript color="#f7df1e" /> },
    { name: 'TypeScript', color: '#3178c6', icon: <SiTypescript color="#3178c6" /> },
    { name: 'Python', color: '#3776ab', icon: <SiPython color="#3776ab" /> },
    { name: 'Git', color: '#f05032', icon: <SiGit color="#f05032" /> },
  ];

const tools = [
  { name: 'VS Code', color: '#007ACC', icon: <MdOutlineCode color="#007ACC" /> }, // VS Code
  { name: 'Postman', color: '#FF6C37', icon: <SiPostman color="#FF6C37" /> },
  { name: 'Docker', color: '#2496ED', icon: <FaDocker color="#2496ED" /> },
  { name: 'AWS', color: '#FF9900', icon: <FaAws color="#FF9900" /> },
  { name: 'Firebase', color: '#FFCA28', icon: <SiFirebase color="#FFCA28" /> },
  { name: 'Git', color: '#F05032', icon: <FaGitAlt color="#F05032" /> },
];


  const technologiesAndTools = [...technologies, ...tools];

  const SkillCard = ({ title, icon, skills, delay = 0 }) => (
    <Card
      className="skill-card"
      title={
        <div className="skill-card-header">
          <div className="skill-icon-wrapper">
            {icon}
          </div>
          <span className="skill-title">{title}</span>
        </div>
      }
      style={{
        height: '100%',
        background: colors.gradient.card,
        backdropFilter: 'blur(10px)',
        border: 'none',
        borderRadius: '25px',
        boxShadow: '0 10px 40px rgba(0,0,0,0.12)',
        animation: isVisible ? `slideUp 1s ease-out ${delay}s both` : 'none',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item" style={{ animationDelay: `${delay + index * 0.1}s` }}>
            <div className="skill-header">
              <div className="skill-info">
                <span className="skill-icon">{skill.icon}</span>
                <span className="skill-name">{skill.name}</span>
              </div>
              <span className="skill-percentage" style={{ color: skill.color }}>{skill.level}%</span>
            </div>
            <div className="progress-container">
              <Progress
                percent={skill.level}
                showInfo={false}
                strokeColor={{
                  '0%': skill.color,
                  '100%': `${skill.color}cc`,
                }}
                trailColor={`${colors.border}40`}
                strokeWidth={10}
                strokeLinecap="round"
              />
            </div>
          </div>
        ))}
      </div>
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
        @keyframes skillSlideIn {
          from { transform: translateX(-30px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        @keyframes iconPulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
        @keyframes progressGlow {
          0%, 100% { box-shadow: 0 0 5px rgba(0,0,0,0.1); }
          50% { box-shadow: 0 0 20px rgba(0,0,0,0.2); }
        }
        
        .skill-card {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
        }
        .skill-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, ${colors.primary}, #ff6b6b, #4ecdc4);
          border-radius: 25px 25px 0 0;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .skill-card:hover::before {
          opacity: 1;
        }
        .skill-card:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 20px 60px rgba(0,0,0,0.15);
        }
        
        .skill-card-header {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .skill-icon-wrapper {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: linear-gradient(135deg, ${colors.primary}20, ${colors.primary}10);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          color: ${colors.primary};
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        .skill-icon-wrapper::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
          transition: left 0.5s ease;
        }
        .skill-card:hover .skill-icon-wrapper {
          animation: iconPulse 1s ease-in-out;
          background: ${colors.primary};
          color: white;
        }
        .skill-card:hover .skill-icon-wrapper::before {
          left: 100%;
        }
        .skill-title {
          color: ${colors.text};
          font-size: 20px;
          font-weight: 600;
          letter-spacing: 0.5px;
        }
        
        .skills-container {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-top: 8px;
        }
        .skill-item {
          animation: skillSlideIn 0.6s ease-out;
          animation-fill-mode: both;
          transition: all 0.3s ease;
          padding: 16px;
          border-radius: 15px;
          background: rgba(255,255,255,0.02);
          border: 1px solid transparent;
        }
        .skill-item:hover {
          background: rgba(255,255,255,0.05);
          border-color: ${colors.primary}20;
          transform: translateX(8px);
        }
        
        .skill-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 12px;
        }
        .skill-info {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .skill-icon {
          font-size: 20px;
          transition: transform 0.3s ease;
        }
        .skill-item:hover .skill-icon {
          transform: scale(1.2) rotate(5deg);
        }
        .skill-name {
          font-weight: 600;
          color: ${colors.text};
          font-size: 15px;
          letter-spacing: 0.3px;
        }
        .skill-percentage {
          font-weight: 700;
          font-size: 16px;
          padding: 4px 12px;
          border-radius: 12px;
          background: rgba(255,255,255,0.1);
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
        }
        .skill-item:hover .skill-percentage {
          transform: scale(1.1);
          box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        }
        
        .progress-container {
          position: relative;
        }
        .progress-container .ant-progress-bg {
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
          animation: progressGlow 2s ease-in-out infinite;
        }
        .skill-item:hover .progress-container .ant-progress-bg {
          box-shadow: 0 0 15px currentColor;
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
                icon={<HiCode />}
                skills={frontendSkills}
                delay={0.2}
              />
            </Col>

            <Col xs={24} lg={12}>
              <SkillCard
                title="Backend Developer"
                icon={<HiDatabase />}
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
                      <HiLightningBolt />
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
                  {technologiesAndTools.map((tech, index) => (
                    <Tag
                      key={index}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        padding: '10px 16px',
                        fontSize: '14px',
                        borderRadius: '25px',
                        border: `2px solid ${tech.color}25`,
                        background: `${tech.color}12`,
                        color: tech.color,
                        fontWeight: '600',
                        animation: `float 3s ease-in-out infinite ${index * 0.1}s`,
                        transition: 'all 0.3s ease',
                        cursor: 'pointer'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.transform = 'translateY(-4px) scale(1.05)';
                        e.target.style.background = `${tech.color}20`;
                        e.target.style.boxShadow = `0 8px 25px ${tech.color}30`;
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.transform = 'translateY(0) scale(1)';
                        e.target.style.background = `${tech.color}12`;
                        e.target.style.boxShadow = 'none';
                      }}
                    >
                      {tech.icon} {tech.name}
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
