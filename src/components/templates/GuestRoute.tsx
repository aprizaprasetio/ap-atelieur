import { useEffect, ReactNode } from 'react'
import { Navigate } from 'react-router-dom'
import { LinearProgress } from '@mui/material'
import { useAuthStatus } from '../../hooks/authentication'

function GuestRoute({ node }: { node: ReactNode }): JSX.Element {
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

    if (authStatus === 'signed-in') return <Navigate to='/' />

    return <>{node}</>
}

export default GuestRoute