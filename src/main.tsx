import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { ConfigProvider, App as AntdApp } from "antd";
import App from "./App";
import "./app/globals.css";
import "./i18n/config";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: "#0052CC",
              colorLink: "#1890FF",
              fontFamily: "Inter, system-ui, Avenir, Helvetica, Arial, sans-serif",
            },
          }}
        >
          <AntdApp>
            <App />
          </AntdApp>
        </ConfigProvider>
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);
