import './App.css';
import {
  Outlet
} from 'react-router-dom'
import { useState } from 'react/cjs/react.development';
import { useCallback, useMemo } from 'react';
import Header from './components/header';

function App() {
  const [number, setNumber] = useState(0)

  // const data = ["dcselek"]
  const data = useMemo(() => {
    return { user: "dcselek" }
  }, []) //useMemo kullandığımız için header sürekli render olmuyor

  const decrement = useCallback(() => {
    setNumber((prevState) => prevState - 1)
  }, [])
  return (
    <div className="App">
      <h1>👁 dcselek's progress 👁</h1>

      <div>
        <Header data={data} decrement={decrement} />
        {/* <span>{number}</span>
        <br />
        <button onClick={() => setNumber(number + 1)}>+</button>
        <br /> */}
      </div>
      <Outlet /> {/* Diğer sayfaları app altında göstermek adına Outlet kullanıyoruz */}
    </div>
  );
}

export default App;
