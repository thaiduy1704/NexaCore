import { useParams, Link } from "react-router-dom";
import {
  ArrowLeftOutlined,
  ArrowRightOutlined,
  CheckCircleOutlined,
  ShareAltOutlined,
  FacebookOutlined,
  TwitterOutlined,
  LinkedinOutlined,
  RocketOutlined,
  TrophyOutlined,
} from "@ant-design/icons";
import { motion } from "framer-motion";
import { Button } from "antd";
import { useTranslation } from "react-i18next";
import SeoHelmet from "@/components/SeoHelmet";
import { products } from "@/lib/mockData";

const categoryGradients: Record<string, string> = {
  "Hệ Thống Hoạch Định Nguồn Lực Doanh Nghiệp (ERP)":
    "from-violet-600 via-purple-600 to-indigo-600",
  "Các Giải Pháp Chuyên Sâu": "from-orange-600 via-amber-600 to-yellow-600",
  "Hạ Tầng Dữ Liệu & Lưu Trữ": "from-blue-600 via-cyan-600 to-teal-600",
  "Enterprise Software": "from-violet-600 via-purple-600 to-indigo-600",
  CRM: "from-blue-600 via-cyan-600 to-teal-600",
  Security: "from-pink-600 via-rose-600 to-red-600",
};

