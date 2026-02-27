import type { IPhone } from "./interfaces/iphone"

const App = () => {
    //code ...
    const ville: string = 'Paris'
    const age: number = 5
    const isConnected: boolean = true
    const villes: string[] = ['Paris', 'Lille', 'Marseilles']
    const villes1: (string | number)[] = ['Paris', 'Lille', 'Marseilles', 5]
    
    const phone: IPhone = {
        marque: 'Apple',
        model: '17',
        couleur: 'red',
        options: ['camera', 'digit face', 'music']
    }
    return (
        <div>
            <h1>salut</h1>
            {
                ville
            }
            {
                isConnected ? (<h3>Je suis connecté!</h3>) : (<h3>Je ne suis pas connecté!</h3>)
            }
            {
                age
            }
            {
                villes
            }
            {
                villes1
            }
            {
                Object.entries(phone).map(([key, value]) => (
                    <div key={key}>
                        <strong>{key} :</strong> {Array.isArray(value) ? value.join(', ') : value}
                    </div>
                ))
            }
        </div>
    )
}
export default App