"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Card, Statistic, Row, Col } from "antd";
import {
  FileTextOutlined,
  ProjectOutlined,
  ShoppingOutlined,
  RiseOutlined,
} from "@ant-design/icons";
import AdminLayout from "@/components/AdminLayout";
import { newsArticles, projects, products } from "@/lib/mockData";

export default function AdminDashboardPage() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const authenticated = localStorage.getItem("admin_authenticated");
    if (!authenticated) {
      router.push("/admin/login");
    } else {
      setIsAuthenticated(true);
    }
  }, [router]);

  if (!isAuthenticated) {
    return null;
  }

  return (
    <AdminLayout>
      <div>
        <h2 className="text-3xl font-bold text-[#1A1A1A] mb-8">Dashboard Overview</h2>

        <Row gutter={[16, 16]}>
          <Col xs={24} sm={12} lg={6}>
            <Card className="shadow-md border-0 rounded-xl">
              <Statistic
                title="Total News Articles"
                value={newsArticles.length}
                prefix={<FileTextOutlined />}
                valueStyle={{ color: "#0052CC" }}
              />
            </Card>
          </Col>
          <Col xs={24} sm={12} lg={6}>
            <Card className="shadow-md border-0 rounded-xl">
              <Statistic
                title="Total Projects"
                value={projects.length}
                prefix={<ProjectOutlined />}
                valueStyle={{ color: "#1890FF" }}
              />
            </Card>
          </Col>
          <Col xs={24} sm={12} lg={6}>
            <Card className="shadow-md border-0 rounded-xl">
              <Statistic
                title="Total Products"
                value={products.length}
                prefix={<ShoppingOutlined />}
                valueStyle={{ color: "#52C41A" }}
              />
            </Card>
          </Col>
          <Col xs={24} sm={12} lg={6}>
            <Card className="shadow-md border-0 rounded-xl">
              <Statistic
                title="Total Views"
                value={12543}
                prefix={<RiseOutlined />}
                valueStyle={{ color: "#FA8C16" }}
              />
            </Card>
          </Col>
        </Row>

        <Row gutter={[16, 16]} className="mt-8">
          <Col xs={24} lg={12}>
            <Card
              title="Recent Activity"
              className="shadow-md border-0 rounded-xl"
              headStyle={{ fontSize: "18px", fontWeight: "bold" }}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b">
                  <span>New article published</span>
                  <span className="text-gray-500 text-sm">2 hours ago</span>
                </div>
                <div className="flex items-center justify-between pb-3 border-b">
                  <span>Project updated</span>
                  <span className="text-gray-500 text-sm">5 hours ago</span>
                </div>
                <div className="flex items-center justify-between pb-3 border-b">
                  <span>New product added</span>
                  <span className="text-gray-500 text-sm">1 day ago</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Article edited</span>
                  <span className="text-gray-500 text-sm">2 days ago</span>
                </div>
              </div>
            </Card>
          </Col>
          <Col xs={24} lg={12}>
            <Card
              title="Quick Actions"
              className="shadow-md border-0 rounded-xl"
              headStyle={{ fontSize: "18px", fontWeight: "bold" }}
            >
              <div className="space-y-3">
                <button
                  onClick={() => router.push("/admin/news")}
                  className="w-full text-left px-4 py-3 bg-[#F5F7FA] hover:bg-[#E6F4FF] rounded-lg transition-colors"
                >
                  <FileTextOutlined className="mr-2 text-[#0052CC]" />
                  Manage News Articles
                </button>
                <button
                  onClick={() => router.push("/admin/projects")}
                  className="w-full text-left px-4 py-3 bg-[#F5F7FA] hover:bg-[#E6F4FF] rounded-lg transition-colors"
                >
                  <ProjectOutlined className="mr-2 text-[#0052CC]" />
                  Manage Projects
                </button>
                <button
                  onClick={() => router.push("/admin/products")}
                  className="w-full text-left px-4 py-3 bg-[#F5F7FA] hover:bg-[#E6F4FF] rounded-lg transition-colors"
                >
                  <ShoppingOutlined className="mr-2 text-[#0052CC]" />
                  Manage Products
                </button>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </AdminLayout>
  );
}
