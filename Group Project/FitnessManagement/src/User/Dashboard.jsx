import React from 'react';
import Navbar from '../components/navbar';
import Header from '../components/header';
import { 
  Activity, 
  Flame, 
  Calendar, 
  Star, 
  TrendingUp, 
  Clock, 
  Users,
  Play,
  Plus,
  Target,
  Zap,
  Coffee,
  Apple,
  Dumbbell,
  Award,
  Trophy,
  BarChart3,
  Utensils,
  Eye
} from 'lucide-react';

export default function Dashboard() {
  const healthStats = [
    {
      id: 1,
      title: 'Total Workouts',
      value: '45',
      unit: 'sessions',
      change: 'On Track',
      icon: Dumbbell,
      color: 'bg-gradient-to-r from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-600',
      trend: 'up'
    },
    {
      id: 2,
      title: 'Calories Burned',
      value: '2,450',
      unit: 'kcal',
      change: 'Excellent',
      icon: Flame,
      color: 'bg-gradient-to-r from-red-500 to-red-600',
      bgColor: 'bg-red-50',
      textColor: 'text-red-600',
      trend: 'up'
    },
    {
      id: 3,
      title: 'Active Days',
      value: '28',
      unit: 'days',
      change: 'Great Progress',
      icon: Calendar,
      color: 'bg-gradient-to-r from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      textColor: 'text-green-600',
      trend: 'up'
    },
    {
      id: 4,
      title: 'Fitness Score',
      value: '87',
      unit: '/100',
      change: "You're Fit!",
      icon: Star,
      color: 'bg-gradient-to-r from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-600',
      trend: 'up'
    }
  ];

  const todayActivities = [
    {
      id: 1,
      name: 'Morning HIIT Workout',
      time: '2 hours ago',
      duration: '45 min',
      calories: '320 kcal',
      status: 'completed',
      icon: Zap,
      color: 'text-yellow-600 bg-yellow-100'
    },
    {
      id: 2,
      name: 'Protein Smoothie Logged',
      time: '3 hours ago',
      duration: '5 min',
      calories: '280 kcal',
      status: 'completed',
      icon: Coffee,
      color: 'text-green-600 bg-green-100'
    },
    {
      id: 3,
      name: 'Evening Yoga Session',
      time: '1 day ago',
      duration: '30 min',
      calories: '150 kcal',
      status: 'completed',
      icon: Activity,
      color: 'text-purple-600 bg-purple-100'
    },
    {
      id: 4,
      name: 'Strength Training',
      time: '2 days ago',
      duration: '60 min',
      calories: '400 kcal',
      status: 'completed',
      icon: Dumbbell,
      color: 'text-blue-600 bg-blue-100'
    }
  ];

  const quickActions = [
    {
      id: 1,
      title: 'Start Workout',
      subtitle: 'Begin your session',
      icon: Play,
      color: 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700'
    },
    {
      id: 2,
      title: 'Log Meal',
      subtitle: 'Track your nutrition',
      icon: Utensils,
      color: 'bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700'
    },
    {
      id: 3,
      title: 'View Progress',
      subtitle: 'Check your stats',
      icon: BarChart3,
      color: 'bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700'
    },
    {
      id: 4,
      title: 'Set Goals',
      subtitle: 'Plan your targets',
      icon: Target,
      color: 'bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex">
      <Navbar />
      <div className="flex-1 flex flex-col">
        <Header />
        <div className="flex-1 p-8 overflow-y-auto">
          <div className="max-w-7xl mx-auto space-y-8">
            
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full -mr-16 -mt-16 opacity-60"></div>
              <div className="relative z-10">
                <div>
                  <h1 className="text-3xl font-bold text-gray-800 mb-2">Welcome back, Champion! 🏆</h1>
                  <p className="text-gray-600 text-lg">Ready to crush your fitness goals today?</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {healthStats.map((stat) => {
                const IconComponent = stat.icon;
                return (
                  <div key={stat.id} className={`${stat.bgColor} rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:scale-105 relative overflow-hidden group`}>
                    <div className="absolute -top-2 -right-2 w-16 h-16 bg-white/20 rounded-full group-hover:scale-110 transition-transform"></div>
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-4">
                        <div className={`w-12 h-12 ${stat.color} rounded-xl flex items-center justify-center shadow-lg`}>
                          <IconComponent size={24} className="text-white" />
                        </div>
                        <div className={`px-2 py-1 ${stat.bgColor} rounded-full`}>
                          <TrendingUp size={16} className={stat.textColor} />
                        </div>
                      </div>
                      <h3 className="text-sm font-semibold text-gray-600 mb-1">{stat.title}</h3>
                      <div className="flex items-baseline space-x-1 mb-2">
                        <span className={`text-3xl font-bold ${stat.textColor}`}>{stat.value}</span>
                        <span className="text-sm text-gray-500">{stat.unit}</span>
                      </div>
                      <p className="text-xs text-gray-500">{stat.change}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                    <Clock size={20} className="text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800">Recent Activities</h2>
                </div>
                <button className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center space-x-1">
                  <Eye size={16} />
                  <span>View All</span>
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {todayActivities.map((activity) => {
                  const IconComponent = activity.icon;
                  return (
                    <div key={activity.id} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors">
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${activity.color}`}>
                        <IconComponent size={20} />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-gray-800">{activity.name}</p>
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <span>{activity.time}</span>
                          <span>•</span>
                          <span>{activity.duration}</span>
                          <span>•</span>
                          <span>{activity.calories}</span>
                        </div>
                      </div>
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center">
                  <Zap size={20} className="text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Quick Actions</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {quickActions.map((action) => {
                  const IconComponent = action.icon;
                  return (
                    <button
                      key={action.id}
                      className={`${action.color} text-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group`}
                    >
                      <div className="flex flex-col items-center text-center space-y-3">
                        <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                          <IconComponent size={24} />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg">{action.title}</h3>
                          <p className="text-sm opacity-90">{action.subtitle}</p>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
