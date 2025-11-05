"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Table, Button, Modal, Form, Input, DatePicker, App, Space, Popconfirm } from "antd";
import { PlusOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";
import AdminLayout from "@/components/AdminLayout";
import { newsArticles } from "@/lib/mockData";
import type { NewsArticle } from "@/types";
import dayjs from "dayjs";

const { TextArea } = Input;

export default function AdminNewsPage() {
  const router = useRouter();
  const { message } = App.useApp();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [data, setData] = useState<NewsArticle[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<NewsArticle | null>(null);
  const [form] = Form.useForm();

  useEffect(() => {
    const authenticated = localStorage.getItem("admin_authenticated");
    if (!authenticated) {
      router.push("/admin/login");
    } else {
      setIsAuthenticated(true);
      // Load data from localStorage or use mock data
      const stored = localStorage.getItem("news_data");
      setData(stored ? JSON.parse(stored) : newsArticles);
    }
  }, [router]);

  const saveData = (newData: NewsArticle[]) => {
    setData(newData);
    localStorage.setItem("news_data", JSON.stringify(newData));
  };

  const handleAdd = () => {
    setEditingItem(null);
    form.resetFields();
    setIsModalOpen(true);
  };

  const handleEdit = (record: NewsArticle) => {
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
    message.success("Article deleted successfully");
  };

  const handleSubmit = async () => {
    try {
      const values = await form.validateFields();
      const newItem: NewsArticle = {
        id: editingItem?.id || String(Date.now()),
        slug: values.title.toLowerCase().replace(/\s+/g, "-"),
        title: values.title,
        excerpt: values.excerpt,
        content: values.content,
        image: values.image,
        date: values.date.format("YYYY-MM-DD"),
        author: values.author,
        category: values.category,
      };

      if (editingItem) {
        const newData = data.map((item) => (item.id === editingItem.id ? newItem : item));
        saveData(newData);
        message.success("Article updated successfully");
      } else {
        saveData([...data, newItem]);
        message.success("Article added successfully");
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
      title: "Category",
      dataIndex: "category",
      key: "category",
    },
    {
      title: "Author",
      dataIndex: "author",
      key: "author",
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
      render: (_: unknown, record: NewsArticle) => (
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
            title="Are you sure you want to delete this article?"
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
          <h2 className="text-3xl font-bold text-[#1A1A1A]">Manage News Articles</h2>
          <Button
            type="primary"
            icon={<PlusOutlined />}
            onClick={handleAdd}
            size="large"
            className="bg-[#0052CC]"
          >
            Add New Article
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
          title={editingItem ? "Edit Article" : "Add New Article"}
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
              name="category"
              label="Category"
              rules={[{ required: true, message: "Please enter the category" }]}
            >
              <Input size="large" />
            </Form.Item>

            <Form.Item
              name="author"
              label="Author"
              rules={[{ required: true, message: "Please enter the author" }]}
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
              name="excerpt"
              label="Excerpt"
              rules={[{ required: true, message: "Please enter the excerpt" }]}
            >
              <TextArea rows={3} />
            </Form.Item>

            <Form.Item
              name="content"
              label="Content"
              rules={[{ required: true, message: "Please enter the content" }]}
            >
              <TextArea rows={6} />
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
