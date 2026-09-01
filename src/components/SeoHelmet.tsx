import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

export interface SeoHelmetProps {
  title?: string;
  description?: string;
  keywords?: string[];
  url?: string;
  image?: string;
  type?: "website" | "article" | "product";
  locale?: string;
  siteName?: string;
  structuredData?: object;
}

const SITE_NAME = "NexaCore";
const SITE_URL = typeof window !== "undefined" ? window.location.origin : "https://nexacore.com";
const DEFAULT_TITLE = "NexaCore | Nexa Core - Digital Transformation Solutions";
const DEFAULT_DESCRIPTION =
  "NexaCore (Nexa Core) cung cấp giải pháp ERP, CRM, hạ tầng dữ liệu và đám mây hàng đầu. Chuyển đổi số doanh nghiệp với Nexa Core.";
const DEFAULT_IMAGE =
  "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1200&q=80";

const buildCanonical = (explicitUrl?: string) => {
  if (explicitUrl) return explicitUrl;
  if (typeof window !== "undefined") return window.location.href;
  return undefined;
};

// Default Organization structured data
const defaultStructuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "NexaCore",
  alternateName: ["Nexa Core", "Nexacore"],
  url: SITE_URL,
  logo: `${SITE_URL}/images/Logo.png`,
  description: DEFAULT_DESCRIPTION,
  sameAs: [
    // Add your social media links here when available
    // "https://www.facebook.com/nexacore",
    // "https://www.linkedin.com/company/nexacore",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Customer Service",
    availableLanguage: ["Vietnamese", "English"],
  },
  areaServed: "Worldwide",
  knowsAbout: [
    "Digital Transformation",
    "ERP Solutions",
    "CRM Software",
    "Cloud Computing",
    "Data Platform",
    "Enterprise Software",
  ],
};

export default function SeoHelmet(props: SeoHelmetProps) {
  const title = props.title || DEFAULT_TITLE;
  const description = props.description || DEFAULT_DESCRIPTION;
  const url = buildCanonical(props.url);
  const image = props.image || DEFAULT_IMAGE;
  const type = props.type || "website";
  const locale = props.locale || "vi_VN";
  const siteName = props.siteName || SITE_NAME;
  const keywords = props.keywords?.length ? props.keywords.join(", ") : undefined;
  const structuredData = props.structuredData || defaultStructuredData;

  // Inject structured data
  useEffect(() => {
    const scriptId = "structured-data-script";
    let script = document.getElementById(scriptId) as HTMLScriptElement;

    if (!script) {
      script = document.createElement("script");
      script.id = scriptId;
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }

    script.textContent = JSON.stringify(structuredData);
  }, [structuredData]);

  return (
    <Helmet prioritizeSeoTags>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author" content="NexaCore" />
      <meta
        name="robots"
        content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
      />
      <meta name="googlebot" content="index, follow" />
      <meta name="language" content="Vietnamese, English" />
      <meta name="revisit-after" content="7 days" />

      {/* Canonical URL */}
      {url && <link rel="canonical" href={url} />}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {url && <meta property="og:url" content={url} />}
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content={locale} />
      <meta property="og:image" content={image} />
      <meta property="og:image:secure_url" content={image} />
      <meta property="og:image:alt" content={title} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      {url && <meta name="twitter:url" content={url} />}
      <meta name="twitter:site" content="@nexacore" />

      {/* Additional SEO */}
      <meta name="theme-color" content="#0052CC" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
    </Helmet>
  );
}
