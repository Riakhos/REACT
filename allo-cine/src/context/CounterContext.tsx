import { createContext } from "react"

interface IProvider {
    counter: number
    setCounter: (n: number) => void
}

export const CounterContext = createContext<IProvider>({
  counter: 0,
  setCounter: () => {}
});