import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import SeoHelmet from "@/components/SeoHelmet";
import SectionTitle from "@/components/SectionTitle";

const sections = [
  { id: "overview", key: "privacy.sections.overview" },
  { id: "data-we-collect", key: "privacy.sections.dataWeCollect" },
  { id: "how-we-use", key: "privacy.sections.howWeUse" },
  { id: "sharing", key: "privacy.sections.sharing" },
  { id: "security", key: "privacy.sections.security" },
  { id: "retention", key: "privacy.sections.retention" },
  { id: "children", key: "privacy.sections.children" },
  { id: "your-rights", key: "privacy.sections.yourRights" },
  { id: "changes", key: "privacy.sections.changes" },
  { id: "contact", key: "privacy.sections.contact" },
];

export default function PrivacyPage() {
  const { t, i18n } = useTranslation();
  const lastUpdated = t("privacy.lastUpdatedValue");

  return (
    <>
      <SeoHelmet
        title={t("privacy.seo.title")}
        description={t("privacy.seo.description")}
        keywords={["privacy policy", "data privacy", "nexacore", "nexa core"]}
        type="website"
        locale={i18n.language === "en" ? "en_US" : "vi_VN"}
      />

      <div className="pt-20! bg-linear-to-br from-gray-50 via-blue-50 to-indigo-50">
        {/* Hero */}
        <section className="relative overflow-hidden py-20!">
          <div className="absolute inset-0 opacity-30!">
            <div className="absolute top-10! left-10! w-80! h-80! bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
            <div className="absolute top-24! right-10! w-96! h-96! bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-10! left-1/2! w-96! h-96! bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
          </div>

          <div className="container mx-auto! px-4! relative z-10!">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl! mx-auto! text-center"
            >
              <div className="inline-flex items-center gap-2! px-5! py-2! bg-white/70 backdrop-blur rounded-full border border-white/60 shadow-sm">
                <span className="text-sm! font-semibold text-indigo-700">{t("privacy.badge")}</span>
              </div>
              <h1 className="mt-6! text-5xl! md:text-6xl! font-extrabold tracking-tight text-gray-900">
                {t("privacy.title")}
              </h1>
              <p className="mt-6! text-xl! text-gray-700 leading-relaxed">
                {t("privacy.subtitle")}
              </p>
              <p className="mt-5! text-sm text-gray-600">
                <span className="font-semibold">{t("privacy.lastUpdatedLabel")}</span>{" "}
                <span>{lastUpdated}</span>
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="pb-24!">
          <div className="container mx-auto! px-4!">
            <div className="max-w-6xl! mx-auto! grid grid-cols-1 lg:grid-cols-12 gap-8!">
              {/* TOC */}
              <aside className="lg:col-span-4">
                <div className="sticky top-28 bg-white/80 backdrop-blur rounded-3xl border border-gray-200 shadow-lg p-6!">
                  <div className="text-gray-900 font-extrabold text-lg! mb-3!">
                    {t("privacy.tocTitle")}
                  </div>
                  <ul className="space-y-2!">
                    {sections.map((s) => (
                      <li key={s.id}>
                        <a
                          href={`#${s.id}`}
                          className="block px-3! py-2! rounded-xl text-gray-700 hover:text-indigo-700 hover:bg-indigo-50 transition-colors"
                        >
                          {t(s.key)}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </aside>

              {/* Body */}
              <div className="lg:col-span-8">
                <div className="bg-white rounded-3xl border border-gray-200 shadow-xl p-8! md:p-12!">
                  <SectionTitle title={t("privacy.bodyTitle")} subtitle={t("privacy.bodySubtitle")} />

                  <div className="prose prose-lg max-w-none!">
                    <h2 id="overview">{t("privacy.sections.overview")}</h2>
                    <p>{t("privacy.content.overview")}</p>

                    <h2 id="data-we-collect">{t("privacy.sections.dataWeCollect")}</h2>
                    <ul>
                      <li>{t("privacy.content.dataWeCollect.item1")}</li>
                      <li>{t("privacy.content.dataWeCollect.item2")}</li>
                      <li>{t("privacy.content.dataWeCollect.item3")}</li>
                    </ul>

                    <h2 id="how-we-use">{t("privacy.sections.howWeUse")}</h2>
                    <ul>
                      <li>{t("privacy.content.howWeUse.item1")}</li>
                      <li>{t("privacy.content.howWeUse.item2")}</li>
                      <li>{t("privacy.content.howWeUse.item3")}</li>
                      <li>{t("privacy.content.howWeUse.item4")}</li>
                    </ul>

                    <h2 id="sharing">{t("privacy.sections.sharing")}</h2>
                    <p>{t("privacy.content.sharing")}</p>

                    <h2 id="security">{t("privacy.sections.security")}</h2>
                    <p>{t("privacy.content.security")}</p>

                    <h2 id="retention">{t("privacy.sections.retention")}</h2>
                    <p>{t("privacy.content.retention")}</p>

                    <h2 id="children">{t("privacy.sections.children")}</h2>
                    <p>{t("privacy.content.children")}</p>

                    <h2 id="your-rights">{t("privacy.sections.yourRights")}</h2>
                    <ul>
                      <li>{t("privacy.content.yourRights.item1")}</li>
                      <li>{t("privacy.content.yourRights.item2")}</li>
                      <li>{t("privacy.content.yourRights.item3")}</li>
                      <li>{t("privacy.content.yourRights.item4")}</li>
                    </ul>

                    <h2 id="changes">{t("privacy.sections.changes")}</h2>
                    <p>{t("privacy.content.changes")}</p>

                    <h2 id="contact">{t("privacy.sections.contact")}</h2>
                    <p>
                      {t("privacy.content.contactPrefix")}{" "}
                      <a href="mailto:support@nexacore.vn">support@nexacore.vn</a>.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

