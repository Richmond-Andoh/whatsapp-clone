import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './routes/Home';
import ChatRouter from './routes/ChatRouter';

function App() {
  return (

    <>
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/chatpage' element={ <ChatRouter /> } />
      </Routes>
  </>
  
  );
}

export default App;
