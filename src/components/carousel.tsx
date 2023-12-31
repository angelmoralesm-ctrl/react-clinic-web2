import Carousel from 'react-bootstrap/Carousel';
import slide1 from '../Assets/Frame.png'   
import FrameComponent1 from './slide2';

function Carousel_() {
  return (
    <Carousel fade>
      <Carousel.Item interval={2000}>
        <div>
            
        <FrameComponent1/>
        
        </div>
      
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <div>
        
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=Second slide&bg=282c34"
            alt="Second slide"
          />
        
        </div>

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=20232a"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carousel_;