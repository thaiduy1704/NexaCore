import { Helmet } from "react-helmet-async";

export interface SeoHelmetProps {
  title?: string;
  description?: string;
  keywords?: string[];
  url?: string;
  image?: string;
  type?: "website" | "article" | "product";
  locale?: string;
  siteName?: string;
}

const SITE_NAME = "NexaCore";
const DEFAULT_TITLE = "NexaCore | Digital Transformation Solutions";
const DEFAULT_DESCRIPTION =
  "NexaCore provides enterprise-grade ERP, CRM, data platform, and cloud solutions to accelerate your digital transformation.";
const DEFAULT_IMAGE =
  "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1200&q=80";

const buildCanonical = (explicitUrl?: string) => {
  if (explicitUrl) return explicitUrl;
  if (typeof window !== "undefined") return window.location.href;
  return undefined;
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

  return (
    <Helmet prioritizeSeoTags>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      {url && <link rel="canonical" href={url} />}

      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {url && <meta property="og:url" content={url} />}
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content={locale} />
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content={title} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      {url && <meta name="twitter:url" content={url} />}
    </Helmet>
  );
}
