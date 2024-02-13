import './App.css'
import Counter from './counter';

function App() {
  function hendelClick(){
    alert('not Click');
  }
  const clickTwo = () =>{
    alert('click 2');
  }
  const addToFive = (num) =>{
    alert(num + 5)
  }

  return (
    <>
      <h3>React core Concept 3</h3>
      <Counter></Counter>
      <button onClick={hendelClick}>Clickme..</button>
      <button onClick={clickTwo}>Click2</button>
      <button onClick={() =>{
        alert('Comon Year')
      }}>Add</button>

      <button onClick={() =>{
        addToFive(4)
      }}>Five</button>
    </>
  )
}

export default App
