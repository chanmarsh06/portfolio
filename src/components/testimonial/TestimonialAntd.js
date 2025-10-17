import React, { useEffect, useState, useRef } from 'react';
import { Carousel, Card, Avatar, Typography, Rate, Button } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { useTheme } from '../../context/ThemeContext';
import { Data } from './Data';

const { Title, Paragraph } = Typography;

const TestimonialAntd = () => {
  const { colors } = useTheme();
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handlePrevious = () => {
    carouselRef.current?.prev();
  };

  const handleNext = () => {
    carouselRef.current?.next();
  };

  const goToSlide = (index) => {
    carouselRef.current?.goTo(index);
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
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .testimonial-card {
          transition: all 0.4s ease;
        }
        .testimonial-card:hover {
          transform: scale(1.05);
          box-shadow: 0 25px 50px rgba(0,0,0,0.15) !important;
        }
        .control-btn {
          background: ${colors.gradient.card} !important;
          border: 1px solid ${colors.primary}30 !important;
          color: ${colors.primary} !important;
          border-radius: 50% !important;
          width: 60px !important;
          height: 60px !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          transition: all 0.3s ease !important;
          backdrop-filter: blur(10px) !important;
          font-size: 24px !important;
        }
        .control-btn:hover {
          background: ${colors.primary} !important;
          color: white !important;
          border-color: ${colors.primary} !important;
          transform: scale(1.1) !important;
          box-shadow: 0 8px 25px ${colors.primary}40 !important;
        }
        .dot-indicator {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: ${colors.primary}30;
          margin: 0 6px;
          cursor: pointer;
          transition: all 0.3s ease;
          display: inline-block;
        }
        .dot-indicator.active {
          background: ${colors.primary};
          transform: scale(1.3);
          box-shadow: 0 4px 15px ${colors.primary}50;
        }
        .dot-indicator:hover {
          background: ${colors.primary};
          transform: scale(1.2);
        }
      `}</style>

      <section id="testimonials" style={{ 
        padding: '90px 0 140px', 
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
              My Clients Say
            </Title>
            <Paragraph style={{ color: colors.textSecondary, fontSize: '18px' }}>
              Testimonials
            </Paragraph>
          </div>
          
          <div style={{ 
            maxWidth: '900px', 
            margin: '0 auto',
            animation: isVisible ? 'slideUp 1s ease-out 0.3s both' : 'none',
            position: 'relative'
          }}>
            {/* Navigation Controls */}
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '-80px',
              transform: 'translateY(-50%)',
              zIndex: 10
            }}>
              <Button 
                className="control-btn"
                icon={<LeftOutlined />}
                onClick={handlePrevious}
              />
            </div>
            
            <div style={{
              position: 'absolute',
              top: '50%',
              right: '-80px',
              transform: 'translateY(-50%)',
              zIndex: 10
            }}>
              <Button 
                className="control-btn"
                icon={<RightOutlined />}
                onClick={handleNext}
              />
            </div>

            <Carousel 
              ref={carouselRef}
              autoplay
              dots={false}
              autoplaySpeed={5000}
              speed={800}
              effect="fade"
              beforeChange={(from, to) => setCurrentSlide(to)}
            >
              {Data.map(({ id, image, title, description }) => (
                <div key={id}>
                  <Card
                    className="testimonial-card"
                    style={{ 
                      textAlign: 'center', 
                      margin: '0 16px',
                      borderRadius: '25px',
                      background: colors.gradient.card,
                      backdropFilter: 'blur(10px)',
                      border: 'none',
                      boxShadow: '0 20px 60px rgba(0,0,0,0.1)',
                      minHeight: '350px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      position: 'relative',
                      overflow: 'hidden'
                    }}
                    bodyStyle={{ padding: '40px 32px' }}
                  >
                    <div style={{
                      position: 'relative',
                      marginBottom: '24px'
                    }}>
                      <div style={{
                        width: '120px',
                        height: '120px',
                        margin: '0 auto 20px',
                        borderRadius: '50%',
                        background: colors.gradient.primary,
                        padding: '6px',
                        boxShadow: `0 15px 40px ${colors.primary}40`,
                        animation: 'float 6s ease-in-out infinite',
                        position: 'relative'
                      }}>
                        <div style={{
                          position: 'absolute',
                          top: '-5px',
                          right: '-5px',
                          width: '30px',
                          height: '30px',
                          background: '#feca57',
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '16px',
                          animation: 'pulse 2s ease-in-out infinite'
                        }}>
                          ⭐
                        </div>
                        <Avatar 
                          src={image} 
                          size={108}
                          style={{ 
                            border: '3px solid white',
                            boxShadow: '0 8px 25px rgba(0,0,0,0.2)'
                          }} 
                        />
                      </div>
                      
                      <div style={{
                        position: 'absolute',
                        top: '-10px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        fontSize: '40px',
                        color: colors.primary,
                        opacity: 0.3
                      }}>
                        "
                      </div>
                    </div>

                    <Title level={4} style={{ 
                      marginBottom: '12px',
                      color: colors.text,
                      fontSize: '20px'
                    }}>
                      {title}
                    </Title>
                    
                    <Rate 
                      disabled 
                      defaultValue={5} 
                      style={{ 
                        fontSize: '16px', 
                        marginBottom: '20px',
                        color: '#feca57'
                      }} 
                    />
                    
                    <Paragraph style={{ 
                      color: colors.textSecondary, 
                      fontSize: '16px', 
                      lineHeight: '1.8',
                      fontStyle: 'italic',
                      margin: 0,
                      maxWidth: '400px',
                      marginLeft: 'auto',
                      marginRight: 'auto'
                    }}>
                      "{description}"
                    </Paragraph>

                    <div style={{
                      position: 'absolute',
                      bottom: '20px',
                      right: '30px',
                      fontSize: '60px',
                      color: colors.primary,
                      opacity: 0.1,
                      transform: 'rotate(180deg)'
                    }}>
                      "
                    </div>
                  </Card>
                </div>
              ))}
            </Carousel>
            
            {/* Dot Indicators */}
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: '40px'
            }}>
              {Data.map((_, index) => (
                <div
                  key={index}
                  className={`dot-indicator ${currentSlide === index ? 'active' : ''}`}
                  onClick={() => goToSlide(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TestimonialAntd;