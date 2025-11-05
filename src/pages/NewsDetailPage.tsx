import { useParams, Link } from "react-router-dom";
import {
  ArrowLeftOutlined,
  ArrowRightOutlined,
  CalendarOutlined,
  UserOutlined,
  ShareAltOutlined,
  FacebookOutlined,
  TwitterOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";
import { motion } from "framer-motion";
import { newsArticles } from "@/lib/mockData";

const categoryGradients: Record<string, string> = {
  "Company News": "from-violet-600 via-purple-600 to-indigo-600",
  Technology: "from-blue-600 via-cyan-600 to-teal-600",
  Industry: "from-pink-600 via-rose-600 to-red-600",
};

export default function NewsDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const article = newsArticles.find((a) => a.slug === slug);

  const gradient = categoryGradients[article?.category || "Technology"];

  if (!article) {
    return (
      <div className="!pt-20 min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1 className="!text-5xl font-extrabold !mb-6 text-gray-900">Article Not Found</h1>
          <Link
            to="/news"
            className="inline-flex items-center !gap-2 !px-8 !py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl font-bold !text-lg shadow-xl hover:shadow-2xl transition-all"
          >
            <ArrowLeftOutlined />
            <span>Back to News</span>
          </Link>
        </motion.div>
      </div>
    );
  }

  const formattedDate = new Date(article.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

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
              to="/news"
              className="inline-flex items-center !gap-2 text-white/90 !mb-10 hover:text-white transition-colors group"
            >
              <div className="!w-10 !h-10 rounded-full bg-white/20 backdrop-blur-lg flex items-center justify-center group-hover:bg-white/30 transition-all">
                <ArrowLeftOutlined />
              </div>
              <span className="font-semibold !text-lg">Back to News</span>
            </Link>

            <div className="!max-w-5xl !mx-auto text-center">
              {/* Category Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center !gap-2 !px-6 !py-3 bg-white/20 backdrop-blur-lg rounded-full border border-white/30 !mb-8"
              >
                <span className="text-white font-bold">{article.category}</span>
              </motion.div>

              {/* Title */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="!text-5xl md:text-6xl font-extrabold !mb-8 leading-tight"
              >
                {article.title}
              </motion.h1>

              {/* Meta Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex flex-wrap justify-center !gap-6 !text-lg"
              >
                <div className="flex items-center !gap-2 bg-white/10 backdrop-blur-lg !px-4 !py-2 rounded-full">
                  <UserOutlined />
                  <span>{article.author}</span>
                </div>
                <div className="flex items-center !gap-2 bg-white/10 backdrop-blur-lg !px-4 !py-2 rounded-full">
                  <CalendarOutlined />
                  <span>{formattedDate}</span>
                </div>
              </motion.div>
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

      {/* Article Content */}
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
                  {article.title.charAt(0)}
                </span>
              </div>
            </motion.div>

            {/* Article Body */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-3xl shadow-xl !p-12"
            >
              <div className="prose prose-lg !max-w-none">
                <p className="!text-2xl text-gray-700 font-medium !mb-8 leading-relaxed">
                  {article.excerpt}
                </p>

                <p className="text-gray-600 !mb-6 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>

                <h2
                  className={`!text-3xl font-extrabold !mt-12 !mb-6 bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}
                >
                  Key Highlights
                </h2>
                <p className="text-gray-600 !mb-6 leading-relaxed">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                  fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                  culpa qui officia deserunt mollit anim id est laborum.
                </p>

                <ul className="!space-y-4 !mb-8">
                  {[
                    "Advanced technology solutions driving digital transformation",
                    "Innovative approaches to enterprise challenges",
                    "Strategic partnerships with industry leaders",
                    "Commitment to sustainable and responsible growth",
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start !gap-3 text-gray-700"
                    >
                      <div
                        className={`!w-2 !h-2 rounded-full bg-gradient-to-br ${gradient} !mt-2 flex-shrink-0`}
                      ></div>
                      <span className="leading-relaxed">{item}</span>
                    </motion.li>
                  ))}
                </ul>

                <h2
                  className={`!text-3xl font-extrabold !mt-12 !mb-6 bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}
                >
                  Looking Ahead
                </h2>
                <p className="text-gray-600 !mb-6 leading-relaxed">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                  doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                  veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                </p>

                <p className="text-gray-600 !mb-6 leading-relaxed">
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed
                  quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                </p>
              </div>

              {/* Share Section */}
              <div className="!mt-12 !pt-8 border-t border-gray-200">
                <div className="flex flex-wrap items-center justify-between !gap-4">
                  <span className="text-gray-700 font-bold !text-lg flex items-center !gap-2">
                    <ShareAltOutlined className="!text-xl" />
                    Share this article
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
              Explore More News & Insights
            </h2>
            <p className="!text-2xl text-white/95 !mb-12 leading-relaxed">
              Stay updated with our latest articles and industry insights
            </p>

            <div className="flex flex-wrap !gap-6 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/news"
                  className="inline-flex items-center !gap-3 !px-10 !py-5 bg-white text-gray-900 rounded-2xl font-bold !text-lg shadow-2xl hover:shadow-white/50 transition-all"
                >
                  <span>View All News</span>
                  <ArrowRightOutlined />
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/contact"
                  className="inline-flex items-center !gap-3 !px-10 !py-5 bg-white/10 backdrop-blur-lg text-white rounded-2xl font-bold !text-lg !border-2 border-white/30 hover:bg-white/20 transition-all"
                >
                  <span>Subscribe to Newsletter</span>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
