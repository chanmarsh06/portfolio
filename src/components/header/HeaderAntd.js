import React, { useState, useEffect, useMemo } from 'react';
import { Menu, Drawer, Button, Affix, Grid, Dropdown } from 'antd';
import { HiMenu, HiHome, HiUser, HiDocumentText, HiCog, HiBriefcase, HiMail, HiSun, HiMoon, HiGlobeAlt } from 'react-icons/hi';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

const { useBreakpoint } = Grid;

const HeaderAntd = () => {
  const { isDark, colors, toggleTheme } = useTheme();
  const [visible, setVisible] = useState(false);
  const [current, setCurrent] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [language, setLanguage] = useState('EN');
  const screens = useBreakpoint();
  const isMobile = !screens.md;

  const menuItems = useMemo(() => [
    { key: 'home', icon: <HiHome />, label: 'Home', href: '#home' },
    { key: 'about', icon: <HiUser />, label: 'About', href: '#about' },
    { key: 'skills', icon: <HiDocumentText />, label: 'Skills', href: '#skills' },
    { key: 'services', icon: <HiCog />, label: 'Services', href: '#services' },
    { key: 'portfolio', icon: <HiBriefcase />, label: 'Portfolio', href: '#portfolio' },
    { key: 'contact', icon: <HiMail />, label: 'Contact', href: '#contact' }
  ], []);

  const languageItems = [
    { key: 'EN', label: 'English' },
    { key: 'ES', label: 'Español' },
    { key: 'FR', label: 'Français' },
    { key: 'DE', label: 'Deutsch' }
  ];

  const handleLanguageChange = ({ key }) => setLanguage(key);

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
  }, [menuItems]);

  return (
    <>
      <style>{`
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 5px ${colors.primary}30; }
          50% { box-shadow: 0 0 20px ${colors.primary}50; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-2px); }
        }
        .header-enhanced {
          background: ${scrolled
          ? (isDark ? 'rgba(15, 23, 42, 0.95)' : 'rgba(255, 255, 255, 0.95)')
          : (isDark ? 'rgba(15, 23, 42, 0.1)' : 'rgba(255, 255, 255, 0.1)')};
          backdrop-filter: blur(20px);
          border-bottom: 1px solid ${colors.border};
          box-shadow: ${scrolled ? '0 8px 32px rgba(0,0,0,0.1)' : '0 4px 20px rgba(0,0,0,0.05)'};
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }
        .header-enhanced::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
          transition: left 0.6s ease;
        }
        .header-enhanced:hover::before { left: 100%; }
        .nav-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 60px;
          position: relative;
          z-index: 1;
        }
        .nav-logo {
          font-size: clamp(20px, 5vw, 32px);
          font-weight: 800;
          background: linear-gradient(135deg, ${colors.primary}, #ff6b6b);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          cursor: pointer;
          position: relative;
          padding: 8px 16px;
          border-radius: 12px;
          transition: all 0.3s ease;
        }
        .nav-logo::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 0;
          height: 2px;
          background: ${colors.primary};
          transition: all 0.3s ease;
          transform: translateX(-50%);
        }
        .nav-logo:hover::after { width: 80%; }
        .desktop-menu {
          border-bottom: none !important;
          background: transparent !important;
          position: relative;
        }
        .desktop-menu .ant-menu-item {
          display: flex !important;
          align-items: center !important;
          gap: 6px !important;
          font-weight: 500 !important;
          font-size: clamp(12px, 1.2vw, 16px) !important;
          border-radius: 8px !important;
          margin: 0 2px !important;
          padding: 8px 12px !important;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
          position: relative !important;
          overflow: hidden !important;
        }
        .desktop-menu .ant-menu-item::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, ${colors.primary}20, transparent);
          transition: left 0.5s ease;
        }
        .desktop-menu .ant-menu-item:hover {
          background: ${colors.primary}15 !important;
          transform: translateY(-2px) !important;
          box-shadow: 0 4px 12px ${colors.primary}20 !important;
        }
        .desktop-menu .ant-menu-item:hover::before { left: 100%; }
        .desktop-menu .ant-menu-item-selected {
          background: transparent !important;
          color: ${colors.primary} !important;
          position: relative;
        }
        .desktop-menu .ant-menu-item-selected::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 50%;
          width: 80%;
          height: 2px;
          background: ${colors.primary};
          transform: translateX(-50%);
          border-radius: 1px;
        }
        .nav-controls { display: flex; align-items: center; gap: 12px; }
        .language-switcher {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 6px 10px;
          border-radius: 6px;
          background: transparent;
          border: 1px solid ${colors.border};
          color: ${colors.text};
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: clamp(12px, 1vw, 14px);
          font-weight: 500;
          min-width: 50px;
          justify-content: center;
        }
        .language-switcher:hover {
          border-color: ${colors.primary};
          color: ${colors.primary};
          transform: translateY(-1px);
        }
        .theme-switch {
          background: ${isDark ? colors.primary : '#f0f0f0'} !important;
          border: none !important;
          border-radius: 20px !important;
          transition: all 0.3s ease !important;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        .theme-switch:hover {
          transform: scale(1.05);
          box-shadow: 0 4px 8px rgba(0,0,0,0.15);
        }
        .theme-switch .ant-switch-handle {
          background: ${isDark ? '#fff' : colors.primary} !important;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2) !important;
        }
        .theme-switch .ant-switch-inner {
          color: ${isDark ? colors.primary : '#fff'} !important;
          font-size: clamp(10px, 1vw, 12px) !important;
        }
        .mobile-menu-btn {
          background: ${colors.primary}15 !important;
          border: 1px solid ${colors.primary}30 !important;
          border-radius: 10px !important;
          width: 44px !important;
          height: 44px !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          transition: all 0.3s ease !important;
        }
        .mobile-menu-btn:hover {
          background: ${colors.primary} !important;
          color: white !important;
          transform: scale(1.05) !important;
        }
      `}</style>

      <Affix offsetTop={0}>
        <motion.header
          className="header-enhanced"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="global-container nav-container">
            <motion.div
              className="nav-logo"
              onClick={() => {
                setCurrent('home');
                document.querySelector('#home')?.scrollIntoView({ behavior: 'smooth' });
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Chan
            </motion.div>

            <div className="nav-controls">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Dropdown
                  menu={{ items: languageItems, onClick: handleLanguageChange }}
                  trigger={['click']}
                  placement="bottomRight"
                >
                  <div className="language-switcher">
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    >
                      <HiGlobeAlt size={16} />
                    </motion.div>
                    <span>{language}</span>
                  </div>
                </Dropdown>
              </motion.div>

              {!isMobile && (
                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
                  <Menu
                    mode="horizontal"
                    selectedKeys={[current]}
                    onClick={handleMenuClick}
                    className="desktop-menu"
                    items={menuItems}
                  />
                </motion.div>
              )}

              <motion.div
                className="theme-toggle-pill"
                onClick={toggleTheme}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  width: 70,
                  height: 32,
                  padding: 4,
                  borderRadius: 20,
                  background: isDark ? colors.background : '#fbbf24',
                  border: `1px solid ${colors.border}`,
                  cursor: 'pointer',
                  position: 'relative',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                }}
              >
                <HiSun size={18} color={isDark ? '#fbbf24' : '#ffffff'} style={{ zIndex: 2 }} />
                <HiMoon size={18} color={isDark ? '#ffffff' : colors.textSecondary} style={{ zIndex: 3 }} />
                <motion.div
                  layout
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  style={{
                    position: 'absolute',
                    top: 4,
                    left: isDark ? 36 : 4,
                    width: 24,
                    height: 24,
                    borderRadius: '50%',
                    background: isDark ? colors.primary : '#ffffff',
                    boxShadow: `0 2px 6px ${colors.primary}30`,
                    zIndex: 1,
                  }}
                />
              </motion.div>

              {isMobile && (
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    type="text"
                    icon={<HiMenu />}
                    onClick={() => setVisible(true)}
                    className="mobile-menu-btn"
                  />
                </motion.div>
              )}
            </div>

            <AnimatePresence>
              {visible && (
                <Drawer
                  title="Navigation"
                  placement="right"
                  onClose={() => setVisible(false)}
                  open={visible}
                >
                  <Menu
                    mode="vertical"
                    selectedKeys={[current]}
                    onClick={handleMenuClick}
                    items={menuItems}
                  />
                </Drawer>
              )}
            </AnimatePresence>
          </div>
        </motion.header>
      </Affix>
    </>
  );
};

export default HeaderAntd;
