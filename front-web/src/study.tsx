import React, {useState , useEffect} from 'react';

const App = () => { 
    const [counter, setCounter] = useState(0);

    useEffect( () => {
        console.log('componente inicializado');
    }, [] );

    useEffect( () => {
        console.log('o contador mudou de valor');
    }, [counter] );

    return (
        <div className="container mt-5">

            <button 
                className="btn btn-primary mr-5"
                onClick={() => setCounter(counter + 1)}
            >
                +
            </button>
            <span>
               {counter}
            </span>
            <button 
                className="btn btn-primary ml-5"
                onClick={() => setCounter(counter - 1)}
            >
                -
            </button>
            {counter > 5 && <h1>O valor é maior que 5</h1>}
            {counter < 0 && setCounter(0)}
        </div>
    )
}

export default App;