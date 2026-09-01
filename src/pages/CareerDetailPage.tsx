import { useParams, Link } from "react-router-dom";
import {
  ArrowLeftOutlined,
  CheckCircleOutlined,
  BranchesOutlined,
  EnvironmentOutlined,
  ClockCircleOutlined,
  StarOutlined,
  DollarCircleOutlined,
  CalendarOutlined,
  FileTextOutlined,
  RightCircleOutlined,
  ToolOutlined,
  GiftOutlined,
  SendOutlined,
} from "@ant-design/icons";
import { motion } from "framer-motion";
import { Button, Tag, Divider } from "antd";
import { useTranslation } from "react-i18next";
import SeoHelmet from "@/components/SeoHelmet";
import { jobs } from "@/lib/mockData";

export default function CareerDetailPage() {
  const { t, i18n } = useTranslation();
  const { id } = useParams<{ id: string }>();
  const job = jobs.find((j) => j.id === id);
  const siteUrl = import.meta.env.VITE_SITE_URL;
  const canonicalUrl =
    siteUrl && job ? `${siteUrl.replace(/\/$/, "")}/careers/${job.id}` : undefined;

  if (!job) {
    return (
      <div className="!pt-20 min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1 className="!text-5xl font-extrabold !mb-6 text-gray-900">
            {t("careers.careerDetail.notFound")}
          </h1>
          <Link
            to="/careers"
            className="inline-flex items-center !gap-2 !px-8 !py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl font-bold !text-lg shadow-xl hover:shadow-2xl transition-all"
          >
            <ArrowLeftOutlined />
            <span>{t("careers.careerDetail.backToCareers")}</span>
          </Link>
        </motion.div>
      </div>
    );
  }

  const translatedTitle = (() => {
    const titleKey = `careers.items.${job.id}.title`;
    const translated = t(titleKey);
    return translated !== titleKey ? translated : job.title;
  })();

  const translatedDescription = (() => {
    const descKey = `careers.items.${job.id}.description`;
    const translated = t(descKey);
    return translated !== descKey ? translated : job.description;
  })();

  const translatedDepartment = (() => {
    const deptKey = `careers.items.${job.id}.department`;
    const translated = t(deptKey);
    return translated !== deptKey ? translated : job.department;
  })();

  const translatedLocation = (() => {
    const locKey = `careers.items.${job.id}.location`;
    const translated = t(locKey);
    return translated !== locKey ? translated : job.location;
  })();

  const translatedType = (() => {
    const typeKey = `careers.items.${job.id}.type`;
    const translated = t(typeKey);
    return translated !== typeKey ? translated : job.type;
  })();

  const translatedSalary = job.salary
    ? (() => {
        const salaryKey = `careers.items.${job.id}.salary`;
        const translated = t(salaryKey);
        return translated !== salaryKey ? translated : job.salary;
      })()
    : undefined;

  const translatedExperienceLevel = job.experienceLevel
    ? (() => {
        const expKey = `careers.items.${job.id}.experienceLevel`;
        const translated = t(expKey);
        return translated !== expKey ? translated : job.experienceLevel;
      })()
    : undefined;

  const translatedResponsibilities = (() => {
    const respKey = `careers.items.${job.id}.responsibilities`;
    const translated = t(respKey, { returnObjects: true });
    return Array.isArray(translated) && translated[0] !== respKey
      ? translated
      : job.responsibilities;
  })();

  const translatedRequirements = (() => {
    const reqKey = `careers.items.${job.id}.requirements`;
    const translated = t(reqKey, { returnObjects: true });
    return Array.isArray(translated) && translated[0] !== reqKey ? translated : job.requirements;
  })();

  const translatedSkills = job.skills
    ? (() => {
        const skillsKey = `careers.items.${job.id}.skills`;
        const translated = t(skillsKey, { returnObjects: true });
        return Array.isArray(translated) && translated[0] !== skillsKey ? translated : job.skills;
      })()
    : undefined;

  const translatedBenefits = job.benefits
    ? (() => {
        const benefitsKey = `careers.items.${job.id}.benefits`;
        const translated = t(benefitsKey, { returnObjects: true });
        return Array.isArray(translated) && translated[0] !== benefitsKey
          ? translated
          : job.benefits;
      })()
    : undefined;

  return (
    <div className="!pt-20 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
      <SeoHelmet
        title={`${translatedTitle} | NexaCore`}
        description={translatedDescription}
        url={canonicalUrl}
        type="article"
      />
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 text-white !py-24 md:!py-32 lg:!py-40">
        <div className="absolute inset-0 !opacity-20">
          <motion.div
            className="absolute !top-20 !left-10 !w-96 !h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl"
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
        </div>

        <div className="container !mx-auto !px-4 sm:!px-6 lg:!px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <Link
              to="/careers"
              className="inline-flex items-center !gap-2 !mb-8 text-white/90 hover:text-white transition-colors"
            >
              <ArrowLeftOutlined />
              <span>{t("careers.careerDetail.backToCareers")}</span>
            </Link>

            <h1 className="!text-4xl md:!text-5xl lg:!text-6xl !font-extrabold !mb-6 !leading-tight">
              {translatedTitle}
            </h1>

            <div className="!flex !flex-wrap !items-center !gap-3 !mb-6">
              <Tag
                icon={<BranchesOutlined />}
                color="blue"
                className="!text-sm !px-4 !py-2 !rounded-lg !font-medium !bg-white/20 !border-white/30 !text-white"
              >
                {translatedDepartment}
              </Tag>
              <Tag
                icon={<EnvironmentOutlined />}
                color="green"
                className="!text-sm !px-4 !py-2 !rounded-lg !font-medium !bg-white/20 !border-white/30 !text-white"
              >
                {translatedLocation}
              </Tag>
              <Tag
                icon={<ClockCircleOutlined />}
                color="purple"
                className="!text-sm !px-4 !py-2 !rounded-lg !font-medium !bg-white/20 !border-white/30 !text-white"
              >
                {translatedType}
              </Tag>
              {translatedExperienceLevel && (
                <Tag
                  icon={<StarOutlined />}
                  color="orange"
                  className="!text-sm !px-4 !py-2 !rounded-lg !font-medium !bg-white/20 !border-white/30 !text-white"
                >
                  {translatedExperienceLevel}
                </Tag>
              )}
            </div>

            {translatedSalary && (
              <div className="!mb-6">
                <span className="!text-xl !font-semibold !text-white/90">
                  <DollarCircleOutlined className="!mr-2" />
                  {t("careers.detail.salary")}:{" "}
                  <span className="!text-white">{translatedSalary}</span>
                </span>
              </div>
            )}

            {(job.postedDate || job.applicationDeadline) && (
              <div className="!flex !flex-wrap !gap-4 !mb-6 !text-sm !text-white/80">
                {job.postedDate && (
                  <span>
                    <CalendarOutlined className="!mr-1" />
                    {t("careers.detail.postedDate")}:{" "}
                    {new Date(job.postedDate).toLocaleDateString(
                      i18n.language === "vi" ? "vi-VN" : "en-US",
                      {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      }
                    )}
                  </span>
                )}
                {job.applicationDeadline && (
                  <span>
                    <ClockCircleOutlined className="!mr-1" />
                    {t("careers.detail.applicationDeadline")}:{" "}
                    {new Date(job.applicationDeadline).toLocaleDateString(
                      i18n.language === "vi" ? "vi-VN" : "en-US",
                      {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      }
                    )}
                  </span>
                )}
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="!py-16 md:!py-24 lg:!py-32">
        <div className="container !mx-auto !px-4 sm:!px-6 lg:!px-8">
          <div className="max-w-4xl !mx-auto">
            {/* Job Description */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="!mb-12"
            >
              <h2 className="!text-3xl !font-bold !text-gray-900 !mb-6 !flex !items-center">
                <FileTextOutlined className="!mr-3 !text-blue-600" />
                {t("careers.detail.jobDescription")}
              </h2>
              <p className="!text-lg !text-gray-700 !leading-relaxed">{translatedDescription}</p>
            </motion.div>

            <Divider />

            {/* Responsibilities */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="!mb-12"
            >
              <h2 className="!text-3xl !font-bold !text-gray-900 !mb-6 !flex !items-center">
                <CheckCircleOutlined className="!mr-3 !text-blue-600" />
                {t("careers.detail.responsibilities")}
              </h2>
              <ul className="!list-none !pl-0">
                {translatedResponsibilities.map((resp, idx) => (
                  <li key={idx} className="!mb-3 !flex !items-start">
                    <RightCircleOutlined className="!text-blue-500 !mr-3 !mt-1 !flex-shrink-0 !text-lg" />
                    <span className="!text-lg !text-gray-700 !leading-relaxed">{resp}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <Divider />

            {/* Requirements */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="!mb-12"
            >
              <h2 className="!text-3xl !font-bold !text-gray-900 !mb-6 !flex !items-center">
                <StarOutlined className="!mr-3 !text-green-600" />
                {t("careers.detail.requirements")}
              </h2>
              <ul className="!list-none !pl-0">
                {translatedRequirements.map((req, idx) => (
                  <li key={idx} className="!mb-3 !flex !items-start">
                    <RightCircleOutlined className="!text-green-500 !mr-3 !mt-1 !flex-shrink-0 !text-lg" />
                    <span className="!text-lg !text-gray-700 !leading-relaxed">{req}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Skills */}
            {translatedSkills && translatedSkills.length > 0 && (
              <>
                <Divider />
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="!mb-12"
                >
                  <h2 className="!text-3xl !font-bold !text-gray-900 !mb-6 !flex !items-center">
                    <ToolOutlined className="!mr-3 !text-cyan-600" />
                    {t("careers.detail.requiredSkills")}
                  </h2>
                  <div className="!flex !flex-wrap !gap-3">
                    {translatedSkills.map((skill, idx) => (
                      <Tag key={idx} color="cyan" className="!text-base !px-4 !py-2 !rounded-lg">
                        {skill}
                      </Tag>
                    ))}
                  </div>
                </motion.div>
              </>
            )}

            {/* Benefits */}
            {translatedBenefits && translatedBenefits.length > 0 && (
              <>
                <Divider />
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="!mb-12"
                >
                  <h2 className="!text-3xl !font-bold !text-gray-900 !mb-6 !flex !items-center">
                    <GiftOutlined className="!mr-3 !text-purple-600" />
                    {t("careers.detail.benefits")}
                  </h2>
                  <ul className="!list-none !pl-0">
                    {translatedBenefits.map((benefit, idx) => (
                      <li key={idx} className="!mb-3 !flex !items-start">
                        <RightCircleOutlined className="!text-purple-500 !mr-3 !mt-1 !flex-shrink-0 !text-lg" />
                        <span className="!text-lg !text-gray-700 !leading-relaxed">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </>
            )}

            <Divider />

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="!text-center !py-12 !px-8 !bg-gradient-to-br !from-blue-600 !via-indigo-600 !to-purple-600 !rounded-2xl !shadow-xl"
            >
              <h3 className="!text-2xl md:!text-3xl !font-bold !text-white !mb-4">
                {t("careers.careerDetail.readyToApply")}
              </h3>
              <p className="!text-lg !text-white/90 !mb-8">
                {t("careers.careerDetail.applyDescription")}
              </p>
              <Button
                type="primary"
                size="large"
                icon={<SendOutlined />}
                className="!bg-white !text-blue-600 !border-0 !h-12 !px-8 !text-base !font-bold !shadow-xl hover:!shadow-2xl !rounded-xl"
                iconPosition="end"
              >
                {t("careers.detail.applyNow")}
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
