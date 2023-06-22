import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';


function App() {

  return (
    <div>
      <h1>Miniblog</h1>
      <BrowserRouter>
        <div className='container'>
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
