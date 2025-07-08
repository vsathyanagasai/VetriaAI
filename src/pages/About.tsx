import React from 'react';
import { 
  Users, 
  Target, 
  Lightbulb, 
  Globe, 
  Award,
  TrendingUp,
  Shield,
  Heart
} from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Precision",
      description: "Every algorithm, every assessment, every match is designed for accuracy and fairness."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We push the boundaries of AI to create solutions that didn't exist before."
    },
    {
      icon: Heart,
      title: "Human-Centric",
      description: "Technology should serve people, not the other way around."
    },
    {
      icon: Shield,
      title: "Trust",
      description: "We handle careers and dreams with the responsibility they deserve."
    }
  ];

  const team = [
    {
      name: "Alex Chen",
      role: "CEO & Co-Founder",
      background: "Former VP of Engineering at Google, PhD in Machine Learning from Stanford",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Sarah Martinez",
      role: "CTO & Co-Founder",
      background: "Ex-Meta AI Research, Expert in NLP and Computer Vision",
      image: "https://images.pexels.com/photos/3783471/pexels-photo-3783471.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "David Kim",
      role: "Head of Product",
      background: "Former LinkedIn Product Manager, 10+ years in HR Tech",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Rachel Thompson",
      role: "Head of AI Ethics",
      background: "Former IBM Research, PhD in Ethics and AI from MIT",
      image: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  const milestones = [
    {
      year: "2023",
      title: "Company Founded",
      description: "VetriaAI was born from a vision to democratize talent discovery"
    },
    {
      year: "2024",
      title: "AI Platform Launch",
      description: "Released our first AI-powered resume screening and skill validation platform"
    },
    {
      year: "2024",
      title: "10,000+ Candidates",
      description: "Reached our first major milestone with over 10,000 active candidates"
    },
    {
      year: "2025",
      title: "500+ Companies",
      description: "Partnered with 500+ companies across various industries"
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
              About VetriaAI
            </h1>
            <p 
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              style={{ fontFamily: 'Inter' }}
            >
              We're building the future of hiring — intelligent, fair, and fast. 
              Our mission is to democratize talent discovery using cutting-edge AI.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 
                className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
                style={{ fontFamily: 'Poppins' }}
              >
                Our Mission
              </h2>
              <p 
                className="text-lg text-gray-600 mb-6"
                style={{ fontFamily: 'Inter' }}
              >
                We believe that talent exists everywhere, but opportunity doesn't. 
                Traditional hiring processes are slow, biased, and ineffective at 
                identifying the best candidates.
              </p>
              <p 
                className="text-lg text-gray-600 mb-8"
                style={{ fontFamily: 'Inter' }}
              >
                VetriaAI leverages artificial intelligence to create a more 
                efficient, fair, and accurate hiring process that benefits both 
                candidates and employers.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-800 mb-2" style={{ fontFamily: 'Poppins' }}>
                    95%
                  </div>
                  <div className="text-gray-600" style={{ fontFamily: 'Inter' }}>
                    Accuracy Rate
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-800 mb-2" style={{ fontFamily: 'Poppins' }}>
                    80%
                  </div>
                  <div className="text-gray-600" style={{ fontFamily: 'Inter' }}>
                    Time Saved
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-red-50 to-red-100 p-8 rounded-2xl">
              <div className="text-center">
                <Globe className="h-16 w-16 text-red-800 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-red-800 mb-4" style={{ fontFamily: 'Poppins' }}>
                  Global Impact
                </h3>
                <p className="text-gray-700 mb-6" style={{ fontFamily: 'Inter' }}>
                  We're not just changing how companies hire — we're transforming 
                  how talent is discovered and developed worldwide.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg">
                    <div className="text-2xl font-bold text-red-800 mb-2" style={{ fontFamily: 'Poppins' }}>
                      50+
                    </div>
                    <div className="text-sm text-gray-600" style={{ fontFamily: 'Inter' }}>
                      Countries
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <div className="text-2xl font-bold text-red-800 mb-2" style={{ fontFamily: 'Poppins' }}>
                      25+
                    </div>
                    <div className="text-sm text-gray-600" style={{ fontFamily: 'Inter' }}>
                      Industries
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              style={{ fontFamily: 'Poppins' }}
            >
              Our Vision
            </h2>
            <p 
              className="text-xl text-gray-600 max-w-2xl mx-auto"
              style={{ fontFamily: 'Inter' }}
            >
              A world where every person has equal access to opportunities, 
              and every company can find the perfect talent.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm text-center">
                <div className="bg-red-100 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <value.icon className="h-8 w-8 text-red-800" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4" style={{ fontFamily: 'Poppins' }}>
                  {value.title}
                </h3>
                <p className="text-gray-600" style={{ fontFamily: 'Inter' }}>
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              style={{ fontFamily: 'Poppins' }}
            >
              Our Team
            </h2>
            <p 
              className="text-xl text-gray-600 max-w-2xl mx-auto"
              style={{ fontFamily: 'Inter' }}
            >
              Meet the innovators behind VetriaAI — experts in AI, HR, and technology 
              who are passionate about transforming recruitment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-200">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2" style={{ fontFamily: 'Poppins' }}>
                    {member.name}
                  </h3>
                  <p className="text-red-800 font-medium mb-3" style={{ fontFamily: 'Inter' }}>
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm" style={{ fontFamily: 'Inter' }}>
                    {member.background}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              style={{ fontFamily: 'Poppins' }}
            >
              Our Journey
            </h2>
            <p 
              className="text-xl text-gray-600 max-w-2xl mx-auto"
              style={{ fontFamily: 'Inter' }}
            >
              From idea to impact — the key milestones that have shaped VetriaAI
            </p>
          </div>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-center">
                <div className="flex-shrink-0 w-24 text-center">
                  <div className="bg-red-800 text-white px-4 py-2 rounded-full text-sm font-semibold" style={{ fontFamily: 'Poppins' }}>
                    {milestone.year}
                  </div>
                </div>
                <div className="flex-1 bg-white p-6 rounded-xl shadow-sm ml-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2" style={{ fontFamily: 'Poppins' }}>
                    {milestone.title}
                  </h3>
                  <p className="text-gray-600" style={{ fontFamily: 'Inter' }}>
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-red-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 
              className="text-3xl md:text-4xl font-bold text-white mb-4"
              style={{ fontFamily: 'Poppins' }}
            >
              Our Impact
            </h2>
            <p 
              className="text-xl text-red-100 max-w-2xl mx-auto"
              style={{ fontFamily: 'Inter' }}
            >
              Numbers that showcase our commitment to revolutionizing hiring
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2" style={{ fontFamily: 'Poppins' }}>
                10,000+
              </div>
              <div className="text-red-100" style={{ fontFamily: 'Inter' }}>
                Active Candidates
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2" style={{ fontFamily: 'Poppins' }}>
                500+
              </div>
              <div className="text-red-100" style={{ fontFamily: 'Inter' }}>
                Partner Companies
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2" style={{ fontFamily: 'Poppins' }}>
                1M+
              </div>
              <div className="text-red-100" style={{ fontFamily: 'Inter' }}>
                Resumes Processed
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2" style={{ fontFamily: 'Poppins' }}>
                95%
              </div>
              <div className="text-red-100" style={{ fontFamily: 'Inter' }}>
                Success Rate
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Future Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              style={{ fontFamily: 'Poppins' }}
            >
              What's Next
            </h2>
            <p 
              className="text-xl text-gray-600 max-w-2xl mx-auto"
              style={{ fontFamily: 'Inter' }}
            >
              We're just getting started. Here's what we're building next.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="bg-red-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <TrendingUp className="h-8 w-8 text-red-800" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4" style={{ fontFamily: 'Poppins' }}>
                Predictive Analytics
              </h3>
              <p className="text-gray-600" style={{ fontFamily: 'Inter' }}>
                Advanced AI that predicts career success and job satisfaction with unprecedented accuracy.
              </p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="bg-red-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Users className="h-8 w-8 text-red-800" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4" style={{ fontFamily: 'Poppins' }}>
                Global Expansion
              </h3>
              <p className="text-gray-600" style={{ fontFamily: 'Inter' }}>
                Bringing our AI-powered hiring platform to emerging markets worldwide.
              </p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="bg-red-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Award className="h-8 w-8 text-red-800" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4" style={{ fontFamily: 'Poppins' }}>
                Skill Development
              </h3>
              <p className="text-gray-600" style={{ fontFamily: 'Inter' }}>
                Personalized learning paths to help candidates develop the skills employers need.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;