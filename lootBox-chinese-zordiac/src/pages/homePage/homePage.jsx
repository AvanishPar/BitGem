import React from 'react';
import Wheel from '../../components/wheel/wheel';
import './styles.css';
import { image } from '../../constants/images';

function HomePage (){
  

return (
      <div className="home-main">
        {/* <h1>Click on the button to spin</h1> */}
        <Wheel items={image} />
      </div>
    );
  }

export default HomePage