import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send, CheckCircle, AlertCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    type: 'general'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setSubmitStatus('success');
    setIsSubmitting(false);
    setFormData({
      name: '',
      email: '',
      company: '',
      message: '',
      type: 'general'
    });
    
    // Reset status after 3 seconds
    setTimeout(() => setSubmitStatus('idle'), 3000);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
              style={{ fontFamily: 'Poppins' }}
            >
              Contact Us
            </h1>
            <p 
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              style={{ fontFamily: 'Inter' }}
            >
              Ready to transform your hiring process? Get in touch with our team 
              and discover how VetriaAI can revolutionize your recruitment.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h2 
                className="text-2xl font-bold text-gray-900 mb-6"
                style={{ fontFamily: 'Poppins' }}
              >
                Get Started Today
              </h2>
              
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <p className="text-green-700" style={{ fontFamily: 'Inter' }}>
                    Thank you! We'll be in touch within 24 hours.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'Inter' }}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors duration-200"
                    style={{ fontFamily: 'Inter' }}
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'Inter' }}>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors duration-200"
                    style={{ fontFamily: 'Inter' }}
                    placeholder="your.email@company.com"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'Inter' }}>
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors duration-200"
                    style={{ fontFamily: 'Inter' }}
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'Inter' }}>
                    Inquiry Type
                  </label>
                  <select
                    id="type"
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors duration-200"
                    style={{ fontFamily: 'Inter' }}
                  >
                    <option value="general">General Inquiry</option>
                    <option value="demo">Request Demo</option>
                    <option value="pricing">Pricing Information</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="support">Technical Support</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'Inter' }}>
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors duration-200"
                    style={{ fontFamily: 'Inter' }}
                    placeholder="Tell us about your hiring challenges and how we can help..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-red-800 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-red-900 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center space-x-2"
                  style={{ fontFamily: 'Inter' }}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 
                  className="text-2xl font-bold text-gray-900 mb-6"
                  style={{ fontFamily: 'Poppins' }}
                >
                  Get in Touch
                </h2>
                <p 
                  className="text-lg text-gray-600 mb-8"
                  style={{ fontFamily: 'Inter' }}
                >
                  We'd love to hear from you. Choose the most convenient way to reach out, 
                  and we'll get back to you as soon as possible.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-red-100 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-red-800" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2" style={{ fontFamily: 'Poppins' }}>
                      Email Us
                    </h3>
                    <p className="text-gray-600 mb-2" style={{ fontFamily: 'Inter' }}>
                      For general inquiries and support
                    </p>
                    <a 
                      href="mailto:sathya.vetriaai@gmail.com" 
                      className="text-red-800 hover:text-red-900 font-medium"
                      style={{ fontFamily: 'Inter' }}
                    >
                      sathya.vetriaai@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-red-100 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-red-800" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2" style={{ fontFamily: 'Poppins' }}>
                      Call Us
                    </h3>
                    <p className="text-gray-600 mb-2" style={{ fontFamily: 'Inter' }}>
                      Speak with our team directly
                    </p>
                    <a 
                      href="tel:+1-555-VETRIA-AI" 
                      className="text-red-800 hover:text-red-900 font-medium"
                      style={{ fontFamily: 'Inter' }}
                    >
                      +1 (555) VETRIA-AI
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-red-100 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-red-800" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2" style={{ fontFamily: 'Poppins' }}>
                      Visit Us
                    </h3>
                    <p className="text-gray-600 mb-2" style={{ fontFamily: 'Inter' }}>
                      Our headquarters in San Francisco
                    </p>
                    <address className="text-gray-600 not-italic" style={{ fontFamily: 'Inter' }}>
                      123 Innovation Drive<br />
                      San Francisco, CA 94105<br />
                      United States
                    </address>
                  </div>
                </div>
              </div>

              {/* Office Hours */}
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-gray-900 mb-4" style={{ fontFamily: 'Poppins' }}>
                  Office Hours
                </h3>
                <div className="space-y-2 text-gray-600" style={{ fontFamily: 'Inter' }}>
                  <div className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span>9:00 AM - 6:00 PM PST</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <span>10:00 AM - 4:00 PM PST</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>

              {/* Response Time */}
              <div className="bg-blue-50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-gray-900 mb-4" style={{ fontFamily: 'Poppins' }}>
                  Response Time
                </h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-600" style={{ fontFamily: 'Inter' }}>
                      General inquiries: Within 24 hours
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-600" style={{ fontFamily: 'Inter' }}>
                      Demo requests: Within 4 hours
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-600" style={{ fontFamily: 'Inter' }}>
                      Technical support: Within 2 hours
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-red-600" />
                    <span className="text-gray-600" style={{ fontFamily: 'Inter' }}>
                      <strong>Urgent hiring demo requests: Under 4 hours</strong>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              style={{ fontFamily: 'Poppins' }}
            >
              Frequently Asked Questions
            </h2>
            <p 
              className="text-xl text-gray-600 max-w-2xl mx-auto"
              style={{ fontFamily: 'Inter' }}
            >
              Quick answers to common questions about VetriaAI
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3" style={{ fontFamily: 'Poppins' }}>
                How quickly can we get started with VetriaAI?
              </h3>
              <p className="text-gray-600" style={{ fontFamily: 'Inter' }}>
                Most companies can be up and running within 48 hours of signing up. We provide 
                full onboarding support and training to ensure a smooth transition.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3" style={{ fontFamily: 'Poppins' }}>
                Do you offer custom integrations?
              </h3>
              <p className="text-gray-600" style={{ fontFamily: 'Inter' }}>
                Yes! We offer API integrations with most major ATS systems including Workday, 
                Greenhouse, and BambooHR. Custom integrations are available for enterprise clients.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3" style={{ fontFamily: 'Poppins' }}>
                What's your pricing model?
              </h3>
              <p className="text-gray-600" style={{ fontFamily: 'Inter' }}>
                We offer flexible pricing based on your hiring volume and feature requirements. 
                Contact us for a personalized quote and to discuss volume discounts.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3" style={{ fontFamily: 'Poppins' }}>
                Is there a free trial available?
              </h3>
              <p className="text-gray-600" style={{ fontFamily: 'Inter' }}>
                Yes! We offer a 14-day free trial that includes full access to our platform. 
                No credit card required to get started.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;