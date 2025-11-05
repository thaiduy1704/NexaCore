import { Card } from "antd";
import { ArrowRightOutlined, CheckCircleOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import HeroBanner from "@/components/HeroBanner";
import SectionTitle from "@/components/SectionTitle";
import { products } from "@/lib/mockData";

const productGradients = [
  "from-violet-600 via-purple-600 to-indigo-600",
  "from-blue-600 via-cyan-600 to-teal-600",
  "from-orange-600 via-amber-600 to-yellow-600",
];

export default function ProductsPage() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="pt-20">
      <HeroBanner
        title="Our Products"
        subtitle="Enterprise-grade software solutions built for modern businesses"
        ctaText="Request Demo"
        ctaLink="/contact"
      />

      <section className="!py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Innovative Software Solutions"
            subtitle="Powerful products designed to accelerate your digital transformation"
          />

          <div className="!max-w-7xl !mt-5 !mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 !gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group"
              >
                <Link to={`/products/${product.slug}`}>
                  <Card
                    className={`
                      h-full border-0 rounded-3xl overflow-hidden shadow-xl
                      transition-all duration-500
                      hover:shadow-2xl hover:shadow-indigo-200/50
                      ${hoveredIndex === index ? "scale-[1.05]" : ""}
                    `}
                  >
                    {/* Product Header with Gradient */}
                    <div
                      className={`
                        relative h-64 bg-gradient-to-br ${
                          productGradients[index % productGradients.length]
                        }
                        flex items-center justify-center overflow-hidden
                      `}
                    >
                      {/* Animated Background */}
                      <div className="absolute inset-0 opacity-20">
                        <div className="absolute top-0 right-0 w-48 h-48 bg-white rounded-full blur-3xl transform translate-x-1/4 -translate-y-1/4"></div>
                        <div className="absolute bottom-0 left-0 w-40 h-40 bg-white rounded-full blur-3xl transform -translate-x-1/4 translate-y-1/4"></div>
                      </div>

                      {/* Product Initial/Logo */}
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="relative z-10"
                      >
                        <div className="w-32 h-32 bg-white/20 backdrop-blur-lg rounded-3xl flex items-center justify-center shadow-2xl border border-white/30">
                          <span className="text-white text-6xl font-extrabold">
                            {product.title.charAt(0)}
                          </span>
                        </div>
                      </motion.div>

                      {/* Category Badge */}
                      <div className="absolute top-6 left-6">
                        <div className="px-4 py-2 bg-white/20 backdrop-blur-lg rounded-full border border-white/30">
                          <span className="text-white font-semibold text-sm">
                            {product.category}
                          </span>
                        </div>
                      </div>

                      {/* Decorative Corner */}
                      <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-bl-full"></div>
                    </div>

                    {/* Product Content */}
                    <div className="p-8 bg-gradient-to-br from-white to-gray-50">
                      <h3 className="text-2xl font-bold text-[#1A1A1A] mb-4">{product.title}</h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">{product.description}</p>

                      {/* Features Preview */}
                      <div className="mb-6">
                        <div className="flex flex-wrap gap-2">
                          {product.features.slice(0, 3).map((feature, idx) => (
                            <span
                              key={idx}
                              className="inline-flex items-center gap-1 px-3 py-1 bg-blue-50 text-blue-600 text-xs font-semibold rounded-full"
                            >
                              <CheckCircleOutlined className="text-xs" />
                              {feature}
                            </span>
                          ))}
                          {product.features.length > 3 && (
                            <span className="inline-flex items-center px-3 py-1 bg-gray-100 text-gray-600 text-xs font-semibold rounded-full">
                              +{product.features.length - 3} more
                            </span>
                          )}
                        </div>
                      </div>

                      {/* CTA */}
                      <div className="flex items-center text-[#0052CC] font-semibold group-hover:text-[#1890FF] transition-colors">
                        <span>Learn More</span>
                        <ArrowRightOutlined className="ml-2 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
