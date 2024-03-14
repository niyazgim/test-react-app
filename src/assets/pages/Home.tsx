import Accordion from "../components/Accordion";
import BannerCard, { BannerCardProps } from "../components/cards/BannerCard";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';

import { Autoplay } from 'swiper/modules'


export default function Home() {
  const bannerCards: BannerCardProps[] = [
    { linkTo: `/catalog`, image: `/banner/banner-1.png`, title: `Мужская одежда` },
    { linkTo: `/catalog`, image: `/banner/banner-4.png`, title: `Женская одежда` },
    { linkTo: `/catalog`, image: `/banner/banner-2.png`, title: `Аксессуары` },
    { linkTo: `/catalog`, image: `/banner/banner-6.png`, title: `Весна` },
    { linkTo: `/catalog`, image: `/banner/banner-7.png`, title: `Рюкзаки` },
    { linkTo: `/catalog`, image: `/banner/banner-5.png`, title: `Кольца` },
    { linkTo: `/catalog`, image: `/banner/banner-3.png`, title: `Ювелирные изделия` },
  ];
  return (
    <>
      <section className="w-full py-6">
        <Swiper
          spaceBetween={0}
          slidesPerView={4}
          loop={true}
          speed={400}
          autoplay={{
            delay: 7500,
            stopOnLastSlide: false,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
        >
          {bannerCards.map((bannerCard, key) => (<SwiperSlide key={key}><BannerCard linkTo={bannerCard.linkTo} image={bannerCard.image} title={bannerCard.title} /></SwiperSlide>))}
        </Swiper>
      </section>
      <section className="md:container mx-auto pt-10">
        <h2 className="mb-5 text-2xl font-semibold">Вопрос-ответ</h2>
        <div className="grid grid-cols-4 gap-x-7 gap-y-7 mt-7">
          <Accordion question={"У вас лучшая одежда?"} answer={"Да"} />
          <Accordion question={"У вас лучшая одежда?"} answer={"Да"} />
          <Accordion question={"У вас лучшая одежда?"} answer={"Да"} />
          <Accordion question={"У вас лучшая одежда?"} answer={"Да"} />
        </div>
      </section>
    </>
  )
}