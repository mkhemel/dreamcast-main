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
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.6
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    sections.forEach(section => {
      observer.observe(section);
    });

    return () => {
      sections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <header>
      <Navbar collapseOnSelect fixed={"top"} expand="lg" className={`navbar-custom ${Styles.navbarWrapper}`}>
        <Container className={Styles.navInner}>
          <Link className={"navbar-brand"} href="/">
            <img className={Styles.logo} src={`${props.path}images/logo.png`} alt="Dreamcast" />
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Link className={activeSection === 'home' ? 'active nav-link' : 'nav-link'} href="/#home">Home</Link>
              <Link className={activeSection === 'clients' ? 'active nav-link' : 'nav-link'}  href="/#clients">Clients</Link>
              <Link className={activeSection === 'teams' ? 'active nav-link' : 'nav-link'}  href="/#teams">Team</Link>
              <NavDropdown  title="Work" id="collapsible-nav-dropdown"  className={(activeSection === 'workEvent' || activeSection ==='workActivation' || activeSection === 'workMadeIn' || activeSection === 'workSupply' || activeSection === 'workDesign') ? 'active work-dropdown' : 'work-dropdown'} >

                  <NavDropdown.Item className={activeSection === 'workEvent' ? 'active' : ''} href={'/#workEvent'}>Event</NavDropdown.Item>
                  <NavDropdown.Item className={activeSection === 'workActivation' ? 'active' : ''} href={'/activation'}>Activation</NavDropdown.Item>
                  <NavDropdown.Item className={activeSection === 'workDesign' ? 'active' : ''} href={'/design'}>Design</NavDropdown.Item>
                  <NavDropdown.Item className={activeSection === 'workMadeIn' ? 'active' : ''} href={'/made-in-dreamcast'}>Made in Dreamcast</NavDropdown.Item>
                  <NavDropdown.Item className={activeSection === 'workSupply' ? 'active' : ''} href={'/supply'}>Supply</NavDropdown.Item>

              </NavDropdown>
              <Link  className={activeSection === 'contact' ? 'active nav-link' : 'nav-link'} href="/#contact">Contact</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
