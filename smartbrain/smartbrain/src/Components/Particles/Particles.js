//resources
//https://www.npmjs.com/package/react-tsparticles
//https://www.npmjs.com/package/tsparticles

import React, {Component} from 'react';
import Particles from 'react-tsparticles';

const particlesOptions={
  particles: {
    line_linked: {
      shadow: {
        enable: true,
        color: "#3CA9D1",
        blur: 5
      }
    }
  }
}

class ParticleShow extends Component{

    render(){
        return (
            <Particles params={particlesOptions}/>
        );
    };

}


export default ParticleShow;
