/**
*
* Header
*
*/

import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router';

const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`;

const Div = styled.div`
  margin-bottom: 20px;
`;

const Head = styled.div`
  width: 100%;
  height: auto;
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

  &:hover{
    display: block;
		background-color: #111111;
    transition: .5s;
    box-shadow: 0px -3px 0px #c0392b inset;
	}
`;

const A = styled.a`
  padding: 16px;
  color: #ffffff;

  &:hover {
		color: #f1c40f;
	}
`;

function Header() {
  return (
    <Div>
      <Container>
        <Head>
          <img src="http://lorempixel.com/output/technics-q-c-320-100-8.jpg"/>
          <Items>
            <Child>Telefono</Child>
            <Child>Redes Sociales</Child>
          </Items>
        </Head>
      </Container>
      <Nav>
        <Ul>
          <Li><A href="#">Inicio</A></Li>
          <Li><A href="#">Conócenos</A></Li>
          <Li><A href="#">Servicios</A>
          <ul className='uls'>
            <li><a href="#">Sub Menu 1</a></li>
            <li><a href="#">Sub Menu 2</a></li>
            <li><a href="#">Sub Menu 3</a></li>
          </ul>
          </Li>
          <Li><A href="#">Contáctenos</A></Li>
        </Ul>
      </Nav>
    </Div>
  );
}

Header.propTypes = {

};

export default Header;
