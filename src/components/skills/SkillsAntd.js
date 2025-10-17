import React from 'react';
import { Card, Progress, Row, Col, Typography, Space, Tag } from 'antd';
import { CodeOutlined, DatabaseOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

const SkillsAntd = () => {
  const frontendSkills = [
    { name: 'HTML', level: 90 },
    { name: 'CSS', level: 85 },
    { name: 'JavaScript', level: 80 },
    { name: 'React', level: 85 },
    { name: 'Vue.js', level: 70 },
    { name: 'TypeScript', level: 75 }
  ];

  const backendSkills = [
    { name: 'Node.js', level: 80 },
    { name: 'Python', level: 75 },
    { name: 'MongoDB', level: 70 },
    { name: 'MySQL', level: 80 },
    { name: 'Express.js', level: 85 },
    { name: 'REST APIs', level: 90 }
  ];

  const technologies = [
    'React', 'Node.js', 'MongoDB', 'Express.js', 'JavaScript', 'TypeScript',
    'Python', 'MySQL', 'Git', 'Docker', 'AWS', 'Firebase'
  ];

  const SkillCard = ({ title, icon, skills }) => (
    <Card
      title={
        <Space>
          {icon}
          <span>{title}</span>
        </Space>
      }
      hoverable
      style={{ height: '100%' }}
    >
      <Space direction="vertical" size="middle" style={{ width: '100%' }}>
        {skills.map((skill, index) => (
          <div key={index}>
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              marginBottom: '8px' 
            }}>
              <span style={{ fontWeight: 500 }}>{skill.name}</span>
              <span style={{ color: '#666' }}>{skill.level}%</span>
            </div>
            <Progress 
              percent={skill.level} 
              showInfo={false}
              strokeColor={{
                '0%': '#108ee9',
                '100%': '#87d068',
              }}
            />
          </div>
        ))}
      </Space>
    </Card>
  );

  return (
    <section className="skills section" id="skills">
      <div className="container">
        <Title level={2} style={{ textAlign: 'center', marginBottom: '8px' }}>
          Skills
        </Title>
        <Paragraph style={{ textAlign: 'center', marginBottom: '48px', color: '#666' }}>
          My Technical Level
        </Paragraph>

        <Row gutter={[32, 32]}>
          <Col xs={24} lg={12}>
            <SkillCard
              title="Frontend Developer"
              icon={<CodeOutlined style={{ color: '#1890ff' }} />}
              skills={frontendSkills}
            />
          </Col>
          
          <Col xs={24} lg={12}>
            <SkillCard
              title="Backend Developer"
              icon={<DatabaseOutlined style={{ color: '#1890ff' }} />}
              skills={backendSkills}
            />
          </Col>
        </Row>

        <Row style={{ marginTop: '48px' }}>
          <Col span={24}>
            <Card title="Technologies & Tools" hoverable>
              <Space size={[8, 16]} wrap>
                {technologies.map((tech, index) => (
                  <Tag 
                    key={index} 
                    color="blue" 
                    style={{ 
                      padding: '4px 12px', 
                      fontSize: '14px',
                      borderRadius: '16px'
                    }}
                  >
                    {tech}
                  </Tag>
                ))}
              </Space>
            </Card>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default SkillsAntd;