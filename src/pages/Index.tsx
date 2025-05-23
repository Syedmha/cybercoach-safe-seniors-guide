
import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Shield, TrendingUp, Play } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-white">
      {/* Header */}
      <header className="bg-indigo-600 text-white py-6 px-4 shadow-lg">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row md:items-center md:justify-start">
          <div className="flex items-center justify-center md:justify-start">
            <img 
              src="/lovable-uploads/0e075f78-7381-4b25-8c4d-bc86966d6221.png" 
              alt="CyberCoach Logo" 
              className="w-12 h-12 mr-3"
            />
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-center md:text-left">CyberCoach</h1>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
            Welcome to CyberCoach!
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Learn to stay safe online with interactive quizzes and daily safety tips designed specifically for Australian seniors.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {/* Quiz Card */}
          <Link to="/quiz" className="group">
            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="bg-indigo-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-indigo-200 transition-colors">
                <Play className="w-10 h-10 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Take a Quiz</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Test your knowledge with real-world scam scenarios
              </p>
            </div>
          </Link>

          {/* Safety Tips Card */}
          <Link to="/tips" className="group">
            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200 transition-colors">
                <Shield className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Safety Tips</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Daily tips to keep you safe online
              </p>
            </div>
          </Link>

          {/* Progress Card */}
          <Link to="/progress" className="group">
            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-orange-200 transition-colors">
                <TrendingUp className="w-10 h-10 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">My Progress</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Track your learning journey
              </p>
            </div>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Index;
