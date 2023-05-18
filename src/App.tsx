import Pages from './components/pages'
import { Route, Routes, Navigate } from 'react-router-dom'
import PrivateRoute from './components/templates/PrivateRoute'
import GuestRoute from './components/templates/GuestRoute'
import SignIn from './components/pages/SignIn'
import Home from './components/pages/Home'

function App() {
  return <Pages />
}

export default App