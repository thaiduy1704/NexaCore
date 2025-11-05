import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, Drawer } from "antd";
import { CloseOutlined, EllipsisOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";

const menuItems: MenuProps["items"] = [
  { key: "/", label: <Link to="/">Home</Link> },
  { key: "/about", label: <Link to="/about">About</Link> },
  { key: "/solutions", label: <Link to="/solutions">Solutions</Link> },
  { key: "/products", label: <Link to="/products">Products</Link> },
  { key: "/projects", label: <Link to="/projects">Projects</Link> },
  { key: "/news", label: <Link to="/news">News</Link> },
  { key: "/careers", label: <Link to="/careers">Careers</Link> },
  { key: "/contact", label: <Link to="/contact">Contact</Link> },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const selectedKey = pathname.startsWith("/admin") ? "" : pathname;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-end h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img
              src="/images/Logo.png"
              alt="NexaCore Logo"
              width={150}
              height={150}
              className="object-contain"
            />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:block w-full flex-end">
            <Menu
              mode="horizontal"
              selectedKeys={[selectedKey]}
              items={menuItems}
              style={{
                width: "100%",
                border: "none",
                background: "transparent",
                fontSize: "16px",
                lineHeight: "64px",
              }}
              className="justify-center"
              overflowedIndicator={<EllipsisOutlined />}
            />
          </nav>

          {/* Mobile Menu Button */}
          {/* <Button
            type="text"
            icon={<MenuOutlined style={{ fontSize: "24px" }} />}
            onClick={() => setDrawerOpen(true)}
            className="md:hidden"
          /> */}
        </div>
      </div>

      {/* Mobile Drawer */}
      <Drawer
        title={
          <div className="flex items-center space-x-3">
            <img
              src="/images/Logo.png"
              alt="NexaCore Logo"
              width={40}
              height={40}
              className="object-contain"
            />
            <span className="text-2xl font-bold text-[#0052CC]">NexaCore</span>
          </div>
        }
        placement="right"
        onClose={() => setDrawerOpen(false)}
        open={drawerOpen}
        closeIcon={<CloseOutlined />}
      >
        <Menu
          mode="vertical"
          selectedKeys={[selectedKey]}
          items={menuItems}
          style={{ border: "none" }}
          onClick={() => setDrawerOpen(false)}
        />
      </Drawer>
    </header>
  );
}
