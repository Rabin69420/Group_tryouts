import React from 'react';
import Navbar from '../components/navbar';
import Header from '../components/header';

export default function Workouts() {
  const workoutCategories = [
    { 
      name: 'Morning Yoga', 
      duration: '50 min',
      image: '🧘‍♀️',
      color: 'bg-purple-50', 
      textColor: 'text-purple-600',
      type: 'Mindfulness'
    },
    { 
      name: 'Full Body Stretch', 
      duration: '50 min',
      image: '🤸‍♀️',
      color: 'bg-pink-50', 
      textColor: 'text-pink-600',
      type: 'Flexibility'
    },
    { 
      name: 'HIIT', 
      duration: '20 min',
      image: '🏃‍♀️',
      color: 'bg-orange-50', 
      textColor: 'text-orange-600',
      type: 'Cardio'
    },
    { 
      name: 'Dumbbell Workout', 
      duration: '45 min',
      image: '🏋️‍♂️',
      color: 'bg-blue-50', 
      textColor: 'text-blue-600',
      type: 'Strength'
    },
    { 
      name: 'Cardio Blast', 
      duration: '30 min',
      image: '💪',
      color: 'bg-green-50', 
      textColor: 'text-green-600',
      type: 'Cardio'
    },
    { 
      name: 'Cardio Blast', 
      duration: '20 min',
      image: '🤾‍♀️',
      color: 'bg-yellow-50', 
      textColor: 'text-yellow-600',
      type: 'HIIT'
    },
    { 
      name: 'Lower Body Workout', 
      duration: '35 min',
      image: '🦵',
      color: 'bg-indigo-50', 
      textColor: 'text-indigo-600',
      type: 'Strength'
    },
    { 
      name: 'Meditation', 
      duration: '15 min',
      image: '🧘‍♂️',
      color: 'bg-teal-50', 
      textColor: 'text-teal-600',
      type: 'Mindfulness'
    }
  ];

  const handleWorkoutClick = (workout) => {
    console.log(`Viewing ${workout.name} workout details`);
    // Add your navigation or workout details logic here
    // Example: navigate(`/workout/${workout.name.toLowerCase().replace(' ', '-')}`);
  };

  const handleAddWorkout = (workout) => {
    console.log(`Adding ${workout.name} to your workout plan`);
    // Add logic to add workout to user's plan
    // You can show a success message or navigate to another page
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Navbar />
      <div className="flex-1 flex flex-col">
        <Header />
        <div className="flex-1 p-8 overflow-y-auto">
          <div>
            {/* Header Section */}
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Workout Browser</h2>
              
              {/* Search Only */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search workouts"
                  className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-64 bg-white"
                />
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">🔍</span>
              </div>
            </div>
            
            {/* Workout Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {workoutCategories.map((workout, index) => (
                <div 
                  key={index} 
                  onClick={() => handleWorkoutClick(workout)}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 cursor-pointer hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  {/* Workout Image/Icon */}
                  <div className={`${workout.color} h-40 flex items-center justify-center`}>
                    <span className="text-6xl">{workout.image}</span>
                  </div>
                  
                  {/* Workout Info */}
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-800 mb-1">{workout.name}</h3>
                    <p className="text-sm text-gray-500">{workout.duration}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Featured Section */}
            <div className="mt-12 bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Featured Workouts</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div 
                  onClick={() => handleWorkoutClick({name: 'Full Body HIIT', duration: '45 min'})}
                  className="bg-gray-50 rounded-xl p-6 cursor-pointer hover:bg-gray-100 transition-colors"
                >
                  <h4 className="font-semibold text-gray-800 mb-2">Full Body HIIT</h4>
                  <p className="text-sm text-gray-600 mb-4">45 minutes • High intensity</p>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      handleAddWorkout({name: 'Full Body HIIT', duration: '45 min'});
                    }}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition-colors"
                  >
                    Add Workout
                  </button>
                </div>
                <div 
                  onClick={() => handleWorkoutClick({name: 'Morning Yoga Flow', duration: '30 min'})}
                  className="bg-gray-50 rounded-xl p-6 cursor-pointer hover:bg-gray-100 transition-colors"
                >
                  <h4 className="font-semibold text-gray-800 mb-2">Morning Yoga Flow</h4>
                  <p className="text-sm text-gray-600 mb-4">30 minutes • Beginner friendly</p>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      handleAddWorkout({name: 'Morning Yoga Flow', duration: '30 min'});
                    }}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition-colors"
                  >
                    Add Workout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
