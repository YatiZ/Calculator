
import { useState } from 'react';
import * as math from 'mathjs';
import './App.css';
import './components/Button.js'
import Button from './components/Button.js';
import Input from './components/Input.js';


function App() {
  const [text, setText] = useState([])
  const [result, setResult] = useState("")



  const textButton = (val)=>{
    if(val === " " && text[text.length -1]=== " "){
      return;
    }
    setText((text) => [...text, val]);
  }
  const calculateData = () =>{
    try{
      let input = text.join("")
      console.log('input ',input)
      const cleanedInput = input.replace(/÷/g, '/').replace(/x/g, '*');
      console.log('clearInput',cleanedInput)
      
    setResult(math.evaluate(cleanedInput));
    }catch(error){
      setResult("error")
      console.log(error)
    }
  }

  const clearData =() =>{
    setText([])
    setResult("")
  }

  const ButtonColor = "orange";
  return (
    <>
    <h1 className='title'>My Calculator</h1>
    <div className="App">
      
      <div className='calculator-wrapper'>
          <Input text={text} result={result}/>
          <div className='row'>
            <Button symbol="1" handleClick={textButton}/>
            <Button symbol="2" handleClick={textButton}/>
            <Button symbol="3" handleClick={textButton}/>
            <Button symbol="+" color={ButtonColor} handleClick={textButton}/>
          </div>
          <div className='row'>
            <Button symbol="4" handleClick={textButton}/>
            <Button symbol="5" handleClick={textButton}/>
            <Button symbol="6" handleClick={textButton}/>
            <Button symbol="-" color={ButtonColor} handleClick={textButton}/>
            
          </div>
          <div className='row'>
            <Button symbol="7" handleClick={textButton}/>
            <Button symbol="8" handleClick={textButton}/>
            <Button symbol="9" handleClick={textButton}/>
            <Button symbol="÷" color={ButtonColor} handleClick={textButton}/>
          </div>
          <div className='row'>
            <Button symbol="0" handleClick={textButton}/>
            <Button symbol="." handleClick={textButton}/>
            <Button symbol="=" handleClick={calculateData}/>
            <Button symbol="*" color={ButtonColor} handleClick={textButton}/>
          </div>
          <Button symbol="Clear" color="red" handleClick={clearData}/>
      </div>

    </div>
    </>
  );
}

export default App;
 