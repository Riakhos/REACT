import { useState, type ReactNode } from "react"
import { CounterContext } from "./CounterContext"

interface IContext {
    children: ReactNode
}

const CounterProvider = ({children}: IContext) => {

    const [counter, setCounter] = useState<number>(() => {
        const stored = localStorage.getItem('counter')
        return stored !== null ? JSON.parse(stored) : 0
    })

    const increment = () => {
        setCounter(counter + 1)
        localStorage.setItem('counter', JSON.stringify(counter + 1))
    }

    return (
        <CounterContext.Provider value={{counter, increment, setCounter}} >
            {children}
        </CounterContext.Provider>
    )
}
export default CounterProvider