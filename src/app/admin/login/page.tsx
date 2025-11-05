"use client";

import { Card, Form, Input, Button, App } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const router = useRouter();
  const { message } = App.useApp();

  const onFinish = (values: { username: string; password: string }) => {
    // Mock authentication
    if (values.username === "admin" && values.password === "admin123") {
      localStorage.setItem("admin_authenticated", "true");
      message.success("Login successful!");
      router.push("/admin/dashboard");
    } else {
      message.error("Invalid credentials. Try admin/admin123");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#001529] via-[#0052CC] to-[#1890FF]">
      <div className="w-full max-w-md px-4">
        <div className="text-center mb-8">
          <div className="inline-flex items-center space-x-2 mb-4">
            <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-[#0052CC] font-bold text-2xl">
              N
            </div>
            <span className="text-3xl font-bold text-white">NexaCore</span>
          </div>
          <h1 className="text-2xl font-bold text-white">Admin Portal</h1>
        </div>

        <Card className="shadow-2xl border-0 rounded-xl">
          <h2 className="text-2xl font-bold text-center text-[#1A1A1A] mb-6">Sign In</h2>
          <Form name="login" onFinish={onFinish} layout="vertical" size="large">
            <Form.Item
              name="username"
              rules={[{ required: true, message: "Please input your username!" }]}
            >
              <Input prefix={<UserOutlined />} placeholder="Username" />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[{ required: true, message: "Please input your password!" }]}
            >
              <Input.Password prefix={<LockOutlined />} placeholder="Password" />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                block
                className="bg-[#0052CC] hover:bg-[#1890FF] h-12 text-lg font-semibold"
              >
                Sign In
              </Button>
            </Form.Item>
          </Form>

          <div className="text-center text-sm text-gray-500 mt-4">
            Demo credentials: admin / admin123
          </div>
        </Card>
      </div>
    </div>
  );
}
