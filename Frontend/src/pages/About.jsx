import {
  FileText,
  Heart,
  Users,
  Target,
  Lightbulb,
  Rocket,
  Award,
  Globe,
  TrendingUp,
  Zap,
  Shield,
  Star,
} from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const stats = [
    { number: "2020", label: "Founded", icon: Rocket },
    { number: "50K+", label: "Users Worldwide", icon: Users },
    { number: "150+", label: "Countries", icon: Globe },
    { number: "4.9/5", label: "User Rating", icon: Star },
  ];

  const values = [
    {
      icon: Heart,
      title: "User-Centric",
      description:
        "We put our users first in everything we do. Your feedback shapes our product and guides our decisions.",
      color: "from-red-500 to-pink-500",
      bgColor: "from-red-50 to-pink-50",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "We constantly push boundaries and explore new ways to make note-taking more intuitive and powerful.",
      color: "from-yellow-500 to-orange-500",
      bgColor: "from-yellow-50 to-orange-50",
    },
    {
      icon: Shield,
      title: "Privacy & Security",
      description:
        "Your data belongs to you. We use end-to-end encryption to ensure your notes remain private and secure.",
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-50 to-emerald-50",
    },
    {
      icon: Zap,
      title: "Simplicity",
      description:
        "Powerful features shouldn't be complicated. We believe in making complex things simple and accessible.",
      color: "from-blue-500 to-purple-500",
      bgColor: "from-blue-50 to-purple-50",
    },
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      image: "from-blue-500 to-purple-500",
    },
    {
      name: "Michael Chen",
      role: "CTO",
      image: "from-purple-500 to-pink-500",
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Design",
      image: "from-pink-500 to-red-500",
    },
    {
      name: "David Kim",
      role: "Head of Product",
      image: "from-green-500 to-teal-500",
    },
  ];

  const milestones = [
    {
      year: "2020",
      event: "NoteApp was founded with a vision to transform note-taking",
    },
    { year: "2021", event: "Reached 10,000 users and launched mobile apps" },
    { year: "2022", event: "Introduced team collaboration features" },
    { year: "2023", event: "Expanded to 100+ countries with 25,000 users" },
    {
      year: "2024",
      event: "Launched AI-powered features and reached 50,000+ users",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Hero Section */}
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full px-4 py-2 mb-6">
            <Heart className="w-4 h-4 text-purple-600" />
            <span className="text-sm font-semibold text-purple-600">
              Our Story
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            We're on a Mission to{" "}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Revolutionize Note-Taking
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            NoteApp was born from a simple idea: note-taking should be
            effortless, beautiful, and accessible to everyone. We're building
            the future of productivity, one note at a time.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-md hover:shadow-xl transition-all text-center group hover:-translate-y-2"
            >
              <div className="w-14 h-14 bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <stat.icon className="w-7 h-7 text-purple-600" />
              </div>
              <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Our Story
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Founded in 2020, NoteApp started as a passion project by a small
                team of developers who were frustrated with existing note-taking
                solutions. We believed there had to be a better way.
              </p>
              <p>
                What began as a simple app has grown into a powerful platform
                used by over 50,000 people across 150+ countries. Our journey
                has been incredible, and we're just getting started.
              </p>
              <p>
                Today, we're proud to offer a comprehensive note-taking solution
                that combines simplicity with powerful features, all while
                maintaining our commitment to user privacy and security.
              </p>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-400 to-purple-400 rounded-3xl h-64 sm:h-80 lg:h-96 shadow-2xl flex items-center justify-center">
                <div className="text-white text-center p-8">
                  <Target
                    className="w-20 h-20 mx-auto mb-4"
                    strokeWidth={1.5}
                  />
                  <p className="text-2xl font-bold">
                    Building the Future of Productivity
                  </p>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-r from-pink-400 to-orange-400 rounded-full blur-3xl opacity-50"></div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${value.bgColor} rounded-2xl p-8 shadow-md hover:shadow-xl transition-all group cursor-pointer border-2 border-transparent hover:border-white`}
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}
                >
                  <value.icon className="w-8 h-8 text-white" strokeWidth={2} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The passionate people behind NoteApp
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center group">
                <div
                  className={`w-32 h-32 sm:w-40 sm:h-40 bg-gradient-to-br ${member.image} rounded-2xl mx-auto mb-4 shadow-lg group-hover:shadow-2xl group-hover:scale-105 transition-all flex items-center justify-center`}
                >
                  <Users
                    className="w-16 h-16 sm:w-20 sm:h-20 text-white opacity-80"
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-sm text-gray-600 font-medium">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Key milestones in our growth story
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex gap-6 mb-8 last:mb-0">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-lg flex-shrink-0">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  {index !== milestones.length - 1 && (
                    <div className="w-0.5 h-full bg-gradient-to-b from-blue-600 to-purple-600 mt-2"></div>
                  )}
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow flex-1 mb-8">
                  <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                    {milestone.year}
                  </div>
                  <p className="text-gray-700">{milestone.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-8 sm:p-12 text-center text-white shadow-2xl">
          <TrendingUp
            className="w-16 h-16 mx-auto mb-6 opacity-90"
            strokeWidth={1.5}
          />
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Join Us on This Journey
          </h2>
          <p className="text-lg sm:text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Become part of our growing community and help us shape the future of
            note-taking
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="signup"
              className="bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl text-lg w-full sm:w-auto"
            >
              Get Started Free
            </Link>
            <Link
              to="contact"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all text-lg w-full sm:w-auto"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
