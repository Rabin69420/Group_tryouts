import { useState } from 'react'
import LoginPage from './User/login'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import SignupPage from './User/Signup'
import Homepage from './User/homepage'
import UserDashboard from './User/Dashboard'
import Challenges from './User/Payments'
import MealsPlans from './User/Mealsplans'
import MyMealPlans from './User/Mymealplans'
import MyWorkouts from './User/Myworkouts'
import ProSuggestions from './User/suggestions'
import Workouts from './User/Workouts'
import Profile from './User/profile'
import Analytics from './User/Analytics'
import UpdateProfile from './User/Updateprofile'
import AdminDashboard from './Admin/AdminDashboard'
import AdminMeals from './Admin/AdminMeals'
import AdminRevenue from './Admin/AdminRevenue'
import AdminWorkouts from './Admin/AdminWorkouts'
import AdminUsers from './Admin/AdminUsers'
import AdminProfile from './Admin/AdminProfile'
import PlansModal from './User/plansmodel'
import NotificationsPage from './components/notifications'
import UserSubscription from './User/Payments'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      <Routes>
        <Route path='/register' element = {<SignupPage />} />
        <Route path='/login' element = {<LoginPage />} />
        <Route path = '/' element= {<Homepage />} />
        <Route path = '/dashboard' element= {<UserDashboard />} />
        <Route path = '/payments' element= {<UserSubscription />} />
        <Route path = '/meals' element= {<MealsPlans />} />
        <Route path = '/my-meal-plans' element= {<MyMealPlans />} />
        <Route path = '/suggestions' element= {<ProSuggestions />} />
        <Route path = '/workouts' element= {<Workouts />} />
        <Route path = '/my-workouts' element= {<MyWorkouts />} />
        <Route path = '/profile' element= {<Profile />} />
        <Route path = '/analytics' element= {<Analytics />} />
        <Route path = '/updateprofile' element= {<UpdateProfile />} />
        <Route path= '/admin/dashboard' element = {<AdminDashboard />} />
        <Route path= '/admin/meals' element = {<AdminMeals />} />
        <Route path= '/admin/revenue' element = {<AdminRevenue />} />
        <Route path= '/admin/workouts' element = {<AdminWorkouts />} />
        <Route path= '/admin/users' element = {<AdminUsers />} />
        <Route path= '/admin/profile' element = {<AdminProfile />} />
        <Route path= '/plansmodel' element = {<PlansModal />} />
        <Route path= '/notifications' element = {<NotificationsPage />} />



      </Routes>
    </Router>
    
    </>
  );
}

export default App
