import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { generatePath, useNavigate } from 'react-router';
import { Routers } from '../../enums/routers.enum';

const AppHeader: React.FC = () => {
  const navigate = useNavigate();

  const [isMenuOpen, setMenuOpen] = useState<boolean>(false);

  const handleOnNavigate = (path: string) => () => {
    navigate(path);
  };

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <Navbar bg="dark" variant="dark" expand="xxl">
      <Container>
        <Navbar.Brand onClick={handleOnNavigate(Routers.HOME)}>
          Your Website
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={toggleMenu} />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className={isMenuOpen ? 'show' : ''}
        >
          <Nav className="ml-auto">
            <Nav.Link onClick={handleOnNavigate(Routers.ABOUT)}>Posts</Nav.Link>
            <Nav.Link
              onClick={handleOnNavigate(
                generatePath(Routers.POST, { postId: '1' }),
              )}
            >
              About
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppHeader;
