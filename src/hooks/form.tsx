import { useState, ChangeEvent } from 'react'

function useInput(initialValue: string = ''): any[] {
    const [value, setValue] = useState<string>(initialValue)

    function valueHandler(e: ChangeEvent<HTMLInputElement>): void {
        setValue(e.target.value)
    }

    return [value, valueHandler]
}

export {
    useInput,
}