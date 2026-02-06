// import { useState } from 'react'
import './App.css'
import './style/style.css'

function App() {


  function Main(){
    return(
      <main>
        <h1>Handleliste</h1>
      </main>
    )
  }

  function InputVare(){
    return(
      <form className='input' >
        <label>
          <input type="text" placeholder='Egg..'/>
        </label>
      </form>
    )
  }

  
  function AntallVare(){

          function IncreaseValue() {
      const input = document.getElementById('numberInputPlus');
      input.stepUp(); 
    }

      function DecreaseValue() {
      const input = document.getElementById('numberInputMinus');
      input.stepDown(); 
    }

    
    // function Counter() {
    //   const [count, setCount] = useState(0);
  
    //   const HandleIncrease = () => {
    //     setCount(count + 1);
    //   };
  
    //   const HandleDecrease = () => {
    //     setCount(count + 1);
    //   };

  return(

    <form className='input' >
      <button id='numberInputPlus' onClick={IncreaseValue}>+</button>
        <input type="number" id="quantity" name="quantity" min="1" max="10" step="1" value="1" />
      <button id='numberInputMinus' onClick={DecreaseValue}>-</button>
    </form>
  )
}

  function LeggTilVare(){
    const HandleClick = ()=> {
      console.log("Lagt til")
    }
    return(
      <button onClick={HandleClick}>Legg til</button>
    )
  }


return (
  
  <div className='container'>
      <Main />
      <InputVare />
      <AntallVare />
      <LeggTilVare />
  </div>

  )
}

export default App
