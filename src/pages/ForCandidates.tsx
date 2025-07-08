import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Trophy, 
  Star, 
  TrendingUp, 
  Shield, 
  Users, 
  Clock,
  CheckCircle,
  Award,
  ArrowRight,
  Target
} from 'lucide-react';

const ForCandidates = () => {
  const badges = [
    {
      icon: Trophy,
      name: "Elite Badge",
      color: "red",
      requirement: "90%+ Score",
      description: "Top 5% of candidates with exceptional skills",
      bgColor: "bg-red-100",
      textColor: "text-red-800"
    },
    {
      icon: Trophy,
      name: "Gold Badge",
      color: "yellow",
      requirement: "80-90% Score",
      description: "Advanced professionals with proven expertise",
      bgColor: "bg-yellow-100",
      textColor: "text-yellow-800"
    },
    {
      icon: Trophy,
      name: "Silver Badge",
      color: "gray",
      requirement: "70-80% Score",
      description: "Competent candidates with solid skills",
      bgColor: "bg-gray-100",
      textColor: "text-gray-800"
    },
    {
      icon: Trophy,
      name: "Bronze Badge",
      color: "orange",
      requirement: "60-70% Score",
      description: "Entry-level verification of basic skills",
      bgColor: "bg-orange-100",
      textColor: "text-orange-800"
    }
  ];

  const benefits = [
    {
      icon: Star,
      title: "Stand Out",
      description: "Verified badges make your profile shine among thousands of candidates"
    },
    {
      icon: TrendingUp,
      title: "Get Hired 3x Faster",
      description: "Badge holders receive interview invitations 3x more often"
    },
    {
      icon: Shield,
      title: "Skill Validation",
      description: "Prove your expertise with AI-powered assessments"
    },
    {
      icon: Users,
      title: "Direct Access",
      description: "Get discovered by top employers without applying"
    }
  ];

  const features = [
    {
      title: "Skill Assessment",
      description: "Take comprehensive tests across 50+ technical and soft skills",
      icon: Target
    },
    {
      title: "Badge Earning",
      description: "Earn tiered badges based on your performance and expertise",
      icon: Award
    },
    {
      title: "Company Matching",
      description: "Get matched with companies looking for your specific skills",
      icon: Users
    },
    {
      title: "Interview Prep",
      description: "Receive personalized interview preparation based on your profile",
      icon: Clock
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
              style={{ fontFamily: 'Poppins' }}
            >
              Stand Out. <span className="text-red-800">Get Hired.</span>
            </h1>
            <p 
              className="text-xl text-gray-600 max-w-3xl mx-auto mb-8"
              style={{ fontFamily: 'Inter' }}
            >
              Showcase your skills with AI-verified badges. Get discovered by top employers 
              and land your dream job faster than ever.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-red-800 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-red-900 transition-all duration-200"
                style={{ fontFamily: 'Inter' }}
              >
                Start Building Profile
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

      {/* Benefits */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              style={{ fontFamily: 'Poppins' }}
            >
              Why Candidates Love VetriaAI
            </h2>
            <p 
              className="text-xl text-gray-600 max-w-2xl mx-auto"
              style={{ fontFamily: 'Inter' }}
            >
              Transform your job search with AI-powered profile building and skill verification
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="bg-blue-100 p-6 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center group-hover:bg-blue-200 transition-colors duration-200">
                  <benefit.icon className="h-10 w-10 text-blue-800" />
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

      {/* Badge System */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              style={{ fontFamily: 'Poppins' }}
            >
              Earn Verified Badges
            </h2>
            <p 
              className="text-xl text-gray-600 max-w-2xl mx-auto"
              style={{ fontFamily: 'Inter' }}
            >
              Our AI-powered assessment system awards badges based on your proven skills and performance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {badges.map((badge, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
                <div className={`${badge.bgColor} p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center`}>
                  <badge.icon className={`h-8 w-8 ${badge.textColor}`} />
                </div>
                <h3 className={`text-xl font-semibold ${badge.textColor} mb-2 text-center`} style={{ fontFamily: 'Poppins' }}>
                  {badge.name}
                </h3>
                <p className="text-center text-gray-600 mb-3" style={{ fontFamily: 'Inter' }}>
                  {badge.requirement}
                </p>
                <p className="text-sm text-gray-500 text-center" style={{ fontFamily: 'Inter' }}>
                  {badge.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works for Candidates */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              style={{ fontFamily: 'Poppins' }}
            >
              Your Journey to Success
            </h2>
            <p 
              className="text-xl text-gray-600 max-w-2xl mx-auto"
              style={{ fontFamily: 'Inter' }}
            >
              Four simple steps to build your profile and get noticed by top employers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="bg-red-100 p-6 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                  <feature.icon className="h-10 w-10 text-red-800" />
                </div>
                <div className="text-red-800 font-semibold mb-2" style={{ fontFamily: 'Inter' }}>
                  Step {index + 1}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4" style={{ fontFamily: 'Poppins' }}>
                  {feature.title}
                </h3>
                <p className="text-gray-600" style={{ fontFamily: 'Inter' }}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              style={{ fontFamily: 'Poppins' }}
            >
              Success Stories
            </h2>
            <p 
              className="text-xl text-gray-600 max-w-2xl mx-auto"
              style={{ fontFamily: 'Inter' }}
            >
              See how VetriaAI has transformed careers across industries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="flex items-center mb-6">
                <div className="bg-red-100 p-3 rounded-full mr-4">
                  <Trophy className="h-6 w-6 text-red-800" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900" style={{ fontFamily: 'Poppins' }}>
                    Sarah Chen
                  </h3>
                  <p className="text-sm text-gray-600" style={{ fontFamily: 'Inter' }}>
                    Software Engineer
                  </p>
                </div>
              </div>
              <p className="text-gray-600 mb-4" style={{ fontFamily: 'Inter' }}>
                "Earned my Elite badge in React and got 5 interview invitations within a week. 
                Landed my dream job at a tech startup!"
              </p>
              <div className="flex items-center space-x-2">
                <Award className="h-5 w-5 text-red-800" />
                <span className="text-sm text-red-800 font-medium" style={{ fontFamily: 'Inter' }}>
                  Elite Badge Holder
                </span>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="flex items-center mb-6">
                <div className="bg-yellow-100 p-3 rounded-full mr-4">
                  <Trophy className="h-6 w-6 text-yellow-800" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900" style={{ fontFamily: 'Poppins' }}>
                    Michael Rodriguez
                  </h3>
                  <p className="text-sm text-gray-600" style={{ fontFamily: 'Inter' }}>
                    Data Analyst
                  </p>
                </div>
              </div>
              <p className="text-gray-600 mb-4" style={{ fontFamily: 'Inter' }}>
                "The skill validation process was thorough and fair. My Gold badge in SQL 
                helped me skip three rounds of interviews."
              </p>
              <div className="flex items-center space-x-2">
                <Award className="h-5 w-5 text-yellow-800" />
                <span className="text-sm text-yellow-800 font-medium" style={{ fontFamily: 'Inter' }}>
                  Gold Badge Holder
                </span>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="flex items-center mb-6">
                <div className="bg-gray-100 p-3 rounded-full mr-4">
                  <Trophy className="h-6 w-6 text-gray-800" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900" style={{ fontFamily: 'Poppins' }}>
                    Emily Johnson
                  </h3>
                  <p className="text-sm text-gray-600" style={{ fontFamily: 'Inter' }}>
                    Marketing Manager
                  </p>
                </div>
              </div>
              <p className="text-gray-600 mb-4" style={{ fontFamily: 'Inter' }}>
                "VetriaAI helped me transition from freelance to full-time. The badge system 
                gave employers confidence in my abilities."
              </p>
              <div className="flex items-center space-x-2">
                <Award className="h-5 w-5 text-gray-800" />
                <span className="text-sm text-gray-800 font-medium" style={{ fontFamily: 'Inter' }}>
                  Silver Badge Holder
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get Matched CTA */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
              style={{ fontFamily: 'Poppins' }}
            >
              Get Matched With Jobs That Actually Fit You
            </h2>
            <p 
              className="text-xl text-gray-600 max-w-3xl mx-auto mb-8"
              style={{ fontFamily: 'Inter' }}
            >
              No more one-size-fits-all listings. Our AI breaks down each JD and maps it to your badge-proven skills.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-red-800 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-red-900 transition-all duration-200"
                style={{ fontFamily: 'Inter' }}
              >
                Start Building Profile
              </Link>
              <Link
                to="/how-it-works"
                className="border border-red-800 text-red-800 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-red-50 transition-all duration-200 flex items-center justify-center space-x-2"
                style={{ fontFamily: 'Inter' }}
              >
                <span>Learn How It Works</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
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
              Everything you need to know about building your VetriaAI profile
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-gray-900 mb-3" style={{ fontFamily: 'Poppins' }}>
                Is VetriaAI free for candidates?
              </h3>
              <p className="text-gray-600" style={{ fontFamily: 'Inter' }}>
                Yes! Creating your profile, taking skill assessments, and earning badges is completely free 
                for all candidates. We're committed to democratizing access to quality job opportunities.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-gray-900 mb-3" style={{ fontFamily: 'Poppins' }}>
                How are the skill tests structured?
              </h3>
              <p className="text-gray-600" style={{ fontFamily: 'Inter' }}>
                Our tests are adaptive and role-specific. They include a mix of technical questions, 
                practical scenarios, and behavioral assessments. Tests typically take 30-60 minutes 
                and adjust difficulty based on your responses.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-gray-900 mb-3" style={{ fontFamily: 'Poppins' }}>
                Can I retake tests to improve my badge?
              </h3>
              <p className="text-gray-600" style={{ fontFamily: 'Inter' }}>
                Yes, you can retake assessments after a 30-day waiting period. This allows you to 
                improve your skills and potentially earn a higher badge level.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-gray-900 mb-3" style={{ fontFamily: 'Poppins' }}>
                How do employers find my profile?
              </h3>
              <p className="text-gray-600" style={{ fontFamily: 'Inter' }}>
                Employers search our database by skills, experience, and badge levels. Your profile 
                appears in search results when you match their requirements. Higher badge levels 
                increase your visibility and ranking.
              </p>
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
            Ready to Stand Out?
          </h2>
          <p 
            className="text-xl text-red-100 max-w-2xl mx-auto mb-8"
            style={{ fontFamily: 'Inter' }}
          >
            Join thousands of candidates who have accelerated their careers with VetriaAI badges.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="bg-red-700 p-6 rounded-lg">
              <div className="text-3xl font-bold text-white mb-2" style={{ fontFamily: 'Poppins' }}>
                10,000+
              </div>
              <div className="text-red-100" style={{ fontFamily: 'Inter' }}>
                Active Candidates
              </div>
            </div>
            <div className="bg-red-700 p-6 rounded-lg">
              <div className="text-3xl font-bold text-white mb-2" style={{ fontFamily: 'Poppins' }}>
                500+
              </div>
              <div className="text-red-100" style={{ fontFamily: 'Inter' }}>
                Partner Companies
              </div>
            </div>
            <div className="bg-red-700 p-6 rounded-lg">
              <div className="text-3xl font-bold text-white mb-2" style={{ fontFamily: 'Poppins' }}>
                3x
              </div>
              <div className="text-red-100" style={{ fontFamily: 'Inter' }}>
                Faster Hiring
              </div>
            </div>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center space-x-2 bg-white text-red-800 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            style={{ fontFamily: 'Inter' }}
          >
            <span>Start Your Journey</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ForCandidates;