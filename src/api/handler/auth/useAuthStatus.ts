import { useState, useEffect } from 'react'
import firebaseApp from 'src/api/client/firebaseApp'
import { AuthStatusType } from 'src/types/auth'

function useAuthStatus(): AuthStatusType {
    const [userStatus, setUserData] = useState<AuthStatusType>('fetching')

    useEffect((): void => {
        firebaseApp.auth().onAuthStateChanged((user): undefined => {
            if (user === null) {
                setUserData('signed-out')
                return undefined
            }

            setUserData('signed-in')
            return undefined
        })
    }, [])

    return userStatus
}

export default useAuthStatus