import { Card } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import type { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const { t } = useTranslation();
  
  // Try projects.items first (for ProjectsPage), then home.projects.items (for HomePage), then fallback to project data
  const projectsKey = `projects.items.${project.id}`;
  const homeProjectsKey = `home.projects.items.${project.id}`;
  
  const titleKey = `${projectsKey}.title`;
  const clientKey = `${projectsKey}.client`;
  const industryKey = `${projectsKey}.industry`;
  const descriptionKey = `${projectsKey}.description`;
  
  const homeTitleKey = `${homeProjectsKey}.title`;
  const homeClientKey = `${homeProjectsKey}.client`;
  const homeIndustryKey = `${homeProjectsKey}.industry`;
  const homeDescriptionKey = `${homeProjectsKey}.description`;
  
  // Check if translation exists (if translation returns the key itself, it means translation doesn't exist)
  const title = t(titleKey) !== titleKey ? t(titleKey) : (t(homeTitleKey) !== homeTitleKey ? t(homeTitleKey) : project.title);
  const client = t(clientKey) !== clientKey ? t(clientKey) : (t(homeClientKey) !== homeClientKey ? t(homeClientKey) : project.client);
  const industry = t(industryKey) !== industryKey ? t(industryKey) : (t(homeIndustryKey) !== homeIndustryKey ? t(homeIndustryKey) : project.industry);
  const description = t(descriptionKey) !== descriptionKey ? t(descriptionKey) : (t(homeDescriptionKey) !== homeDescriptionKey ? t(homeDescriptionKey) : project.description);
  
  return (
    <motion.div whileHover={{ y: -8 }} transition={{ duration: 0.3 }} className="h-full">
      <Link to={`/projects/${project.slug}`} className="block h-full">
        <Card
          hoverable
          cover={
            <div className="h-48 overflow-hidden">
              <img
                src={project.image}
                alt={title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = "";
                  e.currentTarget.style.display = "none";
                  e.currentTarget.parentElement!.innerHTML = `
                    <div class="h-48 bg-linear-to-br from-[#0052CC] to-[#1890FF] flex items-center justify-center">
                      <span class="text-white text-6xl font-bold opacity-20">
                        ${title.charAt(0)}
                      </span>
                    </div>
                  `;
                }}
              />
            </div>
          }
          className="h-full rounded-xl shadow-md border-0 overflow-hidden"
          styles={{
            body: {
              height: "100%",
              display: "flex",
              flexDirection: "column",
            },
          }}
        >
          <h3 className="text-xl font-semibold text-[#1A1A1A] mb-2">{title}</h3>
          <p className="text-sm text-[#1890FF] mb-2">
            {client} • {industry}
          </p>
          <p
            className="text-gray-600 mb-4"
            style={{
              display: "-webkit-box",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              minHeight: "4.5em",
            }}
          >
            {description}
          </p>
          <div className="mt-auto flex items-center text-[#0052CC] font-medium">
            {t("common.learnMore")} <ArrowRightOutlined className="ml-2" />
          </div>
        </Card>
      </Link>
    </motion.div>
  );
}
