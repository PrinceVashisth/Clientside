import './header.css';
import Carousel from 'react-bootstrap/Carousel';


export default function Header(){
    return (
        <>
        <div className="mainHead">
        <Carousel className="images" fade ='true' interval={6000} >
        <Carousel.Item className="image">
           <img src="assets/indexImg/first.jpg" alt="" srcset=""/>
          <Carousel.Caption>
          <h1>Top Picks</h1>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className="image">
           <img src="assets/indexImg/second.jpg" alt="" srcset=""/>
          <Carousel.Caption>
          <h1>New Arrival</h1>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className="image">
           <img src="assets/indexImg/third.jpg" alt="" srcset=""/>
          <Carousel.Caption>
          <h1>Trendy</h1>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className="image">
           <img src="assets/indexImg/fourth.jpg" alt="" srcset=""/>
          <Carousel.Caption>
          <h1>Toys</h1>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className="image">
           <img src="assets/indexImg/fourth.jpg" alt="" srcset=""/>
          <Carousel.Caption>
          <h1> Decorative Items </h1>  
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className="image">
           <img src="assets/indexImg/fourth.jpg" alt="" srcset=""/>
          <Carousel.Caption>
          <h1> Todays Deal </h1> 
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className="image">
           <img src="assets/indexImg/fourth.jpg" alt="" srcset=""/>
          <Carousel.Caption>
         <h1> New Release </h1>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className="image">
           <img src="assets/indexImg/fourth.jpg" alt="" srcset=""/>
          <Carousel.Caption>
          <h1> Electronics </h1>
          </Carousel.Caption>
        </Carousel.Item>

        </Carousel>
        </div>
    </>
  )
}