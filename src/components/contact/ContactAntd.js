import React from 'react';
import { Form, Input, Button, Card, Row, Col, Typography, Space, message } from 'antd';
import { MailOutlined, WhatsAppOutlined, MessageOutlined, SendOutlined } from '@ant-design/icons';
import emailjs from '@emailjs/browser';

const { Title, Paragraph } = Typography;
const { TextArea } = Input;

const ContactAntd = () => {
  const [form] = Form.useForm();

  const onFinish = async (values) => {
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
    }
  };

  const contactCards = [
    {
      icon: <MailOutlined style={{ fontSize: '24px', color: '#1890ff' }} />,
      title: 'Email',
      data: 'chandrasekaranmca06@gmail.com',
      link: 'mailto:chandrasekaranmca06@gmail.com',
      buttonText: 'Write Me'
    },
    {
      icon: <WhatsAppOutlined style={{ fontSize: '24px', color: '#25D366' }} />,
      title: 'WhatsApp',
      data: '6385555688',
      link: 'https://web.whatsapp.com/1874660599',
      buttonText: 'Write Me'
    },
    {
      icon: <MessageOutlined style={{ fontSize: '24px', color: '#0084ff' }} />,
      title: 'Messenger',
      data: '899947653',
      link: 'https://web.whatsapp.com/',
      buttonText: 'Write Me'
    }
  ];

  return (
    <section className="contact section" id="contact">
      <div className="container">
        <Title level={2} style={{ textAlign: 'center', marginBottom: '8px' }}>
          Get In Touch
        </Title>
        <Paragraph style={{ textAlign: 'center', marginBottom: '48px', color: '#666' }}>
          Contact Me
        </Paragraph>

        <Row gutter={[32, 32]}>
          <Col xs={24} lg={12}>
            <Title level={3} style={{ marginBottom: '24px' }}>
              Talk to Me
            </Title>
            <Space direction="vertical" size="large" style={{ width: '100%' }}>
              {contactCards.map((card, index) => (
                <Card key={index} hoverable style={{ textAlign: 'center' }}>
                  <Space direction="vertical" size="middle">
                    {card.icon}
                    <Title level={4} style={{ margin: 0 }}>
                      {card.title}
                    </Title>
                    <Paragraph style={{ margin: 0, color: '#666' }}>
                      {card.data}
                    </Paragraph>
                    <Button 
                      type="link" 
                      href={card.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {card.buttonText} →
                    </Button>
                  </Space>
                </Card>
              ))}
            </Space>
          </Col>

          <Col xs={24} lg={12}>
            <Title level={3} style={{ marginBottom: '24px' }}>
              Write Me Your Project
            </Title>
            <Card>
              <Form
                form={form}
                layout="vertical"
                onFinish={onFinish}
                requiredMark={false}
              >
                <Form.Item
                  name="name"
                  label="Name"
                  rules={[
                    { required: true, message: 'Please enter your name' },
                    { min: 2, message: 'Name must be at least 2 characters' }
                  ]}
                >
                  <Input placeholder="Enter Your Name" size="large" />
                </Form.Item>

                <Form.Item
                  name="email"
                  label="Email"
                  rules={[
                    { required: true, message: 'Please enter your email' },
                    { type: 'email', message: 'Please enter a valid email' }
                  ]}
                >
                  <Input placeholder="Enter Your Email" size="large" />
                </Form.Item>

                <Form.Item
                  name="project"
                  label="Project"
                  rules={[
                    { required: true, message: 'Please describe your project' },
                    { min: 10, message: 'Project description must be at least 10 characters' }
                  ]}
                >
                  <TextArea
                    placeholder="Write Your Project"
                    rows={6}
                    size="large"
                  />
                </Form.Item>

                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    size="large"
                    icon={<SendOutlined />}
                    block
                  >
                    Send Message
                  </Button>
                </Form.Item>
              </Form>
            </Card>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default ContactAntd;