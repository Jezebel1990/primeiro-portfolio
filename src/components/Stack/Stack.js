import meter1 from "../../assets/img/meter1.svg";
import meter2 from "../../assets/img/meter2.svg";
import meter3 from "../../assets/img/meter3.svg";
import meter5 from "../../assets/img/meter5.svg";
import meter7 from "../../assets/img/meter7.svg";
import meter8 from "../../assets/img/meter8.svg";
import meter9 from "../../assets/img/meter9.svg";
import stack1 from "../../assets/img/stack1.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import React from 'react';

import colorSharp from "../../assets/img/color-sharp.png"

export const Stack = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 8
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1.5
    }
  };

  return (
    <section className="stack" id="stack">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="stack-bx wow zoomIn">
                        <h2>Stack</h2>
                        <p>Em desenvolvimento de software,  stack é o conjunto de tecnologias que usamos para criar nossas aplicações. Nesse portfólio, você poderá encontrar as seguintes tecnologias:</p>
                        <Carousel 
                        responsive={responsive} 
                        infinite={true} 
                        autoPlay={true} // Ativa a rotação automática
                        autoPlaySpeed={2000} 
                        keyBoardControl={true} // Permite controle pelo teclado
                        removeArrowOnDeviceType={["tablet", "mobile"]} 
                        className="owl-carousel owl-theme stack-slider">
                            <div className="item animated-item">
                                <img src={meter1} alt="Image" />
                                <h5>JavaScript</h5>
                            </div>
                            <div className="item animated-item">
                                <img src={meter2} alt="Image" />
                                <h5>CSS</h5>
                            </div>
                            <div className="item animated-item">
                                <img src={meter3} alt="Image" />
                                <h5>HTML</h5>
                            </div>
                            <div className="item animated-item">
                                <img src={stack1} alt="Image" />
                                <h5>Next.js</h5>
                            </div>
                            <div className="item animated-item">
                                <img src={meter5} alt="Image" />
                                <h5>Angular</h5>
                            </div>

                            <div className="item animated-item">
                                <img src={meter7} alt="Image" />
                                <h5>React</h5>
                            </div>

                            <div className="item animated-item">
                                <img src={meter8} alt="Image" />
                                <h5>Node.js</h5>
                            </div>

                            <div className="item animated-item">
                                <img src={meter9} alt="Image" />
                                <h5>Vue.js</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
