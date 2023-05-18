import { useState, ChangeEvent } from 'react'

export interface IUseInput<TInitial> {
    initialValue: TInitial,
}

function useInput({ initialValue }: IUseInput<string>): any[] {
    const [value, setValue] = useState<string>(initialValue)

    function valueHandler(e: ChangeEvent<HTMLInputElement>): void {
        setValue(e.target.value)
    }

    return [value, valueHandler]
}

export default useInput