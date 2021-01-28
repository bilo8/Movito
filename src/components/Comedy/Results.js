import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

const Results = ({ results, openPopup }) => {
  return (
    <div className="card_content">
    <h1 className="card_title">Comedy Movies</h1>
    <Swiper
    spaceBetween={2}
    slidesPerView={4}
    effect="coverflow"
    grabCursor={true}
    loop={true}
    // navigation
    // pagination={{ clickable: true }}
    // scrollbar={{ draggable: true }}
    onSlideChange={() => console.log("slide change")}
    onSwiper={(swiper) => console.log(swiper)}
  >
    {results.map((results) => (
      <SwiperSlide className="card_poster" key={results.id}  onClick={() => openPopup(results.imdbID)}>
        <div className="Poster">
        <img src={results.Poster} alt={results.Title}/> 
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
  </div>
  );
};

export default Results;