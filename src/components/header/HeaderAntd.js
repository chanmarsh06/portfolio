import React, { useState, useEffect } from 'react';
import { Menu, Drawer, Button, Affix, Switch } from 'antd';
import { MenuOutlined, HomeOutlined, UserOutlined, FileTextOutlined, ToolOutlined, ProjectOutlined, MessageOutlined, SunOutlined, MoonOutlined } from '@ant-design/icons';
import { useTheme } from '../../context/ThemeContext';

const HeaderAntd = () => {
  const { isDark, colors, toggleTheme } = useTheme();
  const [visible, setVisible] = useState(false);
  const [current, setCurrent] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  const menuItems = [
    { key: 'home', icon: <HomeOutlined />, label: 'Home', href: '#home' },
    { key: 'about', icon: <UserOutlined />, label: 'About', href: '#about' },
    { key: 'skills', icon: <FileTextOutlined />, label: 'Skills', href: '#skills' },
    { key: 'services', icon: <ToolOutlined />, label: 'Services', href: '#services' },
    { key: 'portfolio', icon: <ProjectOutlined />, label: 'Portfolio', href: '#portfolio' },
    { key: 'contact', icon: <MessageOutlined />, label: 'Contact', href: '#contact' }
  ];

  const handleMenuClick = (e) => {
    setCurrent(e.key);
    setVisible(false);
    const element = document.querySelector(menuItems.find(item => item.key === e.key)?.href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 50);

      const sections = menuItems.map(item => ({
        id: item.key,
        element: document.querySelector(item.href)
      }));
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.element && section.element.offsetTop <= scrollPosition + 100) {
          setCurrent(section.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <style>{`
        @keyframes slideDown {
          from { transform: translateY(-100%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 5px rgba(102, 126, 234, 0.3); }
          50% { box-shadow: 0 0 20px rgba(102, 126, 234, 0.6); }
        }
        .header-enhanced {
          background: ${scrolled 
            ? (isDark ? 'rgba(15, 23, 42, 0.95)' : 'rgba(255, 255, 255, 0.95)')
            : (isDark ? 'rgba(15, 23, 42, 0.1)' : 'rgba(255, 255, 255, 0.1)')};
          backdrop-filter: blur(20px);
          border-bottom: 1px solid ${colors.border};
          box-shadow: ${scrolled ? '0 8px 32px rgba(0,0,0,0.1)' : '0 4px 20px rgba(0,0,0,0.05)'};
          transition: all 0.3s ease;
          animation: slideDown 0.8s ease-out;
        }
        .nav-container-enhanced {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 60px;
          transition: all 0.3s ease;
        }
        .nav-logo-enhanced {
          font-size: clamp(20px, 4vw, 28px);
          font-weight: 700;
          color: ${colors.primary};
          cursor: pointer;
          transition: all 0.3s ease;
          padding: 8px 16px;
          border-radius: 12px;
          position: relative;
          overflow: hidden;
        }
        .nav-logo-enhanced::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          transition: left 0.5s ease;
        }
        .nav-logo-enhanced:hover {
          transform: scale(1.05);
          background: rgba(102, 126, 234, 0.1);
          box-shadow: 0 4px 15px rgba(102, 126, 234, 0.2);
        }
        .nav-logo-enhanced:hover::before {
          left: 100%;
        }
        .desktop-menu-enhanced {
          border-bottom: none !important;
          background: transparent !important;
          display: flex !important;
          line-height: 60px;
        }
        .desktop-menu-enhanced .ant-menu-item {
          display: flex !important;
          align-items: center !important;
          gap: 6px !important;
          font-weight: 500 !important;
          border-radius: 20px !important;
          margin: 0 4px !important;
          padding: 8px 16px !important;
          height: 36px !important;
          line-height: 20px !important;
          transition: all 0.3s ease !important;
          position: relative !important;
          overflow: hidden !important;
        }
        .desktop-menu-enhanced .ant-menu-item:hover {
          background: rgba(102, 126, 234, 0.1) !important;
          transform: translateY(-1px) !important;
          box-shadow: 0 2px 8px rgba(102, 126, 234, 0.15) !important;
        }
        .desktop-menu-enhanced .ant-menu-item-selected {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%) !important;
          color: white !important;
          box-shadow: 0 2px 8px rgba(102, 126, 234, 0.3) !important;
        }
        .desktop-menu-enhanced .ant-menu-item-selected:hover {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%) !important;
          color: white !important;
          transform: translateY(-1px) !important;
        }
        .mobile-menu-btn-enhanced {
          display: none;
          width: 40px;
          height: 40px;
          border-radius: 8px;
          background: rgba(102, 126, 234, 0.1);
          border: 1px solid rgba(102, 126, 234, 0.2);
          color: #667eea;
          font-size: 18px;
          transition: all 0.3s ease;
        }
        .mobile-menu-btn-enhanced:hover {
          background: #667eea !important;
          color: white !important;
          transform: scale(1.05);
          box-shadow: 0 2px 8px rgba(102, 126, 234, 0.3);
        }
        .mobile-drawer-enhanced .ant-drawer-header {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-bottom: none;
        }
        .mobile-drawer-enhanced .ant-drawer-title {
          color: white !important;
          font-weight: 600;
        }
        .mobile-drawer-enhanced .ant-drawer-close {
          color: white !important;
        }
        .mobile-drawer-enhanced .ant-drawer-body {
          padding: 0;
          background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
        }
        .mobile-drawer-enhanced .ant-menu {
          border-right: none !important;
          background: transparent !important;
        }
        .mobile-drawer-enhanced .ant-menu-item {
          display: flex !important;
          align-items: center !important;
          gap: 12px !important;
          padding: 20px 24px !important;
          font-weight: 500 !important;
          margin: 8px 16px !important;
          border-radius: 15px !important;
          transition: all 0.3s ease !important;
        }
        .mobile-drawer-enhanced .ant-menu-item:hover {
          background: rgba(255, 255, 255, 0.8) !important;
          transform: translateX(10px) !important;
          box-shadow: 0 4px 15px rgba(0,0,0,0.1) !important;
        }
        .mobile-drawer-enhanced .ant-menu-item-selected {
          background: rgba(255, 255, 255, 0.95) !important;
          color: #667eea !important;
          box-shadow: 0 4px 15px rgba(0,0,0,0.1) !important;
        }
        @media (max-width: 768px) {
          .desktop-menu-enhanced { display: none !important; }
          .mobile-menu-btn-enhanced { display: flex !important; align-items: center; justify-content: center; }
          .nav-container-enhanced { padding: 0 16px; height: 55px; }
          .nav-logo-enhanced { padding: 6px 12px; }
        }
        @media (max-width: 480px) {
          .nav-container-enhanced { padding: 0 12px; height: 50px; }
          .nav-logo-enhanced { padding: 4px 8px; }
          .mobile-menu-btn-enhanced { width: 36px; height: 36px; font-size: 16px; }
        }
      `}</style>

      <Affix offsetTop={0}>
        <header className="header-enhanced">
          <div className="nav-container-enhanced">
            <div 
              className="nav-logo-enhanced"
              onClick={() => {
                setCurrent('home');
                document.querySelector('#home')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <span style={{ position: 'relative', zIndex: 1 }}>Chan</span>
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <Menu
                mode="horizontal"
                selectedKeys={[current]}
                onClick={handleMenuClick}
                className="desktop-menu-enhanced"
                items={menuItems}
              />
              <Switch
                checked={isDark}
                onChange={toggleTheme}
                checkedChildren={<MoonOutlined />}
                unCheckedChildren={<SunOutlined />}
                style={{
                  background: isDark ? colors.primary : '#f0f0f0'
                }}
              />
            </div>

            <Button
              className="mobile-menu-btn-enhanced"
              type="text"
              icon={<MenuOutlined />}
              onClick={() => setVisible(true)}
            />

            <Drawer
              title="Navigation"
              placement="right"
              onClose={() => setVisible(false)}
              open={visible}
              className="mobile-drawer-enhanced"
              width={280}
            >
              <Menu
                mode="vertical"
                selectedKeys={[current]}
                onClick={handleMenuClick}
                items={menuItems}
              />
            </Drawer>
          </div>
        </header>
      </Affix>
    </>
  );
};

export default HeaderAntd;