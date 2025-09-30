import { Container, Row, Col, Tab, Nav, NavItem } from "react-bootstrap";
import {
  FaArrowRightArrowLeft,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa6";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import React, { useState, useEffect } from "react";

// Lista de repositórios
const selectedRepos = [
  "next-cartoon-network",
  "react-dogs",
  "react-redux-saga-recipe",
  "mern-social-media",
  "blog-react",
  "k-drama-nuxtjs",
  "nextjs-charity", 
  "metaverse", 
  "feedbacks-dashboard", 
  "comic-characters",
  "kanban-app",
  "react-native-lamborghini-garage-app",
  "client",
  "container-cluster-aws",
  "animated-3d-boxes",
  "city-skyline",
  "mickey-mouse",
  "breast-care-ai",
  "ecommerce-shop",
  "ng-video-game-db"
];

// Função para buscar imagem do README
const fetchReadmeImage = async (repoName) => {
  try {
    const res = await fetch(
      `https://api.github.com/repos/Jezebel1990/${repoName}/readme`,
      {
        headers: {
          Accept: "application/vnd.github.v3.raw",
          Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
        },
      }
    );

    if (!res.ok) throw new Error("Não foi possível buscar o README");

    const readmeContent = await res.text();

    // 1. Primeiro tenta encontrar imagens em formato HTML
    const htmlImgMatch = readmeContent.match(/<img[^>]+src="([^">]+)"/i);
    if (htmlImgMatch && htmlImgMatch[1]) {
      let imgPath = htmlImgMatch[1].trim();
      return await processImagePath(imgPath, repoName);
    }

    // 2. Tenta encontrar imagens em formato Markdown
    const mdImgMatch = readmeContent.match(/!\[.*?\]\((.*?)\)/);
    if (mdImgMatch && mdImgMatch[1]) {
      let imgPath = mdImgMatch[1].trim();
      return await processImagePath(imgPath, repoName);
    }

    // 3. Tenta encontrar GIFs específicos (busca por .gif)
    const gifMatch = readmeContent.match(/(https?:\/\/[^\s"']+\.gif|\.\/[^\s"']+\.gif|\.\.\/[^\s"']+\.gif)/i);
    if (gifMatch && gifMatch[1]) {
      let imgPath = gifMatch[1].trim();
      return await processImagePath(imgPath, repoName);
    }

    return "/placeholder.png";
  } catch (error) {
    console.error("Erro ao buscar imagem do README:", error);
    return "/placeholder.png";
  }
};

