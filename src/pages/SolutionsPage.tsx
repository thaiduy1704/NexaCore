import { Card, Button } from "antd";
import * as Icons from "@ant-design/icons";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRightOutlined } from "@ant-design/icons";
import HeroBanner from "@/components/HeroBanner";
import SectionTitle from "@/components/SectionTitle";
import ServiceCard from "@/components/ServiceCard";
import { solutions } from "@/lib/mockData";

const solutionDetails = [
  {
    id: "erp",
    icon: "DatabaseOutlined",
    title: "Enterprise Resource Planning",
    description: "Streamline your business operations with integrated ERP solutions.",
    gradient: "from-violet-600 via-purple-600 to-indigo-600",
    features: [
      "Financial Management & Accounting",
      "Supply Chain & Inventory Management",
      "Human Resource Management",
      "Manufacturing & Production Planning",
      "Business Intelligence & Analytics",
      "Multi-entity & Multi-currency Support",
    ],
    benefits: [
      "40% reduction in operational costs",
      "Real-time visibility across all departments",
      "Improved decision-making with data analytics",
      "Automated workflows and processes",
    ],
  },
  {
    id: "crm",
    icon: "TeamOutlined",
    title: "Customer Relationship Management",
    description: "Build stronger customer relationships with intelligent CRM systems.",
    gradient: "from-blue-600 via-cyan-600 to-teal-600",
    features: [
      "360° Customer View",
      "Sales Force Automation",
      "Marketing Campaign Management",
      "Customer Service & Support",
      "Lead & Opportunity Management",
      "Mobile CRM Access",
    ],
    benefits: [
      "35% increase in sales productivity",
      "Better customer retention and satisfaction",
      "Automated marketing campaigns",
      "Improved collaboration across teams",
    ],
  },
  {
    id: "ai",
    icon: "RobotOutlined",
    title: "Artificial Intelligence & Machine Learning",
    description: "Leverage AI and ML to unlock insights and automate processes.",
    gradient: "from-pink-600 via-rose-600 to-red-600",
    features: [
      "Predictive Analytics",
      "Natural Language Processing",
      "Computer Vision",
      "Recommendation Engines",
      "Automated Decision Making",
      "Custom ML Model Development",
    ],
    benefits: [
      "50% faster decision-making",
      "Automated repetitive tasks",
      "Data-driven insights and predictions",
      "Enhanced customer experiences",
    ],
  },
  {
    id: "cloud",
    icon: "CloudOutlined",
    title: "Cloud Infrastructure",
    description: "Modernize your IT infrastructure with scalable cloud solutions.",
    gradient: "from-sky-600 via-blue-600 to-indigo-600",
    features: [
      "Cloud Migration & Strategy",
      "Multi-cloud Architecture",
      "DevOps & CI/CD",
      "Cloud Security & Compliance",
      "Infrastructure as Code",
      "Cost Optimization",
    ],
    benefits: [
      "60% reduction in infrastructure costs",
      "99.99% uptime guarantee",
      "Scalable and flexible resources",
      "Enhanced security and compliance",
    ],
  },
  {
    id: "iot",
    icon: "ApiOutlined",
    title: "Internet of Things",
    description: "Connect devices and systems to create intelligent ecosystems.",
    gradient: "from-emerald-600 via-green-600 to-teal-600",
    features: [
      "IoT Device Management",
      "Real-time Data Collection",
      "Edge Computing Solutions",
      "Predictive Maintenance",
      "Smart Manufacturing",
      "Connected Supply Chain",
    ],
    benefits: [
      "30% reduction in maintenance costs",
      "Real-time monitoring and alerts",
      "Improved operational efficiency",
      "Data-driven insights from connected devices",
    ],
  },
  {
    id: "security",
    icon: "SafetyOutlined",
    title: "Cybersecurity Solutions",
    description: "Protect your digital assets with comprehensive security solutions.",
    gradient: "from-red-600 via-orange-600 to-yellow-600",
    features: [
      "Threat Detection & Response",
      "Identity & Access Management",
      "Data Encryption & Privacy",
      "Security Compliance",
      "Penetration Testing",
      "24/7 Security Monitoring",
    ],
    benefits: [
      "Zero security breaches",
      "Compliance with industry standards",
      "Real-time threat detection",
      "Comprehensive security coverage",
    ],
  },
];

