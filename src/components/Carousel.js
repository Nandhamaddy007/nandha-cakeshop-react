import React from 'react';
import { cake1, cake2, cake3 } from './images';
export default function Carousel() {
  return (
    <div className="d-flex justify-content-center">
      <div
        id="carouselExampleSlidesOnly"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={cake1} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={cake2} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={cake3} class="d-block w-100" alt="..." />
          </div>
        </div>
      </div>
    </div>
  );
}
