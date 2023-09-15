import React from "react";
import "./Testimonials.css";
import Image from "next/image";
import { testimonialsData } from "../../data";
import Slider from "react-slick";
// import { settings } from "eslint-config-next";
const SlickSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    touchMove: true,
    useCss: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1000, //for mobile screen less then 100 shows 2 slides
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },

      {
        breakpoint: 768, //for mobile screen less then 786 shows 1 slides
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <Slider {...settings}>
        {testimonialsData.map((Comment, i) => (
          <div className="comment" key={i}>
            {/* upper section */}
            <div className="c-content">
              <Image
                src={"./apos.svg"}
                className="apos-slider"
                width={40}
                height={30}
                alt="apos"
              ></Image>
              <span>{Comment.comment}</span>
            </div>
            {/* lower section */}
            <div className="c-info">
              <div className="c-avatar">{Comment.name[0]}</div>
              <div className="c-person">
                <span>{Comment.name}</span>
                <span>{Comment.profession}</span>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SlickSlider;
