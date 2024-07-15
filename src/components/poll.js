import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './poll.css';

const Poll = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="poll-carousel">
      <Slider {...settings}>
        <div>
          <img src="https://media.voguebusiness.com/photos/65e762aa2a09a98387402ce6/2:3/w_2560%2Cc_limit/pfw-wrap-vogue-business-story.jpg" alt="Poll Image 1" />
          <div className="poll-options">
            <button className="option-button yay">Yay</button>
            <button className="option-button nay">Nay</button>
          </div>
        </div>
        <div>
          <img src="https://assets.vogue.in/photos/61c0245f033c74b2468a64a4/2:3/w_2560%2Cc_limit/Rihanna.jpg" alt="Poll Image 2" />
          <div className="poll-options">
            <button className="option-button yay">Yay</button>
            <button className="option-button nay">Nay</button>
          </div>
        </div>
        {/* Add more images and options as needed */}
      </Slider>
    </div>
  );
};

export default Poll;
