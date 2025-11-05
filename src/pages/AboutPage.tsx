import { Card, Avatar } from "antd";
import { TrophyOutlined, EyeOutlined, HeartOutlined, RocketOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";
import HeroBanner from "@/components/HeroBanner";
import SectionTitle from "@/components/SectionTitle";
import { teamMembers } from "@/lib/mockData";

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <HeroBanner
        title="About NexaCore"
        subtitle="Pioneering digital transformation and innovation since 2014"
        ctaText="Join Our Team"
        ctaLink="/careers"
      />

      {/* Company Introduction */}
      <section className=" bg-white">
        <div className="!py-2 container !mx-auto px-4">
          <div className="max-w-4xl !mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-[#1A1A1A] mb-6">
                Leading the Future of Technology
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                NexaCore is a global technology leader specializing in digital transformation
                solutions. We combine deep industry expertise with cutting-edge technology to help
                organizations navigate the complexities of the digital age.
              </p>
              <p className="text-lg text-gray-600">
                With offices in 15+ countries and a team of 2,000+ professionals, we&apos;ve
                delivered over 500 successful projects for clients ranging from Fortune 500
                companies to innovative startups.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision, Mission, Values */}
      <section className="!py-12 md:py-40 bg-gradient-to-b from-white via-blue-50/30 to-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, #1890FF 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="container !mx-auto px-4 relative z-10">
          <SectionTitle
            title="Our Vision, Mission & Values"
            subtitle="The principles that guide everything we do"
          />
          <div className="!pt-8 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Vision Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative group"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
                <Card className="relative h-full shadow-xl border-0 rounded-3xl p-8 hover:shadow-2xl transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                    <EyeOutlined className="text-3xl text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-[#1A1A1A] mb-4">Our Vision</h3>
                  <p className="text-gray-600 text-xl leading-relaxed">
                    To be the world&apos;s most trusted partner in digital transformation, enabling
                    organizations to achieve unprecedented levels of innovation and efficiency.
                  </p>
                </Card>
              </motion.div>

              {/* Mission Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="relative group"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
                <Card className="relative h-full shadow-xl border-0 rounded-3xl p-8 hover:shadow-2xl transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                    <TrophyOutlined className="text-3xl text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-[#1A1A1A] mb-4">Our Mission</h3>
                  <p className="text-gray-600 text-xl leading-relaxed">
                    To empower organizations with intelligent technology solutions that drive
                    sustainable growth, operational excellence, and competitive advantage in the
                    digital economy.
                  </p>
                </Card>
              </motion.div>

              {/* Core Values Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative group"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
                <Card className="relative h-full shadow-xl border-0 rounded-3xl p-8 hover:shadow-2xl transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                    <HeartOutlined className="text-3xl text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-[#1A1A1A] mb-6">Core Values</h3>
                  <ul className="space-y-4">
                    {[
                      { icon: "🚀", title: "Innovation", desc: "Constantly pushing boundaries" },
                      { icon: "⭐", title: "Excellence", desc: "Delivering exceptional quality" },
                      { icon: "🤝", title: "Integrity", desc: "Operating with transparency" },
                      { icon: "💡", title: "Collaboration", desc: "Building strong partnerships" },
                      { icon: "🎯", title: "Impact", desc: "Creating meaningful change" },
                    ].map((value) => (
                      <li key={value.title} className="flex items-start space-x-3">
                        <span className="text-2xl">{value.icon}</span>
                        <div>
                          <span className="font-bold text-gray-900 text-lg">{value.title}:</span>
                          <span className="text-gray-600 text-lg ml-2">{value.desc}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>

              {/* Commitment Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="relative group"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 to-red-600 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
                <Card className="relative h-full shadow-xl border-0 rounded-3xl p-8 hover:shadow-2xl transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                    <RocketOutlined className="text-3xl text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-[#1A1A1A] mb-4">Our Commitment</h3>
                  <p className="text-gray-600 text-xl leading-relaxed">
                    We are committed to continuous innovation, customer success, and creating a
                    positive impact on society through responsible technology leadership.
                  </p>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="!py-32 md:py-40 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Leadership Team"
            subtitle="Meet the visionaries leading NexaCore's global operations"
          />
          <div className="max-w-7xl mx-auto">
            {/* CEO Card - Centered on top */}
            <div className="flex justify-center mb-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="w-full max-w-md"
              >
                <Card
                  hoverable
                  className="text-center shadow-xl border-0 rounded-3xl hover:shadow-2xl transition-all duration-300"
                  styles={{ body: { padding: "30px" } }}
                >
                  <div className="relative inline-block mb-6">
                    <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full blur opacity-30"></div>
                    <Avatar size={140} src={teamMembers[0].image} className="relative shadow-xl" />
                  </div>
                  <h3 className="text-3xl font-bold text-[#1A1A1A] mb-3">{teamMembers[0].name}</h3>
                  <p className="text-[#1890FF] font-bold text-xl mb-6">{teamMembers[0].position}</p>
                  <p className="text-gray-600 text-lg leading-relaxed">{teamMembers[0].bio}</p>
                </Card>
              </motion.div>
            </div>

            {/* Other Team Members - 4 columns */}
            <div className="!mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.slice(1).map((member, index) => (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card
                    hoverable
                    className="text-center h-full shadow-lg border-0 rounded-2xl hover:shadow-xl transition-all duration-300"
                    styles={{ body: { padding: "32px" } }}
                  >
                    <div className="relative inline-block mb-5">
                      <Avatar size={110} src={member.image} className="shadow-lg" />
                    </div>
                    <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">{member.name}</h3>
                    <p className="text-[#1890FF] font-semibold text-base mb-4">{member.position}</p>
                    <p className="text-gray-600 text-base leading-relaxed">{member.bio}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="!py-20 bg-gradient-to-br from-[#0052CC] to-[#1890FF] text-white">
        <div className="container !mx-auto px-4">
          <div className="max-w-6xl !mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: "Years of Excellence", value: "10+" },
              { label: "Global Clients", value: "500+" },
              { label: "Team Members", value: "2,000+" },
              { label: "Countries", value: "15+" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-5xl font-bold mb-2">{stat.value}</div>
                <div className="text-xl text-gray-100">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
