
import './App.css'
import HelloWorld from './components/Helloword'
import Chocolate from './components/chocolate'
import Soma from './components/Soma'
import Subtracao from './components/Subtracao'
import Card from './components/Card'

function App() {
  

  return (
    <div>
      <HelloWorld/>
      <Chocolate/>
      <Soma numOne= {20} numTwo= {30}/>
      <Subtracao num1= {100} num2= {20}/>
      <Card 
      src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
      alt= "teste"
      title="Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
      description="Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday"
      />
    </div>
    
  )
}

export default App
