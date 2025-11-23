import {
  FileText,
  Mail,
  Phone,
  MapPin,
  Send,
  MessageSquare,
  Clock,
  HelpCircle,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Github,
} from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    alert("Thank you for contacting us! We'll get back to you soon.");
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Us",
      description: "Our team is here to help",
      contact: "uxonicsolutions@gmail.com",
      link: "mailto:uxonicsolutions@gmail.com",
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50",
    },
    {
      icon: Phone,
      title: "Call Us",
      description: "Mon-Fri from 9am to 6pm",
      contact: "+92 (318) 785-5360",
      link: "tel:+923187855360",
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-50 to-emerald-50",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      description: "Come say hello",
      contact: "123 Note Street, Silicon Valley, CA 94000",
      link: "#",
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-50 to-pink-50",
    },
  ];

  const faqs = [
    {
      category: "General",
      icon: HelpCircle,
      color: "text-blue-600",
      questions: "Browse our help center for instant answers",
    },
    {
      category: "Technical",
      icon: MessageSquare,
      color: "text-purple-600",
      questions: "Get technical support and troubleshooting",
    },
    {
      category: "Sales",
      icon: Phone,
      color: "text-green-600",
      questions: "Questions about pricing and features",
    },
  ];

  const socialLinks = [
    {
      icon: Facebook,
      href: "#",
      color: "hover:text-blue-500",
      label: "Facebook",
    },
    {
      icon: Twitter,
      href: "#",
      color: "hover:text-blue-400",
      label: "Twitter",
    },
    {
      icon: Instagram,
      href: "#",
      color: "hover:text-pink-500",
      label: "Instagram",
    },
    {
      icon: Linkedin,
      href: "#",
      color: "hover:text-blue-600",
      label: "LinkedIn",
    },
    { icon: Github, href: "#", color: "hover:text-gray-900", label: "GitHub" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Hero Section */}
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full px-4 py-2 mb-6">
            <MessageSquare className="w-4 h-4 text-purple-600" />
            <span className="text-sm font-semibold text-purple-600">
              Get In Touch
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            We'd Love to{" "}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Hear From You
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Have a question, feedback, or just want to say hello? Our team is
            here to help you with anything you need.
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {contactMethods.map((method, index) => (
            <a
              key={index}
              href={method.link}
              className={`bg-gradient-to-br ${method.bgColor} rounded-2xl p-8 shadow-md hover:shadow-xl transition-all hover:-translate-y-2 group border-2 border-transparent hover:border-white`}
            >
              <div
                className={`w-16 h-16 bg-gradient-to-r ${method.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}
              >
                <method.icon className="w-8 h-8 text-white" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {method.title}
              </h3>
              <p className="text-sm text-gray-600 mb-3">{method.description}</p>
              <p className="text-gray-800 font-semibold">{method.contact}</p>
            </a>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Send Us a Message
            </h2>
            <p className="text-gray-600 mb-8">
              Fill out the form below and we'll get back to you within 24 hours
            </p>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all placeholder-gray-400"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all placeholder-gray-400"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="How can we help?"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all placeholder-gray-400"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us more about your inquiry..."
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all placeholder-gray-400 resize-none"
                />
              </div>

              <button
                onClick={handleSubmit}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-4 rounded-xl transition-all shadow-lg hover:shadow-xl hover:from-blue-700 hover:to-purple-700 flex items-center justify-center space-x-2"
              >
                <span>Send Message</span>
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Additional Info */}
          <div className="space-y-8">
            {/* Office Hours */}
            <div className="bg-white rounded-3xl shadow-xl p-8">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl flex items-center justify-center">
                  <Clock className="w-7 h-7 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Office Hours
                </h3>
              </div>
              <div className="space-y-3 text-gray-700">
                <div className="flex justify-between">
                  <span className="font-medium">Monday - Friday:</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Saturday:</span>
                  <span>10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Sunday:</span>
                  <span>Closed</span>
                </div>
                <div className="pt-3 border-t border-gray-200">
                  <p className="text-sm text-gray-600">
                    All times are in Pacific Standard Time (PST)
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="bg-white rounded-3xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Quick Help
              </h3>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <a
                    key={index}
                    href="#"
                    className="flex items-start space-x-4 p-4 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all group"
                  >
                    <div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <faq.icon className={`w-6 h-6 ${faq.color}`} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        {faq.category}
                      </h4>
                      <p className="text-sm text-gray-600">{faq.questions}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white rounded-3xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Connect With Us
              </h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className={`w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center text-gray-600 ${social.color} transition-all hover:scale-110 hover:shadow-md`}
                  >
                    <social.icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
              <p className="text-sm text-gray-600 mt-4">
                Follow us on social media for updates, tips, and news
              </p>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="h-96 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
            <div className="text-center">
              <MapPin
                className="w-20 h-20 text-purple-600 mx-auto mb-4"
                strokeWidth={1.5}
              />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Our Office Location
              </h3>
              <p className="text-gray-600">
                123 Note Street, Silicon Valley, CA 94000
              </p>
              <button className="mt-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all shadow-md hover:shadow-lg">
                Get Directions
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
