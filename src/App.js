import logo from './logo.svg';
import './App.css';
import Navbar from './Nav/Navbar';
import About from './About/About';
import Home from './Home/Home'; 
import Product from './Product/Product';
import Team from './Team/Team';
// // import Team from './Components/Team';
// // import Contact from './Components/Contact';

function App() {
  // let component
  // switch (window.location.pathname) {
  //   case '/home':
  //     component = <Home />
  //     break
  //   case '/about':
  //     component = <About />
  //   case '/product':
  //     component = <Product />
  //   // case '/team':
  //   //   component = <Team />
  //   // case '/contact':
  //   //   component = <Contact />

  // }
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Product />
      <Team />
      {/* {component} */}
    </div>
  );
}

export default App;
