/**
*
* Footer
*
*/

import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  margin: 0 auto;
  padding: 0;
`;

const Div1 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  height: auto;
  width: 100%;
  background-color: #222222;
  padding: 20px;
`;

const P = styled.p`
  color: #bdc3c7;
  font-family: sans-serif;
  width:320px;
`;
const Div2 = styled.div`
  height: 40px;
  width: 100%;
  background-color: #111111;
  font-family: sans-serif;
  padding-right: 10px;
`;

const Ul = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin: 0;
`;

const Li = styled.li`
  list-style: none;
  padding: 10px;
  color: #fff;

  &:hover {
    color: #7f8c8d;
  }
`;

function Footer() {
  return (
    <Div>
      <Div1>
        <P>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a
           type specimen book.</P>

        <P>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a
        type specimen book.</P>

      <P>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
      when an unknown printer took a galley of type and scrambled it to make a
      type specimen book.</P>

      </Div1>
      <Div2>
        <Ul>
          <Li>Inicio</Li>
          <Li>Conócenos</Li>
          <Li>Servicios</Li>
          <Li>Contáctenos</Li>
        </Ul>
      </Div2>
    </Div>
  );
}

Footer.propTypes = {

};

export default Footer;
