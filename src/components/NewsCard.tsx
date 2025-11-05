import { Card } from "antd";
import { CalendarOutlined, UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import type { NewsArticle } from "@/types";

interface NewsCardProps {
  article: NewsArticle;
}

export default function NewsCard({ article }: NewsCardProps) {
  const formattedDate = new Date(article.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <motion.div whileHover={{ y: -8 }} transition={{ duration: 0.3 }}>
      <Link to={`/news/${article.slug}`}>
        <Card
          hoverable
          cover={
            <div className="h-48 bg-gradient-to-br from-[#0052CC] to-[#1890FF] flex items-center justify-center">
              <span className="text-white text-6xl font-bold opacity-20">
                {article.title.charAt(0)}
              </span>
            </div>
          }
          className="h-full rounded-xl shadow-md border-0 overflow-hidden"
        >
          <div className="mb-2">
            <span className="inline-block px-3 py-1 bg-[#E6F4FF] text-[#0052CC] text-xs font-semibold rounded-full">
              {article.category}
            </span>
          </div>
          <h3 className="text-xl font-semibold text-[#1A1A1A] mb-3">{article.title}</h3>
          <p className="text-gray-600 mb-4">{article.excerpt}</p>
          <div className="flex items-center text-sm text-gray-500 space-x-4">
            <span className="flex items-center">
              <CalendarOutlined className="mr-1" />
              {formattedDate}
            </span>
            <span className="flex items-center">
              <UserOutlined className="mr-1" />
              {article.author}
            </span>
          </div>
        </Card>
      </Link>
    </motion.div>
  );
}
