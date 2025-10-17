import React from 'react';
import { Carousel, Card, Avatar, Typography, Rate } from 'antd';
import { Data } from './Data';

const { Title, Paragraph } = Typography;

const TestimonialAntd = () => {
  return (
    <section id="testimonials" style={{ padding: '80px 0', background: '#fafafa' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        <Title level={2} style={{ textAlign: 'center', marginBottom: '8px' }}>My Clients Say</Title>
        <Paragraph style={{ textAlign: 'center', marginBottom: '48px', color: '#666' }}>Testimonials</Paragraph>
        
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <Carousel autoplay dots={{ className: 'custom-dots' }}>
            {Data.map(({ id, image, title, description }) => (
              <div key={id}>
                <Card
                  style={{ 
                    textAlign: 'center', 
                    margin: '0 16px',
                    borderRadius: '12px',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
                  }}
                  bodyStyle={{ padding: '32px' }}
                >
                  <Avatar src={image} size={80} style={{ marginBottom: '16px' }} />
                  <Title level={4} style={{ marginBottom: '8px' }}>{title}</Title>
                  <Rate disabled defaultValue={5} style={{ fontSize: '14px', marginBottom: '16px' }} />
                  <Paragraph style={{ color: '#666', fontSize: '16px', lineHeight: '1.6' }}>
                    "{description}"
                  </Paragraph>
                </Card>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default TestimonialAntd;