import { useState } from "react";
import { Card, Button, Tag, Badge, Input, Select } from "antd";
import * as Icons from "@ant-design/icons";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import HeroBanner from "@/components/HeroBanner";
import SectionTitle from "@/components/SectionTitle";
import SeoHelmet from "@/components/SeoHelmet";
import { jobs } from "@/lib/mockData";
import { careersMetadata } from "@/lib/metadata";

const { Search } = Input;
const { Option } = Select;

// Benefits, culture points, and application steps will be defined inside component to use translations

export default function CareersPage() {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState<string>("all");
  const [selectedLocation, setSelectedLocation] = useState<string>("all");

  const benefits = [
    {
      icon: "DollarCircleOutlined",
      title: t("careers.whyJoin.competitiveSalary.title"),
      description: t("careers.whyJoin.competitiveSalary.description"),
    },
    {
      icon: "HeartOutlined",
      title: t("careers.whyJoin.healthWellness.title"),
      description: t("careers.whyJoin.healthWellness.description"),
    },
    {
      icon: "CarOutlined",
      title: t("careers.whyJoin.flexibleWork.title"),
      description: t("careers.whyJoin.flexibleWork.description"),
    },
    {
      icon: "RocketOutlined",
      title: t("careers.whyJoin.careerGrowth.title"),
      description: t("careers.whyJoin.careerGrowth.description"),
    },
    {
      icon: "TeamOutlined",
      title: t("careers.whyJoin.greatTeam.title"),
      description: t("careers.whyJoin.greatTeam.description"),
    },
    {
      icon: "GiftOutlined",
      title: t("careers.whyJoin.timeOff.title"),
      description: t("careers.whyJoin.timeOff.description"),
    },
  ];

  const culturePoints = [
    {
      title: t("careers.culture.innovationFirst.title"),
      description: t("careers.culture.innovationFirst.description"),
      icon: "BulbOutlined",
    },
    {
      title: t("careers.culture.workLifeBalance.title"),
      description: t("careers.culture.workLifeBalance.description"),
      icon: "BalanceScaleOutlined",
    },
    {
      title: t("careers.culture.diversityInclusion.title"),
      description: t("careers.culture.diversityInclusion.description"),
      icon: "GlobalOutlined",
    },
    {
      title: t("careers.culture.continuousLearning.title"),
      description: t("careers.culture.continuousLearning.description"),
      icon: "BookOutlined",
    },
  ];

  const applicationSteps = [
    {
      step: 1,
      title: t("careers.applicationProcess.apply.title"),
      description: t("careers.applicationProcess.apply.description"),
      icon: "FileTextOutlined",
    },
    {
      step: 2,
      title: t("careers.applicationProcess.review.title"),
      description: t("careers.applicationProcess.review.description"),
      icon: "EyeOutlined",
    },
    {
      step: 3,
      title: t("careers.applicationProcess.interview.title"),
      description: t("careers.applicationProcess.interview.description"),
      icon: "VideoCameraOutlined",
    },
    {
      step: 4,
      title: t("careers.applicationProcess.offer.title"),
      description: t("careers.applicationProcess.offer.description"),
      icon: "CheckCircleOutlined",
    },
  ];

  // Get unique departments and locations
  const departments = Array.from(new Set(jobs.map((job) => job.department)));
  const locations = Array.from(new Set(jobs.map((job) => job.location)));

  // Filter jobs
  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment = selectedDepartment === "all" || job.department === selectedDepartment;
    const matchesLocation = selectedLocation === "all" || job.location === selectedLocation;
    return matchesSearch && matchesDepartment && matchesLocation;
  });

  return (
    <div className="pt-20">
      <SeoHelmet
        title={careersMetadata.title}
        description={careersMetadata.description}
        keywords={careersMetadata.keywords}
      />
      <HeroBanner
        title={t("careers.hero.title")}
        subtitle={t("careers.hero.subtitle")}
        ctaText={t("careers.hero.viewPositions")}
        ctaLink="#positions"
      />

      {/* Why Join Us Section */}
      <section className="!py-24 md:!py-32 lg:!py-40 !bg-gradient-to-br !from-blue-50/50 !via-indigo-50/30 !to-purple-50/20 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, rgba(59,130,246,0.3) 1px, transparent 0)`,
              backgroundSize: "50px 50px",
            }}
          />
        </div>

        <div className="container !mx-auto !px-4 sm:!px-6 lg:!px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20 md:mb-24"
          >
            <SectionTitle
              title={t("careers.whyJoin.title")}
              subtitle={t("careers.whyJoin.subtitle")}
            />
          </motion.div>

          <div className="!grid !grid-cols-1 md:!grid-cols-2 lg:!grid-cols-3 !gap-6 lg:!gap-8 !max-w-6xl !mx-auto">
            {benefits.map((benefit, index) => {
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              const IconComponent = (Icons as any)[benefit.icon] || Icons.AppstoreOutlined;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="h-full"
                >
                  <Card className="!h-full !rounded-2xl !shadow-md hover:!shadow-xl !transition-all !duration-300 !bg-white/90 !backdrop-blur-sm !border !border-gray-100/50">
                    <div className="!flex !flex-col !items-center !text-center !p-2">
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                        className="!w-14 !h-14 !rounded-xl !bg-gradient-to-br !from-blue-500 !to-indigo-600 !flex !items-center !justify-center !mb-4 !shadow-lg relative"
                      >
                        <div className="!absolute !inset-0 !bg-gradient-to-br !from-blue-500 !to-indigo-600 !rounded-xl !blur-sm !opacity-50"></div>
                        <IconComponent className="!text-white !text-xl relative z-10" />
                      </motion.div>
                      <h3 className="!text-lg !font-bold !text-gray-900 !mb-2">{benefit.title}</h3>
                      <p className="!text-sm !text-gray-600 !leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section
        id="positions"
        className="!py-24 md:!py-32 lg:!py-40 bg-white relative overflow-hidden"
      >
        <div className="container !mx-auto !px-4 sm:!px-6 lg:!px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="!mb-20 md:!mb-24"
          >
            <SectionTitle
              title={t("careers.positions.title")}
              subtitle={t("careers.positions.subtitle")}
            />
          </motion.div>

          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="!mb-16 max-w-5xl !mx-auto"
          >
            <Card className="!shadow-lg !rounded-2xl !bg-gradient-to-br !from-gray-50/80 !to-blue-50/40 !backdrop-blur-sm !border !border-gray-200/50">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="lg:col-span-2">
                  <Search
                    placeholder={t("careers.positions.searchPlaceholder")}
                    allowClear
                    size="large"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full"
                    prefix={<Icons.SearchOutlined className="text-gray-400" />}
                  />
                </div>
                <Select
                  size="large"
                  placeholder={t("careers.positions.allDepartments")}
                  value={selectedDepartment}
                  onChange={setSelectedDepartment}
                  className="w-full"
                  suffixIcon={<Icons.BranchesOutlined />}
                >
                  <Option value="all">{t("careers.positions.allDepartments")}</Option>
                  {departments.map((dept) => (
                    <Option key={dept} value={dept}>
                      {dept}
                    </Option>
                  ))}
                </Select>
                <Select
                  size="large"
                  placeholder={t("careers.positions.allLocations")}
                  value={selectedLocation}
                  onChange={setSelectedLocation}
                  className="w-full"
                  suffixIcon={<Icons.EnvironmentOutlined />}
                >
                  <Option value="all">{t("careers.positions.allLocations")}</Option>
                  {locations.map((loc) => (
                    <Option key={loc} value={loc}>
                      {loc}
                    </Option>
                  ))}
                </Select>
              </div>
            </Card>
          </motion.div>

          {/* Job Cards */}
          <div className="!max-w-5xl !mx-auto">
            {filteredJobs.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center !py-20"
              >
                <Icons.InboxOutlined className="text-7xl text-gray-300 !mb-6 !mx-auto" />
                <h3 className="text-2xl font-bold text-gray-700 mb-2">{t("careers.positions.emptyState.title")}</h3>
                <p className="text-lg text-gray-500">{t("careers.positions.emptyState.description")}</p>
              </motion.div>
            ) : (
              <div className="space-y-5">
                {filteredJobs.map((job, index) => (
                  <motion.div
                    key={job.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                    whileHover={{ y: -4, scale: 1.01 }}
                  >
                    <Card className="!rounded-xl !shadow-md hover:!shadow-xl !transition-all !duration-300 overflow-hidden group !border !border-gray-100/50">
                      <div className="!flex !flex-col lg:!flex-row lg:!items-start lg:!justify-between !gap-6 !p-2">
                        <div className="!flex-1">
                          <div className="!flex !items-start !gap-4 !mb-4">
                            <div className="!w-12 !h-12 !rounded-lg !bg-gradient-to-br !from-blue-500 !to-indigo-600 !flex !items-center !justify-center !shadow-md flex-shrink-0 relative">
                              <div className="!absolute !inset-0 !bg-gradient-to-br !from-blue-500 !to-indigo-600 !rounded-lg !blur-sm !opacity-50"></div>
                              <Icons.ProjectOutlined className="!text-white !text-lg relative z-10" />
                            </div>
                            <div className="!flex-1">
                              <h3 className="!text-xl md:!text-2xl !font-bold !text-gray-900 !mb-3 group-hover:!text-blue-600 !transition-colors">
                                {job.title}
                              </h3>
                              <div className="!flex !flex-wrap !items-center !gap-2 !mb-4">
                                <Tag
                                  icon={<Icons.BranchesOutlined />}
                                  color="blue"
                                  className="!text-xs !px-3 !py-1 !rounded-md !font-medium"
                                >
                                  {job.department}
                                </Tag>
                                <Tag
                                  icon={<Icons.EnvironmentOutlined />}
                                  color="green"
                                  className="!text-xs !px-3 !py-1 !rounded-md !font-medium"
                                >
                                  {job.location}
                                </Tag>
                                <Tag
                                  icon={<Icons.ClockCircleOutlined />}
                                  color="purple"
                                  className="!text-xs !px-3 !py-1 !rounded-md !font-medium"
                                >
                                  {job.type}
                                </Tag>
                              </div>
                              <p className="!text-gray-600 !leading-relaxed !mb-4 !text-sm md:!text-base">
                                {job.description}
                              </p>
                              <div className="!flex !flex-wrap !items-center !gap-2">
                                <span className="!text-xs !font-semibold !text-gray-700">
                                  {t("careers.positions.requirements")}:
                                </span>
                                {job.requirements.slice(0, 3).map((req, idx) => (
                                  <Tag
                                    key={idx}
                                    className="!text-xs !bg-gray-50 !text-gray-600 !border-gray-200"
                                  >
                                    {req.split(" ").slice(0, 3).join(" ")}...
                                  </Tag>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="!flex !flex-col !gap-3 lg:!min-w-[180px]">
                          <Button
                            type="primary"
                            size="large"
                            icon={<Icons.ArrowRightOutlined />}
                            className="!bg-gradient-to-r !from-blue-500 !to-indigo-600 !border-0 !h-11 !font-semibold !rounded-lg !shadow-md hover:!shadow-lg !transition-all"
                            iconPosition="end"
                          >
                            {t("careers.positions.applyNow")}
                          </Button>
                          <Button
                            size="large"
                            icon={<Icons.EyeOutlined />}
                            className="!border !border-gray-300 !text-gray-700 hover:!border-blue-500 hover:!text-blue-600 !h-11 !font-semibold !rounded-lg !transition-all !bg-white"
                          >
                            {t("careers.positions.viewDetails")}
                          </Button>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Culture & Values Section */}
      <section className="!py-24 md:!py-32 lg:!py-40 !bg-gradient-to-br !from-gray-50/80 !via-blue-50/30 !to-indigo-50/20 relative overflow-hidden">
        <div className="container !mx-auto !px-4 sm:!px-6 lg:!px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="!mb-20 md:!mb-24"
          >
            <SectionTitle title={t("careers.culture.title")} subtitle={t("careers.culture.subtitle")} />
          </motion.div>

          <div className="!grid !grid-cols-1 md:!grid-cols-2 lg:!grid-cols-4 !gap-6 lg:!gap-6 !max-w-6xl !mx-auto">
            {culturePoints.map((point, index) => {
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              const IconComponent = (Icons as any)[point.icon] || Icons.AppstoreOutlined;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="h-full"
                >
                  <Card className="!h-full !rounded-xl !shadow-md hover:!shadow-xl !transition-all !duration-300 !bg-white/90 !backdrop-blur-sm !text-center !border !border-gray-100/50">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className="!w-14 !h-14 !rounded-xl !bg-gradient-to-br !from-indigo-500 !to-purple-600 !flex !items-center !justify-center !mb-4 !mx-auto !shadow-lg relative"
                    >
                      <div className="!absolute !inset-0 !bg-gradient-to-br !from-indigo-500 !to-purple-600 !rounded-xl !blur-sm !opacity-50"></div>
                      <IconComponent className="!text-white !text-xl relative z-10" />
                    </motion.div>
                    <h3 className="!text-lg !font-bold !text-gray-900 !mb-2">{point.title}</h3>
                    <p className="!text-sm !text-gray-600 !leading-relaxed">{point.description}</p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Application Process Section */}
      <section className="!py-24 md:!py-32 lg:!py-40 !bg-white relative overflow-hidden">
        <div className="container !mx-auto !px-4 sm:!px-6 lg:!px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="!mb-20 md:!mb-24"
          >
            <SectionTitle title={t("careers.applicationProcess.title")} subtitle={t("careers.applicationProcess.subtitle")} />
          </motion.div>

          <div className="!max-w-5xl !mx-auto">
            <div className="relative">
              {/* Connection Line */}
              <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-indigo-300 to-purple-200 transform -translate-y-1/2 z-0"></div>

              <div className="!grid !grid-cols-1 md:!grid-cols-2 lg:!grid-cols-4 !gap-6 lg:!gap-6 relative z-10">
                {applicationSteps.map((step, index) => {
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  const IconComponent = (Icons as any)[step.icon] || Icons.AppstoreOutlined;
                  return (
                    <motion.div
                      key={step.step}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.5, delay: index * 0.08 }}
                      whileHover={{ y: -6, scale: 1.03 }}
                      className="relative h-full"
                    >
                      <Card className="!rounded-xl !shadow-md hover:!shadow-xl !transition-all !duration-300 !bg-gradient-to-br !from-white !to-blue-50/20 !text-center !h-full !border !border-gray-100/50">
                        <div className="relative !mb-4">
                          <motion.div
                            whileHover={{ rotate: 360, scale: 1.1 }}
                            transition={{ duration: 0.6 }}
                            className="!w-16 !h-16 !rounded-full !bg-gradient-to-br !from-blue-500 !to-indigo-600 !flex !items-center !justify-center !mx-auto !shadow-lg relative z-10"
                          >
                            <div className="!absolute !inset-0 !bg-gradient-to-br !from-blue-500 !to-indigo-600 !rounded-full !blur-sm !opacity-50"></div>
                            <IconComponent className="!text-white !text-2xl relative z-10" />
                          </motion.div>
                          <div className="!absolute !top-1/2 !left-1/2 transform -translate-x-1/2 -translate-y-1/2 !w-20 !h-20 !rounded-full !bg-blue-200/20 !blur-xl"></div>
                          <Badge
                            count={step.step}
                            className="!absolute -top-1 -right-1 !w-7 !h-7 !bg-gradient-to-br !from-purple-500 !to-pink-600 !border-2 !border-white !shadow-md !flex !items-center !justify-center !text-white !font-bold !text-xs"
                          />
                        </div>
                        <h3 className="!text-lg !font-bold !text-gray-900 !mb-2">{step.title}</h3>
                        <p className="!text-sm !text-gray-600 !leading-relaxed">
                          {step.description}
                        </p>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="!py-24 md:!py-32 lg:!py-40 !bg-gradient-to-br !from-blue-600 !via-indigo-600 !to-purple-600 relative overflow-hidden">
        {/* Animated Background */}
        <div className="!absolute !inset-0 !opacity-15">
          <motion.div
            className="absolute top-20 left-10 w-80 h-80 bg-white rounded-full blur-3xl"
            animate={{
              x: [0, 40, 0],
              y: [0, 30, 0],
              scale: [1, 1.15, 1],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-80 h-80 bg-white rounded-full blur-3xl"
            animate={{
              x: [0, -40, 0],
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

        <div className="container !mx-auto !px-4 sm:!px-6 lg:!px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl !mx-auto"
          >
            <h2 className="!text-3xl md:!text-4xl lg:!text-5xl !font-extrabold !text-white !mb-6 !leading-tight">
              {t("careers.cta.title")}
            </h2>
            <p className="!text-lg md:!text-xl !text-white/90 !mb-10 !leading-relaxed">
              {t("careers.cta.description")}
            </p>
            <div className="!flex !flex-col sm:!flex-row !gap-4 !justify-center">
              <Link to="/contact">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    type="primary"
                    size="large"
                    icon={<Icons.MailOutlined />}
                    className="!bg-white !text-blue-600 !border-0 !h-12 !px-8 !text-base !font-bold !shadow-xl hover:!shadow-2xl !rounded-xl"
                    iconPosition="end"
                  >
                    {t("careers.cta.sendResume")}
                  </Button>
                </motion.div>
              </Link>
              <Link to="/about">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    size="large"
                    className="!bg-white/10 !backdrop-blur-lg !text-white !border-2 !border-white/30 hover:!bg-white/20 !h-12 !px-8 !text-base !font-bold !rounded-xl !transition-all"
                  >
                    {t("careers.cta.learnMore")}
                  </Button>
                </motion.div>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
