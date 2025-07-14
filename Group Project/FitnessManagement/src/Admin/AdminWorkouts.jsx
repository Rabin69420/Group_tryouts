import React, { useState, useEffect } from 'react';
import { Plus, Search, Edit, Trash2, X } from 'lucide-react';
import AddWorkoutModal from '../components/Addworkouts';
import AdminNavbar from '../components/adminnavbar';
import AdminHeader from '../components/adminheader';

export default function AdminWorkouts() {
  const [workouts, setWorkouts] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editingWorkout, setEditingWorkout] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const mockWorkouts = [
    { 
      id: 1, 
      name: 'HIIT Cardio Blast', 
      category: 'Cardio', 
      duration: 30, 
      difficulty: 'Intermediate', 
      equipment: 'None', 
      goal: 'Weight Loss',
      workoutType: 'High Intensity',
      calories: 350,
      createdAt: '2025-01-09'
    },
    { 
      id: 2, 
      name: 'Upper Body Strength', 
      category: 'Strength', 
      duration: 45, 
      difficulty: 'Advanced', 
      equipment: 'Dumbbells', 
      goal: 'Weight Gain',
      workoutType: 'Strength Training',
      calories: 280,
      createdAt: '2025-01-11'
    },
    { 
      id: 3, 
      name: 'Yoga Flow Harmony', 
      category: 'Flexibility', 
      duration: 60, 
      difficulty: 'Beginner', 
      equipment: 'Yoga Mat', 
      goal: 'Maintenance',
      workoutType: 'Low Intensity',
      calories: 180,
      createdAt: '2025-01-07'
    },
    { 
      id: 4, 
      name: 'Core Crusher Pro', 
      category: 'Strength', 
      duration: 20, 
      difficulty: 'Intermediate', 
      equipment: 'None', 
      goal: 'Weight Loss',
      workoutType: 'Medium Intensity',
      calories: 200,
      createdAt: '2025-01-06'
    }
  ];

  useEffect(() => {
    setWorkouts(mockWorkouts);
  }, []);

  const handleAddWorkout = (newWorkout) => {
    setWorkouts(prev => [...prev, newWorkout]);
  };

  const handleEditWorkout = (workoutId) => {
    const workoutToEdit = workouts.find(workout => workout.id === workoutId);
    setEditingWorkout(workoutToEdit);
    setShowEditModal(true);
  };

  const handleUpdateWorkout = (updatedWorkout) => {
    setWorkouts(prev => prev.map(workout => 
      workout.id === updatedWorkout.id ? updatedWorkout : workout
    ));
    setShowEditModal(false);
    setEditingWorkout(null);
  };

  const handleDeleteWorkout = (workoutId) => {
    if (window.confirm('Are you sure you want to delete this workout?')) {
      setWorkouts(prev => prev.filter(workout => workout.id !== workoutId));
    }
  };

  const filteredWorkouts = workouts.filter(workout => {
    return workout.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const getGoalColor = (goal) => {
    switch (goal) {
      case 'Weight Loss':
        return 'bg-red-100 text-red-800';
      case 'Weight Gain':
        return 'bg-green-100 text-green-800';
      case 'Maintenance':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getWorkoutTypeColor = (workoutType) => {
    switch (workoutType) {
      case 'High Intensity':
        return 'bg-red-100 text-red-800';
      case 'Medium Intensity':
        return 'bg-yellow-100 text-yellow-800';
      case 'Low Intensity':
        return 'bg-green-100 text-green-800';
      case 'Strength Training':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const EditWorkoutModal = ({ workout, onClose, onSave }) => {
    const [formData, setFormData] = useState({
      name: workout.name,
      duration: workout.duration,
      difficulty: workout.difficulty,
      equipment: workout.equipment,
      goal: workout.goal,
      workoutType: workout.workoutType,
      calories: workout.calories
    });

    const handleSubmit = (e) => {
      e.preventDefault();
      onSave({
        ...workout,
        ...formData
      });
    };

    const handleChange = (e) => {
      setFormData(prev => ({
        ...prev,
        [e.target.name]: e.target.value
      }));
    };

    return (
      <div className="fixed inset-0 backdrop-blur-md bg-white bg-opacity-30 flex items-center justify-center z-50">
        <div className="bg-white rounded-2xl p-6 w-full max-w-md max-h-[90vh] overflow-y-auto shadow-2xl">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-gray-900">Edit Workout</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Workout Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Duration (minutes)
              </label>
              <input
                type="number"
                name="duration"
                value={formData.duration}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Difficulty
              </label>
              <select
                name="difficulty"
                value={formData.difficulty}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                required
              >
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Equipment
              </label>
              <input
                type="text"
                name="equipment"
                value={formData.equipment}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Goal
              </label>
              <select
                name="goal"
                value={formData.goal}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                required
              >
                <option value="Weight Loss">Weight Loss</option>
                <option value="Weight Gain">Weight Gain</option>
                <option value="Maintenance">Maintenance</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Workout Type
              </label>
              <select
                name="workoutType"
                value={formData.workoutType}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                required
              >
                <option value="High Intensity">High Intensity</option>
                <option value="Medium Intensity">Medium Intensity</option>
                <option value="Low Intensity">Low Intensity</option>
                <option value="Strength Training">Strength Training</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Calories
              </label>
              <input
                type="number"
                name="calories"
                value={formData.calories}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                required
              />
            </div>

            <div className="flex space-x-3 pt-4">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
              >
                Update Workout
              </button>
            </div>
          </form>
        </div>
      </div>
    );
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
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Workout Management</h1>
                <p className="text-gray-600">Manage your fitness programs</p>
              </div>
              <button
                onClick={() => setShowAddModal(true)}
                className="px-6 py-3 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-xl hover:from-purple-600 hover:to-purple-700 transition-all font-medium shadow-lg flex items-center space-x-2"
              >
                <Plus className="w-5 h-5" />
                <span>Add New Workout</span>
              </button>
            </div>

            {/* Search */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="relative max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search workouts..."
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            {/* Workouts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredWorkouts.map((workout) => (
                <div key={workout.id} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-1">{workout.name}</h3>
                    </div>
                    <div className="flex flex-col space-y-2">
                      <span className={`px-3 py-1 text-xs font-semibold rounded-full ${getGoalColor(workout.goal)}`}>
                        {workout.goal}
                      </span>
                      <span className={`px-3 py-1 text-xs font-semibold rounded-full ${getWorkoutTypeColor(workout.workoutType)}`}>
                        {workout.workoutType}
                      </span>
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-3 bg-purple-50 rounded-lg">
                        <div className="font-bold text-purple-600 text-lg">{workout.duration}</div>
                        <div className="text-xs text-gray-600">Minutes</div>
                      </div>
                      <div className="text-center p-3 bg-blue-50 rounded-lg">
                        <div className="font-bold text-blue-600 text-lg">{workout.calories}</div>
                        <div className="text-xs text-gray-600">Calories</div>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Difficulty</span>
                      <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                        workout.difficulty === 'Beginner' ? 'bg-green-100 text-green-800' :
                        workout.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {workout.difficulty}
                      </span>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Equipment</span>
                      <span className="text-sm font-medium text-gray-900">{workout.equipment}</span>
                    </div>
                  </div>

                  <div className="flex justify-end space-x-2">
                    <button 
                      onClick={() => handleEditWorkout(workout.id)}
                      className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                      title="Edit Workout"
                    >
                      <Edit className="w-4 h-4" />
                    </button>
                    <button 
                      onClick={() => handleDeleteWorkout(workout.id)}
                      className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                      title="Delete Workout"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Add Workout Modal */}
            {showAddModal && (
              <AddWorkoutModal
                onClose={() => setShowAddModal(false)}
                onSave={handleAddWorkout}
              />
            )}

            {/* Edit Workout Modal */}
            {showEditModal && editingWorkout && (
              <EditWorkoutModal
                workout={editingWorkout}
                onClose={() => {
                  setShowEditModal(false);
                  setEditingWorkout(null);
                }}
                onSave={handleUpdateWorkout}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
