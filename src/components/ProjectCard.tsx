import { Card } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import type { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div whileHover={{ y: -8 }} transition={{ duration: 0.3 }}>
      <Link to={`/projects/${project.slug}`}>
        <Card
          hoverable
          cover={
            <div className="h-48 bg-gradient-to-br from-[#0052CC] to-[#1890FF] flex items-center justify-center">
              <span className="text-white text-6xl font-bold opacity-20">
                {project.title.charAt(0)}
              </span>
            </div>
          }
          className="h-full rounded-xl shadow-md border-0 overflow-hidden"
        >
          <h3 className="text-xl font-semibold text-[#1A1A1A] mb-2">{project.title}</h3>
          <p className="text-sm text-[#1890FF] mb-2">
            {project.client} • {project.industry}
          </p>
          <p className="text-gray-600 mb-4">{project.description}</p>
          <div className="flex items-center text-[#0052CC] font-medium">
            Learn More <ArrowRightOutlined className="ml-2" />
          </div>
        </Card>
      </Link>
    </motion.div>
  );
}
