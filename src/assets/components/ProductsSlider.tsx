import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Images } from "../data/images";

export default function ProductSlider(): JSX.Element {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
  };

  return (
    <div className="mt-10">
      <Slider {...settings}>
        {Images.map((item) => (
          <div key={item.id} className="w-2/6 px-10">
            <img src={item.src} alt={item.alt} className="w-full aspect-square rounded" />
            <h2 className="text-xl mt-2">{item.title}</h2>
            <p className="text-sm mt-1">{item.description}</p>
          </div>
        ))}
      </Slider>
    </div>
  )
}