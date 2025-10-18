import React, { useEffect, useState } from "react";
import { Row, Col, Typography, Button, Space, Tag } from "antd";
import { TypeAnimation } from "react-type-animation";
import { HiMail, HiDownload } from "react-icons/hi";
import { AiFillGithub, AiFillLinkedin, AiOutlineTwitter } from "react-icons/ai";
import { useTheme } from "../../context/ThemeContext";
import ProfileImg from "../../assests/chan.png";
import CV from "../../assests/Chandrasekaran_React_Resume.pdf";

const { Title, Paragraph, Text } = Typography;

const HomeAntd = () => {
  const { colors } = useTheme();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleDownload = () => {
    window.open(CV, "_blank");
  };

  return (
    <>
      <style>{`
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .skills-text {
          color: ${colors.textSecondary};
          font-size: 14px;
          margin-bottom: 8px;
        }
        .skill-item {
          display: inline-block;
          background: ${colors.primary}15;
          color: ${colors.primary};
          padding: 4px 12px;
          margin: 2px 4px;
          border-radius: 16px;
          font-size: 12px;
          font-weight: 500;
          animation: fadeInUp 0.6s ease-out;
          transition: all 0.3s ease;
        }
        .skill-item:hover {
          background: ${colors.primary}25;
          transform: translateY(-2px);
        }

    .hero-section {
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: ${colors.gradient.background};
  padding: clamp(10px, 3vh, 30px) 0; /* reduced top/bottom padding */
  position: relative;
  overflow: hidden;
}


        .hero-title {
          font-family: "Poppins", sans-serif;
          font-weight: 800;
          line-height: 1.2;
          color: ${colors.text};
        }
        .hero-title span {
          color: ${colors.primary};
        }

        .hero-sub {
          color: ${colors.textSecondary};
          font-size: clamp(15px, 2vw, 18px);
          max-width: 600px;
          margin-bottom: 20px;
        }

        .hero-btn-primary {
          background: ${colors.primary};
          border: none;
          color: #fff;
          font-weight: 600;
          border-radius: 30px;
          padding: 0 clamp(22px, 4vw, 34px);
          height: clamp(44px, 8vw, 52px);
          font-size: clamp(14px, 2vw, 16px);
          box-shadow: 0 6px 18px ${colors.primary}40;
          transition: all 0.3s ease;
        }
        .hero-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px ${colors.primary}50;
        }

        .hero-btn-secondary {
          border: 2px solid ${colors.primary};
          color: ${colors.primary};
          background: transparent;
          font-weight: 600;
          border-radius: 30px;
          padding: 0 clamp(22px, 4vw, 34px);
          height: clamp(44px, 8vw, 52px);
          font-size: clamp(14px, 2vw, 16px);
          transition: all 0.3s ease;
        }
        .hero-btn-secondary:hover {
          background: ${colors.primary}10;
          transform: translateY(-2px);
        }

        .social-icons a {
          transition: all 0.3s ease;
        }
        .social-icons a:hover {
          color: ${colors.primary};
          transform: translateY(-3px);
        }

        @media (max-width: 768px) {
          .hero-text { text-align: center; }
          .hero-btns { justify-content: center; }
          .hero-img-container { margin-top: 40px; }
          .social-icons { justify-content: center; display: flex; margin-bottom: 20px; }
        }
      `}</style>

  <section
  className="hero-section"
  id="home"
  style={{
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    minHeight: "100vh",
    padding: "clamp(10px, 5vh, 40px) 0",
  }}
>
  <div
    className="global-container"
    style={{
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      height: "100%",
      flexWrap: "wrap",
    }}
  >
    {/* LEFT CONTENT */}
    <div
      style={{
        flex: 1,
        minWidth: "280px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: "10px",
      }}
    >
      <Text style={{ color: "#aaa", fontSize: "clamp(12px, 1.2vw, 16px)" }}>
        Chennai, India
      </Text>
     
 <Title
  level={1}
  className="hero-title"
  style={{ fontSize: "clamp(1.5rem, 3vw, 2.2rem)", margin: "4px 0", lineHeight: 1.2 }}
>

        I’m a{" "}
        <span style={{ color: colors.primary }}>
          Full-Stack Developer | MERN, Next.js & Frontend Specialist
        </span>
      </Title>
      <Paragraph
  className="hero-sub"
  style={{ fontSize: "clamp(12px, 1.2vw, 16px)", margin: "4px 0 12px 0" }}
>
        I craft fast, scalable web solutions using the MERN stack. Focused on building
        pixel-perfect, high-performance interfaces with modern tech.
      </Paragraph>

      {/* Skills */}
<TypeAnimation
  sequence={[
    "Building dynamic UIs with React.js", 1500,
    "Creating scalable APIs using Node.js", 1500,
    "Writing type-safe code in TypeScript", 1500,
    "Managing data efficiently with MongoDB", 1500,
    "Developing SSR apps with Next.js", 1500,
    "Optimizing state with Redux Toolkit", 1500,
  ]}
  wrapper="div"
  cursor={true}
  repeat={Infinity}
  style={{
    fontSize: "clamp(14px, 1.2vw, 16px)",
    color: colors.primary,
    fontWeight: 500,
    minHeight: "1.5em",
  }}
/>



      {/* Social + Buttons */}
      <Row gutter={[16, 12]} align="middle">
        {/* Social */}
        <Col xs={24} md="auto" style={{ textAlign: "left" }}>
          <Space size="middle" className="social-icons">
            <AiFillGithub style={{ fontSize: "1.5rem", color: colors.textSecondary }} />
            <AiFillLinkedin style={{ fontSize: "1.5rem", color: colors.textSecondary }} />
            <AiOutlineTwitter style={{ fontSize: "1.5rem", color: colors.textSecondary }} />
          </Space>
        </Col>

        {/* Buttons */}
        <Col xs={24} md="auto" style={{ textAlign: "left" }}>
          <Space
            direction={{ xs: "vertical", md: "horizontal" }}
            size={10}
            style={{ width: "100%", maxWidth: 220 }}
          >
            <Button
              className="hero-btn-primary"
              icon={<HiMail />}
              href="#projects"
              style={{
                width: "100%",
                height: "clamp(32px, 4vw, 40px)",
                fontSize: "clamp(12px, 1vw, 14px)",
              }}
            >
              View Projects
            </Button>
            <Button
              className="hero-btn-secondary"
              icon={<HiDownload />}
              onClick={handleDownload}
              style={{
                width: "100%",
                height: "clamp(32px, 4vw, 40px)",
                fontSize: "clamp(12px, 1vw, 14px)",
              }}
            >
              Download CV
            </Button>
          </Space>
        </Col>
      </Row>
    </div>

    {/* RIGHT CONTENT */}
    <div
      style={{
        flex: 1,
        minWidth: "220px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "clamp(200px, 30vw, 280px)",
          height: "clamp(200px, 30vw, 280px)",
          borderRadius: "50%",
          background: colors.gradient.primary,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: `0 20px 40px ${colors.primary}30`,
          transform: isVisible ? "scale(1)" : "scale(0.8)",
          opacity: isVisible ? 1 : 0,
          transition: "all 1s ease-out 0.5s",
          animation: "pulse 4s ease-in-out infinite",
        }}
      >
        <img
          src={ProfileImg}
          alt="Profile"
          style={{
            width: "calc(100% - 20px)",
            height: "calc(100% - 20px)",
            borderRadius: "50%",
            objectFit: "cover",
            filter: "brightness(1.1) contrast(1.1)",
          }}
        />
      </div>
    </div>
  </div>
</section>


    </>
  );
};

export default HomeAntd;
