/**
*
* Buttons
*
*/

import React, { PropTypes} from 'react';
import styled from 'styled-components';


function Buttons(props) {

  const Button = styled.a`
    padding: 5px 10px 5px 10px;
    border: 3px solid ${props.border};
    border-radius: 5px;
    color: ${props.color};
    font-family: sans-serif;
    font-weight: bold;

    &:hover{
      color: ${props.colorHover};
      border: 3px solid ${props.borderHover};
      transition: .5s;
    }
  `;

  return (
    <div>
      <Button>{props.text}</Button>
    </div>
  );
}

Buttons.propTypes = {
  text:PropTypes.string
};

export default Buttons;
