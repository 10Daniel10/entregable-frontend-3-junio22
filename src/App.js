import React, {useState} from 'react';
import Cabecera from './components/Cabecera';
import Listado from './components/Listado';

function App() {
  const [total, setTotal] = useState(0);

  const incremento = () => {
    setTotal(total + 1);
}

  return (
    <div className="App">
      <Cabecera total={total}/>
      <Listado incremento={incremento}/>
    </div>
  );
}

export default App;
