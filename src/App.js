import './App.css';
import {useState , useEffect} from 'react';


function App() {

  const [inputText , setInputText] = useState('');
  const [inputHandler , setInputHandler] = useState('');
  const [lengthData , setLengthData] = useState(0);
  const [operation , setOperation] = useState('');

  useEffect(() => {
    const name = 'vaibhav gramni'
    setInputHandler(name)
    setInputText(name)
  } , [])


  const textUtils = (operation) => {
    if(operation === 'CAPITALIZE'){
      setOperation('CAPITALIZE')
      setInputText((inputHandler) => inputHandler.charAt(0).toUpperCase() + inputHandler.slice(1).toLowerCase())
    }else if(operation === 'SPACEREMOVER'){
      setOperation('SPACEREMOVER')
      setInputText((prevText) => prevText.trim()) 
    }else if(operation === 'UPPERCASE'){
      setOperation('UPPERCASE')
      setInputText((prevText) => prevText.toUpperCase())
    }else if(operation === 'CAMELCASE'){
      setOperation('CAMELCASE')
      setInputText((prevText) => prevText.split(" ").map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(" "))
    }else if(operation === 'CLEARINPUT'){
      setOperation('CLEARINPUT')
      setInputText('')
      setInputHandler('')
    }else if(operation === 'LENGTH'){
      setOperation('LENGTH')
      setLengthData(inputText.length)
    }
  }

  return (
    <div className="App">
      <div className='text-util'>
        <h1 id='heading'> TextUtility </h1>
        <span>Enter Input : <input value={inputHandler} onChange={(event) => {setInputText(event.target.value); setInputHandler(event.target.value)}}/></span>
        
        <br></br>
        <button onClick={() => textUtils('CAPITALIZE')}>
          Capitalize
        </button>
        <br></br>
        <button onClick={() => textUtils('SPACEREMOVER')}>
          Space Remover
        </button>
        <br></br>
        <button onClick={() => textUtils('CAMELCASE')}>
          Camelcase
        </button>
        <br></br>
        <button onClick={() => textUtils('UPPERCASE')}>
          Uppercase
        </button>
        <br></br>
        <button onClick={() => textUtils('CLEARINPUT')}>
          clear Input
        </button>
        <br></br>
        <button onClick={() => textUtils('LENGTH')}>
          Length
        </button>

        <h1>{operation === 'LENGTH' ? 
      (
        lengthData  
      ) : 
      (
        inputText 
      )
      }</h1>
      </div>

      

    </div>
  );
}

export default App;
