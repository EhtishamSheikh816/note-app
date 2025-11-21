import { FileText, Loader2 } from "lucide-react";

const Loader = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex items-center justify-center p-4">
      <div className="text-center">
        {/* Main Loader Container */}
        <div className="relative inline-block mb-8">
          {/* Outer Spinning Ring */}
          <div className="absolute inset-0 w-32 h-32 sm:w-40 sm:h-40 border-4 border-purple-200 rounded-full animate-spin border-t-purple-600"></div>

          {/* Inner Spinning Ring (opposite direction) */}
          <div className="absolute inset-4 w-24 h-24 sm:w-32 sm:h-32 border-4 border-blue-200 rounded-full animate-spin-reverse border-t-blue-600"></div>

          {/* Center Icon */}
          <div className="relative w-32 h-32 sm:w-40 sm:h-40 flex items-center justify-center">
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center animate-pulse">
              <FileText className="w-8 h-8 sm:w-10 sm:h-10 text-purple-600" />
            </div>
          </div>
        </div>

        {/* Loading Text */}
        <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-3">
          Loading Your Notes
        </h2>

        {/* Animated Dots */}
        <div className="flex items-center justify-center space-x-2 mb-6">
          <div
            className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"
            style={{ animationDelay: "0ms" }}
          ></div>
          <div
            className="w-2 h-2 bg-purple-600 rounded-full animate-bounce"
            style={{ animationDelay: "150ms" }}
          ></div>
          <div
            className="w-2 h-2 bg-pink-600 rounded-full animate-bounce"
            style={{ animationDelay: "300ms" }}
          ></div>
        </div>

        {/* Loading Message */}
        <p className="text-gray-600 text-sm sm:text-base max-w-xs mx-auto">
          Please wait while we fetch your notes...
        </p>

        {/* Progress Bar */}
        <div className="mt-8 max-w-xs mx-auto">
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full animate-progress"></div>
          </div>
        </div>
      </div>

      {/* Additional Loader Styles */}
      <style>{`
        @keyframes spin-reverse {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }
        
        .animate-spin-reverse {
          animation: spin-reverse 1.5s linear infinite;
        }

        @keyframes progress {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        
        .animate-progress {
          animation: progress 1.5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Loader;

// Alternative Loader Variations
export function SimpleLoader() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex items-center justify-center p-4">
      <div className="text-center">
        <Loader2 className="w-16 h-16 sm:w-20 sm:h-20 text-purple-600 animate-spin mx-auto mb-4" />
        <p className="text-gray-600 text-sm sm:text-base">Loading...</p>
      </div>
    </div>
  );
}

export function DotsLoader() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex items-center justify-center p-4">
      <div className="flex space-x-3">
        <div className="w-4 h-4 bg-blue-600 rounded-full animate-bounce"></div>
        <div
          className="w-4 h-4 bg-purple-600 rounded-full animate-bounce"
          style={{ animationDelay: "0.1s" }}
        ></div>
        <div
          className="w-4 h-4 bg-pink-600 rounded-full animate-bounce"
          style={{ animationDelay: "0.2s" }}
        ></div>
      </div>
    </div>
  );
}

export function PulseLoader() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex items-center justify-center p-4">
      <div className="relative">
        <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full animate-ping absolute"></div>
        <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full relative flex items-center justify-center">
          <FileText className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
        </div>
      </div>
    </div>
  );
}
