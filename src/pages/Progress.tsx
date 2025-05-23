
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, TrendingUp, Trophy, Target, BookOpen } from 'lucide-react';

const Progress = () => {
  // Mock data - in a real app this would come from a database or local storage
  const stats = {
    quizzesCompleted: 5,
    totalQuizzes: 10,
    tipsRead: 8,
    totalTips: 15,
    streak: 7,
    level: "Cyber Aware"
  };

  const achievements = [
    {
      id: 1,
      title: "First Quiz Complete",
      description: "Completed your first cyber safety quiz",
      icon: Trophy,
      earned: true,
      date: "2024-01-15"
    },
    {
      id: 2,
      title: "Safety Reader",
      description: "Read 5 safety tips",
      icon: BookOpen,
      earned: true,
      date: "2024-01-18"
    },
    {
      id: 3,
      title: "Week Warrior",
      description: "Used the app for 7 days in a row",
      icon: Target,
      earned: true,
      date: "2024-01-22"
    },
    {
      id: 4,
      title: "Quiz Master",
      description: "Complete all available quizzes",
      icon: Trophy,
      earned: false,
      date: null
    }
  ];

  const recentActivity = [
    { date: "Today", activity: "Read 'Think Before You Click' safety tip" },
    { date: "Yesterday", activity: "Completed Phone Scams quiz with 100% score" },
    { date: "2 days ago", activity: "Read 'Strong Passwords Matter' safety tip" },
    { date: "3 days ago", activity: "Completed Email Safety quiz with 80% score" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-white">
      <header className="bg-indigo-600 text-white py-6 px-4">
        <div className="max-w-4xl mx-auto flex items-center gap-4">
          <Link to="/" className="text-white hover:text-indigo-200">
            <ArrowLeft className="w-8 h-8" />
          </Link>
          <div className="flex-1">
            <h1 className="text-2xl md:text-3xl font-bold">My Progress</h1>
            <p className="text-indigo-200 text-lg">Track your cyber safety journey</p>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Stats Overview */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Trophy className="w-8 h-8 text-indigo-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800">{stats.quizzesCompleted}</h3>
            <p className="text-gray-600 text-lg">Quizzes Completed</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <BookOpen className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800">{stats.tipsRead}</h3>
            <p className="text-gray-600 text-lg">Tips Read</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800">{stats.streak}</h3>
            <p className="text-gray-600 text-lg">Day Streak</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-800">{stats.level}</h3>
            <p className="text-gray-600 text-lg">Current Level</p>
          </div>
        </div>

        {/* Progress Bars */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Quiz Progress</h3>
            <div className="mb-4">
              <div className="flex justify-between text-lg mb-2">
                <span className="text-gray-600">Completed</span>
                <span className="font-semibold text-gray-800">
                  {stats.quizzesCompleted}/{stats.totalQuizzes}
                </span>
              </div>
              <div className="bg-gray-200 rounded-full h-3">
                <div 
                  className="bg-indigo-600 h-3 rounded-full transition-all duration-500"
                  style={{ width: `${(stats.quizzesCompleted / stats.totalQuizzes) * 100}%` }}
                ></div>
              </div>
            </div>
            <Link
              to="/quiz"
              className="w-full bg-indigo-600 text-white py-3 px-4 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition-colors block text-center"
            >
              Continue Learning
            </Link>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Safety Tips Progress</h3>
            <div className="mb-4">
              <div className="flex justify-between text-lg mb-2">
                <span className="text-gray-600">Read</span>
                <span className="font-semibold text-gray-800">
                  {stats.tipsRead}/{stats.totalTips}
                </span>
              </div>
              <div className="bg-gray-200 rounded-full h-3">
                <div 
                  className="bg-green-600 h-3 rounded-full transition-all duration-500"
                  style={{ width: `${(stats.tipsRead / stats.totalTips) * 100}%` }}
                ></div>
              </div>
            </div>
            <Link
              to="/tips"
              className="w-full bg-green-600 text-white py-3 px-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors block text-center"
            >
              Read More Tips
            </Link>
          </div>
        </div>

        {/* Achievements */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-6">Achievements</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {achievements.map(achievement => {
              const IconComponent = achievement.icon;
              return (
                <div
                  key={achievement.id}
                  className={`p-4 rounded-lg border-2 transition-all ${
                    achievement.earned
                      ? 'border-yellow-300 bg-yellow-50'
                      : 'border-gray-200 bg-gray-50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      achievement.earned
                        ? 'bg-yellow-100'
                        : 'bg-gray-200'
                    }`}>
                      <IconComponent className={`w-6 h-6 ${
                        achievement.earned
                          ? 'text-yellow-600'
                          : 'text-gray-400'
                      }`} />
                    </div>
                    <div className="flex-1">
                      <h4 className={`font-semibold text-lg ${
                        achievement.earned ? 'text-gray-800' : 'text-gray-500'
                      }`}>
                        {achievement.title}
                      </h4>
                      <p className={`text-base ${
                        achievement.earned ? 'text-gray-600' : 'text-gray-400'
                      }`}>
                        {achievement.description}
                      </p>
                      {achievement.earned && achievement.date && (
                        <p className="text-sm text-yellow-600 font-medium">
                          Earned on {achievement.date}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Progress;