export default function ProductDetailPage() {
  const { t } = useTranslation();
  const { slug } = useParams<{ slug: string }>();
  const product = products.find((p) => p.slug === slug);
  const siteUrl = import.meta.env.VITE_SITE_URL;
  const canonicalUrl =
    siteUrl && product ? `${siteUrl.replace(/\/$/, "")}/products/${product.slug}` : undefined;

  const gradient =
    categoryGradients[product?.category || ""] || "from-violet-600 via-purple-600 to-indigo-600";

  if (!product) {
    return (
      <div className="!pt-20 min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1 className="!text-5xl font-extrabold !mb-6 text-gray-900">
            {t("productDetail.notFound")}
          </h1>
          <Link
            to="/products"
            className="inline-flex items-center !gap-2 !px-8 !py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl font-bold !text-lg shadow-xl hover:shadow-2xl transition-all"
          >
            <ArrowLeftOutlined />
            <span>{t("productDetail.backToProducts")}</span>
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="!pt-20 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
      <SeoHelmet
        title={`${product.title} | NexaCore`}
        description={product.description}
        url={canonicalUrl}
        type="product"
      />
      {/* Hero Section - Enhanced */}
      <section
        className={`relative overflow-hidden bg-gradient-to-br ${gradient} text-white !py-24 md:!py-32 lg:!py-40`}
      >
        {/* Enhanced Animated Background */}
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
          <motion.div
            className="absolute !top-40 !right-10 !w-96 !h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl"
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
            className="absolute !bottom-20 !left-1/2 !w-96 !h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl"
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

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="container !mx-auto !px-4 sm:!px-6 lg:!px-8 relative !z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              to="/products"
              className="inline-flex items-center !gap-3 text-white/90 !mb-10 hover:text-white transition-colors group"
            >
              <motion.div
                whileHover={{ scale: 1.1, x: -4 }}
                className="!w-12 !h-12 rounded-full bg-white/20 backdrop-blur-lg flex items-center justify-center group-hover:bg-white/30 transition-all border border-white/30"
              >
                <ArrowLeftOutlined className="!text-lg" />
              </motion.div>
              <span className="font-semibold !text-lg">{t("productDetail.backToProducts")}</span>
            </Link>

            <div className="!max-w-5xl !mx-auto text-center">
              {/* Category Badge - Enhanced */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center !gap-2 !px-6 !py-3 bg-white/25 backdrop-blur-xl rounded-full border border-white/40 !mb-8 shadow-lg"
              >
                <RocketOutlined className="text-white !text-lg" />
                <span className="text-white font-bold text-sm md:text-base">
                  {product.category}
                </span>
              </motion.div>

              {/* Title - Enhanced */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="!text-4xl md:!text-5xl lg:!text-6xl font-extrabold !mb-8 leading-tight drop-shadow-2xl"
              >
                {product.title}
              </motion.h1>

              {/* Description - Enhanced */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="!text-lg md:!text-xl lg:!text-2xl text-white/95 !max-w-3xl !mx-auto leading-relaxed font-normal"
              >
                {product.description}
              </motion.p>
            </div>
          </motion.div>
        </div>

        {/* Decorative Bottom Wave - Enhanced */}
        <div className="absolute !bottom-0 !left-0 !right-0">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="!w-full !h-auto"
            preserveAspectRatio="none"
          >
            <path
              d="M0 120L60 112.5C120 105 240 90 360 82.5C480 75 600 75 720 78.75C840 82.5 960 90 1080 93.75C1200 97.5 1320 97.5 1380 97.5L1440 97.5V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
              fill="rgb(249, 250, 251)"
              className="drop-shadow-2xl"
            />
          </svg>
        </div>
      </section>

      {/* Product Content - Enhanced */}
      <section className="!py-20 md:!py-32 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, rgba(59,130,246,0.4) 1.5px, transparent 0)`,
              backgroundSize: "50px 50px",
            }}
          />
        </div>

        <div className="container !mx-auto !px-4 sm:!px-6 lg:!px-8 relative z-10">
          <div className="!max-w-6xl !mx-auto">
            {/* Featured Image - Enhanced */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="!mb-16"
            >
              <div
                className={`aspect-video bg-gradient-to-br ${gradient} rounded-3xl shadow-2xl flex items-center justify-center overflow-hidden relative group`}
              >
                {/* Enhanced Background Pattern */}
                <div className="absolute inset-0 !opacity-20">
                  <motion.div
                    className="absolute !top-0 !right-0 !w-80 !h-80 bg-white rounded-full blur-3xl"
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
                    className="absolute !bottom-0 !left-0 !w-64 !h-64 bg-white rounded-full blur-3xl"
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

                {/* Grid Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                      backgroundSize: "40px 40px",
                    }}
                  />
                </div>

                <motion.span
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="text-white !text-8xl md:!text-9xl font-bold opacity-30 relative z-10"
                >
                  {product.title.charAt(0)}
                </motion.span>
              </div>
            </motion.div>

            {/* Product Body - Enhanced */}
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12 !mb-16">
              {/* Features Section */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-3xl shadow-xl !p-8 md:!p-10"
              >
                <div className="flex items-center gap-4 !mb-8">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6, type: "spring" }}
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center shadow-lg ring-2 ring-white/50 relative`}
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${gradient} rounded-xl blur-sm opacity-50`}
                    ></div>
                    <CheckCircleOutlined className="text-white text-xl relative z-10" />
                  </motion.div>
                  <h2
                    className={`!text-2xl md:!text-3xl font-extrabold bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}
                  >
                    {t("productDetail.coreFeatures")}
                  </h2>
                </div>

                <ul className="!space-y-4">
                  {product.features.map((feature, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ delay: index * 0.05, duration: 0.4, type: "spring" }}
                      whileHover={{ x: 6, scale: 1.01 }}
                      className="flex items-start gap-4 p-4 rounded-xl hover:bg-gradient-to-r hover:from-gray-50 hover:via-blue-50/30 hover:to-indigo-50/20 transition-all duration-300 group border border-gray-100 hover:border-blue-200/50 hover:shadow-md"
                    >
                      <motion.div
                        whileHover={{ scale: 1.3, rotate: 180 }}
                        transition={{ duration: 0.4 }}
                        className={`w-3 h-3 rounded-full bg-gradient-to-br ${gradient} mt-2 flex-shrink-0 shadow-lg ring-2 ring-white relative`}
                      >
                        <div
                          className={`absolute inset-0 bg-gradient-to-br ${gradient} rounded-full blur-sm opacity-60`}
                        ></div>
                      </motion.div>
                      <span className="text-gray-700 leading-relaxed text-base md:text-lg font-medium group-hover:text-gray-900 transition-colors flex-1">
                        {feature}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Benefits Section */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-3xl shadow-xl !p-8 md:!p-10"
              >
                <div className="flex items-center gap-4 !mb-8">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6, type: "spring" }}
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center shadow-lg ring-2 ring-white/50 relative`}
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${gradient} rounded-xl blur-sm opacity-50`}
                    ></div>
                    <TrophyOutlined className="text-white text-xl relative z-10" />
                  </motion.div>
                  <h2
                    className={`!text-2xl md:!text-3xl font-extrabold bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}
                  >
                    {t("productDetail.benefits")}
                  </h2>
                </div>

                <ul className="!space-y-4">
                  {product.benefits?.map((benefit, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ delay: index * 0.05, duration: 0.4, type: "spring" }}
                      whileHover={{ scale: 1.02, y: -4 }}
                      className="relative group"
                    >
                      {/* Card background with gradient */}
                      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50/40 rounded-xl border border-gray-200 group-hover:border-blue-300 transition-all duration-300 shadow-sm group-hover:shadow-lg"></div>

                      {/* Glow effect on hover */}
                      <div
                        className={`absolute -inset-0.5 bg-gradient-to-br ${gradient} rounded-xl opacity-0 group-hover:opacity-20 blur-sm transition-opacity duration-300`}
                      ></div>

                      <div className="relative flex items-start gap-4 p-5">
                        <motion.div
                          whileHover={{ rotate: 360, scale: 1.15 }}
                          transition={{ duration: 0.5, type: "spring" }}
                          className={`w-10 h-10 rounded-lg bg-gradient-to-br ${gradient} flex items-center justify-center flex-shrink-0 shadow-lg ring-2 ring-white/50 relative`}
                        >
                          <div
                            className={`absolute inset-0 bg-gradient-to-br ${gradient} rounded-lg blur-sm opacity-50`}
                          ></div>
                          <CheckCircleOutlined className="text-white text-base relative z-10" />
                        </motion.div>
                        <span className="text-gray-700 leading-relaxed text-base md:text-lg font-semibold pt-1 group-hover:text-gray-900 transition-colors flex-1">
                          {benefit}
                        </span>
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Share & CTA Section - Enhanced */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-3xl shadow-xl !p-8 md:!p-10"
            >
              {/* Share Section */}
              <div className="!mb-8 !pb-8 border-b border-gray-200">
                <div className="flex flex-wrap items-center justify-between !gap-4">
                  <span className="text-gray-700 font-bold !text-lg flex items-center !gap-2">
                    <ShareAltOutlined className="!text-xl" />
                    {t("productDetail.shareProduct")}
                  </span>
                  <div className="flex !gap-3">
                    {[
                      { icon: FacebookOutlined, color: "hover:bg-blue-600" },
                      { icon: TwitterOutlined, color: "hover:bg-sky-500" },
                      { icon: LinkedinOutlined, color: "hover:bg-blue-700" },
                    ].map((social, index) => {
                      const Icon = social.icon;
                      return (
                        <motion.button
                          key={index}
                          whileHover={{ scale: 1.1, y: -2 }}
                          whileTap={{ scale: 0.9 }}
                          className={`!w-12 !h-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-700 ${social.color} hover:text-white transition-all shadow-sm hover:shadow-md`}
                        >
                          <Icon className="!text-xl" />
                        </motion.button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* CTA Buttons - Enhanced */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link to="/contact">
                    <Button
                      type="primary"
                      size="large"
                      icon={<ArrowRightOutlined />}
                      className={`bg-gradient-to-r ${gradient} border-0 h-14 px-8 text-lg font-semibold shadow-lg hover:shadow-xl transition-all rounded-xl`}
                      iconPosition="end"
                    >
                      {t("productDetail.requestDemo")}
                    </Button>
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link to="/contact">
                    <Button
                      size="large"
                      className={`border-2 border-gray-300 text-gray-700 h-14 px-8 text-lg font-semibold hover:bg-gray-50 hover:border-gray-400 rounded-xl transition-all shadow-sm hover:shadow-md`}
                    >
                      {t("productDetail.contactSales")}
                    </Button>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section - Enhanced */}
      <section className="!py-24 md:!py-32 relative overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-br ${gradient}`}></div>

        {/* Enhanced Animated Background */}
        <div className="absolute inset-0 !opacity-30">
          <motion.div
            className="absolute !top-1/4 !left-1/4 !w-96 !h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl"
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
            className="absolute !bottom-1/4 !right-1/4 !w-96 !h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl"
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
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="container !mx-auto !px-4 sm:!px-6 lg:!px-8 relative !z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center !max-w-4xl !mx-auto"
          >
            <h2 className="!text-4xl md:!text-5xl lg:!text-6xl font-extrabold text-white !mb-6 leading-tight drop-shadow-2xl">
              {t("productDetail.readyToTransform")}
            </h2>
            <p className="!text-xl md:!text-2xl text-white/95 !mb-12 leading-relaxed font-normal">
              {t("productDetail.getStartedWith", { product: product.title })}
            </p>

            <div className="flex flex-wrap !gap-6 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/contact"
                  className="inline-flex items-center !gap-3 !px-10 !py-5 bg-white text-gray-900 rounded-2xl font-bold !text-lg shadow-2xl hover:shadow-white/50 transition-all"
                >
                  <span>{t("productDetail.scheduleDemo")}</span>
                  <ArrowRightOutlined />
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/products"
                  className="inline-flex items-center !gap-3 !px-10 !py-5 bg-white/10 backdrop-blur-lg text-white rounded-2xl font-bold !text-lg !border-2 border-white/30 hover:bg-white/20 transition-all"
                >
                  <span>{t("productDetail.viewAllProducts")}</span>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
