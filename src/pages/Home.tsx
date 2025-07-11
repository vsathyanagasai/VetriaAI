import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Bot, 
  Clock, 
  Target, 
  Users, 
  Zap, 
  Shield, 
  BarChart3,
  ArrowRight,
  CheckCircle,
  FileText
} from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-50 to-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23f3f4f6%22 fill-opacity=%220.4%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%221.5%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 
              className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
              style={{ fontFamily: 'Poppins' }}
            >
              AI-Powered Hiring,{' '}
              <span className="text-red-800">Built for Speed and Precision</span>
            </h1>
            <p 
              className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto"
              style={{ fontFamily: 'Inter' }}
            >
              Close the gap between fragmented JDs and real talent. VetriaAI automates resume screening, validates skills, and delivers verified candidates — in minutes, not weeks.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-red-800 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-red-900 transition-all duration-200 transform hover:scale-105"
                style={{ fontFamily: 'Inter' }}
              >
                Get Started Today
              </Link>
              <Link
                to="/how-it-works"
                className="border border-red-800 text-red-800 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-red-50 transition-all duration-200 flex items-center justify-center space-x-2"
                style={{ fontFamily: 'Inter' }}
              >
                <span>See How It Works</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Closing the Real Hiring Gap */}
      <section className="py-20 bg-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              style={{ fontFamily: 'Poppins' }}
            >
              The Real Hiring Gap Is Widening — We're Closing It
            </h2>
            <p 
              className="text-xl text-gray-600 max-w-4xl mx-auto mb-8"
              style={{ fontFamily: 'Inter' }}
            >
              Today's hiring fails because job descriptions rarely reflect actual skill needs, and resumes exaggerate abilities. VetriaAI fixes this with:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center group">
              <div className="bg-red-100 p-6 rounded-full w-24 h-24 mx-auto mb-6 flex items-center justify-center group-hover:bg-red-200 transition-colors duration-200">
                <Bot className="h-12 w-12 text-red-800" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4" style={{ fontFamily: 'Poppins' }}>
                AI-Powered JD Fragmentation Analysis
              </h3>
              <p className="text-gray-600" style={{ fontFamily: 'Inter' }}>
                Intelligent analysis of job descriptions to identify gaps and misalignments with real skill requirements.
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-red-100 p-6 rounded-full w-24 h-24 mx-auto mb-6 flex items-center justify-center group-hover:bg-red-200 transition-colors duration-200">
                <Target className="h-12 w-12 text-red-800" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4" style={{ fontFamily: 'Poppins' }}>
                JD-to-Skill Mapping & Role-Fit Testing
              </h3>
              <p className="text-gray-600" style={{ fontFamily: 'Inter' }}>
                Precise mapping of job requirements to actual skills with targeted testing for role fitness.
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-red-100 p-6 rounded-full w-24 h-24 mx-auto mb-6 flex items-center justify-center group-hover:bg-red-200 transition-colors duration-200">
                <Zap className="h-12 w-12 text-red-800" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4" style={{ fontFamily: 'Poppins' }}>
                Urgency-Aware Shortlisting
              </h3>
              <p className="text-gray-600" style={{ fontFamily: 'Inter' }}>
                Smart prioritization based on hiring urgency, candidate availability, and verified skill match.
              </p>
            </div>
          </div>

          <div className="text-center">
            <p 
              className="text-xl font-semibold text-gray-900"
              style={{ fontFamily: 'Poppins' }}
            >
              No guesswork. Just verified talent matched to the real needs of your role — fast.
            </p>
          </div>
        </div>
      </section>

      {/* The Problem We Solve */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              style={{ fontFamily: 'Poppins' }}
            >
              The Hiring Bottlenecks We Solve
            </h2>
            <p 
              className="text-xl text-gray-600 max-w-2xl mx-auto"
              style={{ fontFamily: 'Inter' }}
            >
              Traditional recruitment is broken. We fix it with intelligent automation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="bg-red-50 p-6 rounded-full w-24 h-24 mx-auto mb-6 flex items-center justify-center group-hover:bg-red-100 transition-colors duration-200">
                <Clock className="h-12 w-12 text-red-800" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4" style={{ fontFamily: 'Poppins' }}>
                Manual Resume Review
              </h3>
              <p className="text-gray-600" style={{ fontFamily: 'Inter' }}>
                HR teams spend countless hours manually reviewing resumes, missing top talent in the process.
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-red-50 p-6 rounded-full w-24 h-24 mx-auto mb-6 flex items-center justify-center group-hover:bg-red-100 transition-colors duration-200">
                <Target className="h-12 w-12 text-red-800" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4" style={{ fontFamily: 'Poppins' }}>
                Skill Mismatches
              </h3>
              <p className="text-gray-600" style={{ fontFamily: 'Inter' }}>
                Candidates often oversell their abilities, leading to costly hiring mistakes and failed interviews.
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-red-50 p-6 rounded-full w-24 h-24 mx-auto mb-6 flex items-center justify-center group-hover:bg-red-100 transition-colors duration-200">
                <Users className="h-12 w-12 text-red-800" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4" style={{ fontFamily: 'Poppins' }}>
                Wasted Interview Cycles
              </h3>
              <p className="text-gray-600" style={{ fontFamily: 'Inter' }}>
                Unqualified candidates waste valuable interview time, slowing down the entire hiring process.
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-red-50 p-6 rounded-full w-24 h-24 mx-auto mb-6 flex items-center justify-center group-hover:bg-red-100 transition-colors duration-200">
                <FileText className="h-12 w-12 text-red-800" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4" style={{ fontFamily: 'Poppins' }}>
                Fragmented JDs
              </h3>
              <p className="text-gray-600" style={{ fontFamily: 'Inter' }}>
                Job descriptions often don't align with real-world expectations. VetriaAI analyzes and restructures JDs to match actual skill needs before screening.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VetriaAI at a Glance */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              style={{ fontFamily: 'Poppins' }}
            >
              VetriaAI at a Glance
            </h2>
            <p 
              className="text-xl text-gray-600 max-w-2xl mx-auto"
              style={{ fontFamily: 'Inter' }}
            >
              Powerful AI-driven features that revolutionize how you hire and get hired.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="bg-red-100 p-3 rounded-lg w-fit mb-4">
                <Bot className="h-8 w-8 text-red-800" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2" style={{ fontFamily: 'Poppins' }}>
                AI Resume Sorting
              </h3>
              <p className="text-gray-600" style={{ fontFamily: 'Inter' }}>
                Intelligent parsing and ranking of resumes based on job requirements and candidate potential.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="bg-red-100 p-3 rounded-lg w-fit mb-4">
                <Shield className="h-8 w-8 text-red-800" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2" style={{ fontFamily: 'Poppins' }}>
                Skillset Testing
              </h3>
              <p className="text-gray-600" style={{ fontFamily: 'Inter' }}>
                Adaptive, AI-generated tests that accurately assess candidate skills and competencies.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="bg-red-100 p-3 rounded-lg w-fit mb-4">
                <Zap className="h-8 w-8 text-red-800" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2" style={{ fontFamily: 'Poppins' }}>
                Interview Automation
              </h3>
              <p className="text-gray-600" style={{ fontFamily: 'Inter' }}>
                Automated scheduling and pre-screening to streamline your interview process.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="bg-red-100 p-3 rounded-lg w-fit mb-4">
                <BarChart3 className="h-8 w-8 text-red-800" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2" style={{ fontFamily: 'Poppins' }}>
                Hiring Analytics
              </h3>
              <p className="text-gray-600" style={{ fontFamily: 'Inter' }}>
                Comprehensive insights and metrics to optimize your recruitment strategy.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="bg-red-100 p-3 rounded-lg w-fit mb-4">
                <FileText className="h-8 w-8 text-red-800" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2" style={{ fontFamily: 'Poppins' }}>
                JD Optimizer
              </h3>
              <p className="text-gray-600" style={{ fontFamily: 'Inter' }}>
                AI scans job descriptions, detects gaps or ambiguity, and auto-suggests skill-focused rewrites for better targeting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* For Employers CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 
                className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
                style={{ fontFamily: 'Poppins' }}
              >
                For Employers
              </h2>
              <p 
                className="text-xl text-gray-600 mb-8"
                style={{ fontFamily: 'Inter' }}
              >
                Reduce hiring time by 80% while finding better candidates. 
                Let AI handle the heavy lifting while you focus on what matters.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                  <span className="text-gray-700" style={{ fontFamily: 'Inter' }}>
                    Screen 1000+ resumes in minutes
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                  <span className="text-gray-700" style={{ fontFamily: 'Inter' }}>
                    Validate skills before interviews
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                  <span className="text-gray-700" style={{ fontFamily: 'Inter' }}>
                    Reduce hiring bias with AI insights
                  </span>
                </div>
              </div>
              <Link
                to="/for-employers"
                className="inline-flex items-center space-x-2 bg-red-800 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-red-900 transition-all duration-200"
                style={{ fontFamily: 'Inter' }}
              >
                <span>Learn More</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
            <div className="bg-gradient-to-br from-red-50 to-red-100 p-8 rounded-2xl">
              <div className="text-center">
                <div className="bg-white p-6 rounded-xl shadow-sm mb-6">
                  <h3 className="text-2xl font-bold text-red-800 mb-2" style={{ fontFamily: 'Poppins' }}>
                    80%
                  </h3>
                  <p className="text-gray-600" style={{ fontFamily: 'Inter' }}>
                    Faster hiring process
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="text-lg font-semibold text-red-800" style={{ fontFamily: 'Poppins' }}>
                      95%
                    </h4>
                    <p className="text-sm text-gray-600" style={{ fontFamily: 'Inter' }}>
                      Accuracy rate
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="text-lg font-semibold text-red-800" style={{ fontFamily: 'Poppins' }}>
                      50+
                    </h4>
                    <p className="text-sm text-gray-600" style={{ fontFamily: 'Inter' }}>
                      Skills tested
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* For Candidates CTA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="lg:order-2">
              <h2 
                className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
                style={{ fontFamily: 'Poppins' }}
              >
                For Candidates
              </h2>
              <p 
                className="text-xl text-gray-600 mb-8"
                style={{ fontFamily: 'Inter' }}
              >
                Stand out from the crowd with AI-verified skills. 
                Earn badges, get discovered, and land your dream job.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                  <span className="text-gray-700" style={{ fontFamily: 'Inter' }}>
                    Earn verified skill badges
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                  <span className="text-gray-700" style={{ fontFamily: 'Inter' }}>
                    Get discovered by top employers
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                  <span className="text-gray-700" style={{ fontFamily: 'Inter' }}>
                    Skip initial screening rounds
                  </span>
                </div>
              </div>
              <Link
                to="/for-candidates"
                className="inline-flex items-center space-x-2 bg-red-800 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-red-900 transition-all duration-200"
                style={{ fontFamily: 'Inter' }}
              >
                <span>Start Building Profile</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
            <div className="lg:order-1 bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl">
              <div className="text-center">
                <div className="bg-white p-6 rounded-xl shadow-sm mb-6">
                  <h3 className="text-2xl font-bold text-blue-800 mb-2" style={{ fontFamily: 'Poppins' }}>
                    3x
                  </h3>
                  <p className="text-gray-600" style={{ fontFamily: 'Inter' }}>
                    Higher interview rate
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="text-lg font-semibold text-blue-800" style={{ fontFamily: 'Poppins' }}>
                      10k+
                    </h4>
                    <p className="text-sm text-gray-600" style={{ fontFamily: 'Inter' }}>
                      Active candidates
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="text-lg font-semibold text-blue-800" style={{ fontFamily: 'Poppins' }}>
                      500+
                    </h4>
                    <p className="text-sm text-gray-600" style={{ fontFamily: 'Inter' }}>
                      Partner companies
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 bg-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-lg">
              <div className="mb-8">
                <div className="flex justify-center mb-6">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} className="text-yellow-400 text-2xl">★</span>
                  ))}
                </div>
                <blockquote 
                  className="text-xl md:text-2xl text-gray-700 mb-8 italic"
                  style={{ fontFamily: 'Inter' }}
                >
                  "We needed 3 engineers in 72 hours. VetriaAI delivered 5 pre-tested, interview-ready candidates in 36 hours. We hired 3 — all performing brilliantly."
                </blockquote>
                <div className="border-t border-gray-200 pt-6">
                  <cite 
                    className="text-lg font-semibold text-gray-900 not-italic"
                    style={{ fontFamily: 'Poppins' }}
                  >
                    — Talent Acquisition Lead, Series A Startup
                  </cite>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
};

export default Home;