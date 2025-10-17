import React, { useState } from 'react';
import { Card, Modal, Button, Row, Col, Typography, List, Space } from 'antd';
import { 
  AppstoreOutlined, 
  BgColorsOutlined, 
  EditOutlined, 
  CheckCircleOutlined,
  ArrowRightOutlined 
} from '@ant-design/icons';

const { Title, Paragraph } = Typography;

const ServiceAntd = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      id: 1,
      icon: <AppstoreOutlined style={{ fontSize: '32px', color: '#1890ff' }} />,
      title: 'Product Designer',
      description: 'Service with more than 3 years of experience. Providing quality work to clients and companies.',
      features: [
        'I develop the user interface',
        'Web Page Development',
        'I Create UX Element Interactions',
        'I Position your company brand',
        'Design And Mockups of products for companies'
      ]
    },
    {
      id: 2,
      icon: <BgColorsOutlined style={{ fontSize: '32px', color: '#1890ff' }} />,
      title: 'UI/UX Designer',
      description: 'Service with more than 3 years of experience. Providing quality work to clients and companies.',
      features: [
        'I develop the user interface',
        'Web Page Development',
        'I Create UX Element Interactions',
        'I Position your company brand',
        'Design And Mockups of products for companies'
      ]
    },
    {
      id: 3,
      icon: <EditOutlined style={{ fontSize: '32px', color: '#1890ff' }} />,
      title: 'Visual Designer',
      description: 'Service with more than 3 years of experience. Providing quality work to clients and companies.',
      features: [
        'I develop the user interface',
        'Web Page Development',
        'I Create UX Element Interactions',
        'I Position your company brand',
        'Design And Mockups of products for companies'
      ]
    }
  ];

  const showModal = (service) => {
    setSelectedService(service);
    setModalVisible(true);
  };

  const handleCancel = () => {
    setModalVisible(false);
    setSelectedService(null);
  };

  return (
    <section className="services section" id="services">
      <div className="container">
        <Title level={2} style={{ textAlign: 'center', marginBottom: '8px' }}>
          Services
        </Title>
        <Paragraph style={{ textAlign: 'center', marginBottom: '48px', color: '#666' }}>
          What I Offer
        </Paragraph>

        <Row gutter={[24, 24]}>
          {services.map((service) => (
            <Col xs={24} md={8} key={service.id}>
              <Card
                hoverable
                style={{ height: '280px', textAlign: 'center' }}
                bodyStyle={{ 
                  padding: '32px 24px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  height: '100%'
                }}
              >
                <Space direction="vertical" size="middle" style={{ width: '100%' }}>
                  {service.icon}
                  <Title level={4} style={{ margin: 0 }}>
                    {service.title}
                  </Title>
                </Space>
                
                <Button
                  type="link"
                  onClick={() => showModal(service)}
                  style={{ padding: 0, height: 'auto' }}
                >
                  View More <ArrowRightOutlined />
                </Button>
              </Card>
            </Col>
          ))}
        </Row>

        <Modal
          title={selectedService?.title}
          open={modalVisible}
          onCancel={handleCancel}
          footer={null}
          width={600}
        >
          {selectedService && (
            <Space direction="vertical" size="large" style={{ width: '100%' }}>
              <Paragraph style={{ fontSize: '16px', color: '#666' }}>
                {selectedService.description}
              </Paragraph>
              
              <List
                dataSource={selectedService.features}
                renderItem={(item) => (
                  <List.Item>
                    <Space>
                      <CheckCircleOutlined style={{ color: '#52c41a' }} />
                      <span>{item}</span>
                    </Space>
                  </List.Item>
                )}
              />
            </Space>
          )}
        </Modal>
      </div>
    </section>
  );
};

export default ServiceAntd;