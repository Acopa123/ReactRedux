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

class SimpleSlider extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      autoplay: true,
      adaptiveHeight: true
    };
    return (
      <Div>
        <Slider {...settings}>
          <div><img src="http://lorempixel.com/output/technics-q-c-1280-480-1.jpg"/></div>
          <div><img src="http://lorempixel.com/output/technics-q-c-1280-480-2.jpg"/></div>
          <div><img src="http://lorempixel.com/output/technics-q-c-1280-480-3.jpg"/></div>
          <div><img src="http://lorempixel.com/output/technics-q-c-1280-480-4.jpg"/></div>
          <div><img src="http://lorempixel.com/output/technics-q-c-1280-480-5.jpg"/></div>
          <div><img src="http://lorempixel.com/output/technics-q-c-1280-480-6.jpg"/></div>
        </Slider>
      </Div>
    );
  }
}

SimpleSlider.propTypes = {

};

export default SimpleSlider;
