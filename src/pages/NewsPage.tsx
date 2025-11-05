import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import * as Icons from "@ant-design/icons";
import HeroBanner from "@/components/HeroBanner";
import SectionTitle from "@/components/SectionTitle";
import NewsCard from "@/components/NewsCard";
import { newsArticles } from "@/lib/mockData";

const categories = ["All", "Company News", "Technology", "Industry"];

export default function NewsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredArticles =
    activeCategory === "All"
      ? newsArticles
      : newsArticles.filter((article) => article.category === activeCategory);

  return (
    <div className="!pt-20">
      <HeroBanner
        title="News & Events"
        subtitle="Stay updated with the latest news, insights, and events from NexaCore"
      />

      <section className="!py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
        <div className="container !mx-auto !px-4">
          <SectionTitle
            title="Latest News"
            subtitle="Discover our latest announcements, thought leadership, and industry insights"
          />

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center !gap-4 !mb-12 !max-w-4xl !mx-auto"
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category)}
                className={`
                  !px-8 !py-3 rounded-2xl font-bold !text-base transition-all shadow-lg
                  ${
                    activeCategory === category
                      ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-indigo-200"
                      : "bg-white text-gray-700 hover:bg-gray-50"
                  }
                `}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>

          {/* Articles Grid */}
          <div className="!max-w-7xl !mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 !gap-8">
            {filteredArticles.map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <NewsCard article={article} />
              </motion.div>
            ))}
          </div>

          {/* Empty State */}
          {filteredArticles.length === 0 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center !py-20"
            >
              <Icons.InboxOutlined className="!text-8xl text-gray-300 !mb-6" />
              <h3 className="!text-2xl font-bold text-gray-600 !mb-4">No articles found</h3>
              <p className="text-gray-500">Try selecting a different category</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="!py-24 relative overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
        {/* Animated Background */}
        <div className="absolute inset-0 !opacity-20">
          <div className="absolute !top-20 !left-10 !w-96 !h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute !top-40 !right-10 !w-96 !h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute !bottom-20 !left-1/2 !w-96 !h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>

        <div className="container !mx-auto !px-4 relative !z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center !max-w-4xl !mx-auto"
          >
            <h2 className="!text-5xl md:text-6xl font-extrabold text-white !mb-6">Stay Updated</h2>
            <p className="!text-2xl text-white/95 !mb-12 leading-relaxed">
              Subscribe to our newsletter and never miss the latest news, insights, and updates
            </p>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/contact"
                className="inline-flex items-center !gap-3 !px-10 !py-5 bg-white text-indigo-900 rounded-2xl font-bold !text-lg shadow-2xl hover:shadow-white/50 transition-all"
              >
                <span>Subscribe Now</span>
                <Icons.ArrowRightOutlined className="!text-xl" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
