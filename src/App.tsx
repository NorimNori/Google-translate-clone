import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { useStore } from './assets/hooks/useStore';

function App() {
    const { fromLanguage, setFromLanguage } = useStore()

    return (
        <>
            <div className='app'>
                <h1>Google translate</h1>
                <button onClick={() => {
                    setFromLanguage( 'es' )
                }}>Cambiar a Espanol</button>
                {fromLanguage}
            </div>
        </>
    )
}

export default App
