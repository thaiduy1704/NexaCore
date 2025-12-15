import { useEffect, useState } from "react";
import { Button, Dropdown } from "antd";
import { GlobalOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { useTranslation } from "react-i18next";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [currentLang, setCurrentLang] = useState(i18n.language || "en");

  useEffect(() => {
    setCurrentLang(i18n.language);
  }, [i18n.language]);

  const handleLanguageChange = (lang: string) => {
    i18n.changeLanguage(lang);
    setCurrentLang(lang);
  };

  const items: MenuProps["items"] = [
    {
      key: "en",
      label: (
        <div
          className="flex items-center gap-2 px-2 py-1 cursor-pointer hover:bg-gray-100 rounded"
          onClick={() => handleLanguageChange("en")}
        >
          <span className="text-lg">🇺🇸</span>
          <span>English</span>
          {currentLang === "en" && <span className="ml-auto text-blue-500">✓</span>}
        </div>
      ),
    },
    {
      key: "vi",
      label: (
        <div
          className="flex items-center gap-2 px-2 py-1 cursor-pointer hover:bg-gray-100 rounded"
          onClick={() => handleLanguageChange("vi")}
        >
          <span className="text-lg">🇻🇳</span>
          <span>Tiếng Việt</span>
          {currentLang === "vi" && <span className="ml-auto text-blue-500">✓</span>}
        </div>
      ),
    },
  ];

  return (
    <Dropdown menu={{ items }} placement="bottomRight" trigger={["click"]}>
      <Button
        type="text"
        icon={<GlobalOutlined />}
        className="flex items-center gap-2 hover:bg-gray-100"
        style={{ color: "inherit" }}
      >
        <span className="hidden sm:inline">
          {currentLang === "en" ? "🇺🇸 EN" : "🇻🇳 VI"}
        </span>
      </Button>
    </Dropdown>
  );
}

