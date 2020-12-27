import React, {Component} from 'react';
import goat from '../Images/goat.jpeg';
import CountManager from './PurchaseButton';

class Product4 extends Component {
    render(){
      return(
        <div>
          <h1>Ball Ornament</h1>
          <h4>Description</h4>
          <h4>$10.99</h4>
          <img class="picture" src={goat} alt="Ball Ornament" />
          <CountManager />
        </div>
      );
    }
  }

  export default Product4;