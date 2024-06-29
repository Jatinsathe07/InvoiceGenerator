import { useState } from 'react'
import './App.css'
import { Container } from 'react-bootstrap'
import InvoiceForm from './components/InvoiceForm'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App d-flex flex-column align-item-center justify-content-center w-100">
      <Container>
        <InvoiceForm></InvoiceForm>
      </Container>

    </div>
  
  )
}

export default App
