import './App.css';
import Topbar from './component/Topbar';
import Home from './page/Home';
import Footer from './component/Footer';
import { Route, Routes } from 'react-router-dom';
import TopbarLogin from './component/TopbarLogin';

function App() {
  return (
    <div className="App">
      <TopbarLogin />
      {/* <Topbar></Topbar> */}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
