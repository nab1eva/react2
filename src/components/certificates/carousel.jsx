import React, { Component } from "react";
import Slider from "react-slick";
import s1 from "../../assets/images/1.png";
import s2 from "../../assets/images/2.png";
import s3 from "../../assets/images/3.png";
import s4 from "../../assets/images/4.png";
import s5 from "../../assets/images/5.png";


export default class Slide extends Component {
  render() {
    const imgs = [s1, s1, s2, s3, s4 ,s5, s1, s2, s3, s4, s5];
    const settings = {
      dots: true,
      infinite: true,
      speed: 400,
      slidesToShow: 5,
      autoplay: 1000,
      slidesToScroll: 5,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 960,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 890,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div className="slider">
        <Slider {...settings}>
          {imgs.map((el, index) => {
            console.log(el);
            return (
              <div className="slider-item" key={index}>
                <img src={el} alt="" />
              </div>
            );
          })}
        </Slider>
      </div>
    );
  }
}
