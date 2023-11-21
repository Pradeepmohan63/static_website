
import './App.css';
import Nav from './component/nav/nav';
import Banner from './component/banner/banner';
import Banner1 from './component/banner1/banner1';
import Card from './component/card/card';
import Product from './component/product/product';
import Category from './component/category/category';
import Product1 from './component/product1/product1';
function App() {
  return (
    <div className="App">
      <Nav />
      <Banner/>
      <Banner1/>
      <Card/>
      <Product/>
      <Category/>
      <Product1/>
      
    </div>

  );
}

export default App;
