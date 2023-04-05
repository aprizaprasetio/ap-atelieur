import { Route, Routes, Navigate } from 'react-router-dom'
import PrivateRoute from './components/templates/PrivateRoute'
import GuestRoute from './components/templates/GuestRoute'
import SignIn from './components/pages/SignIn'
import Home from './components/pages/Home'

function App() {
  return (
    <Routes>
      <Route path='/' element={<PrivateRoute node={<Home />} />} />

      <Route path='/sign-in' element={<GuestRoute node={<SignIn />} />} />

      // If there no path
      <Route path='*' element={<Navigate to='/' />} />
    </Routes>
  )
}

export default App