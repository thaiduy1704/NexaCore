import { Card } from "antd";
import { ArrowRightOutlined, CheckCircleOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import HeroBanner from "@/components/HeroBanner";
import SectionTitle from "@/components/SectionTitle";
import SeoHelmet from "@/components/SeoHelmet";
import { products } from "@/lib/mockData";
import { productsMetadata } from "@/lib/metadata";

const productGradients = [
  "from-violet-600 via-purple-600 to-indigo-600",
  "from-blue-600 via-cyan-600 to-teal-600",
  "from-orange-600 via-amber-600 to-yellow-600",
  "from-pink-600 via-rose-600 to-red-600",
  "from-emerald-600 via-green-600 to-teal-600",
  "from-sky-600 via-blue-600 to-indigo-600",
  "from-indigo-600 via-purple-600 to-pink-600",
  "from-cyan-600 via-blue-600 to-indigo-600",
];

// Get first letter or abbreviation from title
const getProductIcon = (title: string): string => {
  // Extract first letter from Vietnamese or English title
  const match = title.match(/[A-Za-z]/);
  if (match) return match[0].toUpperCase();
  // If no English letter, get first Vietnamese character
  return title.charAt(0).toUpperCase();
};

export default function ProductsPage() {
  const { t } = useTranslation();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <>
      <SeoHelmet
        title={productsMetadata.title}
        description={productsMetadata.description}
        keywords={productsMetadata.keywords}
      />
      <div className="pt-20">
      <HeroBanner
        title={t("products.hero.title")}
        subtitle={t("products.hero.subtitle")}
        ctaText={t("products.hero.requestDemo")}
        ctaLink="/contact"
      />

      <section className="!py-20 md:!py-32 bg-gradient-to-br from-gray-50 via-blue-50/30 to-indigo-50/20 relative overflow-hidden">
        {/* Animated Background Blobs */}
        <div className="absolute inset-0 !opacity-10 !pointer-events-none">
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
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(59,130,246,0.5) 1px, transparent 0)`,
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="mb-16 md:mb-20"
          >
            <SectionTitle title={t("products.title")} subtitle={t("products.subtitle")} />
          </motion.div>

          <div className="!max-w-7xl !mt-5 !mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 !gap-8">
            {products.map((product, index) => {
              const gradient = productGradients[index % productGradients.length];
              const iconLetter = getProductIcon(product.title);

              return (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.08,
                    type: "spring",
                    stiffness: 100,
                  }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group"
                >
                  <Link to={`/products/${product.slug}`}>
                    <Card
                      className={`
                        h-full border-0 rounded-3xl overflow-hidden shadow-xl
                        transition-all duration-500 ease-out
                        hover:shadow-2xl
                        ${hoveredIndex === index ? "ring-2 ring-white/50 shadow-2xl" : ""}
                      `}
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(255,255,255,0.98) 0%, rgba(255,255,255,1) 100%)",
                      }}
                    >
                      {/* Enhanced Glow Effect on Hover */}
                      <motion.div
                        className={`absolute -inset-4 bg-gradient-to-r ${gradient} rounded-3xl blur-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-700 -z-10`}
                        animate={
                          hoveredIndex === index
                            ? {
                                scale: [1, 1.08, 1],
                                opacity: [0, 0.3, 0.3],
                              }
                            : {}
                        }
                        transition={{ duration: 0.8, ease: "easeOut" }}
                      />

                      {/* Product Header with Enhanced Gradient */}
                      <div
                        className={`
                          relative h-72 bg-gradient-to-br ${gradient}
                          flex items-center justify-center overflow-hidden
                        `}
                      >
                        {/* Animated Background Blobs */}
                        <div className="absolute inset-0 opacity-20">
                          <motion.div
                            className="absolute top-0 right-0 w-80 h-80 bg-white rounded-full blur-3xl"
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
                            className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl"
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

                        {/* Category Badge - Enhanced */}
                        <div className="absolute top-6 left-6 z-10">
                          <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="px-4 py-2 bg-white/25 backdrop-blur-lg rounded-full border border-white/40 shadow-lg"
                          >
                            <span className="text-white font-bold text-xs md:text-sm">
                              {(() => {
                                const categoryKey = `products.items.${product.id}.category`;
                                const translated = t(categoryKey);
                                return translated !== categoryKey ? translated : product.category;
                              })()}
                            </span>
                          </motion.div>
                        </div>

                        {/* Enhanced Product Icon */}
                        <motion.div
                          whileHover={{ scale: 1.15, rotate: 8 }}
                          transition={{ type: "spring", stiffness: 300, damping: 20 }}
                          className="relative z-10"
                        >
                          <div className="relative">
                            {/* Glow rings */}
                            <motion.div
                              className="absolute -inset-4 bg-white/30 rounded-full blur-xl"
                              animate={{
                                scale: [1, 1.1, 1],
                                opacity: [0.3, 0.5, 0.3],
                              }}
                              transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut",
                              }}
                            />
                            <div className="absolute -inset-2 bg-white/20 rounded-full blur-lg"></div>

                            {/* Icon container */}
                            <motion.div
                              whileHover={{ rotate: 360 }}
                              transition={{ duration: 0.8 }}
                              className="w-36 h-36 md:w-40 md:h-40 bg-white/25 backdrop-blur-xl rounded-3xl flex items-center justify-center shadow-2xl border-2 border-white/40 relative ring-2 ring-white/30"
                            >
                              <span className="text-white text-7xl md:text-8xl font-extrabold drop-shadow-2xl">
                                {iconLetter}
                              </span>
                            </motion.div>
                          </div>
                        </motion.div>

                        {/* Decorative Corner - Enhanced */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/15 rounded-bl-full backdrop-blur-sm"></div>
                        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-tr-full"></div>
                      </div>

                      {/* Product Content - Enhanced */}
                      <div className="p-8 bg-gradient-to-br from-white via-gray-50/50 to-white">
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                          {(() => {
                            const titleKey = `products.items.${product.id}.title`;
                            const translated = t(titleKey);
                            return translated !== titleKey ? translated : product.title;
                          })()}
                        </h3>
                        <p className="text-gray-600 mb-6 leading-relaxed text-base">
                          {(() => {
                            const descKey = `products.items.${product.id}.description`;
                            const translated = t(descKey);
                            return translated !== descKey ? translated : product.description;
                          })()}
                        </p>

                        {/* Features List - Enhanced */}
                        <div className="mb-6 space-y-2">
                          {(() => {
                            const featuresKey = `products.items.${product.id}.features`;
                            const translated = t(featuresKey, { returnObjects: true });
                            const features = (Array.isArray(translated) && translated[0] !== featuresKey) ? translated : product.features;
                            return features.slice(0, 3).map((feature, idx) => (
                            <motion.div
                              key={idx}
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: idx * 0.05 }}
                              className="flex items-start gap-3"
                            >
                              <div
                                className={`w-5 h-5 rounded-full bg-gradient-to-br ${gradient} flex items-center justify-center flex-shrink-0 mt-0.5`}
                              >
                                <CheckCircleOutlined className="text-white text-xs" />
                              </div>
                              <span className="text-gray-700 text-sm leading-relaxed">
                                {feature}
                              </span>
                            </motion.div>
                            ));
                          })()}
                          {(() => {
                            const featuresKey = `products.items.${product.id}.features`;
                            const translated = t(featuresKey, { returnObjects: true });
                            const features = (Array.isArray(translated) && translated[0] !== featuresKey) ? translated : product.features;
                            return features.length > 3 && (
                              <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                className="flex items-center gap-2 pt-1"
                              >
                                <span className="text-gray-500 text-sm font-semibold">
                                  +{features.length - 3} {t("products.more")}
                                </span>
                              </motion.div>
                            );
                          })()}
                        </div>

                        {/* Enhanced CTA */}
                        <motion.div
                          whileHover={{ x: 4 }}
                          className="flex items-center gap-2 mt-6 pt-6 border-t border-gray-200"
                        >
                          <span
                            className={`font-bold text-base bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}
                          >
                            {t("products.learnMore")}
                          </span>
                          <motion.div
                            animate={hoveredIndex === index ? { x: [0, 4, 0] } : {}}
                            transition={{ duration: 0.5, repeat: Infinity }}
                            className={`inline-flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-r ${gradient} p-1`}
                          >
                            <ArrowRightOutlined className="text-white text-xs" />
                          </motion.div>
                        </motion.div>
                      </div>
                    </Card>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
