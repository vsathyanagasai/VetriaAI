import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Clock, 
  Users, 
  Target, 
  BarChart3, 
  Shield, 
  Zap,
  CheckCircle,
  TrendingUp,
  Award,
  ArrowRight
} from 'lucide-react';

const ForEmployers = () => {
  const benefits = [
    {
      icon: Clock,
      title: "80% Faster Hiring",
      description: "Reduce time-to-hire from weeks to days with AI-powered automation"
    },
    {
      icon: Target,
      title: "95% Accuracy",
      description: "AI matching ensures you only interview the most qualified candidates"
    },
    {
      icon: Users,
      title: "Bias Reduction",
      description: "Data-driven decisions minimize unconscious bias in hiring"
    },
    {
      icon: BarChart3,
      title: "Cost Efficiency",
      description: "Reduce hiring costs by up to 60% with intelligent automation"
    }
  ];

  const features = [
    {
      title: "Smart Resume Screening",
      description: "AI analyzes thousands of resumes in minutes, ranking candidates by job fit",
      stats: "1000+ resumes processed per minute"
    },
    {
      title: "Skill Validation",
      description: "Automated testing validates candidate skills before interviews",
      stats: "50+ technical assessments available"
    },
    {
      title: "Interview Optimization",
      description: "Only pre-qualified candidates reach your interview stage",
      stats: "3x higher interview success rate"
    },
    {
      title: "Hiring Analytics",
      description: "Comprehensive dashboards track and optimize your hiring process",
      stats: "Real-time insights and reporting"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
              style={{ fontFamily: 'Poppins' }}
            >
              Smarter Hiring for <span className="text-red-800">Real-World Urgency</span>
            </h1>
            <p 
              className="text-xl text-gray-600 max-w-3xl mx-auto mb-8"
              style={{ fontFamily: 'Inter' }}
            >
              Transform your hiring process with AI-powered recruitment. 
              Find better candidates faster while reducing costs and bias.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 bg-red-800 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-red-900 transition-all duration-200"
              style={{ fontFamily: 'Inter' }}
            >
              <span>Start Free Trial</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              style={{ fontFamily: 'Poppins' }}
            >
              Why HRs Love VetriaAI
            </h2>
            <p 
              className="text-xl text-gray-600 max-w-2xl mx-auto"
              style={{ fontFamily: 'Inter' }}
            >
              Join thousands of companies that have revolutionized their hiring process
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="bg-red-100 p-6 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center group-hover:bg-red-200 transition-colors duration-200">
                  <benefit.icon className="h-10 w-10 text-red-800" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4" style={{ fontFamily: 'Poppins' }}>
                  {benefit.title}
                </h3>
                <p className="text-gray-600" style={{ fontFamily: 'Inter' }}>
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Comparison */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              style={{ fontFamily: 'Poppins' }}
            >
              Old vs New Hiring Process
            </h2>
            <p 
              className="text-xl text-gray-600 max-w-2xl mx-auto"
              style={{ fontFamily: 'Inter' }}
            >
              See the dramatic improvement in efficiency and quality
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 lg:p-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Poppins' }}>
                  Traditional Process
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-red-100 p-2 rounded-full">
                      <span className="text-red-800 font-semibold text-sm">1</span>
                    </div>
                    <div>
                      <p className="text-gray-700 mb-2" style={{ fontFamily: 'Inter' }}>
                        Manual resume review
                      </p>
                      <p className="text-sm text-gray-500" style={{ fontFamily: 'Inter' }}>
                        2-3 hours per position
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-red-100 p-2 rounded-full">
                      <span className="text-red-800 font-semibold text-sm">2</span>
                    </div>
                    <div>
                      <p className="text-gray-700 mb-2" style={{ fontFamily: 'Inter' }}>
                        Phone screening calls
                      </p>
                      <p className="text-sm text-gray-500" style={{ fontFamily: 'Inter' }}>
                        1-2 weeks coordination
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-red-100 p-2 rounded-full">
                      <span className="text-red-800 font-semibold text-sm">3</span>
                    </div>
                    <div>
                      <p className="text-gray-700 mb-2" style={{ fontFamily: 'Inter' }}>
                        Multiple interview rounds
                      </p>
                      <p className="text-sm text-gray-500" style={{ fontFamily: 'Inter' }}>
                        2-3 weeks completion
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-red-100 p-2 rounded-full">
                      <span className="text-red-800 font-semibold text-sm">4</span>
                    </div>
                    <div>
                      <p className="text-gray-700 mb-2" style={{ fontFamily: 'Inter' }}>
                        Reference checks
                      </p>
                      <p className="text-sm text-gray-500" style={{ fontFamily: 'Inter' }}>
                        1 week follow-up
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-8 p-4 bg-red-50 rounded-lg">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-red-600 mb-2" style={{ fontFamily: 'Poppins' }}>
                      30-45 days
                    </div>
                    <div className="text-sm text-gray-600" style={{ fontFamily: 'Inter' }}>
                      Total hiring time
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8 lg:p-12 bg-green-50">
                <h3 className="text-2xl font-bold text-green-800 mb-6" style={{ fontFamily: 'Poppins' }}>
                  VetriaAI Process
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-green-100 p-2 rounded-full">
                      <CheckCircle className="h-4 w-4 text-green-800" />
                    </div>
                    <div>
                      <p className="text-gray-700 mb-2" style={{ fontFamily: 'Inter' }}>
                        AI resume analysis
                      </p>
                      <p className="text-sm text-gray-500" style={{ fontFamily: 'Inter' }}>
                        Seconds per position
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-green-100 p-2 rounded-full">
                      <CheckCircle className="h-4 w-4 text-green-800" />
                    </div>
                    <div>
                      <p className="text-gray-700 mb-2" style={{ fontFamily: 'Inter' }}>
                        Automated skill testing
                      </p>
                      <p className="text-sm text-gray-500" style={{ fontFamily: 'Inter' }}>
                        1-2 days completion
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-green-100 p-2 rounded-full">
                      <CheckCircle className="h-4 w-4 text-green-800" />
                    </div>
                    <div>
                      <p className="text-gray-700 mb-2" style={{ fontFamily: 'Inter' }}>
                        Pre-qualified interviews
                      </p>
                      <p className="text-sm text-gray-500" style={{ fontFamily: 'Inter' }}>
                        3-5 days scheduling
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-green-100 p-2 rounded-full">
                      <CheckCircle className="h-4 w-4 text-green-800" />
                    </div>
                    <div>
                      <p className="text-gray-700 mb-2" style={{ fontFamily: 'Inter' }}>
                        AI-powered decision support
                      </p>
                      <p className="text-sm text-gray-500" style={{ fontFamily: 'Inter' }}>
                        Instant recommendations
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-8 p-4 bg-green-100 rounded-lg">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2" style={{ fontFamily: 'Poppins' }}>
                      6-8 days
                    </div>
                    <div className="text-sm text-gray-600" style={{ fontFamily: 'Inter' }}>
                      Total hiring time
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              style={{ fontFamily: 'Poppins' }}
            >
              Powerful Features for Employers
            </h2>
            <p 
              className="text-xl text-gray-600 max-w-2xl mx-auto"
              style={{ fontFamily: 'Inter' }}
            >
              Everything you need to streamline your hiring process
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-4" style={{ fontFamily: 'Poppins' }}>
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-4" style={{ fontFamily: 'Inter' }}>
                  {feature.description}
                </p>
                <div className="bg-red-100 p-3 rounded-lg">
                  <p className="text-sm font-medium text-red-800" style={{ fontFamily: 'Inter' }}>
                    {feature.stats}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Built for Urgent Hiring */}
      <section className="py-20 bg-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              style={{ fontFamily: 'Poppins' }}
            >
              Built for Urgent Hiring
            </h2>
            <p 
              className="text-xl text-gray-600 max-w-2xl mx-auto"
              style={{ fontFamily: 'Inter' }}
            >
              When time matters most, VetriaAI accelerates the pipeline
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-red-100 p-6 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <Clock className="h-10 w-10 text-red-800" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4" style={{ fontFamily: 'Poppins' }}>
                Same-Day Candidate Shortlisting
              </h3>
              <p className="text-gray-600" style={{ fontFamily: 'Inter' }}>
                Get qualified candidates within hours, not days or weeks
              </p>
            </div>

            <div className="text-center">
              <div className="bg-red-100 p-6 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <Target className="h-10 w-10 text-red-800" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4" style={{ fontFamily: 'Poppins' }}>
                AI-Matched Profiles Based on Job Urgency
              </h3>
              <p className="text-gray-600" style={{ fontFamily: 'Inter' }}>
                Prioritized matching algorithm considers urgency and role-fit
              </p>
            </div>

            <div className="text-center">
              <div className="bg-red-100 p-6 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <Shield className="h-10 w-10 text-red-800" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4" style={{ fontFamily: 'Poppins' }}>
                Skip Screening Steps
              </h3>
              <p className="text-gray-600" style={{ fontFamily: 'Inter' }}>
                Work with skill-verified profiles, eliminating basic screening rounds
              </p>
            </div>

            <div className="text-center">
              <div className="bg-red-100 p-6 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <Users className="h-10 w-10 text-red-800" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4" style={{ fontFamily: 'Poppins' }}>
                Real-Time Availability Filters
              </h3>
              <p className="text-gray-600" style={{ fontFamily: 'Inter' }}>
                Filter candidates by immediate availability and start dates
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Candidate Discovery */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              style={{ fontFamily: 'Poppins' }}
            >
              Candidate Discovery
            </h2>
            <p 
              className="text-xl text-gray-600 max-w-2xl mx-auto"
              style={{ fontFamily: 'Inter' }}
            >
              Our badge system ensures you only see top-tier candidates. Filter candidates not just by skill, but by JD alignment and availability-to-join timelines — powered by urgency-aware AI.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Poppins' }}>
                Quality Over Quantity
              </h3>
              <p className="text-lg text-gray-600 mb-8" style={{ fontFamily: 'Inter' }}>
                Instead of wading through hundreds of unqualified resumes, 
                our AI presents only candidates who have proven their skills.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Award className="h-6 w-6 text-red-800" />
                  <div>
                    <p className="font-semibold text-gray-900" style={{ fontFamily: 'Poppins' }}>
                      Elite Badge Holders
                    </p>
                    <p className="text-gray-600" style={{ fontFamily: 'Inter' }}>
                      Top 5% of candidates with 90%+ skill scores
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Award className="h-6 w-6 text-yellow-600" />
                  <div>
                    <p className="font-semibold text-gray-900" style={{ fontFamily: 'Poppins' }}>
                      Gold Badge Holders
                    </p>
                    <p className="text-gray-600" style={{ fontFamily: 'Inter' }}>
                      Advanced professionals with 80-90% scores
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Award className="h-6 w-6 text-gray-600" />
                  <div>
                    <p className="font-semibold text-gray-900" style={{ fontFamily: 'Poppins' }}>
                      Silver Badge Holders
                    </p>
                    <p className="text-gray-600" style={{ fontFamily: 'Inter' }}>
                      Competent candidates with 70-80% scores
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h4 className="text-xl font-semibold text-gray-900 mb-6" style={{ fontFamily: 'Poppins' }}>
                Success Metrics
              </h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-red-50 rounded-lg">
                  <div className="text-2xl font-bold text-red-800 mb-2" style={{ fontFamily: 'Poppins' }}>
                    95%
                  </div>
                  <div className="text-sm text-gray-600" style={{ fontFamily: 'Inter' }}>
                    Interview Success Rate
                  </div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-800 mb-2" style={{ fontFamily: 'Poppins' }}>
                    85%
                  </div>
                  <div className="text-sm text-gray-600" style={{ fontFamily: 'Inter' }}>
                    Offer Acceptance Rate
                  </div>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-800 mb-2" style={{ fontFamily: 'Poppins' }}>
                    3x
                  </div>
                  <div className="text-sm text-gray-600" style={{ fontFamily: 'Inter' }}>
                    Faster Hiring
                  </div>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <div className="text-2xl font-bold text-purple-800 mb-2" style={{ fontFamily: 'Poppins' }}>
                    60%
                  </div>
                  <div className="text-sm text-gray-600" style={{ fontFamily: 'Inter' }}>
                    Cost Reduction
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-red-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 
            className="text-3xl md:text-4xl font-bold text-white mb-6"
            style={{ fontFamily: 'Poppins' }}
          >
            Ready to Transform Your Hiring?
          </h2>
          <p 
            className="text-xl text-red-100 max-w-2xl mx-auto mb-8"
            style={{ fontFamily: 'Inter' }}
          >
            Join leading companies that have revolutionized their recruitment process with VetriaAI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-red-800 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
              style={{ fontFamily: 'Inter' }}
            >
              Start Free Trial
            </Link>
            <Link
              to="/how-it-works"
              className="border border-white text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-red-700 transition-colors duration-200"
              style={{ fontFamily: 'Inter' }}
            >
              See How It Works
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ForEmployers;