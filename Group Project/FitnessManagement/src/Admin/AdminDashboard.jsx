import React, { useState } from 'react';
import { Users, DollarSign, Activity, Utensils, TrendingUp, Target, Clock, Zap, Plus } from 'lucide-react';
import StatCard from '../components/statcard';
import AddMealModal from '../components/Addmeal';
import AddWorkoutModal from '../components/Addworkouts';
import AdminNavbar from '../components/adminnavbar';
import AdminHeader from '../components/adminheader';

export default function AdminOverview() {
  const [showMealModal, setShowMealModal] = useState(false);
  const [showWorkoutModal, setShowWorkoutModal] = useState(false);

  const dashboardStats = {
    totalUsers: 2847,
    activeUsers: 2156,
    totalWorkouts: 4567,
    totalMeals: 3245,
    monthlyRevenue: 87650,
    totalRevenue: 456789,
    growthRate: 23.5,
    conversionRate: 12.8,
    avgSessionTime: 45,
    userRetention: 89.2
  };

  const handleAddMeal = (data) => {
    console.log('Added new meal:', data);
    // Handle the new meal data here
  };

  const handleAddWorkout = (data) => {
    console.log('Added new workout:', data);
    // Handle the new workout data here
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Admin Navbar */}
      <AdminNavbar />
      
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Admin Header */}
        <AdminHeader />
        
        {/* Page Content */}
        <div className="flex-1 p-8">
          <div className="space-y-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard Overview</h1>
              <p className="text-gray-600">Welcome to your fitness platform management center</p>
            </div>

            {/* Enhanced Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <StatCard 
                title="Total Users" 
                value={dashboardStats.totalUsers.toLocaleString()} 
                icon={Users} 
                color="blue"
                subtitle="Active community"
              />
              <StatCard 
                title="Monthly Revenue" 
                value={`$${dashboardStats.monthlyRevenue.toLocaleString()}`} 
                icon={DollarSign} 
                color="green"
                subtitle="This month"
              />
              <StatCard 
                title="Total Workouts" 
                value={dashboardStats.totalWorkouts.toLocaleString()} 
                icon={Activity} 
                color="purple"
                subtitle="Available programs"
              />
              <StatCard 
                title="Total Meals" 
                value={dashboardStats.totalMeals.toLocaleString()} 
                icon={Utensils} 
                color="orange"
                subtitle="Nutrition plans"
              />
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h3>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    onClick={() => setShowMealModal(true)}
                    className="p-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all shadow-lg transform hover:-translate-y-1"
                  >
                    <Utensils className="w-6 h-6 mb-2" />
                    <span className="font-medium">Add Meal</span>
                  </button>
                  <button
                    onClick={() => setShowWorkoutModal(true)}
                    className="p-4 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-xl hover:from-purple-600 hover:to-purple-700 transition-all shadow-lg transform hover:-translate-y-1"
                  >
                    <Activity className="w-6 h-6 mb-2" />
                    <span className="font-medium">Add Workout</span>
                  </button>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Recent Activity</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-xl">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                      <Users className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">25 new users joined</p>
                      <p className="text-xs text-gray-500">2 hours ago</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-xl">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <DollarSign className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">$2,450 revenue today</p>
                      <p className="text-xs text-gray-500">1 hour ago</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Add Meal Modal */}
            {showMealModal && (
              <AddMealModal
                onClose={() => setShowMealModal(false)}
                onSave={handleAddMeal}
              />
            )}

            {/* Add Workout Modal */}
            {showWorkoutModal && (
              <AddWorkoutModal
                onClose={() => setShowWorkoutModal(false)}
                onSave={handleAddWorkout}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
