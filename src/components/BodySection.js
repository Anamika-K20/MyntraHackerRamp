import React from 'react';
import img1 from './img1.png';
import img2 from './image2.png';
import img3 from './img4.png';
import img4 from './pic2.png';
import img5 from './livepoll.png';
import { Link } from 'react-router-dom'; 

function BodySection() {
  return (
    <section className="container section1">
        <Link to="/live-poll">
    <img className="homeImg" src={img5} alt="Image 4" />
    </Link>
      <img className="homeImg" src={img1} alt="Image 1" />
      <h2 className="title">MEDAL WORTHY BRANDS TO BAG</h2>
      <img className="homeImg" src={img2} alt="Image 2" />
      <h2 className="title">GRAND GLOBAL BRANDS</h2>
      <img className="homeImg" src={img3} alt="Image 3" />
      <h2 className="title">SHOP BY CATEGORY</h2>
      <img className="homeImg" src={img4} alt="Image 4" />
    </section>
  );
}

export default BodySection;

