import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ArrowUpRight } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/effect-cards';

import './styles.css';
import { EffectCards } from 'swiper/modules';
import Image from 'next/image';
export default function Cards() {
  return (
    <Swiper
      effect={'cards'}
      grabCursor={true}
      modules={[EffectCards]}
      className="mySwiper"
    >
      <SwiperSlide>
        <div className="w-full h-[400px]">
          <div className="w-full h-[400px]">
            <span
              title="bigger image"
              className="absolute rounded-[18px] p-2 bg-[#9252f87b] cursor-pointer"
            >
              <ArrowUpRight />
            </span>
            <Image
              className="w-full"
              src="/report.jpg"
              alt="report"
              width={350}
              height={350}
            ></Image>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-full h-[400px]">
          <div className="w-full h-[400px]">
            <span
              title="bigger image"
              className="absolute rounded-[18px] p-2 bg-[#9252f87b] cursor-pointer"
            >
              <ArrowUpRight />
            </span>
            <Image
              className="w-full"
              src="/report.jpg"
              alt="report"
              width={350}
              height={350}
            ></Image>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-full h-[400px]">
          <div className="w-full h-[400px]">
            <span
              title="bigger image"
              className="absolute rounded-[18px] p-2 bg-[#9252f87b] cursor-pointer"
            >
              <ArrowUpRight />
            </span>
            <Image
              className="w-full"
              src="/report.jpg"
              alt="report"
              width={350}
              height={350}
            ></Image>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-full h-[400px]">
          <div className="w-full h-[400px]">
            <span
              title="bigger image"
              className="absolute rounded-[18px] p-2 bg-[#9252f87b] cursor-pointer"
            >
              <ArrowUpRight />
            </span>
            <Image
              className="w-full"
              src="/report.jpg"
              alt="report"
              width={350}
              height={350}
            ></Image>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-full h-[400px]">
          <div className="w-full h-[400px]">
            <span
              title="bigger image"
              className="absolute rounded-[18px] p-2 bg-[#9252f87b] cursor-pointer"
            >
              <ArrowUpRight />
            </span>
            <Image
              className="w-full"
              src="/report.jpg"
              alt="report"
              width={350}
              height={350}
            ></Image>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-full h-[400px]">
          <div className="w-full h-[400px]">
            <span
              title="bigger image"
              className="absolute rounded-[18px] p-2 bg-[#9252f87b] cursor-pointer"
            >
              <ArrowUpRight />
            </span>
            <Image
              className="w-full"
              src="/report.jpg"
              alt="report"
              width={350}
              height={350}
            ></Image>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-full h-[400px]">
          <div className="w-full h-[400px]">
            <span
              title="bigger image"
              className="absolute rounded-[18px] p-2 bg-[#9252f87b] cursor-pointer"
            >
              <ArrowUpRight />
            </span>
            <Image
              className="w-full"
              src="/report.jpg"
              alt="report"
              width={350}
              height={350}
            ></Image>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-full h-[400px]">
          <div className="w-full h-[400px]">
            <span
              title="bigger image"
              className="absolute rounded-[18px] p-2 bg-[#9252f87b] cursor-pointer"
            >
              <ArrowUpRight />
            </span>
            <Image
              className="w-full"
              src="/report.jpg"
              alt="report"
              width={350}
              height={350}
            ></Image>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-full h-[400px]">
          <div className="w-full h-[400px]">
            <span
              title="bigger image"
              className="absolute rounded-[18px] p-2 bg-[#9252f87b] cursor-pointer"
            >
              <ArrowUpRight />
            </span>
            <Image
              className="w-full"
              src="/report.jpg"
              alt="report"
              width={350}
              height={350}
            ></Image>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
