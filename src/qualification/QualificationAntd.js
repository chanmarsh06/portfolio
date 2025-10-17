import React from 'react';
import { Tabs, Timeline, Typography, Card } from 'antd';
import { BookOutlined, BankOutlined, CalendarOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

const QualificationAntd = () => {
  const educationData = [
    { title: 'Web Developer', subtitle: 'Spain Institute', date: '2021 - Present' },
    { title: 'React.js Developer', subtitle: 'Spain Institute', date: '2021 - Present' },
    { title: 'Node.js Developer', subtitle: 'RGASC College', date: '2021 - Present' },
    { title: 'MongoDB Developer', subtitle: 'Spain Institute', date: '2021 - Present' }
  ];

  const experienceData = [
    { title: 'Full Stack Developer', subtitle: 'Tech Company', date: '2022 - Present' },
    { title: 'Frontend Developer', subtitle: 'Digital Agency', date: '2021 - 2022' },
    { title: 'Junior Developer', subtitle: 'Startup Inc.', date: '2020 - 2021' }
  ];

  const TimelineItem = ({ data }) => (
    <Timeline
      items={data.map(item => ({
        dot: <CalendarOutlined style={{ color: '#1890ff' }} />,
        children: (
          <Card size="small" hoverable style={{ marginBottom: '16px' }}>
            <Title level={5} style={{ margin: 0, marginBottom: '4px' }}>{item.title}</Title>
            <Paragraph style={{ margin: 0, marginBottom: '8px', color: '#666' }}>{item.subtitle}</Paragraph>
            <Paragraph style={{ margin: 0, fontSize: '12px', color: '#999' }}>{item.date}</Paragraph>
          </Card>
        )
      }))}
    />
  );

  const tabItems = [
    {
      key: '1',
      label: <span><BookOutlined />Education</span>,
      children: <TimelineItem data={educationData} />
    },
    {
      key: '2',
      label: <span><BankOutlined />Experience</span>,
      children: <TimelineItem data={experienceData} />
    }
  ];

  return (
    <section id="qualification" style={{ padding: '80px 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        <Title level={2} style={{ textAlign: 'center', marginBottom: '8px' }}>Qualification</Title>
        <Paragraph style={{ textAlign: 'center', marginBottom: '48px', color: '#666' }}>My Personal Journey</Paragraph>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <Tabs defaultActiveKey="1" items={tabItems} centered size="large" />
        </div>
      </div>
    </section>
  );
};

export default QualificationAntd;