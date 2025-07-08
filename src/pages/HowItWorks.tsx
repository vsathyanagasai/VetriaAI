import React from 'react';
import { 
  FileText, 
  Bot, 
  Shield, 
  Calendar, 
  Trophy, 
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: FileText,
      title: "Resume Upload",
      description: "Candidates upload their resumes or employers post job requirements",
      details: "AI instantly parses and extracts key information from resumes"
    },
    {
      icon: Bot,
      title: "AI Sorting",
      description: "Advanced AI algorithms analyze and rank candidates based on job fit",
      details: "Machine learning models evaluate experience, skills, and potential"
    },
    {
      icon: Shield,
      title: "Skill Testing",
      description: "Automated, adaptive tests validate candidate competencies",
      details: "Dynamic test generation with anti-cheat mechanisms"
    },
    {
      icon: Trophy,
      title: "Badge Assignment",
      description: "Candidates receive verified skill badges based on performance",
      details: "Tiered badge system: Bronze, Silver, Gold, and Elite levels"
    },
    {
      icon: Calendar,
      title: "Interview Scheduling",
      description: "Automated scheduling with top-performing candidates",
      details: "Calendar integration and automated communications"
    },
    {
      icon: CheckCircle,
      title: "Hire Decision",
      description: "Data-driven hiring decisions with comprehensive candidate insights",
      details: "Complete analytics dashboard with performance metrics"
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
              How VetriaAI Works
            </h1>
            <p 
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              style={{ fontFamily: 'Inter' }}
            >
              A seamless, AI-powered journey from resume to hire. 
              See how our intelligent system transforms the recruitment process.
            </p>
          </div>
        </div>
      </section>

      {/* Process Flow */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              style={{ fontFamily: 'Poppins' }}
            >
              The Complete Process
            </h2>
            <p 
              className="text-xl text-gray-600 max-w-2xl mx-auto"
              style={{ fontFamily: 'Inter' }}
            >
              From application to hire in six intelligent steps
            </p>
          </div>

          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col lg:flex-row items-center gap-8">
                <div className={`flex-1 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                    <div className="flex items-center mb-6">
                      <div className="bg-red-100 p-3 rounded-full mr-4">
                        <step.icon className="h-8 w-8 text-red-800" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-red-800 mb-1" style={{ fontFamily: 'Inter' }}>
                          Step {index + 1}
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900" style={{ fontFamily: 'Poppins' }}>
                          {step.title}
                        </h3>
                      </div>
                    </div>
                    <p className="text-lg text-gray-600 mb-4" style={{ fontFamily: 'Inter' }}>
                      {step.description}
                    </p>
                    <p className="text-gray-500" style={{ fontFamily: 'Inter' }}>
                      {step.details}
                    </p>
                  </div>
                </div>
                
                <div className={`flex-shrink-0 ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="bg-gradient-to-br from-red-50 to-red-100 p-8 rounded-2xl">
                    <div className="w-24 h-24 bg-red-800 rounded-full flex items-center justify-center">
                      <span className="text-2xl font-bold text-white" style={{ fontFamily: 'Poppins' }}>
                        {index + 1}
                      </span>
                    </div>
                  </div>
                </div>
                
                {index < steps.length - 1 && (
                  <div className="flex justify-center lg:hidden">
                    <ArrowRight className="h-8 w-8 text-red-800 transform rotate-90" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results & Badges System */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              style={{ fontFamily: 'Poppins' }}
            >
              Badge System & Results
            </h2>
            <p 
              className="text-xl text-gray-600 max-w-2xl mx-auto"
              style={{ fontFamily: 'Inter' }}
            >
              Our AI assigns performance-based badges that employers trust
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Poppins' }}>
                Four-Tier Badge System
              </h3>
              <div className="space-y-4">
                <div className="flex items-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                    <Trophy className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-orange-600" style={{ fontFamily: 'Poppins' }}>
                      Bronze Badge
                    </h4>
                    <p className="text-gray-600" style={{ fontFamily: 'Inter' }}>
                      Basic skill verification (60-70% score)
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mr-4">
                    <Trophy className="h-6 w-6 text-gray-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-600" style={{ fontFamily: 'Poppins' }}>
                      Silver Badge
                    </h4>
                    <p className="text-gray-600" style={{ fontFamily: 'Inter' }}>
                      Solid competency (70-80% score)
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mr-4">
                    <Trophy className="h-6 w-6 text-yellow-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-yellow-600" style={{ fontFamily: 'Poppins' }}>
                      Gold Badge
                    </h4>
                    <p className="text-gray-600" style={{ fontFamily: 'Inter' }}>
                      Advanced expertise (80-90% score)
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                    <Trophy className="h-6 w-6 text-red-800" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-800" style={{ fontFamily: 'Poppins' }}>
                      Elite Badge
                    </h4>
                    <p className="text-gray-600" style={{ fontFamily: 'Inter' }}>
                      Exceptional mastery (90%+ score)
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-red-50 to-red-100 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-red-800 mb-6" style={{ fontFamily: 'Poppins' }}>
                Proven Results
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                  <div className="text-3xl font-bold text-red-800 mb-2" style={{ fontFamily: 'Poppins' }}>
                    95%
                  </div>
                  <p className="text-sm text-gray-600" style={{ fontFamily: 'Inter' }}>
                    Prediction Accuracy
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                  <div className="text-3xl font-bold text-red-800 mb-2" style={{ fontFamily: 'Poppins' }}>
                    80%
                  </div>
                  <p className="text-sm text-gray-600" style={{ fontFamily: 'Inter' }}>
                    Time Reduction
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                  <div className="text-3xl font-bold text-red-800 mb-2" style={{ fontFamily: 'Poppins' }}>
                    60%
                  </div>
                  <p className="text-sm text-gray-600" style={{ fontFamily: 'Inter' }}>
                    Cost Savings
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                  <div className="text-3xl font-bold text-red-800 mb-2" style={{ fontFamily: 'Poppins' }}>
                    99%
                  </div>
                  <p className="text-sm text-gray-600" style={{ fontFamily: 'Inter' }}>
                    Satisfaction Rate
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Behind the Scenes */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              style={{ fontFamily: 'Poppins' }}
            >
              Behind the Scenes
            </h2>
            <p 
              className="text-xl text-gray-600 max-w-2xl mx-auto"
              style={{ fontFamily: 'Inter' }}
            >
              Advanced AI and machine learning technologies power our intelligent recruitment platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="bg-red-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Bot className="h-8 w-8 text-red-800" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4" style={{ fontFamily: 'Poppins' }}>
                Natural Language Processing
              </h3>
              <p className="text-gray-600" style={{ fontFamily: 'Inter' }}>
                Advanced NLP models parse resumes, job descriptions, and assess candidate-role compatibility.
              </p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="bg-red-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Shield className="h-8 w-8 text-red-800" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4" style={{ fontFamily: 'Poppins' }}>
                Machine Learning Models
              </h3>
              <p className="text-gray-600" style={{ fontFamily: 'Inter' }}>
                Continuously learning algorithms improve accuracy and adapt to changing job market trends.
              </p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="bg-red-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Trophy className="h-8 w-8 text-red-800" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4" style={{ fontFamily: 'Poppins' }}>
                Predictive Analytics
              </h3>
              <p className="text-gray-600" style={{ fontFamily: 'Inter' }}>
                Data-driven insights predict candidate success and job performance with remarkable accuracy.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;