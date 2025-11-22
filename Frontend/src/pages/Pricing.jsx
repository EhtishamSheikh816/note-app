import {
  FileText,
  Check,
  X,
  Zap,
  Crown,
  Sparkles,
  Users,
  HelpCircle,
  ArrowRight,
} from "lucide-react";
import { useState } from "react";

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  const plans = [
    {
      name: "Free",
      icon: FileText,
      price: { monthly: 0, annual: 0 },
      description: "Perfect for getting started",
      color: "from-gray-500 to-gray-600",
      bgColor: "from-gray-50 to-slate-50",
      features: [
        { text: "Up to 50 notes", included: true },
        { text: "Basic text formatting", included: true },
        { text: "1 GB storage", included: true },
        { text: "Web access only", included: true },
        { text: "Community support", included: true },
        { text: "Mobile apps", included: false },
        { text: "File attachments", included: false },
        { text: "Team collaboration", included: false },
        { text: "Priority support", included: false },
      ],
      cta: "Get Started",
      popular: false,
    },
    {
      name: "Pro",
      icon: Zap,
      price: { monthly: 9, annual: 90 },
      description: "For power users and professionals",
      color: "from-blue-500 to-purple-500",
      bgColor: "from-blue-50 to-purple-50",
      features: [
        { text: "Unlimited notes", included: true },
        { text: "Rich text formatting", included: true },
        { text: "100 GB storage", included: true },
        { text: "All platform access", included: true },
        { text: "Mobile apps", included: true },
        { text: "File attachments", included: true },
        { text: "Advanced search", included: true },
        { text: "Version history", included: true },
        { text: "Priority support", included: true },
      ],
      cta: "Start Free Trial",
      popular: true,
    },
    {
      name: "Team",
      icon: Users,
      price: { monthly: 19, annual: 190 },
      description: "For teams and organizations",
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-50 to-pink-50",
      features: [
        { text: "Everything in Pro", included: true },
        { text: "Unlimited team members", included: true },
        { text: "1 TB shared storage", included: true },
        { text: "Real-time collaboration", included: true },
        { text: "Admin dashboard", included: true },
        { text: "Advanced permissions", included: true },
        { text: "Team analytics", included: true },
        { text: "Dedicated support", included: true },
        { text: "Custom integrations", included: true },
      ],
      cta: "Start Free Trial",
      popular: false,
    },
  ];

  const faqs = [
    {
      question: "Can I change plans later?",
      answer:
        "Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards, PayPal, and bank transfers for annual plans.",
    },
    {
      question: "Is there a free trial?",
      answer:
        "Yes! Pro and Team plans come with a 14-day free trial. No credit card required.",
    },
    {
      question: "Can I cancel anytime?",
      answer:
        "Absolutely! You can cancel your subscription at any time with no penalties or fees.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Hero Section */}
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full px-4 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-purple-600" />
            <span className="text-sm font-semibold text-purple-600">
              Simple, Transparent Pricing
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Choose the{" "}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Perfect Plan
            </span>{" "}
            for You
          </h1>

          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Start free and scale as you grow. All plans include a 14-day free
            trial.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4 pb-7">
            <span
              className={`text-sm font-medium ${
                !isAnnual ? "text-gray-900" : "text-gray-500"
              }`}
            >
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative w-16 h-8 rounded-full transition-all ${
                isAnnual
                  ? "bg-gradient-to-r from-blue-600 to-purple-600"
                  : "bg-gray-300"
              }`}
            >
              <div
                className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full transition-transform ${
                  isAnnual ? "transform translate-x-8" : ""
                }`}
              ></div>
            </button>
            <span
              className={`text-sm font-medium ${
                isAnnual ? "text-gray-900" : "text-gray-500"
              }`}
            >
              Annual
            </span>
            <span className="bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">
              Save 17%
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${
                plan.bgColor
              } rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all relative ${
                plan.popular
                  ? "ring-4 ring-purple-500 scale-105 md:scale-110"
                  : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                  Most Popular
                </div>
              )}

              <div
                className={`w-16 h-16 bg-gradient-to-r ${plan.color} rounded-xl flex items-center justify-center mb-6 shadow-lg`}
              >
                <plan.icon className="w-8 h-8 text-white" strokeWidth={2} />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {plan.name}
              </h3>
              <p className="text-gray-600 text-sm mb-6">{plan.description}</p>

              <div className="mb-6">
                <div className="flex items-baseline">
                  <span className="text-5xl font-bold text-gray-900">
                    ${isAnnual ? plan.price.annual : plan.price.monthly}
                  </span>
                  <span className="text-gray-600 ml-2">
                    /{isAnnual ? "year" : "month"}
                  </span>
                </div>
                {isAnnual && plan.price.annual > 0 && (
                  <p className="text-sm text-gray-500 mt-2">
                    ${(plan.price.annual / 12).toFixed(2)} per month
                  </p>
                )}
              </div>

              <button
                className={`w-full py-3 rounded-xl font-semibold transition-all mb-6 ${
                  plan.popular
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-md hover:shadow-lg"
                    : "bg-white text-gray-900 border-2 border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                }`}
              >
                {plan.cta}
              </button>

              <div className="space-y-3">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start space-x-3">
                    {feature.included ? (
                      <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check
                          className="w-3.5 h-3.5 text-green-600"
                          strokeWidth={3}
                        />
                      </div>
                    ) : (
                      <div className="w-5 h-5 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <X
                          className="w-3.5 h-3.5 text-gray-400"
                          strokeWidth={3}
                        />
                      </div>
                    )}
                    <span
                      className={`text-sm ${
                        feature.included ? "text-gray-700" : "text-gray-400"
                      }`}
                    >
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Enterprise Section */}
        <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-8 sm:p-12 text-center text-white shadow-2xl mb-20">
          <Crown
            className="w-16 h-16 mx-auto mb-6 opacity-90"
            strokeWidth={1.5}
          />
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Enterprise Plan
          </h2>
          <p className="text-lg sm:text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Custom solutions for large organizations with advanced needs and
            dedicated support
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl text-lg w-full sm:w-auto flex items-center justify-center space-x-2">
              <span>Contact Sales</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all text-lg w-full sm:w-auto">
              Schedule Demo
            </button>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Got questions? We've got answers.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-md hover:shadow-lg transition-all"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <HelpCircle className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {faq.question}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">Still have questions?</p>
            <a
              href="#"
              className="text-purple-600 hover:text-purple-700 font-semibold text-lg underline"
            >
              Contact our support team
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
