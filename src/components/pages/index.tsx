import { Route, Routes, Navigate } from 'react-router-dom'
import featureItemsConfig from 'src/config/featureItemsConfig'
import Home from './Home'
import SignIn from './SignIn'
import PrivateRoute from '../templates/PrivateRoute'
import GuestRoute from '../templates/GuestRoute'

function Pages() {
    return (
        <Routes>
            <Route path='/sign-in' element={<GuestRoute node={<SignIn />} />} />
            <Route path='*' element={<Navigate to='/' />} />
            {
                featureItemsConfig.map(item => (
                    <Route
                        path={item.href}
                        element={<PrivateRoute node={<Home />} />}
                        key={item.href}
                    />
                ))
            }
        </Routes>
    )
}

export default Pages