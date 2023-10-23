import { useState } from 'react';
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  const onClickPlus = () => {
    setCount(count + 1)
  }

  const onClickMinus = () => {
    setCount(count - 1)
  }

  const onClickReset = () => {
    setCount(0)
  }

    return (
        <div className="container">
            <header>Counter</header>
            <div className="count">{count}</div>
            <div className='btns'>
                <button onClick={onClickPlus}>plus</button>
                <button onClick={onClickReset}>reset</button>
                <button onClick={onClickMinus}>minus</button>
            </div>
        </div>
    )
}

export default App;
