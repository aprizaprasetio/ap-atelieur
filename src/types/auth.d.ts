import { FormEvent } from 'react'

export type AuthStatusType = 'signed-in' | 'signed-out' | 'fetching'
export type AuthResultType = {
    userData: User | null,
    errorMessage: string | null,
    signInHandler: (e: FormEvent<HTMLDivElement>) => void,
}