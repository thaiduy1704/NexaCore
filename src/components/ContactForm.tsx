import { Form, Input, Button, App } from "antd";
import { SendOutlined } from "@ant-design/icons";

const { TextArea } = Input;

interface ContactFormValues {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

export default function ContactForm() {
  const [form] = Form.useForm();
  const { message } = App.useApp();

  const onFinish = (values: ContactFormValues) => {
    console.log("Form submitted:", values);
    message.success("Thank you! We will get back to you soon.");
    form.resetFields();
  };

  return (
    <Form form={form} layout="vertical" onFinish={onFinish} className="max-w-2xl">
      <Form.Item
        label="Name"
        name="name"
        rules={[{ required: true, message: "Please enter your name" }]}
      >
        <Input size="large" placeholder="Your Name" />
      </Form.Item>

      <Form.Item
        label="Email"
        name="email"
        rules={[
          { required: true, message: "Please enter your email" },
          { type: "email", message: "Please enter a valid email" },
        ]}
      >
        <Input size="large" placeholder="your.email@example.com" />
      </Form.Item>

      <Form.Item label="Phone" name="phone">
        <Input size="large" placeholder="Your Phone Number (Optional)" />
      </Form.Item>

      <Form.Item
        label="Message"
        name="message"
        rules={[{ required: true, message: "Please enter your message" }]}
      >
        <TextArea rows={6} placeholder="Tell us about your project or inquiry..." />
      </Form.Item>

      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          size="large"
          icon={<SendOutlined />}
          className="bg-[#0052CC] hover:bg-[#1890FF] h-12 px-8 text-lg font-semibold"
        >
          Send Message
        </Button>
      </Form.Item>
    </Form>
  );
}
