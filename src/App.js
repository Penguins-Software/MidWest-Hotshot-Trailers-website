import logo from './logo.svg';
import './App.css';

import SmoothScroll from 'smooth-scroll'

import BootstrapCarousel from './components/BootstrapCarousel';
import  Navigation from './components/Navigation';
import ProductCatagoryComponent from './components/ProductCatagoryComponent';
import { ContactComponent } from './components/ContactComponent';

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
})

function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <BootstrapCarousel></BootstrapCarousel>
      <br></br>
      <ProductCatagoryComponent></ProductCatagoryComponent>
      <br></br>
      <ContactComponent></ContactComponent>
    </div>
  );
}

export default App;
