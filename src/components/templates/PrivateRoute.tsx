import { useEffect, ReactNode } from 'react'
import { Navigate } from 'react-router-dom'
import useAuthStatus from 'src/api/handler/auth/useAuthStatus'
import LinearLoading from '../molecules/LinearLoading'

function PrivateRoute({ node }: { node: ReactNode }): JSX.Element {
    const authStatus = useAuthStatus()

    useEffect((): void => {
        console.info(authStatus)
    }, [authStatus])

    if (authStatus === 'fetching') return <LinearLoading />

    if (authStatus === 'signed-out') return <Navigate to='/sign-in' />

    return <>{node}</>
}

export default PrivateRoute