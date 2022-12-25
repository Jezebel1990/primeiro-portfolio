import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';


export const Projects = () => {

  const projects = [


    {
      title: "E-commerce Website",
      description: "Design & Desenvolvimento",
      imgUrl: projImg1,
      link:"https://hw-tshirts.netlify.app",
    },
    {
      title: "Rede Social",
      description: "Design & Desenvolvimento",
      imgUrl: projImg2,
      link:"https://alurakut-blond-psi.vercel.app/login",
    },
    // {
    //   title: "Aplicativo",
    //   description: "Design & Desenvolvimento",
    //   imgUrl: projImg3,
    // },
    // {
    //   title: "Mobile App",
    //   description: "Design & Development",
    //   imgUrl: projImg1,
    // },
    // {
    //   title: "Business Startup",
    //   description: "Design & Development",
    //   imgUrl: projImg2,
    // },
    // {
    //   title: "Business Startup",
    //   description: "Design & Development",
    //   imgUrl: projImg3,
    // },
    
  ];



  
  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projetos</h2>
                <p>Tento constantemente garantir que as decisões de design sejam resultados de um processo centrado no ser humano. Esta é, uma coleção arquivada de projetos selecionados enquanto estava sob processo de aprendizagem.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Website</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Mobile</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Ux Design</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
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
                   </Tab.Pane>
      <Tab.Pane eventKey="second">
      <Card className="text-center" style={{ width: '32rem' }}>
      <Card.Img variant="top" src={projImg3} />
      <Card.ImgOverlay>
      <Button variant="info"href="https://github.com/Jezebel1990/appBank.git">Saiba mais</Button>
        {/* <Card.Title>Mobile</Card.Title> */}
      </Card.ImgOverlay>
    </Card>
  </Tab.Pane>

<Tab.Pane eventKey="third">
<CardGroup>
<Card className="text-center" style={{ width: '32rem' }}>
      <Card.Img variant="top" src={projImg4} />
      <Card.ImgOverlay>
      <Button variant="info"href="https://docs.google.com/presentation/d/e/2PACX-1vQtaMkZW6Hg8dNqbms4Q69ndvXsf4W6dyLlJ4sSYMGtVMfVEMv16DCmNliSAtrkMguX91kDbKCKYa82/pub?start=false&loop=false&delayms=1000">Saiba mais</Button>
        {/* <Card.Title>Mobile</Card.Title> */}
      </Card.ImgOverlay>
    </Card>
 
    <Card className="text-center" style={{ width: '32rem' }}>
      <Card.Img variant="top" src={projImg5} />
      <Card.ImgOverlay>
      <Button variant="info"href="https://docs.google.com/presentation/d/e/2PACX-1vSBDBLb6gKka_8fEYKGClIry8YUsnZePuIq6WtrsF4RtD-6lpHkGleFCb5qqF3pAA/pub?start=true&loop=false&delayms=3000">Saiba mais</Button>
        {/* <Card.Title>Mobile</Card.Title> */}
      </Card.ImgOverlay>
    </Card>
    </CardGroup>


</Tab.Pane>
</Tab.Content>
</Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
