import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import users from '../patients/users';
import './styles.css';
import { EffectCards } from 'swiper/modules';
import Image from 'next/image';
import Link from 'next/link';
export default function Cards({ patientId }: { patientId: string }) {
  return (
    <Swiper
      effect={'cards'}
      grabCursor={true}
      modules={[EffectCards]}
      className="mySwiper"
    >
      {users[parseInt(patientId)].reports.map((element, index) => (
        <SwiperSlide key={index}>
          <div className="w-full h-[500px]">
            <div className="w-full h-[500px]">
              <span
                title="bigger image"
                className="absolute rounded-[18px] p-2  cursor-pointer"
                style={{
                  background: 'linear-gradient(45deg, #9252f86e, #008872ba)',
                }}
              >
                <Link href={`/report/${patientId}/${index}`}>
                  <ArrowUpRight />
                </Link>
              </span>
              <Image
                className="w-full h-full"
                src={element.src as string}
                alt="report photo"
                width={350}
                height={350}
              ></Image>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
