import { Col } from "react-bootstrap";
import icon1 from "../assets/img/icon1.svg";
import icon2 from "../assets/img/icon2.svg";
import React from 'react';

 export const ProjectCard = ({ title, description, imgUrl, link1, link2, stacks }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx" style={{ position: 'relative'}}>

        <img src={imgUrl} alt="Project" />
        <div className="proj-txtx" style={{ marginBottom: '10px' }}>
          <h4>{title}</h4>
          <span>{description}</span>
          <div className="proj-linkbx">
          </div>
           <div className="social-icon">
              <a href={link1}> <img src={icon1} alt="Icon" /></a>
              <a href={link2}><img src={icon2} alt="Icon" /></a>
          </div>
        </div>
      </div>
      <div className="stacks" style={{
            display: "flex",
            justifyContent: 'center',
            position: '',
            bottom: 0,
            top: 0,
            left: 0,
            color: '#fff', 
            borderRadius: '5px',
            height: '40px',
            marginBottom: '80px'
      }}>
           {stacks.map((stack, id) => (
              <button className="tech-stack" key={id}>
                {stack}
              </button>
            ))}
      </div>
    </Col>
  );
 };

