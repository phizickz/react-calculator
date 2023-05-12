import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';


function App() {
  const [inputs, setInputs] = useState([{ category: '', amount: 0 }]);

  const handleAddInput = () => {
    setInputs([...inputs, { category: '', amount: 0 }]);
  };
  return (
  <div className='container'>
      {inputs.map((input,index) => (
    <div className='input-container' key={index}>
      <input
      type="text"
      value={input.category}
      onChange={(e) => {
        const newInputs = [...inputs];
        newInputs[index].category = e.target.value;
        setInputs(newInputs);
      }}
    />
    <input
    type="number"
    value={input.amount}
    onChange={(e) => {
      const newInputs = [...inputs];
      newInputs[index].amount = parseFloat(e.target.value);
      setInputs(newInputs);
    }}
    />
    </div>
  ))}
      <button onClick={handleAddInput}>Add input</button>
  </div>
  );

}

export default App;
