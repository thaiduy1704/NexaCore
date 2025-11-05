import { Card } from "antd";
import {
  PhoneOutlined,
  MailOutlined,
  EnvironmentOutlined,
  ClockCircleOutlined,
  CustomerServiceOutlined,
  SendOutlined,
} from "@ant-design/icons";
import { motion } from "framer-motion";
import { useState } from "react";
import HeroBanner from "@/components/HeroBanner";
import SectionTitle from "@/components/SectionTitle";
import ContactForm from "@/components/ContactForm";

const contactGradients = [
  "from-violet-600 via-purple-600 to-indigo-600",
  "from-blue-600 via-cyan-600 to-teal-600",
  "from-pink-600 via-rose-600 to-red-600",
  "from-emerald-600 via-green-600 to-teal-600",
];

export default function ContactPage() {
  const [hoveredContact, setHoveredContact] = useState<number | null>(null);

  const contactInfo = [
    {
      icon: EnvironmentOutlined,
      title: "Headquarters",
      gradient: contactGradients[0],
      content: [
        "49/35/19 Đường Giang Cự Vọng",
        " Khu phố 4, Phường Trung Mỹ Tây,",
        "Thành phố Hồ Chí Minh, Việt Nam",
      ],
    },
    {
      icon: PhoneOutlined,
      title: "Phone",
      gradient: contactGradients[1],
      content: ["Sales: 	0924600029", "Support:	0924600029", "General: 	0924600029"],
    },
    {
      icon: MailOutlined,
      title: "Email",
      gradient: contactGradients[2],
      content: ["General: nexacore@gmail.com"],
    },
    {
      icon: ClockCircleOutlined,
      title: "Business Hours",
      gradient: contactGradients[3],
      content: [
        "Monday - Friday: 9:00 AM - 6:00 PM PST",
        "Saturday: 10:00 AM - 2:00 PM PST",
        "Sunday: Closed",
      ],
    },
  ];

  return (
    <div className="!pt-20">
      <HeroBanner
        title="Contact Us"
        subtitle="Get in touch with our team to discuss your digital transformation needs"
      />

      {/* Main Contact Section */}
      <section className="!py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
        <div className="container !mx-auto !px-4">
          <div className="!max-w-7xl !mx-auto">
            <div className="grid lg:grid-cols-2 !gap-12">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="bg-white rounded-3xl shadow-2xl !p-10">
                  <div className="!mb-8">
                    <div className="flex items-center !gap-3 !mb-4">
                      <div className="!w-12 !h-12 rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center">
                        <SendOutlined className="!text-2xl text-white" />
                      </div>
                      <h2 className="!text-3xl font-extrabold text-gray-900">Send Us a Message</h2>
                    </div>
                    <p className="text-gray-600 !text-lg">
                      Fill out the form and we&apos;ll get back to you within 24 hours
                    </p>
                  </div>
                  <ContactForm />
                </div>
              </motion.div>

              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="!mb-8">
                  <div className="flex items-center !gap-3 !mb-4">
                    <div className="!w-12 !h-12 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center">
                      <CustomerServiceOutlined className="!text-2xl text-white" />
                    </div>
                    <h2 className="!text-3xl font-extrabold text-gray-900">Contact Information</h2>
                  </div>
                  <p className="text-gray-600 !text-lg">
                    Reach out to us through any of these channels
                  </p>
                </div>

                <div className="!space-y-6">
                  {contactInfo.map((info, index) => {
                    const IconComponent = info.icon;
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        onMouseEnter={() => setHoveredContact(index)}
                        onMouseLeave={() => setHoveredContact(null)}
                        whileHover={{ x: 5 }}
                      >
                        <Card
                          className={`
                            shadow-xl border-0 rounded-2xl overflow-hidden
                            transition-all duration-500
                            ${hoveredContact === index ? "shadow-2xl shadow-indigo-200/50" : ""}
                          `}
                        >
                          <div className="flex items-start !gap-4 !p-6">
                            <motion.div
                              whileHover={{ rotate: 360 }}
                              transition={{ duration: 0.6 }}
                              className={`
                                !w-14 !h-14 rounded-2xl bg-gradient-to-br ${info.gradient}
                                flex items-center justify-center flex-shrink-0 shadow-lg
                              `}
                            >
                              <IconComponent className="!text-2xl text-white" />
                            </motion.div>
                            <div className="flex-1">
                              <h3 className="!text-xl font-extrabold text-gray-900 !mb-3">
                                {info.title}
                              </h3>
                              <div className="!space-y-1">
                                {info.content.map((line, idx) => (
                                  <p key={idx} className="text-gray-600 leading-relaxed">
                                    {line}
                                  </p>
                                ))}
                              </div>
                            </div>
                          </div>
                        </Card>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="!py-24 bg-white">
        <div className="container !mx-auto !px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionTitle title="Our Location" subtitle="Visit us at our headquarters" />
            <div className="!max-w-6xl !mx-auto !mt-12">
              <div className="aspect-video bg-gradient-to-br from-indigo-600 to-purple-600 rounded-3xl overflow-hidden shadow-2xl relative">
                {/* Map Overlay with gradient border */}
                <div className="absolute inset-0 !p-1 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 rounded-3xl">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3102.197789797159!2d106.61078668354305!3d10.854134153243523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752a3c0bde2ef3%3A0xe35a119bc5db699c!2zNDkvMzUvMTcgR2lhbmcgQ-G7sSBW4buNbmcsIFRydW5nIE3hu7kgVMOieSwgUXXhuq1uIDEyLCBUaMOgbmggcGjhu5EgSOG7kyBDaMOtIE1pbmgsIFZp4buHdCBOYW0!5e1!3m2!1svi!2s!4v1762317388157!5m2!1svi!2s"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-3xl"
                  ></iframe>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="!py-24 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
        <div className="container !mx-auto !px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="!max-w-5xl !mx-auto"
          >
            <div className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 rounded-3xl !p-16 shadow-2xl relative overflow-hidden">
              {/* Animated Background */}
              <div className="absolute inset-0 !opacity-20">
                <div className="absolute !top-0 !left-0 !w-64 !h-64 bg-white rounded-full blur-3xl animate-blob"></div>
                <div className="absolute !bottom-0 !right-0 !w-64 !h-64 bg-white rounded-full blur-3xl animate-blob animation-delay-2000"></div>
              </div>

              <div className="relative z-10 text-center">
                <motion.div
                  initial={{ scale: 0.9 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="!mb-8"
                >
                  <CustomerServiceOutlined className="!text-7xl text-white" />
                </motion.div>

                <h2 className="!text-5xl md:text-6xl font-extrabold text-white !mb-6">
                  Need Immediate Assistance?
                </h2>

                <p className="!text-2xl text-white/95 !mb-12 !max-w-3xl !mx-auto leading-relaxed">
                  Our support team is available 24/7 to help you with any questions or concerns
                </p>

                <div className="flex flex-wrap !gap-4 justify-center">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="tel:+15551234567"
                    className="inline-flex items-center !gap-3 !px-10 !py-5 bg-white text-indigo-900 rounded-2xl font-bold !text-lg shadow-2xl hover:shadow-white/50 transition-all"
                  >
                    <PhoneOutlined className="!text-xl" />
                    <span>Call Now</span>
                  </motion.a>

                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="mailto:support@nexacore.com"
                    className="inline-flex items-center !gap-3 !px-10 !py-5 bg-white/10 backdrop-blur-lg text-white rounded-2xl font-bold !text-lg !border-2 border-white/30 hover:bg-white/20 transition-all"
                  >
                    <MailOutlined className="!text-xl" />
                    <span>Email Support</span>
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
