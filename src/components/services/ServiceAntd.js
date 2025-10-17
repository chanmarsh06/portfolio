import React, { useState, useEffect } from 'react';
import { Card, Modal, Button, Row, Col, Typography, List, Space } from 'antd';
import { 
  AppstoreOutlined, 
  BgColorsOutlined, 
  EditOutlined, 
  CheckCircleOutlined,
  ArrowRightOutlined 
} from '@ant-design/icons';
import { useTheme } from '../../context/ThemeContext';

const { Title, Paragraph } = Typography;

const ServiceAntd = () => {
  const { colors } = useTheme();
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      id: 1,
      icon: <AppstoreOutlined />,
      title: 'Product Designer',
      description: 'Service with more than 3 years of experience. Providing quality work to clients and companies.',
      features: [
        'I develop the user interface',
        'Web Page Development',
        'I Create UX Element Interactions',
        'I Position your company brand',
        'Design And Mockups of products for companies'
      ],
      color: colors.primary,
      gradient: colors.gradient.primary
    },
    {
      id: 2,
      icon: <BgColorsOutlined />,
      title: 'UI/UX Designer',
      description: 'Service with more than 3 years of experience. Providing quality work to clients and companies.',
      features: [
        'I develop the user interface',
        'Web Page Development',
        'I Create UX Element Interactions',
        'I Position your company brand',
        'Design And Mockups of products for companies'
      ],
      color: '#ff6b6b',
      gradient: 'linear-gradient(135deg, #ff6b6b 0%, #feca57 100%)'
    },
    {
      id: 3,
      icon: <EditOutlined />,
      title: 'Visual Designer',
      description: 'Service with more than 3 years of experience. Providing quality work to clients and companies.',
      features: [
        'I develop the user interface',
        'Web Page Development',
        'I Create UX Element Interactions',
        'I Position your company brand',
        'Design And Mockups of products for companies'
      ],
      color: '#4ecdc4',
      gradient: 'linear-gradient(135deg, #4ecdc4 0%, #44a08d 100%)'
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
        @keyframes hover-float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .service-card:hover {
          animation: hover-float 0.6s ease-in-out;
        }
      `}</style>

      <section id="services" style={{ 
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
              Services
            </Title>
            <Paragraph style={{ color: colors.textSecondary, fontSize: '18px' }}>
              What I Offer
            </Paragraph>
          </div>

          <Row gutter={[32, 32]}>
            {services.map((service, index) => (
              <Col xs={24} md={8} key={service.id}>
                <Card
                  className="service-card"
                  hoverable
                  style={{ 
                    height: '320px', 
                    textAlign: 'center',
                    background: colors.gradient.card,
                    backdropFilter: 'blur(10px)',
                    border: 'none',
                    borderRadius: '25px',
                    boxShadow: '0 15px 35px rgba(0,0,0,0.1)',
                    transition: 'all 0.3s ease',
                    animation: isVisible ? `slideUp 1s ease-out ${index * 0.2}s both` : 'none',
                    overflow: 'hidden',
                    position: 'relative'
                  }}
                  bodyStyle={{ 
                    padding: '40px 24px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    height: '100%',
                    position: 'relative'
                  }}
                >
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '4px',
                    background: service.gradient
                  }} />
                  
                  <Space direction="vertical" size="middle" style={{ width: '100%' }}>
                    <div style={{
                      fontSize: '48px',
                      color: service.color,
                      background: `${service.color}15`,
                      width: '80px',
                      height: '80px',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto',
                      boxShadow: `0 10px 30px ${service.color}30`
                    }}>
                      {service.icon}
                    </div>
                    <Title level={4} style={{ margin: 0, color: colors.text }}>
                      {service.title}
                    </Title>
                  </Space>
                  
                  <Button
                    type="link"
                    onClick={() => showModal(service)}
                    style={{ 
                      padding: 0, 
                      height: 'auto',
                      color: service.color,
                      fontWeight: '500',
                      fontSize: '16px'
                    }}
                  >
                    View More <ArrowRightOutlined />
                  </Button>
                </Card>
              </Col>
            ))}
          </Row>

          <Modal
            title={
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '12px',
                padding: '10px 0'
              }}>
                <div style={{
                  fontSize: '24px',
                  color: selectedService?.color,
                  background: `${selectedService?.color}15`,
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  {selectedService?.icon}
                </div>
                <span style={{ fontSize: '20px', fontWeight: '600' }}>
                  {selectedService?.title}
                </span>
              </div>
            }
            open={modalVisible}
            onCancel={handleCancel}
            footer={null}
            width={700}
            style={{ top: 20 }}
          >
            {selectedService && (
              <Space direction="vertical" size="large" style={{ width: '100%' }}>
                <Card style={{
                  background: `${selectedService.color}10`,
                  border: `1px solid ${selectedService.color}30`,
                  borderRadius: '15px'
                }}>
                  <Paragraph style={{ 
                    fontSize: '16px', 
                    color: colors.textSecondary,
                    margin: 0,
                    lineHeight: '1.6'
                  }}>
                    {selectedService.description}
                  </Paragraph>
                </Card>
                
                <List
                  dataSource={selectedService.features}
                  renderItem={(item, index) => (
                    <List.Item style={{
                      padding: '12px 0',
                      borderBottom: index === selectedService.features.length - 1 ? 'none' : `1px solid ${colors.border}`
                    }}>
                      <Space>
                        <CheckCircleOutlined style={{ 
                          color: selectedService.color, 
                          fontSize: '16px' 
                        }} />
                        <span style={{ fontSize: '15px', color: colors.text }}>{item}</span>
                      </Space>
                    </List.Item>
                  )}
                />
              </Space>
            )}
          </Modal>
        </div>
      </section>
    </>
  );
};

export default ServiceAntd;