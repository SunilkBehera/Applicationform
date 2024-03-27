
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Register from './components/Register';


function App() {
  return (
    <div className='w-full h-screen bg'>
     <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
        </Routes>

     </BrowserRouter>
    </div>
  );
}

export default App;
