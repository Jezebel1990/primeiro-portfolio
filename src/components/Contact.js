import { useState } from "react";
import { Slide } from "react-awesome-reveal";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.png";
import emailjs from "emailjs-com";
import 'animate.css';
import React from 'react';
export const Contact = () => {

  const [val, setVal] = useState(("Enviar"));
  const btn = document.getElementById("button");

  const handleSubmit =  (e) => {
    e.preventDefault();
   setVal(("Enviando"));
   emailjs
      .sendForm(
         "service_p3jpunc",
         "template_5whufbp",
         e.target,
         "dldo5QNKt9BDCl0ro"
      )
      .then(() => {
        setVal(("Enviado"));
        btn.style.background = "green";
        clearFields();
        setTimeout(() => {
          setVal(("Enviado"));
          btn.style.background = "white";
        }, 2000);
      })
      .catch((err) => {
        setTimeout(() => {
          setVal(("Tente novamente"));
          btn.style.background = "red";
        }, 3000);
      });
  };
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [secName, setSecName] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");
  const clearFields = () => {
    setFirstName("");
    setSecName("");
    setNumber("");
    setEmail("");
    setMessage("");
  };


  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
          <Slide direction="left" triggerOnce="true"  >
            <img className="animate__animated  animate__swing" 
             src={contactImg} 
             alt="Contact Us"
             style={{ transform: "translateX(100px )" }}
             />
            </Slide>
          </Col>
          <Col size={12} md={6}>
                <div className="animate__animated animate__backInRight">
                <h2>Deseja Entrar em Contato?</h2>
                <Slide direction="right" triggerOnce="true">
                <form onSubmit={handleSubmit}>
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                    <input
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        type="text"
                        required
                        placeholder={("Nome")}
                        name="name"
                        className="form-int"
                      />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input
                        value={secName}
                        onChange={(e) => setSecName(e.target.value)}
                        type="text"
                        placeholder={("Sobrenome")}
                        name="name"
                        className="form-int"
                        required
                      />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        placeholder={("Email")}
                        name="user_email"
                        className="form-int"
                        required
                      />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input
                        value={number}
                        onChange={(e) => setNumber(e.target.value)}
                        type="tel"
                        placeholder={("Telefone")}
                        name="phone"
                        className="form-int"
                      />
                    </Col>
                    <Col size={12} className="px-1">
                      <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        rows="6"
                        placeholder={("Mensagem")}
                        name="message"
                      ></textarea>
                      <input
                        type="submit"
                        id="button"
                        className="submit"
                        value={val}
                      />
                    </Col>
                  </Row>
                </form>
              </Slide>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};


                      
                   