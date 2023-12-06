import logo from './logo.svg';
import './App.css';
import Main from './Component/Home/Main.js';
import NavBar from '../src//Component/Home/NavBar.js';
import ContactUs from './Component/contactus/ContactUs.js';
import FooTer from '../src/Component/Home/FooTer.js';
import {BrowserRouter,Route,Routes} from 'react-router-dom'

function App() {
  return (
    <div className="App">
     <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/Contact-us" element={<ContactUs />} />
        </Routes>
<FooTer />
      </BrowserRouter>

    
    </div>
  )
}

export default App;
