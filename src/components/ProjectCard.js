import { Col } from "react-bootstrap";
import icon1 from "../assets/img/icon1.svg";
import icon2 from "../assets/img/icon2.svg";

export const ProjectCard = ({ title, description, imgUrl, link1,link2 }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
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
    </Col>
  )
}

