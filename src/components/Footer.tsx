import { Link } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import { Button, Input, message } from "antd";
import {
  FacebookOutlined,
  TwitterOutlined,
  LinkedinOutlined,
  InstagramOutlined,
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
  RocketOutlined,
  SendOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async () => {
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      message.error("Please enter a valid email address");
      return;
    }

    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      message.success("Successfully subscribed to our newsletter!");
      setEmail("");
      setLoading(false);
    }, 1500);
  };

  return (
    <footer className="relative bg-gradient-to-b from-[#0a192f] via-[#0f2744] to-[#020c1b] text-white overflow-hidden">
      {/* Wave Separator */}
      <div className="absolute !top-0 !left-0 !w-full !overflow-hidden !leading-[0]">
        <svg
          className="relative block w-full h-[60px] md:h-[80px]"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-gray-50"
          ></path>
        </svg>
      </div>

      {/* Animated Blobs */}
      <div className="absolute !inset-0 !opacity-10 !pointer-events-none">
        <motion.div
          className="absolute !top-20 !left-10 !w-72 !h-72 !bg-blue-500 !rounded-full !blur-[100px]"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute !bottom-20 !right-10 !w-96 !h-96 !bg-purple-500 !rounded-full !blur-[120px]"
          animate={{
            x: [0, -40, 0],
            y: [0, -20, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute !top-1/2 !left-1/2 !w-80 !h-80 !bg-cyan-500 !rounded-full !blur-[100px]"
          animate={{
            x: [-40, 40, -40],
            y: [-20, 20, -20],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container !mx-auto !px-6 !relative !z-10">
        {/* Newsletter Section */}
        <motion.div
          className="!pt-24 !pb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="!max-w-3xl !mx-auto !text-center">
            <motion.div
              className="!inline-flex !items-center !gap-2 !bg-gradient-to-r !from-blue-500/20 !to-cyan-500/20 !backdrop-blur-sm !px-6 !py-3 !rounded-full !border !border-blue-500/30 !mb-6"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <RocketOutlined className="!text-2xl !text-blue-400" />
              <span className="!text-sm !font-semibold !text-blue-400">Stay Updated</span>
            </motion.div>

            <h3 className="!text-4xl md:!text-5xl !font-bold !mb-6">
              <span className="!bg-gradient-to-r !from-blue-400 !via-cyan-400 !to-purple-400 !bg-clip-text !text-transparent">
                Subscribe
              </span>{" "}
              to Our Newsletter
            </h3>
            <p className="!text-gray-400 !text-lg !mb-10 !leading-relaxed">
              Get the latest updates on technology trends, insights, and exclusive offers delivered
              straight to your inbox.
            </p>

            <div className="!flex !flex-col sm:!flex-row !gap-4 !max-w-xl !mx-auto">
              <Input
                size="large"
                placeholder="Enter your email address"
                prefix={<MailOutlined className="!text-gray-400" />}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onPressEnter={handleSubscribe}
                className="!flex-1 !rounded-xl !bg-white/5 !border-white/10 !text-white placeholder:!text-gray-500 hover:!border-blue-400 focus:!border-blue-400 !py-4"
              />
              <Button
                size="large"
                type="primary"
                loading={loading}
                onClick={handleSubscribe}
                className="!rounded-xl !bg-gradient-to-r !from-blue-500 !to-cyan-500 !border-0 hover:!from-blue-600 hover:!to-cyan-600 !font-semibold !px-8 !py-4 !h-auto !shadow-lg !shadow-blue-500/30 hover:!shadow-blue-500/50 !transition-all"
                icon={<SendOutlined />}
              >
                Subscribe
              </Button>
            </div>

            <p className="!text-gray-500 !text-sm !mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </motion.div>

        {/* Main Footer Content */}
        <div className="!grid !grid-cols-1 md:!grid-cols-2 lg:!grid-cols-4 !gap-12 !py-16 !border-t !border-white/10">
          {/* Company Info */}
          <motion.div
            className="lg:!col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Link to="/" className="!inline-block !mb-6 !group">
              <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
                <img
                  src="/images/Logo.png"
                  alt="NexaCore Logo"
                  width={150}
                  height={150}
                  className="!object-contain"
                />
              </motion.div>
            </Link>
            <p className="!text-gray-400 !text-base !leading-relaxed !mb-8">
              Transforming businesses with cutting-edge technology solutions and innovative digital
              experiences.
            </p>
            <div className="!flex !gap-3">
              {[
                {
                  icon: FacebookOutlined,
                  href: "https://facebook.com",
                  color: "from-blue-600 to-blue-400",
                },
                {
                  icon: TwitterOutlined,
                  href: "https://twitter.com",
                  color: "from-sky-500 to-blue-400",
                },
                {
                  icon: LinkedinOutlined,
                  href: "https://linkedin.com",
                  color: "from-blue-700 to-cyan-500",
                },
                {
                  icon: InstagramOutlined,
                  href: "https://instagram.com",
                  color: "from-pink-600 to-purple-500",
                },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`!w-11 !h-11 !flex !items-center !justify-center !bg-white/5 !rounded-xl !transition-all !duration-300 hover:!bg-gradient-to-br hover:${social.color}`}
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="!text-lg" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="!text-xl !font-bold !mb-6 !relative !inline-block">
              Quick Links
              <span className="!absolute !bottom-0 !left-0 !w-12 !h-1 !bg-gradient-to-r !from-blue-500 !to-cyan-500 !rounded-full"></span>
            </h3>
            <ul className="!space-y-3">
              {[
                { label: "About Us", href: "/about" },
                { label: "Solutions", href: "/solutions" },
                { label: "Products", href: "/products" },
                { label: "Projects", href: "/projects" },
                { label: "News", href: "/news" },
                { label: "Careers", href: "/careers" },
                { label: "Contact", href: "/contact" },
              ].map((link, index) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                >
                  <Link
                    to={link.href}
                    className="!text-gray-400 hover:!text-white !transition-all !duration-300 !text-base !inline-flex !items-center !group"
                  >
                    <ArrowRightOutlined className="!opacity-0 group-hover:!opacity-100 !-ml-5 group-hover:!ml-0 !mr-0 group-hover:!mr-2 !transition-all !duration-300 !text-blue-400" />
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="!text-xl !font-bold !mb-6 !relative !inline-block">
              Services
              <span className="!absolute !bottom-0 !left-0 !w-12 !h-1 !bg-gradient-to-r !from-blue-500 !to-cyan-500 !rounded-full"></span>
            </h3>
            <ul className="!space-y-3">
              {[
                "Enterprise Solutions",
                "CRM Systems",
                "AI & Machine Learning",
                "Cloud Infrastructure",
                "IoT Solutions",
                "Cybersecurity",
                "Digital Transformation",
              ].map((service, index) => (
                <motion.li
                  key={service}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                >
                  <span className="!text-gray-400 hover:!text-white !transition-colors !duration-300 !text-base !cursor-pointer !inline-flex !items-center !group">
                    <span className="!w-1.5 !h-1.5 !bg-blue-500 !rounded-full !mr-3 group-hover:!bg-cyan-400 !transition-colors"></span>
                    {service}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="!text-xl !font-bold !mb-6 !relative !inline-block">
              Contact Us
              <span className="!absolute !bottom-0 !left-0 !w-12 !h-1 !bg-gradient-to-r !from-blue-500 !to-cyan-500 !rounded-full"></span>
            </h3>
            <ul className="!space-y-5">
              <motion.li
                className="!flex !items-start !gap-4 !text-gray-400 hover:!text-white !transition-colors !group !cursor-pointer"
                whileHover={{ x: 5 }}
              >
                <motion.div
                  className="!w-11 !h-11 !flex-shrink-0 !flex !items-center !justify-center !bg-white/5 !rounded-xl group-hover:!bg-gradient-to-br group-hover:!from-blue-500 group-hover:!to-cyan-500 !transition-all !duration-300"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <EnvironmentOutlined className="!text-lg" />
                </motion.div>
                <span className="!text-sm !leading-relaxed !pt-2">
                  49/35/19 Đường Giang Cự Vọng, Khu phố 4, Phường Trung Mỹ Tây, Thành phố Hồ Chí
                  Minh, Việt Nam
                </span>
              </motion.li>
              <motion.li
                className="!flex !items-center !gap-4 !text-gray-400 hover:!text-white !transition-colors !group !cursor-pointer"
                whileHover={{ x: 5 }}
              >
                <motion.div
                  className="!w-11 !h-11 !flex-shrink-0 !flex !items-center !justify-center !bg-white/5 !rounded-xl group-hover:!bg-gradient-to-br group-hover:!from-blue-500 group-hover:!to-cyan-500 !transition-all !duration-300"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <PhoneOutlined className="!text-lg" />
                </motion.div>
                <a
                  href="tel:+15551234567"
                  className="!text-sm hover:!text-blue-400 !transition-colors"
                >
                  0924600029
                </a>
              </motion.li>
              <motion.li
                className="!flex !items-center !gap-4 !text-gray-400 hover:!text-white !transition-colors !group !cursor-pointer"
                whileHover={{ x: 5 }}
              >
                <motion.div
                  className="!w-11 !h-11 !flex-shrink-0 !flex !items-center !justify-center !bg-white/5 !rounded-xl group-hover:!bg-gradient-to-br group-hover:!from-blue-500 group-hover:!to-cyan-500 !transition-all !duration-300"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <MailOutlined className="!text-lg" />
                </motion.div>
                <a
                  href="mailto:info@nexacore.com"
                  className="!text-sm hover:!text-blue-400 !transition-colors"
                >
                  nexacore@gmail.com
                </a>
              </motion.li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="!border-t !border-white/10 !py-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="!flex !flex-col md:!flex-row !justify-between !items-center !gap-6">
            <p className="!text-gray-400 !text-sm">
              © {currentYear}{" "}
              <span className="!font-semibold !bg-gradient-to-r !from-blue-400 !to-cyan-400 !bg-clip-text !text-transparent">
                NexaCore
              </span>
              . All rights reserved.
            </p>
            <div className="!flex !flex-wrap !justify-center !gap-6 !text-sm">
              {[
                { label: "Privacy Policy", href: "/privacy" },
                { label: "Terms of Service", href: "/terms" },
                { label: "Cookie Policy", href: "/cookies" },
                { label: "Sitemap", href: "/sitemap" },
              ].map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="!text-gray-400 hover:!text-blue-400 !transition-colors !duration-300 !relative !group"
                >
                  {link.label}
                  <span className="!absolute !bottom-0 !left-0 !w-0 group-hover:!w-full !h-px !bg-gradient-to-r !from-blue-500 !to-cyan-500 !transition-all !duration-300"></span>
                </Link>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
