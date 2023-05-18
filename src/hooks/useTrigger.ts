import { useState } from 'react'
import { IUseInput } from './useInput'

function useTrigger({ initialValue }: IUseInput<boolean>): any[] {
    const [value, setValue] = useState<boolean>(initialValue)

    function valueTrigger(): void {
        setValue(current => !current)
    }

    return [value, valueTrigger]
}

export default useTrigger