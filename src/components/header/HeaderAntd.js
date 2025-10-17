import React, { useState, useEffect } from 'react';
import { Menu, Drawer, Button, Affix } from 'antd';
import { MenuOutlined, HomeOutlined, UserOutlined, FileTextOutlined, ToolOutlined, ProjectOutlined, MessageOutlined } from '@ant-design/icons';
import './header-antd.css';

const HeaderAntd = () => {
  const [visible, setVisible] = useState(false);
  const [current, setCurrent] = useState('home');

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
      const sections = menuItems.map(item => ({
        id: item.key,
        element: document.querySelector(item.href)
      }));

      const scrollPosition = window.scrollY + 100;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.element && section.element.offsetTop <= scrollPosition) {
          setCurrent(section.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Affix offsetTop={0}>
      <header className="header-antd">
        <div className="nav-container">
          <div className="nav-logo">Chan</div>
          
          {/* Desktop Menu */}
          <Menu
            mode="horizontal"
            selectedKeys={[current]}
            onClick={handleMenuClick}
            className="desktop-menu"
            items={menuItems}
          />

          {/* Mobile Menu Button */}
          <Button
            className="mobile-menu-btn"
            type="text"
            icon={<MenuOutlined />}
            onClick={() => setVisible(true)}
          />

          {/* Mobile Drawer */}
          <Drawer
            title="Navigation"
            placement="right"
            onClose={() => setVisible(false)}
            open={visible}
            className="mobile-drawer"
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
  );
};

export default HeaderAntd;