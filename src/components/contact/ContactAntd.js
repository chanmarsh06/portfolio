import React, { useEffect, useState } from 'react';
import { Form, Input, Button, Card, Row, Col, Typography, Space, message } from 'antd';
import { MailOutlined, WhatsAppOutlined, MessageOutlined, SendOutlined } from '@ant-design/icons';
import { useTheme } from '../../context/ThemeContext';
import emailjs from '@emailjs/browser';

const { Title, Paragraph } = Typography;
const { TextArea } = Input;

const ContactAntd = () => {
  const { colors } = useTheme();
  const [form] = Form.useForm();
  const [isVisible, setIsVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const onFinish = async (values) => {
    setLoading(true);
    try {
      await emailjs.send(
        'service_ly2h5xv',
        'template_9124mie',
        values,
        'OL-fSC3YgwqNm5ws2'
      );
      message.success('Message sent successfully!');
      form.resetFields();
    } catch (error) {
      message.error('Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const contactCards = [
    {
      icon: <MailOutlined />,
      title: 'Email',
      data: 'chandrasekaranmca06@gmail.com',
      link: 'mailto:chandrasekaranmca06@gmail.com',
      buttonText: 'Write Me',
      color: colors.primary,
      gradient: colors.gradient.primary
    },
    {
      icon: <WhatsAppOutlined />,
      title: 'WhatsApp',
      data: '6385555688',
      link: 'https://web.whatsapp.com/1874660599',
      buttonText: 'Write Me',
      color: '#25D366',
      gradient: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)'
    },
    {
      icon: <MessageOutlined />,
      title: 'Messenger',
      data: '899947653',
      link: 'https://web.whatsapp.com/',
      buttonText: 'Write Me',
      color: '#0084ff',
      gradient: 'linear-gradient(135deg, #0084ff 0%, #0066cc 100%)'
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
        @keyframes cardHover {
          0% { transform: translateY(0) scale(1); }
          100% { transform: translateY(-2px) scale(1.02); }
        }
        .contact-card:hover {
          animation: cardHover 0.3s ease-out forwards;
          box-shadow: 0 12px 35px rgba(0,0,0,0.15) !important;
        }
        .contact-card:hover .contact-icon {
          transform: scale(1.1);
        }
        .contact-icon {
          transition: transform 0.3s ease;
        }
      `}</style>

      <section id="contact" style={{ 
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
              Get In Touch
            </Title>
            <Paragraph style={{ color: colors.textSecondary, fontSize: '18px' }}>
              Contact Me
            </Paragraph>
          </div>

          <Row gutter={[32, 32]}>
            <Col xs={24} lg={12}>
              <div style={{
                animation: isVisible ? 'slideUp 1s ease-out 0.2s both' : 'none'
              }}>
                <Title level={3} style={{ marginBottom: '32px', color: colors.text }}>
                  Talk to Me
                </Title>
                <div style={{ 
                  display: 'flex', 
                  flexDirection: 'column', 
                  gap: '16px'
                }}>
                  {contactCards.map((card, index) => (
                    <Card 
                      key={index} 
                      className="contact-card"
                      hoverable 
                      style={{ 
                        background: colors.gradient.card,
                        backdropFilter: 'blur(10px)',
                        border: `1px solid ${card.color}20`,
                        borderRadius: '20px',
                        boxShadow: `0 8px 25px ${card.color}15`,
                        transition: 'all 0.3s ease',
                        position: 'relative',
                        overflow: 'hidden',
                        // height: '80px'
                      }}
                    >
                      <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: '3px',
                        background: card.gradient
                      }} />
                      
                      <div style={{ padding: '0 20px', display: 'flex', alignItems: 'center', gap: '16px', height: '77px' }}>
                        <div className="contact-icon" style={{
                          fontSize: '20px',
                          color: card.color,
                          background: `${card.color}15`,
                          width: '48px',
                          height: '48px',
                          borderRadius: '12px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          boxShadow: `0 4px 15px ${card.color}25`,
                          flexShrink: 0,
                          border: `2px solid ${card.color}20`
                        }}>
                          {card.icon}
                        </div>
                        <div style={{ flex: 1, textAlign: 'left', minWidth: 0 }}>
                          <Title level={5} style={{ 
                            margin: 0, 
                            marginBottom: '4px', 
                            color: colors.text, 
                            fontSize: '16px', 
                            lineHeight: 1.3,
                            fontWeight: '600'
                          }}>
                            {card.title}
                          </Title>
                          <Paragraph style={{ 
                            margin: 0, 
                            color: colors.textSecondary, 
                            fontSize: '13px', 
                            lineHeight: 1.3,
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap'
                          }}>
                            {card.data}
                          </Paragraph>
                        </div>
                        <Button 
                          type="primary"
                          href={card.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            background: card.color,
                            borderColor: card.color,
                            color: '#fff',
                            fontWeight: '600',
                            fontSize: '12px',
                            padding: '6px 16px',
                            height: '36px',
                            borderRadius: '18px',
                            flexShrink: 0,
                            boxShadow: `0 4px 12px ${card.color}30`,
                            border: 'none'
                          }}
                        >
                          {card.buttonText}
                        </Button>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </Col>

            <Col xs={24} lg={12}>
              <div style={{
                animation: isVisible ? 'slideUp 1s ease-out 0.4s both' : 'none'
              }}>
                <Title level={3} style={{ marginBottom: '32px', color: colors.text }}>
                  Write Me Your Project
                </Title>
                <Card style={{
                  background: colors.gradient.card,
                  backdropFilter: 'blur(10px)',
                  border: 'none',
                  borderRadius: '20px',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.1)'
                }}>
                  <Form
                    form={form}
                    layout="vertical"
                    onFinish={onFinish}
                    requiredMark={false}
                  >
                    <Form.Item
                      name="name"
                      label={<span style={{ fontWeight: '500', color: colors.text }}>Name</span>}
                      rules={[
                        { required: true, message: 'Please enter your name' },
                        { min: 2, message: 'Name must be at least 2 characters' }
                      ]}
                      style={{ marginBottom: '16px' }}
                    >
                      <Input 
                        placeholder="Enter Your Name" 
                        size="middle"
                        style={{ 
                          borderRadius: '12px',
                          border: `2px solid ${colors.border}`,
                          transition: 'all 0.3s ease'
                        }}
                      />
                    </Form.Item>

                    <Form.Item
                      name="email"
                      label={<span style={{ fontWeight: '500', color: colors.text }}>Email</span>}
                      rules={[
                        { required: true, message: 'Please enter your email' },
                        { type: 'email', message: 'Please enter a valid email' }
                      ]}
                      style={{ marginBottom: '16px' }}
                    >
                      <Input 
                        placeholder="Enter Your Email" 
                        size="middle"
                        style={{ 
                          borderRadius: '12px',
                          border: `2px solid ${colors.border}`,
                          transition: 'all 0.3s ease'
                        }}
                      />
                    </Form.Item>

                    <Form.Item
                      name="project"
                      label={<span style={{ fontWeight: '500', color: colors.text }}>Project</span>}
                      rules={[
                        { required: true, message: 'Please describe your project' },
                        { min: 10, message: 'Project description must be at least 10 characters' }
                      ]}
                      style={{ marginBottom: '16px' }}
                    >
                      <TextArea
                        placeholder="Write Your Project"
                        rows={5}
                        size="middle"
                        style={{ 
                          borderRadius: '12px',
                          border: `2px solid ${colors.border}`,
                          transition: 'all 0.3s ease',
                          resize: 'none'
                        }}
                      />
                    </Form.Item>

                    <Form.Item style={{ marginBottom: 0 }}>
                      <Button
                        type="primary"
                        htmlType="submit"
                        size="middle"
                        icon={<SendOutlined />}
                        loading={loading}
                        block
                        style={{
                          borderRadius: '20px',
                          background: colors.gradient.primary,
                          border: 'none',
                          boxShadow: `0 4px 15px ${colors.primary}40`,
                          height: '40px',
                          fontSize: '14px',
                          fontWeight: '500'
                        }}
                      >
                        Send Message
                      </Button>
                    </Form.Item>
                  </Form>
                </Card>
              </div>
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
};

export default ContactAntd;