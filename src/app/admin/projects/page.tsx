"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Table, Button, Modal, Form, Input, DatePicker, App, Space, Popconfirm } from "antd";
import { PlusOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";
import AdminLayout from "@/components/AdminLayout";
import { projects } from "@/lib/mockData";
import type { Project } from "@/types";
import dayjs from "dayjs";

const { TextArea } = Input;

export default function AdminProjectsPage() {
  const router = useRouter();
  const { message } = App.useApp();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [data, setData] = useState<Project[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<Project | null>(null);
  const [form] = Form.useForm();

  useEffect(() => {
    const authenticated = localStorage.getItem("admin_authenticated");
    if (!authenticated) {
      router.push("/admin/login");
    } else {
      setIsAuthenticated(true);
      const stored = localStorage.getItem("projects_data");
      setData(stored ? JSON.parse(stored) : projects);
    }
  }, [router]);

  const saveData = (newData: Project[]) => {
    setData(newData);
    localStorage.setItem("projects_data", JSON.stringify(newData));
  };

  const handleAdd = () => {
    setEditingItem(null);
    form.resetFields();
    setIsModalOpen(true);
  };

  const handleEdit = (record: Project) => {
    setEditingItem(record);
    form.setFieldsValue({
      ...record,
      date: dayjs(record.date),
    });
    setIsModalOpen(true);
  };

  const handleDelete = (id: string) => {
    const newData = data.filter((item) => item.id !== id);
    saveData(newData);
    message.success("Project deleted successfully");
  };

  const handleSubmit = async () => {
    try {
      const values = await form.validateFields();
      const newItem: Project = {
        id: editingItem?.id || String(Date.now()),
        slug: values.title.toLowerCase().replace(/\s+/g, "-"),
        title: values.title,
        client: values.client,
        industry: values.industry,
        description: values.description,
        image: values.image,
        solution: values.solution,
        result: values.result,
        date: values.date.format("YYYY-MM-DD"),
      };

      if (editingItem) {
        const newData = data.map((item) => (item.id === editingItem.id ? newItem : item));
        saveData(newData);
        message.success("Project updated successfully");
      } else {
        saveData([...data, newItem]);
        message.success("Project added successfully");
      }

      setIsModalOpen(false);
      form.resetFields();
    } catch (error) {
      console.error("Validation failed:", error);
    }
  };

  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Client",
      dataIndex: "client",
      key: "client",
    },
    {
      title: "Industry",
      dataIndex: "industry",
      key: "industry",
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
      render: (date: string) => new Date(date).toLocaleDateString(),
    },
    {
      title: "Actions",
      key: "actions",
      render: (_: unknown, record: Project) => (
        <Space>
          <Button
            type="primary"
            icon={<EditOutlined />}
            onClick={() => handleEdit(record)}
            size="small"
          >
            Edit
          </Button>
          <Popconfirm
            title="Are you sure you want to delete this project?"
            onConfirm={() => handleDelete(record.id)}
            okText="Yes"
            cancelText="No"
          >
            <Button danger icon={<DeleteOutlined />} size="small">
              Delete
            </Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  if (!isAuthenticated) {
    return null;
  }

  return (
    <AdminLayout>
      <div>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-[#1A1A1A]">Manage Projects</h2>
          <Button
            type="primary"
            icon={<PlusOutlined />}
            onClick={handleAdd}
            size="large"
            className="bg-[#0052CC]"
          >
            Add New Project
          </Button>
        </div>

        <Table
          columns={columns}
          dataSource={data}
          rowKey="id"
          pagination={{ pageSize: 10 }}
          className="shadow-md rounded-xl"
        />

        <Modal
          title={editingItem ? "Edit Project" : "Add New Project"}
          open={isModalOpen}
          onOk={handleSubmit}
          onCancel={() => {
            setIsModalOpen(false);
            form.resetFields();
          }}
          width={800}
          okText={editingItem ? "Update" : "Add"}
        >
          <Form form={form} layout="vertical">
            <Form.Item
              name="title"
              label="Title"
              rules={[{ required: true, message: "Please enter the title" }]}
            >
              <Input size="large" />
            </Form.Item>

            <Form.Item
              name="client"
              label="Client"
              rules={[{ required: true, message: "Please enter the client" }]}
            >
              <Input size="large" />
            </Form.Item>

            <Form.Item
              name="industry"
              label="Industry"
              rules={[{ required: true, message: "Please enter the industry" }]}
            >
              <Input size="large" />
            </Form.Item>

            <Form.Item
              name="date"
              label="Date"
              rules={[{ required: true, message: "Please select the date" }]}
            >
              <DatePicker size="large" className="w-full" />
            </Form.Item>

            <Form.Item
              name="description"
              label="Description"
              rules={[{ required: true, message: "Please enter the description" }]}
            >
              <TextArea rows={3} />
            </Form.Item>

            <Form.Item
              name="solution"
              label="Solution"
              rules={[{ required: true, message: "Please enter the solution" }]}
            >
              <Input size="large" />
            </Form.Item>

            <Form.Item
              name="result"
              label="Result"
              rules={[{ required: true, message: "Please enter the result" }]}
            >
              <TextArea rows={3} />
            </Form.Item>

            <Form.Item
              name="image"
              label="Image URL"
              rules={[{ required: true, message: "Please enter the image URL" }]}
            >
              <Input size="large" />
            </Form.Item>
          </Form>
        </Modal>
      </div>
    </AdminLayout>
  );
}
