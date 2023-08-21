import { Container, Row, Col, Tab, Nav, NavItem  } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/projImg2.gif";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import projImg7 from "../assets/img/project-img7.png";
import projImg8 from "../assets/img/project-img8.gif";
import projImg9 from "../assets/img/project-img9.gif";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import React, { useState } from 'react';



export const Projects = () => {

  const projects = [


    {
      title: "E-commerce de camisetas",
      description: "Desenvolvimento FullStack, realizado em equipe durante o bootcamp Generation.",
      imgUrl: projImg1,
      link1:"https://github.com/LuaBezana/eCommerceGeneration",
      link2:"https://hw-tshirts.netlify.app",
      stacks: ["Angular", "BootStrap", "Java", "MySQL"]
    },
    {
      title: "Loja de Donuts",
      description: "Landing Page com animações em 3D.",
      imgUrl: projImg2,
      link1:"https://github.com/Jezebel1990/donuts-story.git",
      link2:"https://donuts-story.vercel.app/",
      stacks: ["JavaScript", "Next.js", "Three.js", "SCSS"]
    },
    {
      title: "Mobile",
      description: "Design & Desenvolvimento",
      imgUrl: projImg3,
      link1:"https://github.com/Jezebel1990/appBank.git",
      link2: "",
      stacks: ["Java", "Android", "CSS"]
    },
    {
      title: "Gesture Controller",
      description: "Desenvolvimento",
      imgUrl: projImg4,
      link1:"https://github.com/Jezebel1990/javascriptexpert.git",
      link2: "https://jezebel1990.github.io/javascriptexpert/classes/class04/",
      stacks: ["JavaScript", "CSS"]
    },
    {
      title: "Mern Social Midia",
      description: "Desenvolvimento FullStack de rede social com dark mode.",
      imgUrl: projImg5,
      link1:"https://github.com/Jezebel1990/mern-social-media.git",
      link2: "https://mern-social-media-omega.vercel.app/",
      stacks: ["MongoDB", "Express" ,"React", "Node.js"]
    },
    {
      title: "NgGame",
      description: "Website com database de games",
      imgUrl: projImg6,
      link1:"https://github.com/Jezebel1990/ng-video-game-db.git",
      link2: "https://ng-video-game-db-zeta.vercel.app/",
      stacks: ["Angular", "TypeScript" ,"HTML", "Scss"]
    },
    {
      title: "Receitas Culinárias",
      description: "App web responsivo para receitas.",
      imgUrl: projImg7,
      link1:"https://github.com/Jezebel1990/react-redux-saga-recipe.git",
      link2: "https://react-redux-saga-recipe.vercel.app/",
      stacks: ["React", "Redux" ,"Redux-saga", "Material-UI"]
    },
    {
      title: "Destinos de Viagens",
      description: "Website responsivo para viagens.",
      imgUrl: projImg8,
      link1:"https://github.com/Jezebel1990/travel-destinations.git",
      link2: "https://oval-plstravel.surge.sh/",
      stacks: ["Gatsby", "React" ,"JavaScript", "GraphQL"]
    },
    {
      title: "Stripe Pagamentos",
      description: "Desenvolvimento FullStack de mini E-commerce.",
      imgUrl: projImg9,
      link1:"https://github.com/Jezebel1990/stripe-paym-gateway.git",
      link2: "https://stripe-paym-gateway.vercel.app/",
      stacks: ["React", "Stripe" ,"Node.js", "Tailwind"]
    },

  ];



  const [activeTab, setActiveTab] = useState('first'); // Estado para controlar a guia ativa
 
  const handleTabSelect = (tabKey) => {
    setActiveTab(tabKey);
  };
  
  return (
    <section className="projects" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projetos</h2>
                <p>Tento constantemente garantir que as decisões de design sejam resultados de um processo centrado no ser humano. Esta é, uma coleção arquivada de projetos selecionados enquanto estava sob processo de aprendizagem.</p>
                <Tab.Container id="projects-tabs" activeKey={activeTab} onSelect={handleTabSelect}>
                <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                <NavItem>
                  <Nav.Link eventKey="first">➞</Nav.Link>
                </NavItem>
                <NavItem>
                  <Nav.Link eventKey="second">⬌</Nav.Link>
                </NavItem>
                <NavItem>
                  <Nav.Link eventKey="third">🠔</Nav.Link>
                </NavItem>
              </Nav>
                  <Tab.Content id="slideInUp">
                  <Tab.Pane eventKey="first">
                  <Row>
                    {projects.slice(0, 3).map((project, index) => (
                      <ProjectCard key={index} {...project} />
                    ))}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Row>
                    {projects.slice(3, 6).map((project, index) => (
                      <ProjectCard key={index} {...project} />
                    ))}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <Row>
                    {projects.slice(6,9).map((project, index) => (
                      <ProjectCard key={index} {...project} />
                    ))}
                  </Row>
                </Tab.Pane>
</Tab.Content>
</Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" alt="" src={colorSharp2}></img>
    </section>
  )
}
