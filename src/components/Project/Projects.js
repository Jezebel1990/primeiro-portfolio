import { Container, Row, Col, Tab, Nav, NavItem  } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../../assets/img/project-img1.png";
import projImg2 from "../../assets/img/projImg2.gif";
import projImg3 from "../../assets/img/project-img3.gif";
import projImg4 from "../../assets/img/project-img4.png";
import projImg5 from "../../assets/img/project-img5.png";
import projImg6 from "../../assets/img/project-img6.png";
import projImg7 from "../../assets/img/project-img7.png";
import projImg8 from "../../assets/img/project-img8.gif";
import projImg9 from "../../assets/img/project-img9.gif";
import projImg10 from "../../assets/img/project-img10.gif";
import projImg11 from "../../assets/img/project-img11.png";
import projImg12 from "../../assets/img/project-img12.gif";
import projImg13 from "../../assets/img/project-img13.png";
import projImg14 from "../../assets/img/project-img14.png";
import projImg15 from "../../assets/img/project-img15.gif";
import colorSharp2 from "../../assets/img/color-sharp2.png";
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
      stacks: ["Angular", "BootStrap", "Java"]
    },
    {
      title: "Loja de Donuts",
      description: "Landing Page com animações em 3D.",
      imgUrl: projImg2,
      link1:"https://github.com/Jezebel1990/donuts-story.git",
      link2:"https://donuts-story.vercel.app/",
      stacks: ["Next.js", "Three.js", "SCSS"]
    },
    {
      title: "Metaversos",
      description: "Website com experiência interativa.",
      imgUrl: projImg3,
      link1:"https://github.com/Jezebel1990/metaverse.git",
      link2: "https://metaverso-sideral.netlify.app/",
      stacks: ["Next.js", "Tailwind", "motion"]
    },
    {
      title: "Gesture Controller",
      description: "Website controlado por gestos.",
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
      stacks: ["React", "Express" , "Node.js"]
    },
    {
      title: "NgGame",
      description: "Website com database de games",
      imgUrl: projImg6,
      link1:"https://github.com/Jezebel1990/ng-video-game-db.git",
      link2: "https://ng-video-game-db-zeta.vercel.app/",
      stacks: ["Angular", "TypeScript", "Scss"]
    },
    {
      title: "Receitas Culinárias",
      description: "App web responsivo para receitas.",
      imgUrl: projImg7,
      link1:"https://github.com/Jezebel1990/react-redux-saga-recipe.git",
      link2: "https://react-redux-saga-recipe.vercel.app/",
      stacks: ["React", "Redux", "Material-UI"]
    },
    {
      title: "Destinos de Viagens",
      description: "Website responsivo para viagens.",
      imgUrl: projImg8,
      link1:"https://github.com/Jezebel1990/travel-destinations.git",
      link2: "https://oval-plstravel.surge.sh/",
      stacks: ["Gatsby", "React" , "GraphQL"]
    },
    {
      title: "Stripe Pagamentos",
      description: "Desenvolvimento FullStack de mini E-commerce.",
      imgUrl: projImg9,
      link1:"https://github.com/Jezebel1990/stripe-paym-gateway.git",
      link2: "https://stripe-paym-gateway.vercel.app/",
      stacks: ["React", "Stripe" , "Tailwind"]
    },
    {
      title: "Ecommerce shop",
      description: "Desenvolvimento Front-end, com implementação de api",
      imgUrl: projImg10,
      link1:"https://github.com/Jezebel1990/ecommerce-shop.git",
      link2: "https://ecommerce-shop-silk.vercel.app/",
      stacks: ["React", "Tailwind", "JavaScript"]
    },
    {
      title: "Bank NextJs",
      description: "Landing Page de banco.",
      imgUrl: projImg11,
      link1:"https://github.com/Jezebel1990/bank-nextjs.git",
      link2: "https://bank-nextjs-three.vercel.app/",
      stacks: ["Next.js", "Tailwind"]
    },
    {
      title: "Cartoon Network",
      description: "App Fullstack sobre os personagens do Cartoon Network.",
      imgUrl: projImg12,
      link1:"https://github.com/Jezebel1990/next-cartoon-network.git",
      link2: "https://next-cartoon-network.vercel.app/",
      stacks: ["Next.js", "Tailwind", "Framer Motion"]
    },
    {
      title: "My Trips",
      description: "Um site para mostrar lugares visitados.",
      imgUrl: projImg13,
      link1:"https://github.com/Jezebel1990/my-trips.git",
      link2: "https://my-trips-notrebell.netlify.app/",
      stacks: ["Next.js", "Styled Components", "Leaflet"]
    },
    {
      title: "Blog React",
      description: "App front-end, que utiliza a API JSONPlaceholder.",
      imgUrl: projImg14,
      link1:"https://github.com/Jezebel1990/blog-react.git",
      link2: "https://blog-react-three-iota.vercel.app/",
      stacks: ["React.js", "JavaScript", "SASS"]
    },
    {
      title: "Quiz App",
      description: "Quiz com escolha de nível: fácil, médio ou difícil.",
      imgUrl: projImg15,
      link1:"https://github.com/Jezebel1990/quiz-app.git",
      link2: "https://steady-dusk-946a34.netlify.app/",
      stacks: ["Next.js", "Tailwind", "Express.js"]
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
                  <Nav.Link eventKey="first">1 - 6</Nav.Link>
                </NavItem>
                <NavItem>
                  <Nav.Link eventKey="second">7 - 12</Nav.Link>
                </NavItem>
                <NavItem>
                  <Nav.Link eventKey="third">13 - 16</Nav.Link>
                </NavItem>
                
              </Nav>
                  <Tab.Content id="slideInUp">
                  <Tab.Pane eventKey="first">
                  <Row>
                    {projects.slice(0, 6).map((project, index) => (
                      <ProjectCard key={index} {...project} />
                    ))}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Row>
                    {projects.slice(6, 12).map((project, index) => (
                      <ProjectCard key={index} {...project} />
                    ))}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <Row>
                    {projects.slice(12, 16).map((project, index) => (
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
