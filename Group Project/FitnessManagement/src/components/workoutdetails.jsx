import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/navbar';
import Header from '../components/header';

export default function Workouts() {
  const navigate = useNavigate();

  const workoutCategories = [
    { 
      id: 1,
      name: 'Morning Yoga', 
      duration: '50 min',
      image: '🧘‍♀️',
      color: 'bg-purple-50', 
      textColor: 'text-purple-600',
      type: 'Mindfulness',
      difficulty: 'Beginner',
      calories: 180,
      equipment: 'Yoga Mat',
      description: 'Start your day with gentle yoga poses that help improve flexibility and mindfulness.',
      instructions: [
        'Begin in mountain pose with feet hip-width apart',
        'Flow through sun salutations for 10 minutes',
        'Hold warrior poses for 30 seconds each',
        'End with 10 minutes of relaxation in savasana'
      ],
      benefits: ['Improved flexibility', 'Better posture', 'Stress reduction', 'Enhanced focus']
    },
    { 
      id: 2,
      name: 'Full Body Stretch', 
      duration: '50 min',
      image: '🤸‍♀️',
      color: 'bg-pink-50', 
      textColor: 'text-pink-600',
      type: 'Flexibility',
      difficulty: 'Beginner',
      calories: 150,
      equipment: 'None',
      description: 'A comprehensive stretching routine targeting all major muscle groups.',
      instructions: [
        'Start with 5 minutes of light movement to warm up',
        'Stretch each muscle group for 2-3 minutes',
        'Hold each stretch for 30-60 seconds',
        'Focus on deep breathing throughout'
      ],
      benefits: ['Increased flexibility', 'Reduced muscle tension', 'Better circulation', 'Injury prevention']
    },
    { 
      id: 3,
      name: 'HIIT', 
      duration: '20 min',
      image: '🏃‍♀️',
      color: 'bg-orange-50', 
      textColor: 'text-orange-600',
      type: 'Cardio',
      difficulty: 'Advanced',
      calories: 300,
      equipment: 'None',
      description: 'High-intensity interval training for maximum calorie burn in minimal time.',
      instructions: [
        'Warm up with 3 minutes of light jogging',
        'Perform 30 seconds high intensity, 30 seconds rest',
        'Include burpees, mountain climbers, and jump squats',
        'Cool down with 2 minutes of walking'
      ],
      benefits: ['Fast calorie burn', 'Improved cardiovascular health', 'Increased metabolism', 'Time efficient']
    },
    { 
      id: 4,
      name: 'Dumbbell Workout', 
      duration: '45 min',
      image: '🏋️‍♂️',
      color: 'bg-blue-50', 
      textColor: 'text-blue-600',
      type: 'Strength',
      difficulty: 'Intermediate',
      calories: 280,
      equipment: 'Dumbbells',
      description: 'Build strength and muscle with this comprehensive dumbbell routine.',
      instructions: [
        'Start with 5 minutes of dynamic warm-up',
        'Perform 3 sets of 8-12 reps for each exercise',
        'Rest 60-90 seconds between sets',
        'Focus on proper form over heavy weight'
      ],
      benefits: ['Increased muscle strength', 'Better bone density', 'Improved metabolism', 'Enhanced functional movement']
    },
    { 
      id: 5,
      name: 'Cardio Blast', 
      duration: '30 min',
      image: '💪',
      color: 'bg-green-50', 
      textColor: 'text-green-600',
      type: 'Cardio',
      difficulty: 'Intermediate',
      calories: 350,
      equipment: 'None',
      description: 'An energizing cardio workout that combines various movements for maximum impact.',
      instructions: [
        'Begin with 5 minutes of dynamic stretching',
        'Alternate between high and moderate intensity',
        'Include jumping jacks, high knees, and dance moves',
        'End with 5 minutes of cool-down stretches'
      ],
      benefits: ['Heart health improvement', 'Endurance building', 'Mood enhancement', 'Weight management']
    },
    { 
      id: 6,
      name: 'Cardio Blast', 
      duration: '20 min',
      image: '🤾‍♀️',
      color: 'bg-yellow-50', 
      textColor: 'text-yellow-600',
      type: 'HIIT',
      difficulty: 'Advanced',
      calories: 250,
      equipment: 'None',
      description: 'Quick and intense cardio session perfect for busy schedules.',
      instructions: [
        'Start with 2 minutes of light movement',
        'Perform 45 seconds work, 15 seconds rest',
        'Include plyometric exercises',
        'Finish with 3 minutes of stretching'
      ],
      benefits: ['Quick results', 'Improved agility', 'Enhanced power', 'Efficient workout']
    },
    { 
      id: 7,
      name: 'Lower Body Workout', 
      duration: '35 min',
      image: '🦵',
      color: 'bg-indigo-50', 
      textColor: 'text-indigo-600',
      type: 'Strength',
      difficulty: 'Intermediate',
      calories: 220,
      equipment: 'None',
      description: 'Target your legs and glutes with this focused lower body strength routine.',
      instructions: [
        'Warm up with leg swings and hip circles',
        'Perform squats, lunges, and calf raises',
        'Complete 3 sets of 12-15 reps each',
        'Cool down with lower body stretches'
      ],
      benefits: ['Stronger legs', 'Better balance', 'Improved athletic performance', 'Toned glutes']
    },
    { 
      id: 8,
      name: 'Meditation', 
      duration: '15 min',
      image: '🧘‍♂️',
      color: 'bg-teal-50', 
      textColor: 'text-teal-600',
      type: 'Mindfulness',
      difficulty: 'Beginner',
      calories: 50,
      equipment: 'None',
      description: 'A peaceful meditation session to center your mind and reduce stress.',
      instructions: [
        'Find a comfortable seated position',
        'Close your eyes and focus on your breath',
        'Use guided meditation or soft music',
        'End with a few moments of gratitude'
      ],
      benefits: ['Stress reduction', 'Better focus', 'Emotional balance', 'Improved sleep quality']
    }
  ];

  const handleWorkoutClick = (workout) => {
    navigate(`/workout-details/${workout.id}`, { state: { workout } });
  };

  const handleAddWorkout = (workout) => {
    console.log(`Adding ${workout.name} to your workout plan`);
    // Add logic to add workout to user's plan
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
                  onClick={() => handleWorkoutClick({id: 9, name: 'Full Body HIIT', duration: '45 min'})}
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
                  onClick={() => handleWorkoutClick({id: 10, name: 'Morning Yoga Flow', duration: '30 min'})}
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
