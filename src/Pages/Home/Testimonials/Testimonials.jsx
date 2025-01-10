// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper modules
import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";  

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, []);

  return (
    <section className="my-20">
      <div className="text-center md:w-3/12 mx-auto m-14 pt-5">
        <p className="text-xl text-yellow-400">---What Our Clients Say---</p>
        <h3 className="text-3xl border-y-2 py-2 text-black">TESTIMONIALS</h3>
      </div>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper ">
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="w-10/12 mx-auto flex flex-col items-center text-center space-y-4">
              <Rating style={{ maxWidth: 180 }} value={review.rating} readOnly />
              <p>{review.details}</p>
              <p className="text-3xl font-bold text-orange-400">
                {review.name}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;

