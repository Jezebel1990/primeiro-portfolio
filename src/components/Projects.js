import { Container, Row, Col, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/projImg2.gif";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import React from 'react';


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
      title: "Donuts Story",
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

  ];

  
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
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
               
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
