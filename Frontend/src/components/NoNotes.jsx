import { FileText, Plus, Search, Upload, Sparkles } from "lucide-react";

const NoNotes = ({ isOpen }) => {
  const features = [
    "Rich text formatting",
    "Add images & files",
    "Organize with tags",
    "Cloud sync across devices",
    "Collaborate with teams",
    "Export to multiple formats",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        <div className="text-center space-y-8">
          {/* Main Illustration */}
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-3xl opacity-20 animate-pulse"></div>
            <div className="relative bg-white w-32 h-32 sm:w-40 sm:h-40 rounded-full flex items-center justify-center shadow-xl mx-auto">
              <div className="relative">
                <FileText
                  className="w-16 h-16 sm:w-20 sm:h-20 text-purple-600"
                  strokeWidth={1.5}
                />
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center animate-bounce">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
              </div>
            </div>
          </div>

          {/* Heading */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-800">
              No Notes Yet
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Your canvas is blank and ready for your brilliant ideas. Start
              creating your first note and bring your thoughts to life!
            </p>
          </div>

          {/* Primary CTA */}
          <div className="pt-8">
            <button
              onClick={isOpen}
              className="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl text-lg"
            >
              <Plus className="w-6 h-6" />
              <span>Create Your First Note</span>
            </button>
          </div>

          {/* Features List */}
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 mt-12">
            <h3 className="text-xl font-bold text-gray-800 mb-6">
              What You Can Do With NoteApp
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-left">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Help Text */}
          <div className="pt-6">
            <p className="text-sm text-gray-500">
              Need help getting started?{" "}
              <a
                href="#"
                className="text-purple-600 hover:text-purple-700 font-medium underline"
              >
                View our quick start guide
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoNotes;
