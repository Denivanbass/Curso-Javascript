
import './App.css'
import HelloWorld from './components/Helloword'
import Chocolate from './components/chocolate'
import Soma from './components/Soma'
import Subtracao from './components/Subtracao'

function App() {
  

  return (
    <div>
      <HelloWorld/>
      <Chocolate/>
      <Soma numOne={20} numTwo= {30}/>
      <Subtracao num1={100} num2={20}/>
    </div>
    
  )
}

export default App
