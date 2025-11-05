import { motion } from "framer-motion";
import { useState } from "react";
import * as Icons from "@ant-design/icons";
import HeroBanner from "@/components/HeroBanner";
import SectionTitle from "@/components/SectionTitle";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/mockData";
import { Link } from "react-router-dom";

const statGradients = [
  "from-violet-600 via-purple-600 to-indigo-600",
  "from-blue-600 via-cyan-600 to-teal-600",
  "from-pink-600 via-rose-600 to-red-600",
  "from-emerald-600 via-green-600 to-teal-600",
];

export default function ProjectsPage() {
  const [hoveredStat, setHoveredStat] = useState<number | null>(null);

  const stats = [
    {
      label: "Projects Completed",
      value: "500+",
      icon: "CheckCircleOutlined",
      description: "Successfully delivered",
    },
    {
      label: "Countries Served",
      value: "50+",
      icon: "GlobalOutlined",
      description: "Worldwide presence",
    },
    {
      label: "Client Satisfaction",
      value: "98%",
      icon: "SmileOutlined",
      description: "Happy clients",
    },
    {
      label: "Awards Won",
      value: "25+",
      icon: "TrophyOutlined",
      description: "Industry recognition",
    },
  ];

  return (
    <div className="!pt-20">
      <HeroBanner
        title="Our Projects"
        subtitle="Success stories and case studies from clients around the world"
        ctaText="Start Your Project"
        ctaLink="/contact"
      />

      <section className="!py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
        <div className="container !mx-auto !px-4">
          <SectionTitle
            title="Case Studies"
            subtitle="See how we've helped organizations achieve their digital transformation goals"
          />

          <div className="!max-w-7xl !mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 !gap-8 !mt-12">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="!py-24 relative overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
        {/* Animated Background */}
        <div className="absolute inset-0 !opacity-20">
          <div className="absolute !top-20 !left-10 !w-96 !h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute !top-40 !right-10 !w-96 !h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute !bottom-20 !left-1/2 !w-96 !h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>

        <div className="container !mx-auto !px-4 relative !z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center !mb-16"
          >
            <h2 className="!text-5xl md:text-6xl font-extrabold text-white !mb-6">Our Impact</h2>
            <p className="!text-2xl text-white/95 !max-w-3xl !mx-auto leading-relaxed">
              Numbers that speak for themselves
            </p>
          </motion.div>

          <div className="!max-w-6xl !mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 !gap-8">
            {stats.map((stat, index) => {
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              const IconComponent = (Icons as any)[stat.icon] || Icons.CheckCircleOutlined;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onMouseEnter={() => setHoveredStat(index)}
                  onMouseLeave={() => setHoveredStat(null)}
                  className="relative group"
                >
                  <div
                    className={`
                      bg-white/10 backdrop-blur-lg rounded-3xl p-8 text-center
                      transition-all duration-500
                      ${hoveredStat === index ? "bg-white/20 scale-105" : ""}
                      border border-white/20
                    `}
                  >
                    <div
                      className={`
                        !w-16 !h-16 rounded-2xl bg-gradient-to-br ${
                          statGradients[index % statGradients.length]
                        }
                        flex items-center justify-center !mx-auto !mb-6 shadow-lg
                      `}
                    >
                      <IconComponent className="!text-3xl text-white" />
                    </div>
                    <motion.div
                      className="!text-5xl font-extrabold text-white !mb-3"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1, type: "spring" }}
                    >
                      {stat.value}
                    </motion.div>
                    <div className="!text-xl font-bold text-white/95 !mb-2">{stat.label}</div>
                    <div className="!text-sm text-white/80">{stat.description}</div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
