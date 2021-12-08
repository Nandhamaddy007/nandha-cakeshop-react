import React from 'react';
import { cake1, cake2, cake3 } from './images';
export default function Carousel() {
  return (
    <div
      id="carouselExampleSlidesOnly"
      class="carousel slide"
      data-ride="carousel"
    >
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img class="d-block w-100" src={cake1} alt="First slide" />
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src={cake2} alt="Second slide" />
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src={cake3} alt="Third slide" />
        </div>
      </div>
    </div>
  );
}
