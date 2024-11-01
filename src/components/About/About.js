import { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import 'animate.css';
import meImg from "../../assets/img/meImg.png";
import TrackVisibility from 'react-on-screen';
export const About = () => {

  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Olá, sou a Jezebel!" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const onButtonClick = () => {
    fetch('Jezebel_Guedes.pdf').then(response => {
      response.blob().then(blob => {
          const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement('a');
        alink.href = fileURL;
        alink.download = 'Jezebel-Guedes.pdf';
        alink.click();
    })
})


  }


  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="about" >
      <Row>
    <Col xs={12} lg={6}>
    <div className="about-bx wow slideInUp" id="about" style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center"
                }}>
    <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center"
                }}
                 
                >
                  <img src={meImg} alt="Me Img" className="about-img" style={{ width: "150px"}} />
                  <h2>{`Sobre mim`} </h2>
                  <div style={{
                margin: "-20px 0"
                }}>
                  <h5>Olá, me chamo Jezebel. Sou Desenvolvedora Front-end e UX Designer. Acredito que o uso de tecnologias centradas no usuário, é a solução para qualquer nível de sucesso.</h5>
                  </div>
                  <div className="new-email-bx">
                  <h5><button onClick={onButtonClick}>Currículo</button></h5>
              </div>
              </div>
              }
            </TrackVisibility>
          </div>
          </Col>
          </Row>
          </section>
  )
   }
