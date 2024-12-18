import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "../Form/MailchimpForm";
import logo from "../../assets/img/logo.png";
import navIcon1 from "../../assets/img/nav-icon1.svg";
import navIcon2 from "../../assets/img/nav-icon2.svg";
import navIcon3 from "../../assets/img/nav-icon3.svg";
import React from 'react';
export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
        <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/jezebel-guedes/"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://github.com/Jezebel1990"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://www.instagram.com/notrebell/"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Copyright ⓒ {year}. Todos os direitos reservados.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
