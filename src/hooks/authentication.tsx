import { User } from 'firebase'
import { useState, useEffect, FormEvent } from 'react'
import firebase from '../backend/firebaseConfig'

// Type & Interface Declarations
type AuthStatusType = 'signed-in' | 'signed-out' | 'fetching'

interface useAuth {
    userData: User | null,
    errorMessage: string | null,
    signInHandler: (e: FormEvent<HTMLDivElement>) => void,
}

// The Custom Hooks Functions
function useAuth(email: string, password: string): useAuth {
    const [userData, setUserData] = useState<User | null>(null)
    const [errorMessage, setErrorMessage] = useState<string | null>(null)

    function signInHandler(e: FormEvent<HTMLDivElement>): void {
        e.preventDefault()

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((userCredential): void => {
                setUserData(userCredential.user)
            })
            .catch((error): void => {
                setErrorMessage(error.message)
            })
    }

    return {
        userData,
        errorMessage,
        signInHandler,
    }
}

function useAuthStatus(): AuthStatusType {
    const [userStatus, setUserData] = useState<AuthStatusType>('fetching')

    useEffect((): void => {
        firebase.auth().onAuthStateChanged((user): undefined => {
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

export {
    useAuth,
    useAuthStatus,
}