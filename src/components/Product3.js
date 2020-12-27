import React, {Component} from 'react';
import disk from '../Images/disk.jpeg';
import CountManager from './PurchaseButton';

class Product3 extends Component {
    render(){
      return(
        <div>
          <h1>Fauci Ornament</h1>
          <h4>Description</h4>
          <h4>$17.99</h4>
          <img class="picture" src={disk} alt="2020 Ornament" />
          <CountManager />
        </div>
      );
    }
  }

  export default Product3;