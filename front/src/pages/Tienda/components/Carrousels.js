import Carousel from 'react-bootstrap/Carousel';
import Img1 from '../Images/3.jpg';
import Dos from '../Images/2.png';
import Tres from '../Images/banner.png';

const CarrouselPrincipal = ()=> {
  return (
    <Carousel>
      <Carousel.Item>
        <img text="First slide" src={Tres} />
      </Carousel.Item>
      <Carousel.Item>
        <img text="Second slide"  src={Tres}/>
      </Carousel.Item>
      <Carousel.Item>
        <img text="Third slide" src={Tres} />
      </Carousel.Item>
    </Carousel>
  );
}

export default CarrouselPrincipal 

