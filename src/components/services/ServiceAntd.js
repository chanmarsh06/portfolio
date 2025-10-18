import React, { useState, useEffect } from "react";
import { Card, Modal, Button, Row, Col, Typography, List, Space } from "antd";
import {
  HiCode,
  HiServer,
  HiTemplate,
  HiArrowRight,
  HiCheckCircle,
} from "react-icons/hi";
import { useTheme } from "../../context/ThemeContext";

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
      icon: <HiCode />,
      title: "Frontend Development (React.js)",
      description:
        "Building scalable, high-performance web applications using React.js, TypeScript, Redux Toolkit, and Vite. Experienced in responsive design, API integration, and performance optimization.",
      features: [
        "Develop reusable UI components with React.js & MUI",
        "Optimize rendering and state management with Redux Toolkit",
        "Integrate RESTful APIs using Axios and RTK Query",
        "Enhance performance through code-splitting and lazy loading",
        "Deploy production builds via CI/CD pipelines",
      ],
      color: colors.primary,
      gradient: colors.gradient.primary,
    },
    {
      id: 2,
      icon: <HiServer />,
      title: "MERN Stack Development",
      description:
        "Expanding full-stack capabilities with Node.js, Express.js, and MongoDB to deliver dynamic, data-driven applications with secure backend APIs and optimized frontend performance.",
      features: [
        "Design RESTful APIs with Express.js and MongoDB",
        "Implement JWT-based authentication and secure routes",
        "Build scalable, modular backend architecture",
        "Integrate frontend with backend seamlessly using Axios",
        "Deploy full-stack apps on cloud (Render/Netlify/Vercel)",
      ],
      color: "#4ecdc4",
      gradient: "linear-gradient(135deg, #4ecdc4 0%, #44a08d 100%)",
    },
    {
      id: 3,
      icon: <HiTemplate />,
      title: "Project Highlights",
      description:
        "Developed and contributed to multiple real-world applications including HRMS portals, Template Engines, and Performance Management Systems using modern React.js ecosystem.",
      features: [
        "Budgie HRMS Portal – Built role-based dashboards & chatbots",
        "Template Engines – Created reusable letter/email builders reducing dev time by 40%",
        "PMS Module – Automated multi-level reviews improving efficiency by 35%",
        "Ullamart E-Commerce – Designed responsive React.js frontend improving UX by 25%",
        "Implemented RTK Query caching reducing API calls by 35%",
      ],
      color: "#ff6b6b",
      gradient: "linear-gradient(135deg, #ff6b6b 0%, #feca57 100%)",
    },
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

      <section
        id="services"
        style={{
          padding: "90px 0",
          background: colors.gradient.background,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div className="global-container">
          <div
            style={{
              animation: isVisible ? "fadeIn 1s ease-out" : "none",
              textAlign: "center",
              marginBottom: "60px",
            }}
          >
            <Title
              level={2}
              style={{
                marginBottom: "8px",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                color: colors.text,
              }}
            >
              What I Do
            </Title>
            <Paragraph style={{ color: colors.textSecondary, fontSize: "18px" }}>
              MERN Stack Developer | Frontend Specialist | React Enthusiast
            </Paragraph>
          </div>

          <Row gutter={[32, 32]}>
            {services.map((service, index) => (
              <Col xs={24} md={8} key={service.id}>
                <Card
                  className="service-card"
                  hoverable
                  style={{
                    height: "320px",
                    textAlign: "center",
                    background: colors.gradient.card,
                    backdropFilter: "blur(10px)",
                    border: "none",
                    borderRadius: "25px",
                    boxShadow: "0 15px 35px rgba(0,0,0,0.1)",
                    transition: "all 0.3s ease",
                    animation: isVisible
                      ? `slideUp 1s ease-out ${index * 0.2}s both`
                      : "none",
                    overflow: "hidden",
                    position: "relative",
                  }}
                  bodyStyle={{
                    padding: "40px 24px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    height: "100%",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: "4px",
                      background: service.gradient,
                    }}
                  />
                  <Space direction="vertical" size="middle" style={{ width: "100%" }}>
                    <div
                      style={{
                        fontSize: "48px",
                        color: service.color,
                        background: `${service.color}15`,
                        width: "80px",
                        height: "80px",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        margin: "0 auto",
                        boxShadow: `0 10px 30px ${service.color}30`,
                      }}
                    >
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
                      height: "auto",
                      color: service.color,
                      fontWeight: "500",
                      fontSize: "16px",
                    }}
                  >
                    View More <HiArrowRight />
                  </Button>
                </Card>
              </Col>
            ))}
          </Row>

          <Modal
            title={
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  padding: "10px 0",
                }}
              >
                <div
                  style={{
                    fontSize: "24px",
                    color: selectedService?.color,
                    background: `${selectedService?.color}15`,
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {selectedService?.icon}
                </div>
                <span style={{ fontSize: "20px", fontWeight: "600" }}>
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
              <Space direction="vertical" size="large" style={{ width: "100%" }}>
                <Card
                  style={{
                    background: `${selectedService.color}10`,
                    border: `1px solid ${selectedService.color}30`,
                    borderRadius: "15px",
                  }}
                >
                  <Paragraph
                    style={{
                      fontSize: "16px",
                      color: colors.textSecondary,
                      margin: 0,
                      lineHeight: "1.6",
                    }}
                  >
                    {selectedService.description}
                  </Paragraph>
                </Card>

                <List
                  dataSource={selectedService.features}
                  renderItem={(item, index) => (
                    <List.Item
                      style={{
                        padding: "12px 0",
                        borderBottom:
                          index === selectedService.features.length - 1
                            ? "none"
                            : `1px solid ${colors.border}`,
                      }}
                    >
                      <Space>
                        <HiCheckCircle
                          style={{ color: selectedService.color, fontSize: "16px" }}
                        />
                        <span style={{ fontSize: "15px", color: colors.text }}>
                          {item}
                        </span>
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
