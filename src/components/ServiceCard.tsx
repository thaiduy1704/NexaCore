import { Card } from "antd";
import * as Icons from "@ant-design/icons";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import React from "react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  link: string;
}

type AntIconType = React.ComponentType<{ style?: React.CSSProperties; className?: string }>;

export default function ServiceCard({ title, description, icon, link }: ServiceCardProps) {
  const IconComponent = (Icons as Record<string, AntIconType>)[icon] || Icons.AppstoreOutlined;

  return (
    <motion.div whileHover={{ y: -8 }} transition={{ duration: 0.3 }} className="h-full">
      <Link to={link} className="block h-full">
        <Card
          hoverable
          className="h-full min-h-[320px] rounded-2xl shadow-lg border-0 hover:shadow-2xl transition-all duration-300"
          styles={{
            body: {
              padding: "40px",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            },
          }}
        >
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#0052CC] to-[#1890FF] rounded-2xl mb-6 shadow-lg">
              <IconComponent style={{ fontSize: "36px", color: "white" }} />
            </div>
            <h3 className="text-2xl font-bold text-[#1A1A1A] mb-4">{title}</h3>
            <p className="text-base text-gray-600 leading-relaxed">{description}</p>
          </div>
        </Card>
      </Link>
    </motion.div>
  );
}
