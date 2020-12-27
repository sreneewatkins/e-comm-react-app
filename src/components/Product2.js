import React, {Component} from 'react';
import dog from '../Images/dog.jpg';
import CountManager from './PurchaseButton';

class Product2 extends Component {
    render(){
      return(
        <div>
          <h1>Dog Ornament</h1>
          <h4>Description</h4>
          <h4>$13.99</h4>
          <img class="picture" src={dog} alt="Dog Ornament" />
          <CountManager />
        </div>
      );
    }
  }

  export default Product2;