import './App.css';
import AllRoutes from './Components/Routes';
import Footer from './Pages/Footer';
import Navbar from './Pages/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <AllRoutes/>
      <Footer/>
     </div>
  );
}

export default App;
