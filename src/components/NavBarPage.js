import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class NavBar extends Component {
    render() {
        return(
            <div className="nav">
                <Link to='/'>Home</Link> |
                <Link to='/about'> About</Link> |
                <Link to='/contact'> Contact Us</Link>
            </div>
        );
    }
}
export default NavBar;