export default function SolutionsPage() {
  const [hoveredSolution, setHoveredSolution] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    // Handle anchor links on mount
    const hash = window.location.hash.replace("#", "");
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
          setActiveSection(hash);
        }
      }, 100);
    }
  }, []);

  return (
    <div className="pt-20">
      <HeroBanner
        title="Our Solutions"
        subtitle="Comprehensive technology solutions tailored to your business needs"
        ctaText="Get Started"
        ctaLink="/contact"
      />

      {/* Solutions Overview Section */}
      <section className="py-24! md:py-32! lg:!py-40 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20 relative overflow-hidden">
        {/* Animated Background Blobs */}
        <div className="absolute inset-0 !opacity-15 !pointer-events-none">
          <motion.div
            className="!absolute !top-20 !left-10 !w-[400px] !h-[400px] !bg-gradient-to-br !from-blue-500 !to-cyan-500 !rounded-full !blur-[140px]"
            animate={{
              x: [0, 80, 0],
              y: [0, 60, 0],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="!absolute !bottom-20 !right-10 !w-[500px] !h-[500px] !bg-gradient-to-br !from-purple-500 !to-pink-500 !rounded-full !blur-[160px]"
            animate={{
              x: [0, -70, 0],
              y: [0, -50, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="!absolute !top-1/2 !left-1/2 !-translate-x-1/2 !-translate-y-1/2 !w-[600px] !h-[600px] !bg-gradient-to-br !from-indigo-400 !to-purple-400 !rounded-full !blur-[180px]"
            animate={{
              scale: [1, 1.4, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        {/* Modern Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.04]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(59,130,246,0.5) 1px, transparent 0)`,
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <div className="container !mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="mb-16 md:mb-20"
          >
            <SectionTitle
              title="Our Solutions"
              subtitle="Comprehensive technology solutions tailored to your business needs"
            />
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                  type: "spring",
                  stiffness: 100,
                }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="h-full"
              >
                <ServiceCard
                  title={solution.title}
                  description={solution.description}
                  icon={solution.icon}
                  link={solution.link}
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Modern Wave Separator */}
        <div className="absolute !bottom-0 !left-0 !right-0 !pointer-events-none">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="!w-full !h-auto"
            preserveAspectRatio="none"
          >
            <path
              d="M0 120L48 110C96 100 192 80 288 75C384 70 480 80 576 82.5C672 85 768 80 864 75C960 70 1056 65 1152 67.5C1248 70 1344 80 1392 85L1440 90V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0Z"
              fill="white"
              className="drop-shadow-2xl"
            />
          </svg>
        </div>
      </section>

      {/* Detailed Solutions Sections */}
      <section className="!py-24 md:!py-32 lg:!py-40 bg-gradient-to-b from-white via-slate-50/50 to-white relative overflow-hidden">
        {/* Elegant Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, rgba(59,130,246,0.4) 1.5px, transparent 0)`,
              backgroundSize: "50px 50px",
            }}
          />
        </div>

        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/10 to-transparent pointer-events-none"></div>

        <div className="container !mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="mb-20 md:mb-24"
          >
            <SectionTitle
              title="Solution Details"
              subtitle="Explore each solution in detail to understand how we can help your business"
            />
          </motion.div>

          <div className="!max-w-6xl !mx-auto space-y-20 md:space-y-24">
            {solutionDetails.map((detail, index) => {
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              const IconComponent = (Icons as any)[detail.icon] || Icons.AppstoreOutlined;

              return (
                <motion.div
                  key={detail.id}
                  id={detail.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="relative group"
                  onMouseEnter={() => setHoveredSolution(detail.id)}
                  onMouseLeave={() => setHoveredSolution(null)}
                >
                  {/* Anchor spacing */}
                  <div className="absolute -top-24" id={detail.id}></div>

                  <div className="relative !mb-4">
                    {/* Enhanced Glow Effect on Hover */}
                    <motion.div
                      className={`absolute -inset-4 bg-gradient-to-r ${detail.gradient} rounded-3xl blur-3xl opacity-0 group-hover:opacity-40 transition-opacity duration-700`}
                      animate={
                        hoveredSolution === detail.id
                          ? {
                              scale: [1, 1.08, 1],
                              opacity: [0, 0.4, 0.4],
                              rotate: [0, 2, 0],
                            }
                          : {}
                      }
                      transition={{ duration: 0.8, ease: "easeOut" }}
                    />

                    {/* Secondary glow layer */}
                    <motion.div
                      className={`absolute -inset-2 bg-gradient-to-r ${detail.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                      animate={hoveredSolution === detail.id ? { opacity: [0, 0.2, 0.2] } : {}}
                    />

                    <Card
                      className={`
                        relative h-full border-0 rounded-2xl overflow-hidden shadow-xl
                        transition-all duration-500 ease-out
                        backdrop-blur-sm
                        ${
                          hoveredSolution === detail.id
                            ? "shadow-2xl scale-[1.01] ring-2 ring-white/50"
                            : ""
                        }
                        group-hover:ring-2 group-hover:ring-opacity-30
                      `}
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(255,255,255,0.98) 0%, rgba(255,255,255,1) 100%)",
                      }}
                    >
                      {/* Header with Enhanced Gradient */}
                      <div
                        className={`relative h-64 md:h-72 lg:h-80 bg-gradient-to-br ${detail.gradient} flex items-center justify-center overflow-hidden`}
                      >
                        {/* Animated Background Blobs - Enhanced */}
                        <div className="absolute inset-0 opacity-20">
                          <motion.div
                            className="absolute top-0 right-0 w-80 h-80 bg-white rounded-full blur-2xl"
                            animate={{
                              x: [0, 30, 0],
                              y: [0, 20, 0],
                              scale: [1, 1.1, 1],
                            }}
                            transition={{
                              duration: 10,
                              repeat: Infinity,
                              ease: "easeInOut",
                            }}
                          />
                          <motion.div
                            className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full blur-2xl"
                            animate={{
                              x: [0, -20, 0],
                              y: [0, -20, 0],
                              scale: [1, 1.1, 1],
                            }}
                            transition={{
                              duration: 12,
                              repeat: Infinity,
                              ease: "easeInOut",
                            }}
                          />
                        </div>

                        {/* Enhanced Grid Pattern Overlay */}
                        <div className="absolute inset-0 opacity-10">
                          <div
                            className="absolute inset-0"
                            style={{
                              backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                              backgroundSize: "40px 40px",
                            }}
                          />
                        </div>

                        <div className="relative z-10 text-center text-white px-4 sm:px-6">
                          <motion.div
                            whileHover={{ scale: 1.1, rotate: 8 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            className="mb-6 md:mb-8"
                          >
                            <div className="relative inline-block">
                              {/* Enhanced Glow rings */}
                              <motion.div
                                className="absolute -inset-4 bg-white/25 rounded-full blur-xl"
                                animate={{
                                  scale: [1, 1.08, 1],
                                  opacity: [0.25, 0.4, 0.25],
                                }}
                                transition={{
                                  duration: 3,
                                  repeat: Infinity,
                                  ease: "easeInOut",
                                }}
                              />
                              <div className="absolute -inset-2 bg-white/15 rounded-full blur-lg"></div>
                              <motion.div
                                whileHover={{ rotate: 360 }}
                                transition={{ duration: 0.8 }}
                                className="w-24 h-24 md:w-28 md:h-28 bg-white/20 backdrop-blur-lg rounded-2xl flex items-center justify-center shadow-xl border-2 border-white/30 relative ring-2 ring-white/20"
                              >
                                <IconComponent className="text-white text-5xl md:text-6xl drop-shadow-xl" />
                              </motion.div>
                            </div>
                          </motion.div>

                          <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-5 leading-tight drop-shadow-xl"
                          >
                            {detail.title}
                          </motion.h2>
                          <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                            className="text-base md:text-lg lg:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed font-normal drop-shadow-md"
                          >
                            {detail.description}
                          </motion.p>
                        </div>

                        {/* Decorative Bottom Wave */}
                        <div className="absolute !bottom-0 !left-0 !right-0">
                          <svg
                            viewBox="0 0 1440 120"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="!w-full"
                          >
                            <path
                              d="M0 120L60 112.5C120 105 240 90 360 82.5C480 75 600 75 720 78.75C840 82.5 960 90 1080 93.75C1200 97.5 1320 97.5 1380 97.5L1440 97.5V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
                              fill="white"
                            />
                          </svg>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-10 md:p-12 lg:p-14 bg-gradient-to-br from-white via-gray-50/30 to-blue-50/20">
                        <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
                          {/* Features */}
                          <div className="relative">
                            <motion.h3
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.5 }}
                              className="text-2xl md:text-3xl font-bold text-gray-900 mb-10 flex items-center gap-4"
                            >
                              <motion.div
                                whileHover={{ rotate: 360, scale: 1.1 }}
                                transition={{ duration: 0.6, type: "spring" }}
                                className={`w-14 h-14 rounded-xl bg-gradient-to-br ${detail.gradient} flex items-center justify-center shadow-lg ring-2 ring-white/50 relative`}
                              >
                                <div
                                  className={`absolute inset-0 bg-gradient-to-br ${detail.gradient} rounded-xl blur-sm opacity-50`}
                                ></div>
                                <Icons.CheckCircleOutlined className="text-white text-xl relative z-10" />
                              </motion.div>
                              <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 bg-clip-text text-transparent font-extrabold">
                                Key Features
                              </span>
                            </motion.h3>
                            <ul className="space-y-3">
                              {detail.features.map((feature, idx) => (
                                <motion.li
                                  key={idx}
                                  initial={{ opacity: 0, x: -20 }}
                                  whileInView={{ opacity: 1, x: 0 }}
                                  viewport={{ once: true, margin: "-50px" }}
                                  transition={{ delay: idx * 0.05, duration: 0.4, type: "spring" }}
                                  whileHover={{ x: 6, scale: 1.01 }}
                                  className="flex items-start gap-4 p-4 rounded-xl hover:bg-gradient-to-r hover:from-gray-50 hover:via-blue-50/30 hover:to-indigo-50/20 transition-all duration-300 group border border-gray-100 hover:border-blue-200/50 hover:shadow-md"
                                >
                                  <motion.div
                                    whileHover={{ scale: 1.3, rotate: 180 }}
                                    transition={{ duration: 0.4 }}
                                    className={`w-3 h-3 rounded-full bg-gradient-to-br ${detail.gradient} mt-2 flex-shrink-0 shadow-lg ring-2 ring-white relative`}
                                  >
                                    <div
                                      className={`absolute inset-0 bg-gradient-to-br ${detail.gradient} rounded-full blur-sm opacity-60`}
                                    ></div>
                                  </motion.div>
                                  <span className="text-gray-700 leading-relaxed text-base md:text-lg font-medium group-hover:text-gray-900 transition-colors flex-1">
                                    {feature}
                                  </span>
                                </motion.li>
                              ))}
                            </ul>
                          </div>

                          {/* Benefits */}
                          <div className="relative">
                            <motion.h3
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.5 }}
                              className="text-2xl md:text-3xl font-bold text-gray-900 mb-10 flex items-center gap-4"
                            >
                              <motion.div
                                whileHover={{ rotate: 360, scale: 1.1 }}
                                transition={{ duration: 0.6, type: "spring" }}
                                className={`w-14 h-14 rounded-xl bg-gradient-to-br ${detail.gradient} flex items-center justify-center shadow-lg ring-2 ring-white/50 relative`}
                              >
                                <div
                                  className={`absolute inset-0 bg-gradient-to-br ${detail.gradient} rounded-xl blur-sm opacity-50`}
                                ></div>
                                <Icons.TrophyOutlined className="text-white text-xl relative z-10" />
                              </motion.div>
                              <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 bg-clip-text text-transparent font-extrabold">
                                Key Benefits
                              </span>
                            </motion.h3>
                            <ul className="space-y-3">
                              {detail.benefits.map((benefit, idx) => (
                                <motion.li
                                  key={idx}
                                  initial={{ opacity: 0, x: -20 }}
                                  whileInView={{ opacity: 1, x: 0 }}
                                  viewport={{ once: true, margin: "-50px" }}
                                  transition={{ delay: idx * 0.05, duration: 0.4, type: "spring" }}
                                  whileHover={{ scale: 1.02, y: -4 }}
                                  className="relative group"
                                >
                                  {/* Card background with gradient */}
                                  <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50/40 rounded-xl border border-gray-200 group-hover:border-blue-300 transition-all duration-300 shadow-sm group-hover:shadow-lg"></div>

                                  {/* Glow effect on hover */}
                                  <div
                                    className={`absolute -inset-0.5 bg-gradient-to-br ${detail.gradient} rounded-xl opacity-0 group-hover:opacity-20 blur-sm transition-opacity duration-300`}
                                  ></div>

                                  <div className="relative flex items-start gap-4 p-5">
                                    <motion.div
                                      whileHover={{ rotate: 360, scale: 1.15 }}
                                      transition={{ duration: 0.5, type: "spring" }}
                                      className={`w-10 h-10 rounded-lg bg-gradient-to-br ${detail.gradient} flex items-center justify-center flex-shrink-0 shadow-lg ring-2 ring-white/50 relative`}
                                    >
                                      <div
                                        className={`absolute inset-0 bg-gradient-to-br ${detail.gradient} rounded-lg blur-sm opacity-50`}
                                      ></div>
                                      <Icons.CheckCircleOutlined className="text-white text-base relative z-10" />
                                    </motion.div>
                                    <span className="text-gray-700 leading-relaxed text-base md:text-lg font-semibold pt-1 group-hover:text-gray-900 transition-colors flex-1">
                                      {benefit}
                                    </span>
                                  </div>
                                </motion.li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        {/* Enhanced CTA Section */}
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.4, duration: 0.6 }}
                          className="!mt-12 !pt-8 border-t border-gray-200 text-center relative"
                        >
                          {/* Decorative element */}
                          <div
                            className={`absolute top-0 left-1/2 -translate-x-1/2 w-16 h-0.5 bg-gradient-to-r ${detail.gradient} rounded-full`}
                          ></div>

                          <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-gray-700 !mb-6 text-base md:text-lg font-medium"
                          >
                            Ready to transform your business with{" "}
                            <span
                              className={`bg-gradient-to-r ${detail.gradient} bg-clip-text text-transparent font-semibold`}
                            >
                              {detail.title}
                            </span>
                            ?
                          </motion.p>
                          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Link to="/contact">
                              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Button
                                  type="primary"
                                  size="large"
                                  icon={<ArrowRightOutlined />}
                                  className={`bg-gradient-to-r ${detail.gradient} border-0 h-12 px-8 text-base font-semibold shadow-lg hover:shadow-xl transition-all rounded-xl`}
                                  iconPosition="end"
                                >
                                  Get Started
                                </Button>
                              </motion.div>
                            </Link>
                            <Link to="/contact">
                              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Button
                                  size="large"
                                  className={`border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 hover:border-gray-400 h-12 px-8 text-base font-semibold rounded-xl transition-all shadow-sm hover:shadow-md`}
                                >
                                  Learn More
                                </Button>
                              </motion.div>
                            </Link>
                          </div>
                        </motion.div>
                      </div>
                    </Card>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="!py-24 md:!py-32 relative overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
        {/* Animated Background */}
        <div className="absolute inset-0 !opacity-20">
          <motion.div
            className="absolute !top-20 !left-10 !w-96 !h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"
            animate={{
              x: [0, 50, 0],
              y: [0, 30, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute !top-40 !right-10 !w-96 !h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"
            animate={{
              x: [0, -40, 0],
              y: [0, -20, 0],
              scale: [1, 1.15, 1],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute !bottom-20 !left-1/2 !w-96 !h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"
            animate={{
              x: [0, 30, 0],
              y: [0, -30, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        <div className="container !mx-auto !px-4 relative !z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center !max-w-4xl !mx-auto"
          >
            <h2 className="!text-5xl md:text-6xl font-extrabold text-white !mb-8">
              Ready to Get Started?
            </h2>
            <p className="!text-2xl text-white/95 !mb-12 leading-relaxed">
              Let's discuss how our solutions can transform your business
            </p>

            <div className="flex flex-wrap !gap-6 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/contact">
                  <Button
                    type="primary"
                    size="large"
                    icon={<ArrowRightOutlined />}
                    className="bg-white text-indigo-900 border-0 h-16 px-12 text-lg font-bold shadow-2xl hover:shadow-white/50 transition-all rounded-xl"
                    iconPosition="end"
                  >
                    Contact Us Today
                  </Button>
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/products">
                  <Button
                    size="large"
                    className="bg-white/10 backdrop-blur-lg text-white border-2 border-white/30 hover:bg-white/20 h-16 px-12 text-lg font-bold rounded-xl transition-all"
                  >
                    View Our Products
                  </Button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
