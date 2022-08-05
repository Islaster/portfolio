import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";
import "./Banner.css";
export default function Banner() {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="/images/carousel/blackjack.png"
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="/images/carousel/blog-about-nothing.png"
                  alt="Second slide"
                />
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}
