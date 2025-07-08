import React from 'react';
import { 
  Bot, 
  Shield, 
  Zap, 
  BarChart3, 
  FileText, 
  Clock, 
  Target, 
  Calendar,
  CheckCircle,
  TrendingUp
} from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: FileText,
      title: "Resume Parsing",
      description: "Advanced AI extracts and structures resume data with 99% accuracy",
      benefits: [
        "Instant parsing of PDF, DOC, and text formats",
        "Extraction of skills, experience, and education",
        "Automatic job-resume matching scores",
        "Duplicate detection and candidate deduplication"
      ]
    },
    {
      icon: Shield,
      title: "Skillset Validation",
      description: "Comprehensive skill assessment through adaptive testing",
      benefits: [
        "50+ technical and soft skill assessments",
        "Adaptive difficulty based on candidate responses",
        "Real-time anti-cheat monitoring",
        "Industry-specific skill frameworks"
      ]
    },
    {
      icon: Bot,
      title: "AI-Based Testing",
      description: "Dynamic test generation tailored to each role and candidate",
      benefits: [
        "Custom test creation for any job role",
        "Behavioral and technical question mix",
        "Automated scoring with detailed feedback",
        "Continuous test improvement through ML"
      ]
    },
    {
      icon: Calendar,
      title: "Interview Scheduler",
      description: "Seamless interview coordination with automated workflows",
      benefits: [
        "Calendar integration with major platforms",
        "Automated candidate communications",
        "Interview reminder and confirmation system",
        "Rescheduling and cancellation handling"
      ]
    },
    {
      icon: BarChart3,
      title: "Analytics Dashboard",
      description: "Comprehensive insights for data-driven hiring decisions",
      benefits: [
        "Real-time hiring pipeline analytics",
        "Candidate performance metrics",
        "Time-to-hire tracking",
        "ROI and cost-per-hire analysis"
      ]
    },
    {
      icon: Target,
      title: "Smart Matching",
      description: "AI-powered candidate-job matching with precision scoring",
      benefits: [
        "Multi-dimensional matching algorithms",
        "Culture fit assessment",
        "Skill gap analysis",
        "Predictive hiring success scores"
      ]
    }
  ];

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
              Powerful Features
            </h1>
            <p 
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              style={{ fontFamily: 'Inter' }}
            >
              Comprehensive AI-powered tools that transform every aspect of your hiring process. 
              From resume parsing to final decision-making.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {features.map((feature, index) => (
              <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className={index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}>
                  <div className="flex items-center mb-6">
                    <div className="bg-red-100 p-3 rounded-lg mr-4">
                      <feature.icon className="h-8 w-8 text-red-800" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900" style={{ fontFamily: 'Poppins' }}>
                      {feature.title}
                    </h2>
                  </div>
                  <p className="text-xl text-gray-600 mb-8" style={{ fontFamily: 'Inter' }}>
                    {feature.description}
                  </p>
                  <div className="space-y-4">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-start space-x-3">
                        <CheckCircle className="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700" style={{ fontFamily: 'Inter' }}>
                          {benefit}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className={index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}>
                  <div className="bg-gradient-to-br from-red-50 to-red-100 p-8 rounded-2xl">
                    <div className="text-center">
                      <div className="bg-white p-8 rounded-xl shadow-sm">
                        <feature.icon className="h-16 w-16 text-red-800 mx-auto mb-4" />
                        <h3 className="text-2xl font-bold text-red-800 mb-4" style={{ fontFamily: 'Poppins' }}>
                          {feature.title}
                        </h3>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="bg-red-50 p-3 rounded-lg">
                            <div className="text-lg font-semibold text-red-800" style={{ fontFamily: 'Poppins' }}>
                              99%
                            </div>
                            <div className="text-sm text-gray-600" style={{ fontFamily: 'Inter' }}>
                              Accuracy
                            </div>
                          </div>
                          <div className="bg-red-50 p-3 rounded-lg">
                            <div className="text-lg font-semibold text-red-800" style={{ fontFamily: 'Poppins' }}>
                              {"<2s"}
                            </div>
                            <div className="text-sm text-gray-600" style={{ fontFamily: 'Inter' }}>
                              Processing
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              style={{ fontFamily: 'Poppins' }}
            >
              Traditional vs AI-Powered Hiring
            </h2>
            <p 
              className="text-xl text-gray-600 max-w-2xl mx-auto"
              style={{ fontFamily: 'Inter' }}
            >
              See how VetriaAI transforms every step of your hiring process
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Poppins' }}>
                Traditional Hiring
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <span className="text-gray-700" style={{ fontFamily: 'Inter' }}>
                    Manual resume screening (2-3 hours per role)
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <span className="text-gray-700" style={{ fontFamily: 'Inter' }}>
                    Generic interview questions
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <span className="text-gray-700" style={{ fontFamily: 'Inter' }}>
                    Subjective skill assessment
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <span className="text-gray-700" style={{ fontFamily: 'Inter' }}>
                    Manual scheduling coordination
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <span className="text-gray-700" style={{ fontFamily: 'Inter' }}>
                    Limited hiring insights
                  </span>
                </div>
              </div>
              <div className="mt-6 p-4 bg-red-50 rounded-lg">
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600 mb-2" style={{ fontFamily: 'Poppins' }}>
                    30 days
                  </div>
                  <div className="text-sm text-gray-600" style={{ fontFamily: 'Inter' }}>
                    Average time-to-hire
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border-2 border-red-200">
              <h3 className="text-2xl font-bold text-red-800 mb-6" style={{ fontFamily: 'Poppins' }}>
                VetriaAI Hiring
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700" style={{ fontFamily: 'Inter' }}>
                    AI resume parsing (seconds per role)
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700" style={{ fontFamily: 'Inter' }}>
                    Dynamic, role-specific testing
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700" style={{ fontFamily: 'Inter' }}>
                    Objective skill validation
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700" style={{ fontFamily: 'Inter' }}>
                    Automated scheduling & coordination
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700" style={{ fontFamily: 'Inter' }}>
                    Comprehensive analytics dashboard
                  </span>
                </div>
              </div>
              <div className="mt-6 p-4 bg-green-50 rounded-lg">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2" style={{ fontFamily: 'Poppins' }}>
                    6 days
                  </div>
                  <div className="text-sm text-gray-600" style={{ fontFamily: 'Inter' }}>
                    Average time-to-hire
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration & Security */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              style={{ fontFamily: 'Poppins' }}
            >
              Enterprise-Ready Platform
            </h2>
            <p 
              className="text-xl text-gray-600 max-w-2xl mx-auto"
              style={{ fontFamily: 'Inter' }}
            >
              Built for scale, security, and seamless integration with your existing systems
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="bg-red-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Shield className="h-8 w-8 text-red-800" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4" style={{ fontFamily: 'Poppins' }}>
                Enterprise Security
              </h3>
              <p className="text-gray-600 mb-4" style={{ fontFamily: 'Inter' }}>
                SOC 2 Type II compliant with end-to-end encryption and secure data handling.
              </p>
              <ul className="text-sm text-gray-500 space-y-2" style={{ fontFamily: 'Inter' }}>
                <li>• GDPR & CCPA compliant</li>
                <li>• 256-bit AES encryption</li>
                <li>• Regular security audits</li>
              </ul>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="bg-red-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Zap className="h-8 w-8 text-red-800" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4" style={{ fontFamily: 'Poppins' }}>
                API Integration
              </h3>
              <p className="text-gray-600 mb-4" style={{ fontFamily: 'Inter' }}>
                RESTful APIs for seamless integration with your existing HR and ATS systems.
              </p>
              <ul className="text-sm text-gray-500 space-y-2" style={{ fontFamily: 'Inter' }}>
                <li>• Workday integration</li>
                <li>• Greenhouse connectivity</li>
                <li>• Custom API endpoints</li>
              </ul>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="bg-red-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <TrendingUp className="h-8 w-8 text-red-800" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4" style={{ fontFamily: 'Poppins' }}>
                Scalable Architecture
              </h3>
              <p className="text-gray-600 mb-4" style={{ fontFamily: 'Inter' }}>
                Cloud-native infrastructure that scales with your hiring needs.
              </p>
              <ul className="text-sm text-gray-500 space-y-2" style={{ fontFamily: 'Inter' }}>
                <li>• 99.9% uptime SLA</li>
                <li>• Auto-scaling capabilities</li>
                <li>• Global CDN delivery</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;