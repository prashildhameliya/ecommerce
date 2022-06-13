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
import Auth from './Container/Auth';
import PubliceRote from './Route/PubliceRote';
import PrivateRote from './Route/PrivateRote';
import Dialog from './Container/Dialog';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <PubliceRote  exact path={"/"} component={Home}/>
        <PubliceRote  exact path={"/About"} component={About}/>
        <PrivateRote  exact path={"/Product"} component={Product}/>
        <PubliceRote  exact path={"/Service"} component={Service}/>
        <PubliceRote  exact path={"/Dialog"} component={Dialog}/>
        <PubliceRote  exact path={"/Gallary"} component={Gallary}/>
        <PubliceRote  restricated={true} exact path={"/Auth"} component={Auth}/>
        <PubliceRote  exact path={"/Contact"} component={Contact}/>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
