import logo from './logo.svg';
import Navbar from './Components/Navbar/Navbar'
import Cards from './Components/Cards/Cards'
import Footer from './Components/Footer/Footer';
import Session from './Components/Sessions/Session';
import './App.css';

function App() {
  return (
    <>
      <div class="wrapper">
        <Navbar/>
        <main class="main-content">
          <Session/>
          <Cards/>
        </main>
        <Footer/>
      </div>
    </>
  );
}

export default App;
