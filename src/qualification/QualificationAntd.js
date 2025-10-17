import React, { useEffect, useState } from "react";
import { Tabs, Timeline, Typography, Card } from "antd";
import { HiAcademicCap, HiBriefcase, HiCalendar } from "react-icons/hi";
import { useTheme } from "../context/ThemeContext";

const { Title, Paragraph } = Typography;

const QualificationAntd = () => {
  const { colors } = useTheme();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // 🎓 Education — From Resume
  const educationData = [
    {
      title: "Master of Computer Applications (MCA)",
      subtitle: "Pope John Paul II College of Education, Puducherry",
      date: "2021 - 2023",
      color: colors.primary,
    },
    {
      title: "Bachelor of Computer Applications (BCA)",
      subtitle: "Rajiv Gandhi Arts and Science College, Puducherry",
      date: "2018 - 2021",
      color: "#4ecdc4",
    },
  ];

  // 💼 Experience — From Resume
  const experienceData = [
    {
      title: "Software Engineer",
      subtitle: "Novac Technology Solutions, Chennai",
      date: "Aug 2025 - Present",
      color: colors.primary,
    },
    {
      title: "Junior Engineer",
      subtitle: "HEPL - Hema’s Enterprises Pvt Ltd, Cuddalore",
      date: "Dec 2023 - Jul 2025",
      color: "#ff6b6b",
    },
    {
      title: "Trainee Developer",
      subtitle: "Askan Technologies, Puducherry",
      date: "Mar 2023 - Aug 2023",
      color: "#4ecdc4",
    },
  ];

  // Custom Timeline Card Component
  const TimelineItem = ({ data }) => (
    <Timeline
      items={data.map((item, index) => ({
        dot: (
          <div
            className="timeline-dot"
            style={{
              width: "20px",
              height: "20px",
              borderRadius: "50%",
              background: `linear-gradient(135deg, ${item.color} 0%, ${item.color}80 100%)`,
              boxShadow: `0 6px 20px ${item.color}50, 0 0 0 4px ${item.color}20`,
              border: "3px solid white",
              position: "relative",
              transition: "all 0.3s ease",
              animationDelay: `${index * 0.2}s`,
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                background: "white",
                opacity: 0.8,
              }}
            />
          </div>
        ),
        children: (
          <Card
            className="qualification-card"
            size="small"
            hoverable
            style={{
              marginBottom: "24px",
              background: colors.gradient.card,
              backdropFilter: "blur(10px)",
              border: "none",
              borderRadius: "20px",
              boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
              borderLeft: `5px solid ${item.color}`,
              transition: "all 0.4s ease",
              position: "relative",
              overflow: "hidden",
              animationDelay: `${index * 0.15}s`,
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                right: 0,
                width: "60px",
                height: "60px",
                background: `${item.color}10`,
                borderRadius: "0 0 0 60px",
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "flex-start",
                padding: "8px",
              }}
            >
              <div
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  background: item.color,
                  opacity: 0.6,
                }}
              />
            </div>

            <Title
              level={5}
              style={{
                margin: 0,
                marginBottom: "8px",
                color: colors.text,
                fontSize: "18px",
                fontWeight: "600",
              }}
            >
              {item.title}
            </Title>
            <Paragraph
              style={{
                margin: 0,
                marginBottom: "12px",
                color: colors.textSecondary,
                fontSize: "14px",
                fontWeight: "500",
              }}
            >
              {item.subtitle}
            </Paragraph>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                color: item.color,
                fontSize: "13px",
                fontWeight: "600",
                background: `${item.color}15`,
                padding: "6px 12px",
                borderRadius: "15px",
                width: "fit-content",
              }}
            >
              <HiCalendar style={{ fontSize: "14px" }} />
              {item.date}
            </div>
          </Card>
        ),
      }))}
    />
  );

  const tabItems = [
    {
      key: "1",
      label: (
        <span
          style={{
            display: "flex",
            alignItems: "center",
            gap: "6px",
            fontSize: "14px",
            fontWeight: "500",
          }}
        >
          <HiAcademicCap style={{ fontSize: "16px" }} />
          Education
        </span>
      ),
      children: (
        <div style={{ marginBottom: "20px" }}>
          <TimelineItem data={educationData} />
        </div>
      ),
    },
    {
      key: "2",
      label: (
        <span
          style={{
            display: "flex",
            alignItems: "center",
            gap: "6px",
            fontSize: "14px",
            fontWeight: "500",
          }}
        >
          <HiBriefcase style={{ fontSize: "16px" }} />
          Experience
        </span>
      ),
      children: (
        <div style={{ marginBottom: "20px" }}>
          <TimelineItem data={experienceData} />
        </div>
      ),
    },
  ];

  return (
    <>
      <section
        id="qualification"
        style={{
          padding: "90px 0",
          background: colors.gradient.background,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 24px",
            position: "relative",
            zIndex: 1,
          }}
        >
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
              Qualification
            </Title>
            <Paragraph
              style={{ color: colors.textSecondary, fontSize: "18px" }}
            >
              My Education & Work Journey
            </Paragraph>
          </div>

          <div
            style={{
              maxWidth: "900px",
              margin: "0 auto",
              animation: isVisible ? "slideUp 1s ease-out 0.3s both" : "none",
            }}
          >
            <Card
              style={{
                background: colors.gradient.card,
                backdropFilter: "blur(10px)",
                border: "none",
                borderRadius: "25px",
                boxShadow: "0 20px 60px rgba(0,0,0,0.1)",
                padding: "20px",
              }}
            >
              <Tabs defaultActiveKey="1" items={tabItems} centered />
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default QualificationAntd;
