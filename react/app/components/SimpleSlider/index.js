/**
*
* SimpleSlider
*
*/

import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';

const Div = styled.div`
  margin: 0px;
`;

const Img = styled.img`
  width: 100%;
  height: auto;
`

class SimpleSlider extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      autoplay: true,
      adaptiveHeight: true
    };
    return (
      <Div>
        <Slider {...settings}>
          <div><Img src="http://lorempixel.com/output/technics-q-c-1280-320-1.jpg"/></div>
          <div><Img src="http://lorempixel.com/output/technics-q-c-1280-320-2.jpg"/></div>
          <div><Img src="http://lorempixel.com/output/technics-q-c-1280-320-3.jpg"/></div>
          <div><Img src="http://lorempixel.com/output/technics-q-c-1280-320-1.jpg"/></div>
          <div><Img src="http://lorempixel.com/output/technics-q-c-1280-320-5.jpg"/></div>
          <div><Img src="http://lorempixel.com/output/technics-q-c-1280-320-6.jpg"/></div>
        </Slider>
      </Div>
    );
  }
}

SimpleSlider.propTypes = {

};

export default SimpleSlider;
