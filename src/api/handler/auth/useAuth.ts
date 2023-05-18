import { User } from 'firebase'
import { useState, FormEvent } from 'react'
import firebaseApp from 'src/api/client/firebaseApp'
import { AuthResultType } from 'src/types/auth'

// interface IUseAuth {
//     userData: User | null,
//     errorMessage: string | null,
//     signInHandler: (e: FormEvent<HTMLDivElement>) => void,
// }

interface IUseAuth {
    email: string,
    password: string,
}

function useAuth({ email = '', password = '' }: IUseAuth): AuthResultType {
    const [userData, setUserData] = useState<User | null>(null)
    const [errorMessage, setErrorMessage] = useState<string | null>(null)

    function signInHandler(e: FormEvent<HTMLDivElement>): void {
        e.preventDefault()

        firebaseApp.auth().signInWithEmailAndPassword(email, password)
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

export default useAuth