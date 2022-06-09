import Recat from 'react';
import { Route, Switch } from 'react-router-dom'
import Footer from './Component/Footer/Footer';
import Header from './Component/Header/Header';
import Home from './Container/Home';
import About from './Container/About';
import Product from './Container/Product';
import Service from './Container/Service';
import Gallary from './Container/Gallary';
import Contact from './Container/Contact';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route  exact path={"/"} component={Home}/>
        <Route  exact path={"/About"} component={About}/>
        <Route  exact path={"/Product"} component={Product}/>
        <Route  exact path={"/Service"} component={Service}/>
        <Route  exact path={"/Gallary"} component={Gallary}/>
        <Route  exact path={"/Contact"} component={Contact}/>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
