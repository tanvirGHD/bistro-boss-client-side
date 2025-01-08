import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import img1 from "../../../assets/home/01.jpg";
import img2 from "../../../assets/home/02.jpg";
import img3 from "../../../assets/home/03.png";
import img4 from "../../../assets/home/04.jpg";
import img5 from "../../../assets/home/05.png";
import img6 from "../../../assets/home/06.png";

const Banner = () => {
  return (
    <Carousel
      infiniteLoop={true}
      showStatus={false}
      autoPlay={true}
      interval={3000}
      showThumbs={true}
      renderThumbs={() =>
        [img1, img2, img3, img4, img5, img6].map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Thumbnail ${index + 1}`}
            className="h-[40px] w-auto object-cover mx-2"
          />
        ))
      }
    >
      <div>
        <img src={img1} className="h-[500px] w-full object-cover" alt="Slide 1" />
      </div>
      <div>
        <img src={img2} className="h-[500px] w-full object-cover" alt="Slide 2" />
      </div>
      <div>
        <img src={img3} className="h-[500px] w-full object-cover" alt="Slide 3" />
      </div>
      <div>
        <img src={img4} className="h-[500px] w-full object-cover" alt="Slide 4" />
      </div>
      <div>
        <img src={img5} className="h-[500px] w-full object-cover" alt="Slide 5" />
      </div>
      <div>
        <img src={img6} className="h-[500px] w-full object-cover" alt="Slide 6" />
      </div>
    </Carousel>
  );
};

export default Banner;
