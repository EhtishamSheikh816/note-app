import {
  Zap,
  Shield,
  Cloud,
  Smartphone,
  Users,
  Lock,
  Search,
  Tag,
  Download,
  Palette,
  Clock,
  CheckCircle,
  FileText,
  Image,
  Link2,
  BarChart,
  Globe,
  Sparkles,
} from "lucide-react";

const Features = () => {
  const mainFeatures = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description:
        "Experience blazing-fast performance with instant search and smooth navigation. No lag, just pure productivity.",
      gradient: "from-yellow-400 to-orange-500",
      bgGradient: "from-yellow-50 to-orange-50",
    },
    {
      icon: Cloud,
      title: "Cloud Sync",
      description:
        "Access your notes anywhere, anytime. Automatic syncing across all your devices keeps everything up to date.",
      gradient: "from-blue-400 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50",
    },
    {
      icon: Shield,
      title: "Secure & Private",
      description:
        "Your data is encrypted end-to-end. We take security seriously so you can focus on what matters most.",
      gradient: "from-green-400 to-emerald-500",
      bgGradient: "from-green-50 to-emerald-50",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description:
        "Share notes and collaborate in real-time. Work together seamlessly with your team members.",
      gradient: "from-purple-400 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50",
    },
    {
      icon: Smartphone,
      title: "Multi-Platform",
      description:
        "Available on Web, iOS, Android, Windows, and Mac. Use NoteApp wherever you are, on any device.",
      gradient: "from-indigo-400 to-purple-500",
      bgGradient: "from-indigo-50 to-purple-50",
    },
    {
      icon: Search,
      title: "Smart Search",
      description:
        "Find anything instantly with powerful search. Filter by tags, dates, and content with ease.",
      gradient: "from-pink-400 to-rose-500",
      bgGradient: "from-pink-50 to-rose-50",
    },
  ];

  const additionalFeatures = [
    { icon: FileText, text: "Rich Text Editor" },
    { icon: Image, text: "Image Support" },
    { icon: Link2, text: "Link Attachments" },
    { icon: Tag, text: "Organize with Tags" },
    { icon: Download, text: "Export Options" },
    { icon: Palette, text: "Custom Themes" },
    { icon: Clock, text: "Version History" },
    { icon: Lock, text: "Password Protection" },
    { icon: BarChart, text: "Analytics Dashboard" },
    { icon: Globe, text: "Multi-Language" },
    { icon: CheckCircle, text: "To-Do Lists" },
    { icon: Sparkles, text: "AI Assistant" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Hero Section */}
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full px-4 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-purple-600" />
            <span className="text-sm font-semibold text-purple-600">
              Powerful Features
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Everything You Need to{" "}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Stay Organized
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover the powerful features that make NoteApp the ultimate tool
            for capturing ideas, organizing thoughts, and boosting productivity.
          </p>
        </div>

        {/* Main Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-20">
          {mainFeatures.map((feature, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${feature.bgGradient} rounded-2xl p-8 shadow-md hover:shadow-xl transition-all hover:-translate-y-2 group cursor-pointer border-2 border-transparent hover:border-white`}
            >
              <div
                className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}
              >
                <feature.icon className="w-8 h-8 text-white" strokeWidth={2} />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>

              <p className="text-gray-700 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Features Section */}
        <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              And Much More...
            </h2>
            <p className="text-lg text-gray-600">
              Packed with features to enhance your note-taking experience
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {additionalFeatures.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center p-4 rounded-xl hover:bg-gradient-to-br hover:from-blue-50 hover:to-purple-50 transition-all group cursor-pointer"
              >
                <div className="w-14 h-14 bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 group-hover:shadow-md transition-all">
                  <feature.icon
                    className="w-7 h-7 text-purple-600"
                    strokeWidth={2}
                  />
                </div>
                <span className="text-sm font-semibold text-gray-800">
                  {feature.text}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-8 sm:p-12 text-center text-white shadow-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg sm:text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Join thousands of users who have transformed their productivity with
            NoteApp
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl text-lg w-full sm:w-auto">
              Start Free Trial
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all text-lg w-full sm:w-auto">
              View Pricing
            </button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl shadow-sm">
            <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
              50K+
            </div>
            <div className="text-gray-600 font-medium">Active Users</div>
          </div>
          <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl shadow-sm">
            <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
              1M+
            </div>
            <div className="text-gray-600 font-medium">Notes Created</div>
          </div>
          <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl shadow-sm">
            <div className="text-4xl font-bold bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent mb-2">
              99.9%
            </div>
            <div className="text-gray-600 font-medium">Uptime</div>
          </div>
          <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl shadow-sm">
            <div className="text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-2">
              4.9/5
            </div>
            <div className="text-gray-600 font-medium">User Rating</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
