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
} from "@ant-design/icons";
import { motion } from "framer-motion";
import { Button } from "antd";
import { products } from "@/lib/mockData";

const categoryGradients: Record<string, string> = {
  "Enterprise Software": "from-violet-600 via-purple-600 to-indigo-600",
  CRM: "from-blue-600 via-cyan-600 to-teal-600",
  Security: "from-pink-600 via-rose-600 to-red-600",
};

export default function ProductDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const product = products.find((p) => p.slug === slug);

  const gradient = categoryGradients[product?.category || "Enterprise Software"];

  if (!product) {
    return (
      <div className="!pt-20 min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1 className="!text-5xl font-extrabold !mb-6 text-gray-900">Product Not Found</h1>
          <Link
            to="/products"
            className="inline-flex items-center !gap-2 !px-8 !py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl font-bold !text-lg shadow-xl hover:shadow-2xl transition-all"
          >
            <ArrowLeftOutlined />
            <span>Back to Products</span>
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="!pt-20 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <section
        className={`relative overflow-hidden bg-gradient-to-br ${gradient} text-white !py-32`}
      >
        {/* Animated Background */}
        <div className="absolute inset-0 !opacity-20">
          <div className="absolute !top-20 !left-10 !w-96 !h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute !top-40 !right-10 !w-96 !h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute !bottom-20 !left-1/2 !w-96 !h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>

        <div className="container !mx-auto !px-4 relative !z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              to="/products"
              className="inline-flex items-center !gap-2 text-white/90 !mb-10 hover:text-white transition-colors group"
            >
              <div className="!w-10 !h-10 rounded-full bg-white/20 backdrop-blur-lg flex items-center justify-center group-hover:bg-white/30 transition-all">
                <ArrowLeftOutlined />
              </div>
              <span className="font-semibold !text-lg">Back to Products</span>
            </Link>

            <div className="!max-w-5xl !mx-auto text-center">
              {/* Category Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center !gap-2 !px-6 !py-3 bg-white/20 backdrop-blur-lg rounded-full border border-white/30 !mb-8"
              >
                <RocketOutlined className="text-white" />
                <span className="text-white font-bold">{product.category}</span>
              </motion.div>

              {/* Title */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="!text-5xl md:text-6xl font-extrabold !mb-8 leading-tight"
              >
                {product.title}
              </motion.h1>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="!text-2xl text-white/95 !max-w-3xl !mx-auto leading-relaxed"
              >
                {product.description}
              </motion.p>
            </div>
          </motion.div>
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
              fill="rgb(249, 250, 251)"
            />
          </svg>
        </div>
      </section>

      {/* Product Content */}
      <section className="!py-20">
        <div className="container !mx-auto !px-4">
          <div className="!max-w-4xl !mx-auto">
            {/* Featured Image */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="!mb-12"
            >
              <div
                className={`aspect-video bg-gradient-to-br ${gradient} rounded-3xl shadow-2xl flex items-center justify-center overflow-hidden relative`}
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 !opacity-10">
                  <div className="absolute !top-0 !right-0 !w-64 !h-64 bg-white rounded-full blur-3xl"></div>
                  <div className="absolute !bottom-0 !left-0 !w-48 !h-48 bg-white rounded-full blur-3xl"></div>
                </div>
                <span className="text-white !text-9xl font-bold opacity-20 relative z-10">
                  {product.title.charAt(0)}
                </span>
              </div>
            </motion.div>

            {/* Product Body */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-3xl shadow-xl !p-12"
            >
              <div className="prose prose-lg !max-w-none">
                <h2
                  className={`!text-3xl font-extrabold !mb-8 bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}
                >
                  Key Features
                </h2>
                <p className="text-gray-600 !mb-8 leading-relaxed">
                  {product.title} is designed to empower your business with cutting-edge technology
                  and innovative solutions. Our comprehensive platform offers everything you need to
                  streamline operations and drive growth.
                </p>

                <ul className="!space-y-4 !mb-8">
                  {product.features.map((feature, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start !gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors"
                    >
                      <div
                        className={`flex-shrink-0 w-8 h-8 bg-gradient-to-br ${gradient} rounded-lg flex items-center justify-center`}
                      >
                        <CheckCircleOutlined className="text-white" />
                      </div>
                      <span className="text-lg text-gray-700 pt-1 leading-relaxed">{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                <h2
                  className={`!text-3xl font-extrabold !mt-12 !mb-6 bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}
                >
                  Why Choose {product.title}?
                </h2>
                <p className="text-gray-600 !mb-6 leading-relaxed">
                  With years of industry expertise and continuous innovation, {product.title}{" "}
                  delivers unmatched performance, reliability, and scalability. Our solution is
                  trusted by thousands of organizations worldwide to transform their business
                  operations.
                </p>

                <p className="text-gray-600 !mb-6 leading-relaxed">
                  Experience the power of next-generation technology that adapts to your business
                  needs, scales with your growth, and provides the insights you need to make
                  informed decisions.
                </p>
              </div>

              {/* Share Section */}
              <div className="!mt-12 !pt-8 border-t border-gray-200">
                <div className="flex flex-wrap items-center justify-between !gap-4">
                  <span className="text-gray-700 font-bold !text-lg flex items-center !gap-2">
                    <ShareAltOutlined className="!text-xl" />
                    Share this product
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
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className={`!w-12 !h-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-700 ${social.color} hover:text-white transition-all`}
                        >
                          <Icon className="!text-xl" />
                        </motion.button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="!mt-12 !pt-8 border-t border-gray-200">
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/contact">
                    <Button
                      type="primary"
                      size="large"
                      className="bg-gradient-to-r from-purple-600 to-indigo-600 border-0 h-14 px-8 text-lg font-semibold"
                    >
                      Request Demo
                    </Button>
                  </Link>
                  <Link to="/contact">
                    <Button
                      size="large"
                      className="border-2 border-purple-600 text-purple-600 h-14 px-8 text-lg font-semibold hover:bg-purple-50"
                    >
                      Contact Sales
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="!py-24 relative overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-br ${gradient}`}></div>

        {/* Animated Background */}
        <div className="absolute inset-0 !opacity-30">
          <div className="absolute !top-1/4 !left-1/4 !w-96 !h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-blob"></div>
          <div className="absolute !bottom-1/4 !right-1/4 !w-96 !h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-blob animation-delay-2000"></div>
        </div>

        <div className="container !mx-auto !px-4 relative !z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center !max-w-4xl !mx-auto"
          >
            <h2 className="!text-5xl md:text-6xl font-extrabold text-white !mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="!text-2xl text-white/95 !mb-12 leading-relaxed">
              Get started with {product.title} today and experience the difference
            </p>

            <div className="flex flex-wrap !gap-6 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/contact"
                  className="inline-flex items-center !gap-3 !px-10 !py-5 bg-white text-gray-900 rounded-2xl font-bold !text-lg shadow-2xl hover:shadow-white/50 transition-all"
                >
                  <span>Schedule a Demo</span>
                  <ArrowRightOutlined />
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/products"
                  className="inline-flex items-center !gap-3 !px-10 !py-5 bg-white/10 backdrop-blur-lg text-white rounded-2xl font-bold !text-lg !border-2 border-white/30 hover:bg-white/20 transition-all"
                >
                  <span>View All Products</span>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
