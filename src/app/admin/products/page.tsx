"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Table, Button, Modal, Form, Input, App, Space, Popconfirm, Select, Tag } from "antd";
import { PlusOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";
import AdminLayout from "@/components/AdminLayout";
import { products } from "@/lib/mockData";
import type { Product } from "@/types";

const { TextArea } = Input;

export default function AdminProductsPage() {
  const router = useRouter();
  const { message } = App.useApp();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [data, setData] = useState<Product[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<Product | null>(null);
  const [form] = Form.useForm();

  useEffect(() => {
    const authenticated = localStorage.getItem("admin_authenticated");
    if (!authenticated) {
      router.push("/admin/login");
    } else {
      setIsAuthenticated(true);
      const stored = localStorage.getItem("products_data");
      setData(stored ? JSON.parse(stored) : products);
    }
  }, [router]);

  const saveData = (newData: Product[]) => {
    setData(newData);
    localStorage.setItem("products_data", JSON.stringify(newData));
  };

  const handleAdd = () => {
    setEditingItem(null);
    form.resetFields();
    setIsModalOpen(true);
  };

  const handleEdit = (record: Product) => {
    setEditingItem(record);
    form.setFieldsValue(record);
    setIsModalOpen(true);
  };

  const handleDelete = (id: string) => {
    const newData = data.filter((item) => item.id !== id);
    saveData(newData);
    message.success("Product deleted successfully");
  };

  const handleSubmit = async () => {
    try {
      const values = await form.validateFields();
      const newItem: Product = {
        id: editingItem?.id || String(Date.now()),
        slug: values.title.toLowerCase().replace(/\s+/g, "-"),
        title: values.title,
        description: values.description,
        image: values.image,
        category: values.category,
        features: values.features || [],
      };

      if (editingItem) {
        const newData = data.map((item) => (item.id === editingItem.id ? newItem : item));
        saveData(newData);
        message.success("Product updated successfully");
      } else {
        saveData([...data, newItem]);
        message.success("Product added successfully");
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
      render: (category: string) => <Tag color="blue">{category}</Tag>,
    },
    {
      title: "Features",
      dataIndex: "features",
      key: "features",
      render: (features: string[]) => <span>{features.length} features</span>,
    },
    {
      title: "Actions",
      key: "actions",
      render: (_: unknown, record: Product) => (
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
            title="Are you sure you want to delete this product?"
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
          <h2 className="text-3xl font-bold text-[#1A1A1A]">Manage Products</h2>
          <Button
            type="primary"
            icon={<PlusOutlined />}
            onClick={handleAdd}
            size="large"
            className="bg-[#0052CC]"
          >
            Add New Product
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
          title={editingItem ? "Edit Product" : "Add New Product"}
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
              rules={[{ required: true, message: "Please select the category" }]}
            >
              <Select size="large">
                <Select.Option value="Enterprise Software">Enterprise Software</Select.Option>
                <Select.Option value="CRM">CRM</Select.Option>
                <Select.Option value="Security">Security</Select.Option>
                <Select.Option value="Cloud">Cloud</Select.Option>
                <Select.Option value="AI/ML">AI/ML</Select.Option>
              </Select>
            </Form.Item>

            <Form.Item
              name="description"
              label="Description"
              rules={[{ required: true, message: "Please enter the description" }]}
            >
              <TextArea rows={3} />
            </Form.Item>

            <Form.Item name="features" label="Features (comma-separated)">
              <Select mode="tags" size="large" placeholder="Add features" tokenSeparators={[","]} />
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
