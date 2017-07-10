/**
*
* Header
*
*/

import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router';

const Div = styled.div`
  margin-bottom: 20px;
`;

const Head = styled.div`
  width: 100%;
  height: auto;
  background-color: #FFFFF0;
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Items = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Child = styled.li`
  list-style: none;
  font-family: sans-serif;
`;

const Nav = styled.div`
  width: 100%;
  height: 50px;
  background-color: #f1c40f;
  color: #2c3e50;
  font-size: 16px;
  font-family: sans-serif;
`;

const Ul = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 0;
`;

const Li = styled.li`
  list-style: none;
  padding: 16px 20px 16px 20px;
  transition: 1s;

  &:hover {
		background-color: #111111;
    color: #f1c40f;
    transition: .5s;
    box-shadow: 0px -3px 0px #c0392b inset;
	}
`;

function Header() {
  return (
    <Div>
      <Head>
        <img src="http://lorempixel.com/output/technics-q-c-320-100-8.jpg"/>
        <Items>
          <Child>Telefono</Child>
          <Child>Redes Sociales</Child>
        </Items>
      </Head>
      <Nav>
        <Ul>
          <Li>Inicio</Li>
          <Li>Conócenos</Li>
          <Li>Servicios</Li>
          <Li>Contáctenos</Li>
        </Ul>
      </Nav>
    </Div>
  );
}

Header.propTypes = {

};

export default Header;
