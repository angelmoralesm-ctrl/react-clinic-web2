import { FunctionComponent } from "react";
import "./FrameComponent1.css";
const FrameComponent1: FunctionComponent = () => {
  return (
    <div className="frame-parent">
      <div className="line-parent">
        <div className="line-div" />
        <img className="noise-texture1" alt="" src="/noise--texture1@2x.png" />
        <div className="ellipse-div" />
        <div className="frame-child1" />
        <div className="frame-child2" />
        <b className="resalta-tu-belleza-container">
          <span>{`¡Resalta tu `}</span>
          <span className="belleza">belleza</span>
          <span>{` con nuestra estética facial de `}</span>
          <span className="belleza">vanguardia</span>
          <span>!</span>
        </b>
        <img className="image-1-icon" alt="" src="/image-1@2x.png" />
        <img className="chat-icon1" alt="" src="/chat@2x.png" />
        <img className="frame-child3" alt="" src="/rectangle-7.svg" />
        <b className="revisa-nuestras-ofertas1">Revisa nuestras ofertas</b>
      </div>
    </div>
  );
};

export default FrameComponent1;