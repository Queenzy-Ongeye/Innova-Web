import logo from './logo.svg';
import './App.css';
import NavBar from './Components/Navbar';
import About from './Components/About/About';
import Home from './Components/Home/Home'; 
import Product from './Components/Product';
// // import Team from './Components/Team';
// // import Contact from './Components/Contact';

function App() {
  let component
  switch (window.location.pathname) {
    case '/home':
      component = <Home />
      break
    case '/about':
      component = <About />
    case '/product':
      component = <Product />
    // case '/team':
    //   component = <Team />
    // case '/contact':
    //   component = <Contact />

  }
  return (
    <div className="App">
      <NavBar />
      {component}
    </div>
  );
}

export default App;
