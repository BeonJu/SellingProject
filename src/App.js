import './App.css';
import Topbar from './component/Topbar';
import Home from './page/Home';
import Footer from './component/Footer';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Topbar></Topbar>
      <Routes>
        <Route path='/' element={<Home />}/>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
