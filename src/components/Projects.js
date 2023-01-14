import { Container, Row, Col, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';



export const Projects = () => {

  const projects = [


    {
      title: "E-commerce Website",
      description: "Design & Desenvolvimento",
      imgUrl: projImg1,
      link1:"https://github.com/LuaBezana/eCommerceGeneration",
      link2:"https://hw-tshirts.netlify.app"
    },
    {
      title: "Rede Social",
      description: "Design & Desenvolvimento",
      imgUrl: projImg2,
      link1:"https://github.com/Jezebel1990/alurakut",
      link2:"https://alurakut-blond-psi.vercel.app/login"
    },
    {
      title: "Mobile",
      description: "Design & Desenvolvimento",
      imgUrl: projImg3,
      link1:"https://github.com/Jezebel1990/appBank.git",
      link2: ""
    },
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
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
