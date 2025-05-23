
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield, Check, AlertTriangle, Phone, Mail } from 'lucide-react';

const safetyTips = [
  {
    id: 1,
    category: "Email Safety",
    icon: Mail,
    title: "Think Before You Click",
    tip: "Never click links in unexpected emails. If an email claims to be from your bank or government, call them directly using official contact details.",
    read: false
  },
  {
    id: 2,
    category: "Phone Scams",
    icon: Phone,
    title: "Hang Up on Pressure",
    tip: "Legitimate organisations never demand immediate payment over the phone. If someone pressures you to act quickly, hang up and call back on official numbers.",
    read: false
  },
  {
    id: 3,
    category: "Password Safety",
    icon: Shield,
    title: "Strong Passwords Matter",
    tip: "Use different passwords for important accounts. Consider using a password manager or write them down and keep them in a secure place.",
    read: false
  },
  {
    id: 4,
    category: "Online Shopping",
    icon: Shield,
    title: "Shop Safely Online",
    tip: "Only shop on websites that start with 'https://' and have good reviews. Never save your credit card details unless it's a trusted retailer.",
    read: false
  },
  {
    id: 5,
    category: "Social Media",
    icon: AlertTriangle,
    title: "Protect Your Privacy",
    tip: "Don't share personal information like your full name, address, or when you're away from home on social media platforms.",
    read: false
  },
  {
    id: 6,
    category: "Software Updates",
    icon: Shield,
    title: "Keep Your Devices Updated",
    tip: "Regularly update your computer, phone, and apps. These updates often include important security fixes that protect you from new threats.",
    read: false
  }
];

const SafetyTips = () => {
  const [tips, setTips] = useState(safetyTips);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const markAsRead = (tipId: number) => {
    setTips(tips.map(tip => 
      tip.id === tipId ? { ...tip, read: true } : tip
    ));
  };

  const categories = [...new Set(tips.map(tip => tip.category))];
  const filteredTips = selectedCategory 
    ? tips.filter(tip => tip.category === selectedCategory)
    : tips;

  const readCount = tips.filter(tip => tip.read).length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-white">
      <header className="bg-indigo-600 text-white py-6 px-4">
        <div className="max-w-4xl mx-auto flex items-center gap-4">
          <Link to="/" className="text-white hover:text-indigo-200">
            <ArrowLeft className="w-8 h-8" />
          </Link>
          <div className="flex-1">
            <h1 className="text-2xl md:text-3xl font-bold">Safety Tips</h1>
            <p className="text-indigo-200 text-lg">{readCount} of {tips.length} tips read</p>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Category Filter */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Categories</h2>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-2 rounded-lg text-lg font-medium transition-colors ${
                selectedCategory === null
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
              }`}
            >
              All Tips
            </button>
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg text-lg font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-indigo-600 text-white'
                    : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Tips Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {filteredTips.map(tip => {
            const IconComponent = tip.icon;
            return (
              <div
                key={tip.id}
                className={`bg-white rounded-xl shadow-lg p-6 border transition-all duration-200 ${
                  tip.read ? 'border-green-200 bg-green-50' : 'border-gray-100 hover:shadow-xl'
                }`}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${
                    tip.read ? 'bg-green-100' : 'bg-indigo-100'
                  }`}>
                    <IconComponent className={`w-6 h-6 ${
                      tip.read ? 'text-green-600' : 'text-indigo-600'
                    }`} />
                  </div>
                  <div className="flex-1">
                    <span className={`text-sm font-medium px-2 py-1 rounded ${
                      tip.read ? 'bg-green-100 text-green-800' : 'bg-indigo-100 text-indigo-800'
                    }`}>
                      {tip.category}
                    </span>
                    <h3 className="text-xl font-semibold text-gray-800 mt-2 mb-2">
                      {tip.title}
                    </h3>
                  </div>
                  {tip.read && (
                    <Check className="w-6 h-6 text-green-600 flex-shrink-0" />
                  )}
                </div>
                
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  {tip.tip}
                </p>
                
                {!tip.read && (
                  <button
                    onClick={() => markAsRead(tip.id)}
                    className="w-full bg-indigo-600 text-white py-3 px-4 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition-colors"
                  >
                    Mark as Read
                  </button>
                )}
              </div>
            );
          })}
        </div>

        {/* Progress Section */}
        <div className="mt-12 bg-white rounded-xl shadow-lg p-8 text-center">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Your Progress</h3>
          <div className="bg-gray-200 rounded-full h-4 mb-4">
            <div 
              className="bg-indigo-600 h-4 rounded-full transition-all duration-500"
              style={{ width: `${(readCount / tips.length) * 100}%` }}
            ></div>
          </div>
          <p className="text-lg text-gray-600 mb-6">
            You've read {readCount} out of {tips.length} safety tips ({Math.round((readCount / tips.length) * 100)}%)
          </p>
          <Link
            to="/quiz"
            className="inline-block bg-indigo-600 text-white py-4 px-8 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition-colors"
          >
            Test Your Knowledge
          </Link>
        </div>
      </main>
    </div>
  );
};

export default SafetyTips;
