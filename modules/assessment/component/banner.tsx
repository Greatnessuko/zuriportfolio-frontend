import { FC } from 'react';
import Image from 'next/image';

export interface BannerProps {
  title: string;
  subtitle: string;
  bannerImageSrc: string;
}

export const AssessmentBanner: FC<BannerProps> = ({ title, subtitle, bannerImageSrc }) => {
  return (
    <div className="w-full bg-[#005427] py-[14px] md:py-[22px] lg:py-[32px] px-[24px] md:px-[40px] lg:px-[100px] relative">
      <div className="flex flex-col gap-1">
        <p className="font-manropeL text-white-100 text-[24px] md:text-[26px] lg:text-[28px]">{title}</p>

        <p className="font-manropeL text-white-100 text-[12px] lg:text-[14px]">{subtitle}</p>
      </div>

      <div className="w-[25%] md:w-[35%] lg:w-[50%] h-full absolute top-0 right-0 bottom-0">
        <Image alt="banner" src={bannerImageSrc} width={0} height={0} className="w-full h-full object-fill" />
      </div>
    </div>
  );
};
