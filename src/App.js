import './App.css';
import Topbar from './component/topbar/Topbar';
import Home from './page/home/Home';
import Footer from './component/footer/Footer';

function App() {
  return (
    <div className="App">
      <Topbar></Topbar>
      <Home></Home>
      <Footer></Footer>
    </div>
  );
}

export default App;