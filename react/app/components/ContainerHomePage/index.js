/**
*
* ContainerHomePage
*
*/

import React from 'react';
import SimpleSlider from '../SimpleSlider';
import Buttons from '../Buttons';
// import styled from 'styled-components';


function ContainerHomePage() {
  return (
    <div>
      <SimpleSlider />
      <Buttons text="boton" border="#3B3738" color="#3B3738" colorHover="#444444" borderHover="#444444"/>
    </div>
  );
}

ContainerHomePage.propTypes = {

};

export default ContainerHomePage;
