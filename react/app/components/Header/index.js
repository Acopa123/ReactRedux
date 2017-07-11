/**
*
* Header
*
*/

import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router';
import {Icon} from 'react-fa';
import {Container} from 'semantic-ui-react';
import Menu, {SubMenu, MenuItem} from 'rc-menu';

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
  color: #3B3738;
  font-size: 16px;
  font-family: sans-serif;

  &:hover{
    display: block;
		background-color: #111111;
    color: #f1c40f;
    transition: .5s;
    box-shadow: 0px -3px 0px #c0392b inset;
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
          <Link to=''><Li><Icon name="home" /> Inicio</Li></Link>
          <Link to='#'><Li><Icon name="globe" /> Conócenos</Li></Link>
          <Link to='#'><Li><Icon name="wrench" /> Servicios</Li></Link>
          <Link to='/contactUs'><Li><Icon name="envelope" /> Contáctenos</Li></Link>
        </Ul>
      </Nav>
    </Div>
  );
}

Header.propTypes = {

};

export default Header;
