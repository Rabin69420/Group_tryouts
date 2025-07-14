import React, { useState, useEffect } from 'react';
import { Calendar, Clock, CreditCard, CheckCircle, AlertTriangle, Crown, Zap } from 'lucide-react';
import Navbar from '../components/navbar';
import Header from '../components/header';

export default function UserSubscription() {
  const [userSubscription, setUserSubscription] = useState(null);
  const [showRenewalModal, setShowRenewalModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [loading, setLoading] = useState(false);

  // Mock user subscription data
  const mockUserData = {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@example.com',
    currentPlan: 'Premium',
    subscriptionStatus: 'active',
    subscriptionStart: '2024-12-01',
    subscriptionEnd: '2025-01-15',
    totalSpent: 299.99
  };

  // Updated subscription plans with same features, different durations
  const subscriptionPlans = [
    {
      id: 'basic',
      name: 'Basic',
      price: 9.99,
      duration: '1 month',
      features: [
        'Access to all workouts',
        'Personalized meal plans',
        'Progress tracking',
        'Priority support'
      ],
      color: 'bg-blue-500',
      icon: <Zap className="w-6 h-6" />
    },
    {
      id: 'standard',
      name: 'Standard',
      price: 49.99,
      duration: '6 months',
      features: [
        'Access to all workouts',
        'Personalized meal plans',
        'Progress tracking',
        'Priority support'
      ],
      color: 'bg-purple-500',
      icon: <Crown className="w-6 h-6" />
    },
    {
      id: 'premium',
      name: 'Premium',
      price: 89.99,
      duration: '12 months',
      features: [
        'Access to all workouts',
        'Personalized meal plans',
        'Progress tracking',
        'Priority support'
      ],
      color: 'bg-gold-500',
      icon: <Crown className="w-6 h-6" />
    }
  ];

  useEffect(() => {
    setUserSubscription(mockUserData);
  }, []);

  // Calculate days remaining
  const calculateDaysRemaining = () => {
    if (!userSubscription) return 0;
    
    const today = new Date();
    const endDate = new Date(userSubscription.subscriptionEnd);
    const timeDiff = endDate.getTime() - today.getTime();
    const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
    
    return daysDiff > 0 ? daysDiff : 0;
  };

  const daysRemaining = calculateDaysRemaining();
  const isExpiringSoon = daysRemaining <= 7;
  const isExpired = daysRemaining === 0;

  const handleRenewSubscription = (plan) => {
    setSelectedPlan(plan);
    setShowRenewalModal(true);
  };

  const handleConfirmRenewal = async () => {
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      // Calculate new end date based on plan duration
      const newEndDate = new Date();
      if (selectedPlan.duration === '1 month') {
        newEndDate.setMonth(newEndDate.getMonth() + 1);
      } else if (selectedPlan.duration === '6 months') {
        newEndDate.setMonth(newEndDate.getMonth() + 6);
      } else if (selectedPlan.duration === '12 months') {
        newEndDate.setMonth(newEndDate.getMonth() + 12);
      }
      
      setUserSubscription(prev => ({
        ...prev,
        subscriptionEnd: newEndDate.toISOString().split('T')[0],
        currentPlan: selectedPlan.name
      }));
      
      setLoading(false);
      setShowRenewalModal(false);
      setSelectedPlan(null);
    }, 2000);
  };

  const getStatusColor = () => {
    if (isExpired) return 'bg-red-100 text-red-800';
    if (isExpiringSoon) return 'bg-yellow-100 text-yellow-800';
    return 'bg-green-100 text-green-800';
  };

  const getStatusIcon = () => {
    if (isExpired) return <AlertTriangle className="w-5 h-5 text-red-600" />;
    if (isExpiringSoon) return <Clock className="w-5 h-5 text-yellow-600" />;
    return <CheckCircle className="w-5 h-5 text-green-600" />;
  };

  // Renewal Modal Component
  const RenewalModal = () => (
    <div className="fixed inset-0 backdrop-blur-md bg-white bg-opacity-30 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-2xl">
        <div className="text-center mb-6">
          <div className={`w-16 h-16 ${selectedPlan?.color} rounded-full flex items-center justify-center mx-auto mb-4 text-white`}>
            {selectedPlan?.icon}
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Renew {selectedPlan?.name} Plan</h2>
          <p className="text-gray-600">Continue enjoying premium features</p>
        </div>

        <div className="bg-gray-50 rounded-lg p-4 mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-600">Plan</span>
            <span className="font-semibold">{selectedPlan?.name}</span>
          </div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-600">Duration</span>
            <span className="font-semibold">{selectedPlan?.duration}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Price</span>
            <span className="font-bold text-lg">${selectedPlan?.price}</span>
          </div>
        </div>

        <div className="flex space-x-3">
          <button
            onClick={() => setShowRenewalModal(false)}
            className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            disabled={loading}
          >
            Cancel
          </button>
          <button
            onClick={handleConfirmRenewal}
            className="flex-1 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors flex items-center justify-center space-x-2"
            disabled={loading}
          >
            {loading ? (
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
            ) : (
              <>
                <CreditCard className="w-4 h-4" />
                <span>Renew Now</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );

  if (!userSubscription) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Navbar */}
      <Navbar />
      
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <Header />
        
        {/* Page Content */}
        <div className="flex-1 p-6">
          <div className="max-w-4xl mx-auto space-y-6">
            {/* Header */}
            <div className="text-center">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">My Subscription</h1>
              <p className="text-gray-600">Manage your fitness plan and renewals</p>
            </div>

            {/* Subscription Status Card */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">Subscription Status</h2>
                <span className={`px-4 py-2 rounded-full text-sm font-semibold ${getStatusColor()} flex items-center space-x-2`}>
                  {getStatusIcon()}
                  <span>
                    {isExpired ? 'Expired' : isExpiringSoon ? 'Expiring Soon' : 'Active'}
                  </span>
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Days Remaining */}
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <Calendar className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <div className={`font-bold text-lg ${isExpired ? 'text-red-600' : isExpiringSoon ? 'text-yellow-600' : 'text-blue-600'}`}>
                    {daysRemaining}
                  </div>
                  <div className="text-sm text-gray-600">Days Remaining</div>
                </div>

                {/* Renewal Date */}
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <Clock className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <div className="font-bold text-green-600 text-lg">
                    {new Date(userSubscription.subscriptionEnd).toLocaleDateString()}
                  </div>
                  <div className="text-sm text-gray-600">Expires On</div>
                </div>
              </div>
            </div>

            {/* Renewal Options */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Renewal Options</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {subscriptionPlans.map((plan) => (
                  <div key={plan.id} className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 relative">
                    {plan.name === userSubscription.currentPlan && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                          Current Plan
                        </span>
                      </div>
                    )}
                    
                    <div className="text-center mb-4">
                      <div className={`w-12 h-12 ${plan.color} rounded-full flex items-center justify-center mx-auto mb-3 text-white`}>
                        {plan.icon}
                      </div>
                      <h3 className="text-lg font-bold text-gray-900">{plan.name}</h3>
                      <div className="text-2xl font-bold text-gray-900 mt-2">
                        ${plan.price}
                        <span className="text-sm font-normal text-gray-600">/{plan.duration}</span>
                      </div>
                    </div>

                    <ul className="space-y-2 mb-6">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <button
                      onClick={() => handleRenewSubscription(plan)}
                      className={`w-full py-2 px-4 rounded-lg font-medium transition-colors ${
                        plan.name === userSubscription.currentPlan
                          ? 'bg-purple-600 text-white hover:bg-purple-700'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {plan.name === userSubscription.currentPlan ? 'Renew Plan' : 'Switch Plan'}
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Subscription History */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Subscription Details</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Account Information</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Name:</span>
                      <span className="font-medium">{userSubscription.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Email:</span>
                      <span className="font-medium">{userSubscription.email}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Member Since:</span>
                      <span className="font-medium">{new Date(userSubscription.subscriptionStart).toLocaleDateString()}</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Billing Information</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Current Plan:</span>
                      <span className="font-medium">{userSubscription.currentPlan}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Status:</span>
                      <span className="font-medium capitalize">{userSubscription.subscriptionStatus}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Total Spent:</span>
                      <span className="font-medium">${userSubscription.totalSpent}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Renewal Modal */}
      {showRenewalModal && <RenewalModal />}
    </div>
  );
}
