import React, {Component} from 'react'; 
import {BrowserRouter as Router, Route} from 'react-router-dom';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import NavBar from './components/NavBarPage';
import Product1 from './components/Product1';
import Product2 from './components/Product2';
import Product3 from './components/Product3';
import Product4 from './components/Product4';

class Routes extends Component {
    render() {
        return (
            <Router>
                <NavBar />
                <div>
                    <hr/>
                    <Route name="Home" exact path="/" component={HomePage} />
                    <Route name="About" exact path="/about" component={AboutPage} />
                    <Route name="Contact Us" exact path="/contact" component={ContactPage} />
                    <Route name="Product1" exact path="/product1" component={Product1} />
                    <Route name="Product2" exact path="/product2" component={Product2} />
                    <Route name="Product3" exact path="/product3" component={Product3} />
                    <Route name="Product4" exact path="/product4" component={Product4} />
                </div>
            </Router>
        )
    }
}
export default Routes;