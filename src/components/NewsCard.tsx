import { Card } from "antd";
import { CalendarOutlined, UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import type { NewsArticle } from "@/types";

interface NewsCardProps {
  article: NewsArticle;
}

export default function NewsCard({ article }: NewsCardProps) {
  const { t } = useTranslation();
  const formattedDate = new Date(article.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // Get translated content if available, otherwise fallback to article data
  const titleKey = `news.items.${article.id}.title`;
  const excerptKey = `news.items.${article.id}.excerpt`;
  const categoryKey = `news.items.${article.id}.category`;
  const authorKey = `news.items.${article.id}.author`;

  const title = t(titleKey) !== titleKey ? t(titleKey) : article.title;
  const excerpt = t(excerptKey) !== excerptKey ? t(excerptKey) : article.excerpt;
  const category = t(categoryKey) !== categoryKey ? t(categoryKey) : article.category;
  const author = t(authorKey) !== authorKey ? t(authorKey) : article.author;

  return (
    <motion.div whileHover={{ y: -8 }} transition={{ duration: 0.3 }} className="h-full">
      <Link to={`/news/${article.slug}`} className="h-full block">
        <Card
          hoverable
          cover={
            article.image ? (
              <div className="h-48 overflow-hidden relative">
                <img
                  src={article.image}
                  alt={title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = "none";
                    const parent = target.parentElement;
                    if (parent) {
                      parent.innerHTML = `
                        <div class="h-48 bg-gradient-to-br from-[#0052CC] to-[#1890FF] flex items-center justify-center">
                          <span class="text-white text-6xl font-bold opacity-20">${title.charAt(
                            0
                          )}</span>
                        </div>
                      `;
                    }
                  }}
                />
              </div>
            ) : (
              <div className="h-48 bg-gradient-to-br from-[#0052CC] to-[#1890FF] flex items-center justify-center">
                <span className="text-white text-6xl font-bold opacity-20">
                  {title.charAt(0)}
                </span>
              </div>
            )
          }
          className="h-full rounded-xl shadow-md border-0 overflow-hidden flex flex-col"
          bodyStyle={{ display: "flex", flexDirection: "column", flex: 1, padding: "16px" }}
        >
          <div className="mb-2">
            <span className="inline-block px-3 py-1 bg-[#E6F4FF] text-[#0052CC] text-xs font-semibold rounded-full">
              {category}
            </span>
          </div>
          <h3 className="text-xl font-semibold text-[#1A1A1A] mb-3 flex-shrink-0">{title}</h3>
          <p className="text-gray-600 mb-4 flex-grow">{excerpt}</p>
          <div className="flex items-center text-sm text-gray-500 space-x-4 flex-shrink-0">
            <span className="flex items-center">
              <CalendarOutlined className="mr-1" />
              {formattedDate}
            </span>
            <span className="flex items-center">
              <UserOutlined className="mr-1" />
              {author}
            </span>
          </div>
        </Card>
      </Link>
    </motion.div>
  );
}
