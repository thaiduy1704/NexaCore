import { Form, Input, Button, App } from "antd";
import { SendOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";

const { TextArea } = Input;

interface ContactFormValues {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

export default function ContactForm() {
  const { t } = useTranslation();
  const [form] = Form.useForm();
  const { message } = App.useApp();

  const onFinish = (values: ContactFormValues) => {
    const recipientEmail = "support@nexacore.vn";

    const subject = encodeURIComponent(
      t("contact.mail.subject", { name: values.name, email: values.email })
    );

    const bodyLines = [
      t("contact.mail.greeting"),
      "",
      t("contact.mail.name", { value: values.name }),
      t("contact.mail.email", { value: values.email }),
      values.phone ? t("contact.mail.phone", { value: values.phone }) : "",
      "",
      t("contact.mail.message"),
      values.message,
    ].filter(Boolean);

    const emailBody = encodeURIComponent(bodyLines.join("\n"));
    const mailtoLink = `mailto:${recipientEmail}?subject=${subject}&body=${emailBody}`;

    window.location.href = mailtoLink;

    message.success(t("contact.form.success"));
    form.resetFields();
  };

  return (
    <Form form={form} layout="vertical" onFinish={onFinish} className="max-w-2xl">
      <Form.Item
        label={t("contact.form.name")}
        name="name"
        rules={[{ required: true, message: t("contact.form.nameRequired") }]}
      >
        <Input size="large" placeholder={t("contact.form.namePlaceholder")} />
      </Form.Item>

      <Form.Item
        label={t("contact.form.email")}
        name="email"
        rules={[
          { required: true, message: t("contact.form.emailRequired") },
          { type: "email", message: t("contact.form.emailInvalid") },
        ]}
      >
        <Input size="large" placeholder={t("contact.form.emailPlaceholder")} />
      </Form.Item>

      <Form.Item label={t("contact.form.phone")} name="phone">
        <Input size="large" placeholder={t("contact.form.phonePlaceholder")} />
      </Form.Item>

      <Form.Item
        label={t("contact.form.message")}
        name="message"
        rules={[{ required: true, message: t("contact.form.messageRequired") }]}
      >
        <TextArea rows={6} placeholder={t("contact.form.messagePlaceholder")} />
      </Form.Item>

      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          size="large"
          icon={<SendOutlined />}
          className="bg-[#0052CC] hover:bg-[#1890FF] h-12 px-8 text-lg font-semibold"
        >
          {t("contact.form.submit")}
        </Button>
      </Form.Item>
    </Form>
  );
}
