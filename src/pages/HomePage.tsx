import { Button, Carousel } from "antd";
import { ArrowRightOutlined, CheckCircleOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import HeroBanner from "@/components/HeroBanner";
import SectionTitle from "@/components/SectionTitle";
import ServiceCard from "@/components/ServiceCard";
import ProjectCard from "@/components/ProjectCard";
import SeoHelmet from "@/components/SeoHelmet";
import { solutions, projects } from "@/lib/mockData";

export default function HomePage() {
  const { t } = useTranslation();

  return (
    <>
      <SeoHelmet
        title="NexaCore | Digital Transformation Solutions"
        description="NexaCore cung cấp giải pháp ERP, CRM, hạ tầng dữ liệu và đám mây giúp doanh nghiệp tối ưu vận hành và tăng trưởng bền vững."
        keywords={["NexaCore", "ERP", "CRM", "Data Platform", "Cloud", "Digital Transformation"]}
      />
      <div className="pt-20">
        {/* Hero Section */}
        <HeroBanner
          title={t("home.hero.title")}
          subtitle={t("home.hero.subtitle")}
          ctaText={t("home.hero.getStarted")}
          ctaLink="/contact"
          secondaryCtaText={t("home.hero.learnMore")}
          secondaryCtaLink="/about"
        />
        {/* About Preview Section */}
        <section className="!py-32 md:py-48 lg:py-56 bg-gradient-to-b from-white via-blue-50/30 to-white relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 opacity-[0.02]">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, #1890FF 1px, transparent 0)`,
                backgroundSize: "40px 40px",
              }}
            />
          </div>

          <div className="container !mx-auto px-4 relative z-10">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-20 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-600 rounded-full px-5 py-3 mb-8">
                    <span className="text-base font-semibold">{t("home.about.badge")}</span>
                  </div>

                  <h2 className="text-5xl lg:text-6xl font-bold text-[#1A1A1A] mb-8 leading-tight">
                    {t("home.about.title")}
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#1e3a8a] to-[#06b6d4] mt-2">
                      {t("home.about.transformation")}
                    </span>
                  </h2>

                  <p className="text-2xl text-gray-600 mb-12 leading-relaxed">
                    {t("home.about.description")}
                  </p>

                  <div className="space-y-8 mb-12">
                    <motion.div
                      className="flex items-start gap-5 bg-white rounded-2xl p-7 shadow-sm hover:shadow-lg transition-all duration-300"
                      whileHover={{ x: 5 }}
                    >
                      <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                        <CheckCircleOutlined className="text-white text-2xl" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-2">
                          {t("home.about.awardWinning")}
                        </h4>
                        <p className="text-base text-gray-600 leading-relaxed">
                          {t("home.about.awardWinningDesc")}
                        </p>
                      </div>
                    </motion.div>

                    <motion.div
                      className="flex items-start !mt-2 !gap-5 bg-white rounded-2xl p-7 shadow-sm hover:shadow-lg transition-all duration-300"
                      whileHover={{ x: 5 }}
                    >
                      <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                        <CheckCircleOutlined className="text-white text-2xl" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-2">
                          {t("home.about.globalPresence")}
                        </h4>
                        <p className="text-base text-gray-600 leading-relaxed">
                          {t("home.about.globalPresenceDesc")}
                        </p>
                      </div>
                    </motion.div>

                    <motion.div
                      className="flex items-start !mt-2 !gap-5 bg-white rounded-2xl p-7 shadow-sm hover:shadow-lg transition-all duration-300"
                      whileHover={{ x: 5 }}
                    >
                      <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                        <CheckCircleOutlined className="text-white text-2xl" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-2">
                          {t("home.about.provenTrack")}
                        </h4>
                        <p className="text-base text-gray-600 leading-relaxed">
                          {t("home.about.provenTrackDesc")}
                        </p>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="relative flex flex-col"
                >
                  {/* Decorative elements */}
                  <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-2xl"></div>
                  <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-2xl"></div>

                  {/* Main card */}
                  <div className="relative bg-gradient-to-br from-[#1e3a8a] via-[#3b82f6] to-[#06b6d4] rounded-3xl min-h-[300px] p-14 shadow-2xl">
                    <div className="text-white text-center">
                      <motion.div
                        className="text-9xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-br from-white to-blue-200"
                        initial={{ scale: 0.5, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                      >
                        10+
                      </motion.div>
                      <div className="text-4xl font-semibold mb-14">
                        {t("home.about.yearsOfExcellence")}
                      </div>

                      <div className="grid grid-cols-3 gap-5">
                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                          <div className="text-5xl font-bold mb-2">200+</div>
                          <div className="text-lg opacity-90">{t("home.about.clients")}</div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                          <div className="text-5xl font-bold mb-2">500+</div>
                          <div className="text-lg opacity-90">{t("home.about.projects")}</div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                          <div className="text-5xl font-bold mb-2">15+</div>
                          <div className="text-lg opacity-90">{t("home.about.countries")}</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Button below card */}
                  <div className="!mt-8 flex justify-start">
                    <Link to="/about">
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button
                          type="primary"
                          size="large"
                          icon={<ArrowRightOutlined />}
                          className="bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6] hover:from-[#1e40af] hover:to-[#60a5fa] border-0 h-14 px-10 text-lg font-semibold shadow-lg hover:shadow-xl"
                          iconPosition="end"
                        >
                          {t("home.about.learnMoreAboutUs")}
                        </Button>
                      </motion.div>
                    </Link>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
        {/* Solutions Overview Section */}
        <section className="!py-20 md:py-40 lg:py-48 bg-gradient-to-b from-gray-50 via-blue-50/20 to-gray-50 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 opacity-[0.03]">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `linear-gradient(rgba(0,82,204,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,82,204,0.1) 1px, transparent 1px)`,
                backgroundSize: "50px 50px",
              }}
            />
          </div>

          <div className="container !mx-auto px-4 relative z-10">
            <SectionTitle
              title={t("home.solutions.title")}
              subtitle={t("home.solutions.subtitle")}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {solutions.map((solution, index) => (
                <motion.div
                  key={solution.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
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
            <div className="text-center !mt-16">
              <Link to="/solutions">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    size="large"
                    className="h-14 px-12 text-lg font-semibold border-2 border-[#0052CC] text-[#0052CC] hover:bg-[#0052CC] hover:text-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl"
                  >
                    {t("home.solutions.viewAll")}
                  </Button>
                </motion.div>
              </Link>
            </div>
          </div>
        </section>
        {/* Featured Projects Section */}
        <section className="!py-20 md:!py-32 !bg-gradient-to-b !from-white !via-purple-50/30 !to-white !relative !overflow-hidden">
          {/* Animated Background Blobs */}
          <div className="!absolute !inset-0 !opacity-20 !pointer-events-none">
            <motion.div
              className="!absolute !top-20 !left-10 !w-96 !h-96 !bg-gradient-to-br !from-blue-400 !to-cyan-400 !rounded-full !blur-[120px]"
              animate={{
                x: [0, 60, 0],
                y: [0, 40, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="!absolute !bottom-20 !right-10 !w-[500px] !h-[500px] !bg-gradient-to-br !from-purple-400 !to-pink-400 !rounded-full !blur-[140px]"
              animate={{
                x: [0, -50, 0],
                y: [0, -30, 0],
                scale: [1, 1.15, 1],
              }}
              transition={{
                duration: 18,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>

          {/* Grid Pattern Background */}
          <div className="!absolute !inset-0 !opacity-[0.02]">
            <div
              className="!absolute !inset-0"
              style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, #8b5cf6 1px, transparent 0)`,
                backgroundSize: "40px 40px",
              }}
            />
          </div>

          <div className="!container !mx-auto !px-4 !relative !z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <SectionTitle
                title={t("home.projects.title")}
                subtitle={t("home.projects.subtitle")}
              />
            </motion.div>

            {/* Stats Cards */}
            <motion.div
              className="!max-w-5xl !mx-auto !mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="!grid !grid-cols-1 md:!grid-cols-3 !gap-6">
                <motion.div
                  className="!bg-gradient-to-br !from-blue-500 !to-cyan-500 !rounded-2xl !p-8 !text-white !text-center !shadow-xl !shadow-blue-500/30"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="!text-6xl !font-bold !mb-3"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3, type: "spring" }}
                  >
                    500+
                  </motion.div>
                  <div className="!text-xl !font-semibold !opacity-90">
                    {t("home.projects.projectsDelivered")}
                  </div>
                </motion.div>

                <motion.div
                  className="!bg-gradient-to-br !from-purple-500 !to-pink-500 !rounded-2xl !p-8 !text-white !text-center !shadow-xl !shadow-purple-500/30"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="!text-6xl !font-bold !mb-3"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4, type: "spring" }}
                  >
                    98%
                  </motion.div>
                  <div className="!text-xl !font-semibold !opacity-90">
                    {t("home.projects.clientSatisfaction")}
                  </div>
                </motion.div>

                <motion.div
                  className="!bg-gradient-to-br !from-green-500 !to-emerald-500 !rounded-2xl !p-8 !text-white !text-center !shadow-xl !shadow-green-500/30"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="!text-6xl !font-bold !mb-3"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5, type: "spring" }}
                  >
                    50+
                  </motion.div>
                  <div className="!text-xl !font-semibold !opacity-90">
                    {t("home.projects.countriesWorldwide")}
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Projects Carousel */}
            <motion.div
              className="!max-w-7xl !mx-auto !mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="!bg-white/60 !backdrop-blur-sm !rounded-3xl !p-8 !shadow-2xl">
                <Carousel
                  autoplay
                  dots={{ className: "custom-dots" }}
                  className="project-carousel"
                  autoplaySpeed={4000}
                >
                  {projects.map((project) => (
                    <div key={project.id} className="!px-2">
                      <ProjectCard project={project} />
                    </div>
                  ))}
                </Carousel>
              </div>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              className="!text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Link to="/projects">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    type="primary"
                    size="large"
                    icon={<ArrowRightOutlined />}
                    className="!bg-gradient-to-r !from-blue-600 !via-purple-600 !to-pink-600 !border-0 hover:!from-blue-700 hover:!via-purple-700 hover:!to-pink-700 !h-14 !px-12 !text-lg !font-semibold !shadow-xl !shadow-purple-500/30 hover:!shadow-purple-500/50 !transition-all !rounded-xl"
                    iconPosition="end"
                  >
                    {t("home.projects.viewAll")}
                  </Button>
                </motion.div>
              </Link>
            </motion.div>
          </div>
        </section>
        {/* <section className="!py-20 bg-[#F5F7FA]">
        <div className="container mx-auto px-4">
          <SectionTitle
            title={t("home.clients.title")}
            subtitle={t("home.clients.subtitle")}
          />
          <div className="max-w-6xl !mt-2 !mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
              <motion.div
                key={num}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: num * 0.05 }}
                className="bg-white rounded-xl p-8 flex items-center justify-center shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-4xl font-bold text-gray-300">LOGO {num}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}
        {/* Call-to-Action Section */}
        <section className="!py-20 bg-gradient-to-br from-[#0052CC] to-[#1890FF] text-white">
          <div className="container mx-auto !px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">{t("home.cta.title")}</h2>
              <p className="text-xl mb-10 max-w-3xl !mx-auto text-gray-100">
                {t("home.cta.description")}
              </p>
              <div className="flex flex-col !mt-5 sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button
                    size="large"
                    className="bg-white text-[#0052CC] hover:bg-gray-100 border-0 h-12 px-8 text-lg font-semibold"
                  >
                    {t("home.cta.scheduleConsultation")}
                  </Button>
                </Link>
                <Link to="/solutions">
                  <Button
                    size="large"
                    className="bg-transparent text-white border-2 border-white hover:bg-white hover:text-[#0052CC] h-12 px-8 text-lg"
                  >
                    {t("home.cta.exploreSolutions")}
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
