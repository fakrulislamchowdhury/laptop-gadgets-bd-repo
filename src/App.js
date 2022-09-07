import './App.css';
import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom';
import Header from './Pages/Shared/Header/Header';
import Home from './Pages/Home/Home';
import Contact from './Pages/Contact/Contact';
import About from './Pages/About/About';
import Login from './Pages/Login/Login';
import Products from './Pages/Products/Products';
import AddProduct from './Pages/AddProduct/AddProduct';
import NotFound from './Pages/NotFound/NotFound';
import Footer from './Pages/Shared/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/contact'>
            <Contact></Contact>
          </Route>
          <Route path='/about'>
            <About></About>
          </Route>
          <Route path='/login'>
            <Login></Login>
          </Route>
          <Route path='/products'>
            <Products></Products>
          </Route>
          <Route path='/addProduct'>
            <AddProduct></AddProduct>
          </Route>

          <Route path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