// Função auxiliar para processar o caminho da imagem
const processImagePath = async (imgPath, repoName) => {
  // Se já é uma URL absoluta (http/https), retorna direto
  if (imgPath.startsWith("http")) {
    return imgPath;
  }

  // Remove caracteres indesejados do início do caminho
  imgPath = imgPath.replace(/^\/+/, "");  // remove barra inicial "/"
  imgPath = imgPath.replace(/^\.\//, ""); // remove "./"
  imgPath = imgPath.replace(/^\.\.\//, ""); // remove "../"

  // Tenta diferentes formas de montar a URL
  const possibleBranches = ["main", "master", "develop"];
  
  for (const branch of possibleBranches) {
    const testUrl = `https://raw.githubusercontent.com/Jezebel1990/${repoName}/${branch}/${imgPath}`;
    
    // Verifica se a imagem existe
    try {
      const testRes = await fetch(testUrl, { method: 'HEAD' });
      if (testRes.ok) {
        return testUrl;
      }
    } catch (error) {
      console.log(`Tentativa falhou para branch ${branch}:`, testUrl);
    }
  }

  // Se não encontrou em nenhuma branch, tenta a URL padrão
  return `https://raw.githubusercontent.com/Jezebel1990/${repoName}/main/${imgPath}`;
};

// Função alternativa mais simples (caso a anterior não funcione)
const fetchReadmeImageAlternative = async (repoName) => {
  try {
    // Tenta buscar informações do repositório para ver se há uma imagem padrão
    const repoRes = await fetch(
      `https://api.github.com/repos/Jezebel1990/${repoName}`,
      {
        headers: {
          Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
        },
      }
    );

    if (repoRes.ok) {
      const repoData = await repoRes.json();
      
      // Verifica se o repositório tem topics específicos que podem indicar o tipo de projeto
      console.log(`Repositório ${repoName}:`, repoData.topics);
    }

    // Lista de caminhos comuns para previews/GIFs
    const commonPaths = [
      "assets/images/preview.gif",
      "assets/img/preview.gif",
      "images/preview.gif",
      "img/preview.gif",
      "preview.gif",
      "demo.gif",
      "assets/images/demo.gif",
      "assets/preview.gif",
    ];

    // Testa cada caminho comum
    for (const path of commonPaths) {
      const testUrl = `https://raw.githubusercontent.com/Jezebel1990/${repoName}/main/${path}`;
      try {
        const testRes = await fetch(testUrl, { method: 'HEAD' });
        if (testRes.ok) {
          return testUrl;
        }
      } catch (error) {
        continue;
      }
    }

    return "/placeholder.png";
  } catch (error) {
    console.error("Erro na busca alternativa:", error);
    return "/placeholder.png";
  }
};

// Função para buscar os repositórios selecionados
const fetchRepos = async () => {
  try {
    const res = await fetch("https://api.github.com/user/repos?per_page=100", {
      headers: {
        Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
      },
    });

    if (!res.ok) throw new Error("Erro ao buscar repositórios");

    const allRepos = await res.json();

    // Filtra apenas pelos selecionados
    const filtered = allRepos.filter((repo) =>
      selectedRepos.includes(repo.name)
    );

    // Ordena do mais recente para o mais antigo pela data de criação
    const sortedRepos = filtered.sort((a, b) => 
      new Date(b.created_at) - new Date(a.created_at)
    );

    // Busca imagem do README - tenta primeiro a função principal, depois a alternativa
    const projectsWithImages = await Promise.all(
      sortedRepos.map(async (repo) => {
        let imgUrl = await fetchReadmeImage(repo.name);
        
        // Se não encontrou imagem, tenta a abordagem alternativa
        if (imgUrl === "/placeholder.png") {
          imgUrl = await fetchReadmeImageAlternative(repo.name);
        }

        return {
          title: repo.name,
          description: repo.description || "Projeto sem descrição",
          imgUrl,
          link1: repo.html_url,
          link2: repo.homepage || repo.html_url,
          stacks: repo.topics || [],
          created_at: repo.created_at, // Mantém a data para referência
        };
      })
    );

    return projectsWithImages;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [activeTab, setActiveTab] = useState("first");

  useEffect(() => {
    const loadRepos = async () => {
      const repos = await fetchRepos();
      setProjects(repos);
    };
    loadRepos();
  }, []);

  const handleTabSelect = (tabKey) => {
    if (tabKey) setActiveTab(tabKey);
  };

  return (
    <section className="projects" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projetos</h2>
                  <p>
                    Tento constantemente garantir que as decisões de design sejam
                    resultados de um processo centrado no ser humano. Esta é uma
                    coleção arquivada de projetos selecionados enquanto estava sob
                    processo de aprendizagem.
                  </p>
                  <Tab.Container
                    id="projects-tabs"
                    activeKey={activeTab}
                    onSelect={handleTabSelect}
                  >
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <NavItem>
                        <Nav.Link eventKey="first">
                          <FaArrowRight />
                        </Nav.Link>
                      </NavItem>
                      <NavItem>
                        <Nav.Link eventKey="second">
                          <FaArrowRightArrowLeft />
                        </Nav.Link>
                      </NavItem>
                      <NavItem>
                        <Nav.Link eventKey="third">
                          <FaArrowLeft />
                        </Nav.Link>
                      </NavItem>
                    </Nav>

                    <Tab.Content id="slideInUp">
 {(() => {
    const total = projects.length;
    const chunkSize = Math.ceil(total / 3); // divide em 3 partes iguais
    const first = projects.slice(0, chunkSize);
    const second = projects.slice(chunkSize, chunkSize * 2);
    const third = projects.slice(chunkSize * 2);

    return (
      <>
<Tab.Pane eventKey="first">
          <Row>
            {first.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </Row>
        </Tab.Pane>
        <Tab.Pane eventKey="second">
          <Row>
            {second.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </Row>
        </Tab.Pane>
        <Tab.Pane eventKey="third">
          <Row>
            {third.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </Row>
        </Tab.Pane>
      </>
    );
  })()}
</Tab.Content> 
</Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" alt="" src={colorSharp2}></img>
    </section>
  );
};