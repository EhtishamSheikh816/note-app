import {
  FileText,
  Zap,
  Shield,
  Cloud,
  ArrowRight,
  Play,
  Star,
  CheckCircle,
} from "lucide-react";

const Hero = () => {
  const features = [
    { icon: Zap, text: "Lightning Fast" },
    { icon: Shield, text: "Secure & Private" },
    { icon: Cloud, text: "Cloud Sync" },
  ];

  const stats = [
    { number: "50K+", label: "Active Users" },
    { number: "1M+", label: "Notes Created" },
    { number: "4.9", label: "User Rating" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 overflow-hidden">
      {/* Hero Content */}
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-white rounded-full px-4 py-2 shadow-sm mb-6">
              <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
              <span className="text-sm font-medium text-gray-700">
                Rated 4.9/5 by 10,000+ users
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Capture Ideas,{" "}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Stay Organized
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              The smartest way to take notes, organize your thoughts, and boost
              your productivity. Access your notes anywhere, anytime.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <button className="flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl">
                <span>Get Started Free</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="flex items-center justify-center space-x-2 bg-white text-gray-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-all shadow-md border-2 border-gray-200">
                <Play className="w-5 h-5" />
                <span>Watch Demo</span>
              </button>
            </div>

            {/* Features List */}
            <div className="flex flex-wrap gap-6 justify-center lg:justify-start">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full flex items-center justify-center">
                    <feature.icon className="w-4 h-4 text-purple-600" />
                  </div>
                  <span className="text-gray-700 font-medium">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Hero Image/Mockup */}
          <div className="relative">
            {/* Floating Card Mockup */}
            <div className="relative z-10">
              <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 transform rotate-2 hover:rotate-0 transition-transform duration-300">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-gray-800">My Notes</h3>
                  <button className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white hover:shadow-lg transition-shadow">
                    <FileText className="w-5 h-5" />
                  </button>
                </div>

                <div className="space-y-4">
                  {/* Note Cards */}
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-4 hover:shadow-md transition-shadow cursor-pointer">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-semibold text-gray-800">
                        Project Ideas
                      </h4>
                      <CheckCircle className="w-5 h-5 text-green-500" />
                    </div>
                    <p className="text-sm text-gray-600 line-clamp-2">
                      Brainstorming new features for the app...
                    </p>
                  </div>

                  <div className="bg-gradient-to-r from-pink-50 to-orange-50 rounded-xl p-4 hover:shadow-md transition-shadow cursor-pointer">
                    <h4 className="font-semibold text-gray-800 mb-2">
                      Meeting Notes
                    </h4>
                    <p className="text-sm text-gray-600 line-clamp-2">
                      Key points from today's standup meeting...
                    </p>
                  </div>

                  <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-xl p-4 hover:shadow-md transition-shadow cursor-pointer">
                    <h4 className="font-semibold text-gray-800 mb-2">
                      To-Do List
                    </h4>
                    <p className="text-sm text-gray-600 line-clamp-2">
                      Complete design mockups, review code...
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-10 -right-10 w-72 h-72 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-3xl opacity-20 animate-pulse"></div>
            <div
              className="absolute -bottom-10 -left-10 w-72 h-72 bg-gradient-to-r from-pink-400 to-orange-400 rounded-full blur-3xl opacity-20 animate-pulse"
              style={{ animationDelay: "1s" }}
            ></div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 sm:mt-24 grid grid-cols-1 sm:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Trusted By Section */}
        <div className="mt-16 text-center">
          <p className="text-sm text-gray-500 mb-6 font-medium">
            TRUSTED BY TEAMS AT
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-50">
            <div className="text-2xl font-bold text-gray-400">Company</div>
            <div className="text-2xl font-bold text-gray-400">Brand</div>
            <div className="text-2xl font-bold text-gray-400">Business</div>
            <div className="text-2xl font-bold text-gray-400">Enterprise</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
