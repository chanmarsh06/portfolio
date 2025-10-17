import React from 'react';
import { Card, Button, Row, Col, Typography, Avatar, Descriptions, Space } from 'antd';
import { DownloadOutlined, TrophyOutlined, FolderOpenOutlined, SmileOutlined } from '@ant-design/icons';
import AboutImg from '../../assests/about.jpg';
import CV from '../../assests/chan_resume.pdf';

const { Title, Paragraph } = Typography;

const AboutAntd = () => {
  const infoData = [
    {
      icon: <TrophyOutlined style={{ fontSize: '20px', color: '#1890ff' }} />,
      title: 'Experience',
      subtitle: '3+ Years Working'
    },
    {
      icon: <FolderOpenOutlined style={{ fontSize: '20px', color: '#1890ff' }} />,
      title: 'Completed',
      subtitle: '48+ Projects'
    },
    {
      icon: <SmileOutlined style={{ fontSize: '20px', color: '#1890ff' }} />,
      title: 'Support',
      subtitle: 'Online 24/7'
    }
  ];

  return (
    <section className="about section" id="about">
      <div className="container">
        <Title level={2} style={{ textAlign: 'center', marginBottom: '8px' }}>
          About Me
        </Title>
        <Paragraph style={{ textAlign: 'center', marginBottom: '48px', color: '#666' }}>
          My Introduction
        </Paragraph>

        <Row gutter={[32, 32]} align="middle">
          <Col xs={24} lg={12} style={{ textAlign: 'center' }}>
            <Avatar
              src={AboutImg}
              size={{ xs: 200, sm: 240, md: 280 }}
              style={{ 
                border: '4px solid #f0f0f0',
                boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
              }}
            />
          </Col>

          <Col xs={24} lg={12}>
            <Space direction="vertical" size="large" style={{ width: '100%' }}>
              <Row gutter={[16, 16]}>
                {infoData.map((item, index) => (
                  <Col xs={24} sm={8} key={index}>
                    <Card 
                      hoverable 
                      style={{ textAlign: 'center', height: '120px' }}
                      bodyStyle={{ padding: '16px' }}
                    >
                      <Space direction="vertical" size="small">
                        {item.icon}
                        <Title level={5} style={{ margin: 0, fontSize: '14px' }}>
                          {item.title}
                        </Title>
                        <Paragraph style={{ margin: 0, fontSize: '12px', color: '#666' }}>
                          {item.subtitle}
                        </Paragraph>
                      </Space>
                    </Card>
                  </Col>
                ))}
              </Row>

              <Paragraph style={{ fontSize: '16px', lineHeight: '1.6', color: '#666' }}>
                Passionate full-stack developer with expertise in modern web technologies. 
                I create responsive, user-friendly applications that deliver exceptional user experiences. 
                Always eager to learn new technologies and take on challenging projects.
              </Paragraph>

              <Button
                type="primary"
                size="large"
                icon={<DownloadOutlined />}
                href={CV}
                download
                style={{ width: 'fit-content' }}
              >
                Download CV
              </Button>
            </Space>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default AboutAntd;