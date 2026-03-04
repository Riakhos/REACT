import { useState, type ReactNode } from "react";
import { CounterContext } from "./CounterContext"

interface IContext {
    children: ReactNode
}

const CounterProvider = ({children}: IContext) => {

    const [counter, setCounter] = useState<number>(0)

    return (
        <CounterContext.Provider value={{counter, setCounter}} >
            {children}
        </CounterContext.Provider>
    )
}

export default CounterProvider