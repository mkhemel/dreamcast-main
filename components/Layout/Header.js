import React, {useEffect, useState} from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Styles from './style.module.scss';
import { useRouter } from 'next/router';
import Link from "next/link";

export default function Header(props) {
  const router = useRouter();
  const [activeRoute, setActiveRoute] = useState('');

  useEffect(() => {
    setActiveRoute(router.pathname);
  }, [router.pathname]);

  return (
    <header>
      <Navbar collapseOnSelect expand="lg" className={`navbar-custom ${Styles.navbarWrapper}`}>
        <Container className={Styles.navInner}>
          <Link className={"navbar-brand"} href="/">
            <img className={Styles.logo} src={`${props.path}images/logo.png`} alt="Chayya" />
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Link className={activeRoute === '/' ? 'active nav-link' : 'nav-link'} href="/">Home</Link>
              <Link className={activeRoute === '/about' ? 'active nav-link' : 'nav-link'} href="/about">About</Link>
              <NavDropdown className={activeRoute === '/packages' ? 'active' : ''} title="Packages" id="collapsible-nav-dropdown">
                {props.packages ? (
                  props.packages.map((item, index) => (
                    <NavDropdown.Item key={index} href={`/packages/${item.slug}`}>{item.title}</NavDropdown.Item>
                  ))
                ) : (
                  <NavDropdown.Item disabled>Loading...</NavDropdown.Item>
                )}
              </NavDropdown>
              <Link className={'nav-link'} href="#">Solution</Link>
              <Link className={'nav-link'} href="#">Policy</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
