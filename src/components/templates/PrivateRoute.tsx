import { useEffect, ReactNode } from 'react'
import { Navigate } from 'react-router-dom'
import { LinearProgress } from '@mui/material'
import useAuthStatus from 'src/api/handler/auth/useAuthStatus'

function PrivateRoute({ node }: { node: ReactNode }): JSX.Element {
    const authStatus = useAuthStatus()

    useEffect((): void => {
        console.info(authStatus)
    }, [authStatus])

    if (authStatus === 'fetching') return (
        <LinearProgress sx={{
            position: 'fixed',
            width: '100vw',
            bottom: 0,
            left: 0,
        }} />
    )

    if (authStatus === 'signed-out') return <Navigate to='/sign-in' />

    return <>{node}</>
}

export default PrivateRoute